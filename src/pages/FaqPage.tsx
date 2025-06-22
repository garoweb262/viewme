import React, { useState } from 'react';
import FooterSection from '../components/FooterSection';

const faqData = [
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
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ paddingTop: '100px', fontFamily: 'Arial, sans-serif', background: '#fffef6' }}>
      {/* Header */}
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

      {/* FAQ Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          padding: '0 24px 48px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                onClick={() => toggle(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <h4
                  style={{
                    color: '#111827',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    margin: 0,
                  }}
                >
                  {item.q}
                </h4>
                <span
                  style={{
                    fontSize: '20px',
                    color: '#FBBF24',
                    fontWeight: 'bold',
                    paddingLeft: '12px',
                  }}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              {isOpen && (
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4B5563',
                    marginTop: '12px',
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <FooterSection />
    </div>
  );
};

export default FaqPage;
