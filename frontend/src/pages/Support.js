import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FiMail,
    FiUser,
    FiMessageSquare,
    FiSend,
    FiLoader,
    FiCheckCircle,
    FiAlertCircle,
    FiX,
    FiPlus,
    FiMinus,
    FiHelpCircle
} from 'react-icons/fi';
import { submitSupportInquiry } from '../services/api';

const defaultFormState = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
};

const Support = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState(defaultFormState);
    const [status, setStatus] = useState({ type: 'idle', message: '' });
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const resetStatus = () => setStatus({ type: 'idle', message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ type: 'loading', message: t('support.form.submitting') });

        try {
            const payload = {
                fullName: formState.fullName.trim(),
                email: formState.email.trim(),
                subject: formState.subject.trim(),
                message: formState.message.trim(),
            };

            await submitSupportInquiry(payload);

            setStatus({
                type: 'success',
                message: t('support.form.success'),
            });
            setFormState(defaultFormState);
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || t('support.form.error'),
            });
        }
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: 'q1', a: 'a1' },
        { q: 'q2', a: 'a2' },
        { q: 'q3', a: 'a3' },
        { q: 'q4', a: 'a4' },
    ];

    return (
        <section
            className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors"
            data-testid="support-page"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - FAQ */}
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                                <p className="text-sm font-semibold tracking-wider text-primary-700 dark:text-primary-300 uppercase">
                                    {t('nav.support')}
                                </p>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                {t('support.title')}
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('support.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FiHelpCircle className="w-6 h-6 mr-2 text-primary-600" />
                                {t('support.faq.title')}
                            </h2>
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {t(`support.faq.${faq.q}`)}
                                        </span>
                                        {openFaq === index ? (
                                            <FiMinus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                        ) : (
                                            <FiPlus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>
                                    <div
                                        className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {t(`support.faq.${faq.a}`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:sticky lg:top-24">
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('support.form.title')}
                            </h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        <FiUser className="w-4 h-4" />
                                        <span>{t('support.form.name')}</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            value={formState.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            placeholder={t('support.form.name')}
                                        />
                                        <FiUser className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        <FiMail className="w-4 h-4" />
                                        <span>{t('support.form.email')}</span>
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
                                            placeholder={t('support.form.email')}
                                        />
                                        <FiMail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        <FiMessageSquare className="w-4 h-4" />
                                        <span>{t('support.form.subject')}</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            placeholder={t('support.form.subject')}
                                        />
                                        <FiMessageSquare className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        <FiMessageSquare className="w-4 h-4" />
                                        <span>{t('support.form.message')}</span>
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                                            placeholder={t('support.form.message')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={status.type === 'loading'}
                                        className="w-full inline-flex justify-center items-center px-6 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                                    >
                                        {status.type === 'loading' ? (
                                            <>
                                                <FiLoader className="w-5 h-5 mr-2 animate-spin" />
                                                {t('support.form.submitting')}
                                            </>
                                        ) : (
                                            <>
                                                {t('support.form.submit')}
                                                <FiSend className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>

                                    {status.message && (
                                        <div
                                            className={`flex items-start space-x-3 p-4 rounded-xl border transition-all duration-300 ${status.type === 'error'
                                                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                                                : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
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
                                                    : 'text-green-800 dark:text-green-200'
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

export default Support;
