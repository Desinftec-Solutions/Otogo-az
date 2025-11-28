import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605822167835-d32696aef686?w=1600&q=80"
          alt="Auto service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30" data-testid="hero-badge">
            <span className="text-sm font-medium text-white">{t('hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight" data-testid="hero-title">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-200 leading-relaxed" data-testid="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-testid="hero-cta">
            <button className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2" data-testid="hero-cta-primary">
              <span>{t('hero.cta')}</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all border border-white/30" data-testid="hero-cta-secondary">
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
