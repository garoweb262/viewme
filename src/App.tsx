import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import OurFeatures from './components/OurFeatures';
import BenefitsSection from './components/BenefitsSection';
import CoreValuesSection from './components/CoreValuesSection';
import FooterSection from './components/FooterSection';
import CoreValuesPage from './pages/CoreValuesPage';
import FaqPage from './pages/FaqPage';
import TermsPage from './pages/TermsPage'; // ✅ Terms and Conditions page
import ContactPage from './pages/ContactPage';
import SplashScreen from './components/SplashScreen'; // ✅ Splash screen component

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds max
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TrustedBy />
                  <AboutUs />
                  <OurFeatures />
                  <BenefitsSection />
                  <CoreValuesSection />
                  <FooterSection />
                </>
              }
            />
            <Route path="/core-values" element={<CoreValuesPage />} />
            <Route path="/faqs" element={<FaqPage />} />
             <Route path="/terms" element={<TermsPage />} />
             <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
