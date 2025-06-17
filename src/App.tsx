import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import OurFeatures from './components/OurFeatures';
import BenefitsSection from './components/BenefitsSection';
import CoreValuesSection from './components/CoreValuesSection';
import FooterSection from './components/FooterSection';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TrustedBy/>
      <AboutUs/>
      <OurFeatures/>
      <BenefitsSection/>
      <CoreValuesSection/>
  <FooterSection/>
      {/* Add more sections like Stats, AboutUs, Features, etc. */}
    </div>
  );
};

export default App;