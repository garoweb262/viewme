import React from 'react';
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

const App: React.FC = () => {
  return (
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
              <FooterSection /> {/* ✅ Footer only on homepage */}
            </>
          }
        />
        <Route path="/core-values" element={<CoreValuesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
