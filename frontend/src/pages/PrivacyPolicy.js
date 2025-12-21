import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiShield } from 'react-icons/fi';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors"
      data-testid="privacy-policy-page"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6">
            <FiShield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('privacyPolicy.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('privacyPolicy.lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10 lg:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.introduction.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.introduction.content')}
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.informationWeCollect.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.informationWeCollect.content')}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.howWeUseInformation.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.howWeUseInformation.content')}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.dataSharing.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.dataSharing.content')}
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.dataSecurity.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.dataSecurity.content')}
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.yourRights.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.yourRights.content')}
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.cookies.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.cookies.content')}
              </div>
            </div>

            {/* Children Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.childrenPrivacy.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.childrenPrivacy.content')}
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.changesToPolicy.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.changesToPolicy.content')}
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacyPolicy.contactUs.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('privacyPolicy.contactUs.content')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

