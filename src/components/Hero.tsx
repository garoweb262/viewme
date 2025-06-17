import React, { useEffect } from 'react';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    });

    const target = document.querySelector('.hero-section');
    if (target) observer.observe(target);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundColor: '#FBF6C4',
        padding: '6rem 0 4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Left Section */}
        <div style={{ flex: '1 1 300px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem', lineHeight: '1.2' }}>
            Grow your<br />
            connections<br />
            with <span style={{ color: '#F2E03A' }}>View Me.</span>
          </h1>

          <svg width="180" height="20" viewBox="0 0 100 20" style={{ marginBottom: '1.5rem' }}>
            <path d="M 5 15 Q 50 0 95 15" fill="none" stroke="#F2E03A" strokeWidth="3" />
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

        {/* Right Section */}
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src={heroImg}
            alt="Girl with phone"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '1rem',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
