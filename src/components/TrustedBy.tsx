import React from 'react';
import trustedImg from '../assets/trusted-by.png'; // 👈 rename your screenshot to this

const TrustedBy: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FBF6C4',
        textAlign: 'center',
        padding: '3rem 1rem',
      }}
    >
      <img
        src={trustedImg}
        alt="Trusted by companies"
        style={{
          maxWidth: '600px',
          width: '100%',
          height: 'auto',
          margin: '0 auto',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </section>
  );
};

export default TrustedBy;
