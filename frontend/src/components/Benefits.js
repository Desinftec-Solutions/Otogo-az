import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiDatabase, FiClock, FiShield, FiSmartphone } from 'react-icons/fi';

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    { key: 'comprehensive', icon: FiDatabase, gradient: 'from-blue-500 to-cyan-500' },
    { key: 'timeSaving', icon: FiClock, gradient: 'from-purple-500 to-pink-500' },
    { key: 'trustworthy', icon: FiShield, gradient: 'from-green-500 to-emerald-500' },
    { key: 'convenient', icon: FiSmartphone, gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="benefits" className="py-24 bg-white dark:bg-gray-900 transition-colors" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white" data-testid="benefits-title">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="benefits-subtitle">
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                data-testid={`benefit-${benefit.key}`}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative mb-6 inline-flex p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white" data-testid={`benefit-${benefit.key}-title`}>
                    {t(`benefits.${benefit.key}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400" data-testid={`benefit-${benefit.key}-description`}>
                    {t(`benefits.${benefit.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
