import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload, FiSearch, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'step1', icon: FiDownload, color: 'primary' },
    { key: 'step2', icon: FiSearch, color: 'accent' },
    { key: 'step3', icon: FiCheckCircle, color: 'primary' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white" data-testid="how-it-works-title">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="how-it-works-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 dark:from-primary-800 dark:via-accent-800 dark:to-primary-800"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="relative" data-testid={`step-${index + 1}`}>
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-14 h-14 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50 dark:border-gray-800">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white" data-testid={`step-${index + 1}-title`}>
                      {t(`howItWorks.${step.key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto" data-testid={`step-${index + 1}-description`}>
                      {t(`howItWorks.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
