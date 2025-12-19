import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload, FiSearch, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'step1', icon: FiDownload },
    { key: 'step2', icon: FiSearch },
    { key: 'step3', icon: FiCheckCircle },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-100 dark:bg-gray-800 transition-colors" data-testid="how-it-works-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white" data-testid="how-it-works-title">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-testid="how-it-works-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="relative group" data-testid={`step-${index + 1}`}>
                <div className="flex flex-col items-center text-center space-y-5">
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600">
                      <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white" data-testid={`step-${index + 1}-title`}>
                      {t(`howItWorks.${step.key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto" data-testid={`step-${index + 1}-description`}>
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
