import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPackage, FiShoppingBag, FiTool, FiMapPin, FiPhone, FiCheckCircle } from 'react-icons/fi';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'spareParts',
      icon: FiPackage,
      image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=600&q=80',
    },
    {
      key: 'retailers',
      icon: FiShoppingBag,
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80',
    },
    {
      key: 'services',
      icon: FiTool,
      image: 'https://images.unsplash.com/photo-1619642737579-a7474bee1044?w=600&q=80',
    },
    {
      key: 'location',
      icon: FiMapPin,
      image: 'https://images.pexels.com/photos/8425058/pexels-photo-8425058.jpeg?w=600&q=80',
    },
    {
      key: 'contact',
      icon: FiPhone,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    },
    {
      key: 'verified',
      icon: FiCheckCircle,
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 transition-colors" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white" data-testid="features-title">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="features-subtitle">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`feature-${feature.key}`}
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={t(`features.${feature.key}.title`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-3 bg-primary-600 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white" data-testid={`feature-${feature.key}-title`}>
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400" data-testid={`feature-${feature.key}-description`}>
                    {t(`features.${feature.key}.description`)}
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

export default Features;
