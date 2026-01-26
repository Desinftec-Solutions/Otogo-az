import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiUsers, FiBriefcase, FiUserCheck } from 'react-icons/fi';
import { getStatistics } from '../services/api';

const Statistics = () => {
  const { t, i18n } = useTranslation();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBusinessCompanies: 0,
    totalProfessionals: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStatistics(i18n.language);
        setStats({
          totalUsers: data.totalUsers || 0,
          totalBusinessCompanies: data.totalBusinessCompanies || 0,
          totalProfessionals: data.totalProfessionals || 0,
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
        // Keep default values (0) on error
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [i18n.language]);

  const statistics = [
    {
      key: 'users',
      icon: FiUsers,
      value: stats.totalUsers,
      label: t('statistics.users'),
    },
    {
      key: 'businesses',
      icon: FiBriefcase,
      value: stats.totalBusinessCompanies,
      label: t('statistics.businesses'),
    },
    {
      key: 'professionals',
      icon: FiUserCheck,
      value: stats.totalProfessionals,
      label: t('statistics.professionals'),
    },
  ];

  return (
    <section id="statistics" className="py-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 transition-colors" data-testid="statistics-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`stat-${stat.key}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {loading ? (
                  <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                ) : (
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                )}
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium" data-testid={`stat-${stat.key}-label`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
