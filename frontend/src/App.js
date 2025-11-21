import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import BusinessContact from './pages/BusinessContact';
import './i18n/i18n';

const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <Benefits />
    <Testimonials />
    <DownloadSection />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main className="pt-20 sm:pt-24">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/business-contact" element={<BusinessContact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
