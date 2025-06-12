import React from 'react';

const AboutUs: React.FC = () => {
  const starStyle = {
    width: '20px',
    height: '20px',
    fill: '#FBBF24', // Yellow color for filled stars
  };

  const emptyStarStyle = {
    width: '20px',
    height: '20px',
    fill: '#D1D5DB', // Gray color for empty stars
  };

  const iconContainerStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#FEF3C7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 8px',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    color: '#A16207', // Yellow-600 color
  };

  return (
    <div
      style={{
        backgroundColor: '#F3F4F6',
        padding: '48px 16px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '24px',
          }}
        >
          About Us
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            ...(window.innerWidth >= 768 && { gridTemplateColumns: '1fr 2fr' }), // Responsive grid
          }}
        >
          {/* Left Section - Description and Ratings */}
          <div>
            <p
              style={{
                color: '#4B5563',
                marginBottom: '16px',
                lineHeight: '1.5',
              }}
            >
              ViewMe is more than just a platform; it's a vibrant ecosystem designed to help you elevate your social media presence and achieve your goals. Whether you're a content creator, influencer, or digital marketer, ViewMe provides the tools, insights, and opportunities to thrive in the ever-changing digital landscape.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      style={starStyle}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.842 1.416 8.255L12 18.827l-7.415 3.889 1.416-8.255-6.001-5.842 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
                <p style={{ color: '#4B5563', fontSize: '12px' }}>4.9 / 5 rating</p>
                <p style={{ color: '#6B7280', fontSize: '10px' }}>databricks</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      style={starStyle}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.842 1.416 8.255L12 18.827l-7.415 3.889 1.416-8.255-6.001-5.842 8.332-1.151z" />
                    </svg>
                  ))}
                  <svg
                    style={emptyStarStyle}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.842 1.416 8.255L12 18.827l-7.415 3.889 1.416-8.255-6.001-5.842 8.332-1.151z" />
                  </svg>
                </div>
                <p style={{ color: '#4B5563', fontSize: '12px' }}>4.8 / 5 rating</p>
                <p style={{ color: '#6B7280', fontSize: '10px' }}>Chainalysis</p>
              </div>
            </div>
          </div>

          {/* Right Section - Features */}
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '24px',
                ...(window.innerWidth >= 768 && { gridTemplateColumns: 'repeat(3, 1fr)' }),
                textAlign: 'center',
              }}
            >
              <div>
                <div style={iconContainerStyle}>
                  <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  Social Media Growth:
                </h3>
                <p style={{ color: '#4B5563', fontSize: '12px', lineHeight: '1.5' }}>
                  ViewMe is driven by a mission to simplify the complexities of social media management and growth.
                </p>
              </div>
              <div>
                <div style={iconContainerStyle}>
                  <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      fillRule="evenodd"
                      d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  Authentic Connections:
                </h3>
                <p style={{ color: '#4B5563', fontSize: '12px', lineHeight: '1.5' }}>
                  ViewMe focuses on helping you create meaningful relationships with your audience and other users.
                </p>
              </div>
              <div>
                <div style={iconContainerStyle}>
                  <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm0 2h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1zm7 6a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  Empower Monetization:
                </h3>
                <p style={{ color: '#4B5563', fontSize: '12px', lineHeight: '1.5' }}>
                  Beyond engagement, ViewMe opens doors to monetization opportunities like sponsored partnerships and affiliate marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;