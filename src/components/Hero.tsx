import React from 'react';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FBF6C4',
        padding: '4rem 2rem',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Text Section */}
      <div style={{ flex: '1', minWidth: '300px', paddingRight: '2rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000',
          marginBottom: '1rem',
          lineHeight: '1.2',
        }}>
          Grow your<br />
          connections<br />
          with <span style={{ color: '#F2E03A' }}>View Me.</span>
        </h1>

        {/* Curved Underline SVG */}
        <svg
          width="180"
          height="20"
          viewBox="0 0 100 20"
          style={{ marginBottom: '1.5rem' }}
        >
          <path
            d="M 5 15 Q 50 0 95 15"
            fill="none"
            stroke="#F2E03A"
            strokeWidth="3"
          />
        </svg>

        <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '480px', marginBottom: '2rem' }}>
          Whether you're a content creator, influencer, or marketer, ViewMe gives you the tools to get noticed, connect with more people, and reach your goals.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: '50px' }}
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              style={{ height: '50px' }}
            />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div style={{
        flex: '1',
        minWidth: '300px',
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Placeholder Image */}
        <img
  src={heroImg}
  alt="Girl with phone"
  style={{
    width: '100%',
    maxWidth: '400px',
    borderRadius: '1rem',
    position: 'relative',
    zIndex: 1,
  }}
        />

        {/* Bubble 1 */}
      
        </div>

        {/* Bubble 2 */}
        
         
        
    
    </section>
  );
};

export default Hero;
