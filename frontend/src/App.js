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
import Support from './pages/Support';
import AppRedirect from './pages/AppRedirect';
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

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <Header />
    <main className="pt-20 sm:pt-24">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Standalone app redirect page (no header/footer) */}
          <Route path="/app" element={<AppRedirect />} />
          
          {/* Main site with layout */}
          <Route path="/*" element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/business-contact" element={<BusinessContact />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
