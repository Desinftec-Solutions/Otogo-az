import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './i18n/i18n';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
