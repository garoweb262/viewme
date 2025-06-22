import React from 'react';
import FooterSection from '../components/FooterSection';

const FaqPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', fontFamily: 'Arial, sans-serif', background: '#fffef6' }}>
      
      {/* Centered Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#111827',
            paddingBottom: '10px',
            borderBottom: '3px solid #FBBF24',
            display: 'inline-block',
          }}
        >
          FAQs
        </h2>
      </div>

      {/* FAQ Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          padding: '32px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {[
          {
            q: 'What is ViewMe?',
            a: 'ViewMe is a platform designed to help users grow their social media presence, increase engagement, and unlock monetization opportunities through a collaborative community.',
          },
          {
            q: 'How does ViewMe boost engagement?',
            a: 'By providing tools and insights that optimize content strategy, improve reach, and drive meaningful audience interaction.',
          },
          {
            q: 'Can I make money with ViewMe?',
            a: 'Yes, through affiliate partnerships, tips, and fan subscriptions built into the platform.',
          },
          {
            q: 'Which social media platforms does ViewMe support?',
            a: 'Major platforms including Instagram, TikTok, YouTube, and more.',
          },
          {
            q: 'Is ViewMe free to use?',
            a: 'ViewMe offers both free and premium plans depending on your needs.',
          },
          {
            q: 'How do I join the ViewMe community?',
            a: 'Sign up via the website or mobile app and start building your profile.',
          },
          {
            q: 'How secure is my information on ViewMe?',
            a: 'All your information is encrypted and securely stored.',
          },
          {
            q: 'Can I cancel my subscription at any time?',
            a: 'Yes, subscriptions can be canceled anytime from your account settings.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            }}
          >
            <h4
              style={{
                color: index === 0 || index === 5 ? '#fbbf24' : '#111827',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              {item.q}
            </h4>
            <p
              style={{
                fontSize: '14px',
                color: '#4B5563',
                marginTop: '8px',
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default FaqPage;
