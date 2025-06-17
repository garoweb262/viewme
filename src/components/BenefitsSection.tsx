import React from 'react';

// Import the image from the local assets folder
import benefitPhoneImg from '../assets/benefit-phone.jpg';

const BenefitsSection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '64px 32px',
    background: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const leftStyle: React.CSSProperties = {
    flex: '1 1 400px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '24px',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#374151',
    marginBottom: '16px',
  };

  const bulletStyle: React.CSSProperties = {
    width: '12px',
    height: '12px',
    backgroundColor: '#FBBF24',
    borderRadius: '50%',
    marginRight: '12px',
  };

  const rightStyle: React.CSSProperties = {
    flex: '1 1 400px',
    position: 'relative',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '12px',
    objectFit: 'cover',
  };

  const floatingTagStyle = (top: string, left: string): React.CSSProperties => ({
    position: 'absolute',
    top,
    left,
    backgroundColor: '#ffffff',
    padding: '8px 16px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    fontWeight: 500,
    color: '#111827',
    whiteSpace: 'nowrap',
  });

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left Side */}
        <div style={leftStyle}>
          <h2 style={titleStyle}>What Benefit Will You Get</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={bulletStyle}></span>Increased Engagement
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}></span>Authentic Connections
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}></span>Monetization Opportunities
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}></span>Efficient Management
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}></span>Online Transaction
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div style={rightStyle}>
          <img
            src={benefitPhoneImg}
            alt="Benefits"
            style={imageStyle}
          />

          {/* Floating Labels */}
          <div style={floatingTagStyle('12%', '65%')}>Authentic Connection</div>
          <div style={floatingTagStyle('75%', '10%')}>Increased Engagement</div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
