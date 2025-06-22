import React from 'react';
import FooterSection from '../components/FooterSection';

const ContactUsPage: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        paddingBottom: '40px',
        fontFamily: 'Arial, sans-serif',
        background: '#fffef6',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#111827',
          paddingBottom: '10px',
          display: 'block',
          textAlign: 'center',
          borderBottom: '3px solid #FBBF24',
          width: 'fit-content',
          margin: '0 auto 40px',
        }}
      >
        Contact Us
      </h2>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '0 16px',
        }}
      >
        <p style={{ fontSize: '15px', color: '#4B5563', textAlign: 'center' }}>
          We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
        </p>

        <div
          style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                width: '100%',
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                width: '100%',
              }}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                width: '100%',
                resize: 'vertical',
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                backgroundColor: '#fbbf24',
                color: '#111827',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ContactUsPage;
