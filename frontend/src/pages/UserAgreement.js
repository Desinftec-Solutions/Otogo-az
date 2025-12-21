import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiFileText } from 'react-icons/fi';

const UserAgreement = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors"
      data-testid="user-agreement-page"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6">
            <FiFileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('userAgreement.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('userAgreement.lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10 lg:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.introduction.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.introduction.content')}
              </div>
            </div>

            {/* Acceptance */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.acceptance.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.acceptance.content')}
              </div>
            </div>

            {/* Account Registration */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.accountRegistration.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.accountRegistration.content')}
              </div>
            </div>

            {/* Use of Service */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.useOfService.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.useOfService.content')}
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.userResponsibilities.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.userResponsibilities.content')}
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.intellectualProperty.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.intellectualProperty.content')}
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.limitationOfLiability.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.limitationOfLiability.content')}
              </div>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.termination.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.termination.content')}
              </div>
            </div>

            {/* Changes to Agreement */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.changesToAgreement.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.changesToAgreement.content')}
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.governingLaw.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.governingLaw.content')}
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('userAgreement.contactUs.title')}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t('userAgreement.contactUs.content')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAgreement;

