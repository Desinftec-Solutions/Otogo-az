// Determine the API URL based on the environment
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE_URL = isLocal ? '' : 'http://194.163.173.179:3300';

console.log('API Configuration:', { isLocal, API_BASE_URL, env: process.env.NODE_ENV });

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = data?.message || data?.detail || 'Unable to submit your request. Please try again.';
    const error = new Error(errorMessage);
    error.status = response.status;
    throw error;
  }

  return data;
};

export const submitBusinessInquiry = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/businesses`, {
      method: 'POST',
      mode: 'cors',
      headers: defaultHeaders,
      body: JSON.stringify(payload),
    });

    return handleResponse(response);
  } catch (error) {
    // Enhanced error handling for "Failed to fetch" errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      // Network error or CORS issue
      const detailedError = new Error(
        `Network error: Unable to connect to ${API_BASE_URL}. ` +
        `Possible causes: Server is down, CORS issue, or mixed content (HTTPS page trying to access HTTP API). ` +
        `Check browser console for more details.`
      );
      detailedError.isNetworkError = true;
      throw detailedError;
    }
    throw error;
  }
};

export const checkApiHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`, {
      method: 'GET',
      mode: 'cors',
    });
    return handleResponse(response);
  } catch (error) {
    // Enhanced error handling for health check
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      const detailedError = new Error(
        `Cannot reach API server at ${API_BASE_URL}. ` +
        `Check: 1) Server is running, 2) Correct IP:port, 3) Network/firewall access, 4) Mixed content (HTTPS→HTTP blocked)`
      );
      detailedError.isNetworkError = true;
      throw detailedError;
    }
    throw error;
  }
};

