import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {
  FiBriefcase,
  FiMail,
  FiPhone,
  FiHash,
  FiLock,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiHeadphones,
  FiClock,
  FiZap,
  FiX,
  FiEye,
  FiEyeOff
} from 'react-icons/fi';
import { submitBusinessInquiry } from '../services/api';


const defaultFormState = {
  companyName: '',
  email: '',
  phone: '',
  tin: '',
  password: '',
  repeatPassword: '',
};

const BusinessContact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState(defaultFormState);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetStatus = () => setStatus({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: t('businessContact.status.submitting') });

    try {
      if (formState.password !== formState.repeatPassword) {
        setStatus({
          type: 'error',
          message: t('businessContact.status.passwordMismatch'),
        });
        return;
      }

      const payload = {
        companyName: formState.companyName.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim(),
        tin: formState.tin.trim(),
        password: formState.password,
        repeatPassword: formState.repeatPassword,
      };

      const result = await submitBusinessInquiry(payload);

      setStatus({
        type: 'success',
        message: t('businessContact.status.success', { referenceId: result.referenceId }),
      });
      setFormState(defaultFormState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || t('businessContact.status.error'),
      });
    }
  };



  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors"
      data-testid="business-contact-page"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <p className="text-sm font-semibold tracking-wider text-primary-700 dark:text-primary-300 uppercase">
                  {t('businessContact.badge')}
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('businessContact.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('businessContact.subtitle')}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { key: 'support', icon: FiHeadphones },
                { key: 'sla', icon: FiClock }
              ].map(({ key, icon: Icon }, index) => (
                <div
                  key={key}
                  className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br mb-4 shadow-lg ${index === 0
                    ? 'from-blue-500 to-cyan-500'
                    : 'from-purple-500 to-pink-500'
                    }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                    {t(`businessContact.cards.${key}.title`)}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {t(`businessContact.cards.${key}.value`)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t(`businessContact.cards.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>


          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="companyName" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <FiBriefcase className="w-4 h-4" />
                    <span>{t('businessContact.form.companyName')}</span>
                  </label>
                  <div className="relative">
                    <input
                      id="companyName"
                      name="companyName"
                      value={formState.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder={t('businessContact.form.companyName')}
                    />
                    <FiBriefcase className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <FiMail className="w-4 h-4" />
                      <span>{t('businessContact.form.email')}</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder={t('businessContact.form.email')}
                      />
                      <FiMail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <FiPhone className="w-4 h-4" />
                      <span>{t('businessContact.form.phone')}</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder={t('businessContact.form.phone')}
                      />
                      <FiPhone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* TIN */}
                <div className="space-y-2">
                  <label htmlFor="tin" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <FiHash className="w-4 h-4" />
                    <span>{t('businessContact.form.tin')}</span>
                  </label>
                  <div className="relative">
                    <input
                      id="tin"
                      name="tin"
                      value={formState.tin}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder={t('businessContact.form.tin')}
                    />
                    <FiHash className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Password & Repeat Password */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="password" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <FiLock className="w-4 h-4" />
                      <span>{t('businessContact.form.password')}</span>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-11 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder={t('businessContact.form.password')}
                      />
                      <FiLock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors"
                      >
                        {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="repeatPassword" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <FiLock className="w-4 h-4" />
                      <span>{t('businessContact.form.repeatPassword')}</span>
                    </label>
                    <div className="relative">
                      <input
                        id="repeatPassword"
                        type={showRepeatPassword ? 'text' : 'password'}
                        name="repeatPassword"
                        value={formState.repeatPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-11 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder={t('businessContact.form.repeatPassword')}
                      />
                      <FiLock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                        className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors"
                      >
                        {showRepeatPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <label htmlFor="terms" className="cursor-pointer select-none">
                      <Trans
                        i18nKey="businessContact.form.termsPrivacy"
                        defaults="I agree to the <0>Terms of Use</0> and <1>Privacy Policy</1>"
                        components={[
                          <a
                            key="terms"
                            href={t('businessContact.legal.termsUrl')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium underline decoration-primary-600/30 hover:decoration-primary-600 transition-all"
                          />,
                          <a
                            key="privacy"
                            href={t('businessContact.legal.privacyUrl')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium underline decoration-primary-600/30 hover:decoration-primary-600 transition-all"
                          />
                        ]}
                      />
                    </label>
                  </div>
                </div>

                {/* Submit Button & Status */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full inline-flex justify-center items-center px-6 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <FiLoader className="w-5 h-5 mr-2 animate-spin" />
                        {t('businessContact.form.ctaLoading')}
                      </>
                    ) : (
                      <>
                        {t('businessContact.form.cta')}
                        <FiCheckCircle className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {status.message && (
                    <div
                      className={`flex items-start space-x-3 p-4 rounded-xl border transition-all duration-300 ${status.type === 'error'
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                        : status.type === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                        }`}
                    >
                      {status.type === 'error' ? (
                        <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      )}
                      <p
                        className={`flex-1 text-sm font-medium ${status.type === 'error'
                          ? 'text-red-800 dark:text-red-200'
                          : status.type === 'success'
                            ? 'text-green-800 dark:text-green-200'
                            : 'text-blue-800 dark:text-blue-200'
                          }`}
                      >
                        {status.message}
                      </p>
                      <button
                        onClick={resetStatus}
                        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label="Close"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default BusinessContact;
