from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
import asyncio
import logging
from uuid import uuid4
from datetime import datetime, timezone
import os
import requests

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="Otogo Backend API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "message": "Otogo backend is running",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

class BusinessInquiry(BaseModel):
    ownerName: str
    email: EmailStr
    phone: str
    businessName: str
    businessType: str
    locations: Optional[str] = None
    website: Optional[str] = None
    message: str

    @field_validator("ownerName", "businessName", "businessType", "message")
    @classmethod
    def validate_min_length(cls, value: str) -> str:
        if len(value.strip()) < 2:
            raise ValueError("Field is too short.")
        return value.strip()

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 5:
            raise ValueError("Enter a valid phone number.")
        return cleaned


inquiry_store: list[dict] = []


async def forward_to_partner_hub(payload: dict) -> dict:
    webhook_url = os.getenv("PARTNER_WEBHOOK_URL")
    if not webhook_url:
        return {"delivered": False, "reason": "webhook_not_configured"}

    def _post():
        return requests.post(webhook_url, json=payload, timeout=10)

    try:
        response = await asyncio.to_thread(_post)
        response.raise_for_status()
        return {"delivered": True, "status_code": response.status_code}
    except Exception as exc:  # pylint: disable=broad-except
        logging.exception("Partner webhook delivery failed: %s", exc)
        return {"delivered": False, "reason": str(exc)}


@app.post("/api/business-inquiries")
async def submit_business_inquiry(inquiry: BusinessInquiry):
    reference_id = str(uuid4())
    record = {
        **inquiry.model_dump(),
        "referenceId": reference_id,
        "receivedAt": datetime.now(timezone.utc).isoformat(),
    }
    inquiry_store.append(record)
    webhook_delivery = await forward_to_partner_hub(record)

    if not webhook_delivery.get("delivered"):
        logging.warning(
            "Business inquiry stored locally but webhook delivery failed: %s",
            webhook_delivery.get("reason", "unknown"),
        )

    return {
        "referenceId": reference_id,
        "status": "received",
        "webhookDelivery": webhook_delivery,
    }


class ContactRequest(BaseModel):
    fullName: str
    email: EmailStr
    subject: str
    message: str

    @field_validator("fullName", "subject", "message")
    @classmethod
    def validate_min_length(cls, value: str) -> str:
        if len(value.strip()) < 2:
            raise ValueError("Field is too short.")
        return value.strip()


@app.post("/api/contact")
async def submit_contact_request(contact: ContactRequest):
    # In a real app, you would save this to a database or send an email
    logging.info(f"Received contact request: {contact}")
    return {"status": "success", "message": "Message received"}


@app.get("/api")
async def root():
    return {"message": "Welcome to Otogo API"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)
