import React, { useEffect } from 'react';
import { FiSmartphone } from 'react-icons/fi';

const AppRedirect = () => {
  const APP_STORE_URL = 'https://apps.apple.com/az/app/otogo/id6751750738';
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.otogo';

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = APP_STORE_URL;
      return;
    }

    // Detect Android
    if (/android/i.test(userAgent) && PLAY_STORE_URL) {
      window.location.href = PLAY_STORE_URL;
      return;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://customer-assets.emergentagent.com/job_service-locator-9/artifacts/ayp1qiir_oto%20go.svg"
            alt="Otogo Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Icon */}
        <div className="inline-flex p-6 bg-primary-500/20 backdrop-blur-sm rounded-3xl">
          <FiSmartphone className="w-16 h-16 text-primary-400" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white">Otogo Tətbiqini Yüklə</h1>
          <p className="text-gray-400">Ustalar, hissələr, servislər — hamısı bir yerdə</p>
        </div>

        {/* Download Buttons */}
        <div className="space-y-4">
          {/* App Store */}
          <a
            href={APP_STORE_URL}
            className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-600">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </a>

          {/* Play Store */}
          <a
            href={PLAY_STORE_URL}
            className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-600">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          © 2025 OTOGO MMC
        </p>
      </div>
    </div>
  );
};

export default AppRedirect;

