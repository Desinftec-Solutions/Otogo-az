import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'az', name: 'Azərbaycan' },
    { code: 'ru', name: 'Русский' },
  ];

  const navItems = [
    { key: 'features', href: '/#features' },
    { key: 'howItWorks', href: '/#how-it-works' },
    { key: 'benefits', href: '/#benefits' },
    { key: 'testimonials', href: '/#testimonials' },
    { key: 'support', href: '/support', isRoute: true },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center" data-testid="logo">
            <Link to="/">
              <img
                src="https://customer-assets.emergentagent.com/job_service-locator-9/artifacts/ayp1qiir_oto%20go.svg"
                alt="Otogo Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  data-testid={`nav-${item.key}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  data-testid={`nav-${item.key}`}
                >
                  {t(`nav.${item.key}`)}
                </a>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" data-testid="language-selector">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
                data-testid="language-toggle"
              >
                <FiGlobe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2" data-testid="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${i18n.language === lang.code
                        ? 'text-primary-600 dark:text-primary-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300'
                        }`}
                      data-testid={`lang-${lang.code}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              data-testid="theme-toggle"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-gray-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Business Contact CTA */}
            <Link
              to="/business-contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              data-testid="nav-business"
            >
              {t('nav.business')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    data-testid={`mobile-nav-${item.key}`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    data-testid={`mobile-nav-${item.key}`}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )
              ))}
              <Link
                to="/business-contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-white text-center bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                data-testid="mobile-nav-business"
              >
                {t('nav.business')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
