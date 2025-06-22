import React, { useEffect, useState } from 'react';
import FooterSection from '../components/FooterSection';
import agentsImage from '../assets/agents.png'; // ✅ Your image path

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ background: '#fffef6', paddingTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#111827',
            paddingBottom: '10px',
            display: 'inline-block',
            borderBottom: '3px solid #FBBF24',
          }}
        >
          Contact Us
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 16px 48px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        {/* Form Section */}
        <div
          style={{
            background: '#1f2937',
            padding: '32px',
            borderRadius: '16px',
            color: '#fff',
            flex: '1 1 100%',
            maxWidth: '500px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '0 auto',
          }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Get Started</h3>
          <form>
            <div style={{ marginBottom: '16px' }}>
              <input type="text" placeholder="Enter your Name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <input type="email" placeholder="Enter your email" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <textarea
                placeholder="What can we help you with?"
                style={{ ...inputStyle, height: '100px', resize: 'none' }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: '#FBBF24',
                border: 'none',
                color: '#000',
                fontWeight: 'bold',
                padding: '12px 24px',
                width: '100%',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Send Request
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: '1 1 100%',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <img
            src={agentsImage}
            alt="Support Agents"
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
};

export default ContactPage;
