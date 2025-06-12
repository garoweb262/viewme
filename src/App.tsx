import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import OurFeatures from './components/OurFeatures';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';

import TestimonialsAndCTA from './components/TestimonialsAndCTA';
import CoreValuesSection from './components/CoreValuesSection';

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
      <TestimonialsAndCTA/>
      
      <Footer/>
      {/* Add more sections like Stats, AboutUs, Features, etc. */}
    </div>
  );
};

export default App;