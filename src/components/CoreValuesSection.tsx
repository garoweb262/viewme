import React from 'react';

const CoreValuesSection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '64px 32px',
    background: '#FDFDFD',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '16px',
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '16px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: 1.6,
    marginBottom: '24px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#FBBF24',
    color: '#111827',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        {/* Image */}
        <img
          src="https://i.ibb.co/KGpXvrh/core-values.png" // Replace this with your real image source or local import
          alt="Core Values Illustration"
          style={imageStyle}
        />

        {/* Text */}
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Core Values</h2>
          <h3 style={subheadingStyle}>Empowering Digital Growth</h3>
          <p style={paragraphStyle}>
            ViewMe is more than just a platform; it’s a vibrant ecosystem designed to empower users to elevate their social media presence and achieve their goals. Whether you’re a content creator, influencer, or digital marketer, ViewMe offers the tools, insights, and opportunities to help you thrive in the ever-evolving digital landscape.
          </p>
          <button style={buttonStyle}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
