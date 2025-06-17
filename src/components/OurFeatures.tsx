import React from 'react';

// Import images from local assets
import boostEngagementImg from '../assets/boost-engagement.jpg';
import monetizationImg from '../assets/monetization.jpg';
import seamlessIntegrationImg from '../assets/seamless-integration.jpg';

const OurFeatures: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#F9FAFB',
    padding: '64px 32px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    alignItems: 'flex-start',
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: '1 1 300px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '16px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#4B5563',
    lineHeight: '1.6',
    maxWidth: '360px',
    marginBottom: '24px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#FBBF24',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 600,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: '2 1 600px',
    display: 'flex',
    gap: '24px',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  };

  const cardStyle: React.CSSProperties = {
    width: '300px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    textAlign: 'left',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
    margin: '16px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#4B5563',
    margin: '0 16px 16px 16px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Left Section */}
        <div style={leftSectionStyle}>
          <h2 style={headingStyle}>Our Features</h2>
          <p style={paragraphStyle}>
            Discover how ViewMe makes it easier to boost your presence, grow your community, and monetize your social media platforms.
          </p>
          <button style={buttonStyle} type="button">
            Install App
          </button>
        </div>

        {/* Right Section */}
        <div style={rightSectionStyle}>
          {/* Boost Engagement */}
          <div style={cardStyle}>
            <img
              src={boostEngagementImg}
              alt="Boost Engagement Feature"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Boost Engagement</h3>
            <p style={descriptionStyle}>
              Effortlessly share links to your most captivating Instagram posts, YouTube videos, or tweets.
            </p>
          </div>

          {/* Monetization */}
          <div style={cardStyle}>
            <img
              src={monetizationImg}
              alt="Monetization Feature"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Monetization</h3>
            <p style={descriptionStyle}>
              Turn your social media presence into income.
            </p>
          </div>

          {/* Seamless Integration */}
          <div style={cardStyle}>
            <img
              src={seamlessIntegrationImg}
              alt="Seamless Integration Feature"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Seamless Integration</h3>
            <p style={descriptionStyle}>
              ViewMe works seamlessly across all major social media platforms, making it easy to interact with content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
