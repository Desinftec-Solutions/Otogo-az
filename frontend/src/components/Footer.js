import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'benefits', href: '#benefits' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'support', href: '/support', isRoute: true },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_service-locator-9/artifacts/ayp1qiir_oto%20go.svg"
              alt="Otogo Logo"
              className="h-8 w-auto mb-4"
            />
            <h3 className="text-lg font-bold">{t('footer.about')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.key}`}
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.key}`}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('footer.contact')}</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5" />
                <span>otogoapp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5" />
                <span>+994 50 880 87 51</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5" />
                <span>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Otogo. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
