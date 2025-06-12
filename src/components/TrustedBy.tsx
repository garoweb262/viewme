import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#FBF6C4',
      textAlign: 'center',
      padding: '3rem 1rem',
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: '2rem',
        color: '#000'
      }}>
        More than <strong>25,000</strong> people uses <strong>ViewMe</strong>
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap',
      }}>
        <img src="/assets/logos/unsplash.svg" alt="Unsplash" height={24} />
        <img src="/assets/logos/notion.svg" alt="Notion" height={24} />
        <img src="/assets/logos/intercom.svg" alt="Intercom" height={24} />
        <img src="/assets/logos/descript.svg" alt="Descript" height={24} />
        <img src="/assets/logos/grammarly.svg" alt="Grammarly" height={24} />
      </div>
    </section>
  );
};

export default TrustedBy;
