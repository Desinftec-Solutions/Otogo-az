import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { key: 'testimonial1' },
    { key: 'testimonial2' },
    { key: 'testimonial3' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white" data-testid="testimonials-title">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.key}
              className="group relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`testimonial-${index + 1}`}
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" data-testid={`testimonial-${index + 1}-text`}>
                "{t(`testimonials.${testimonial.key}.text`)}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-bold text-gray-900 dark:text-white" data-testid={`testimonial-${index + 1}-author`}>
                  {t(`testimonials.${testimonial.key}.author`)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400" data-testid={`testimonial-${index + 1}-role`}>
                  {t(`testimonials.${testimonial.key}.role`)}
                </p>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-4 text-6xl text-primary-200 dark:text-primary-900 opacity-50 font-serif">
                &ldquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
