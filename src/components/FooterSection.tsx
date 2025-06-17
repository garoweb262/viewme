
import { motion } from 'framer-motion';

import user1 from '../assets/user1.png';

import logo from '../assets/viewme-logo.png';

const avatars = [user1, ];

const FooterSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#161C28',
        color: '#FFFFFF',
        padding: '50px 20px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '30px',
        }}
      >
        {/* Left: Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1', minWidth: '280px', maxWidth: '500px' }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
            People are Saying About ViewMe
          </h2>
          <p style={{ color: '#A6A6A6', marginBottom: '20px' }}>
            Discover why users love ViewMe and how it’s transforming their
            social media journey
          </p>
          <blockquote
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              margin: '20px 0',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: '40px', color: '#F9BF1F' }}>“</span>
            ViewMe has been a game-changer for me! I’ve gained real followers
            and meaningful engagement on my posts in just a few weeks.”
            <br />
            <span
              style={{
                display: 'block',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              — Alex, Content Creator<span style={{ marginLeft: '5px' }}>🧡</span>
            </span>
          </blockquote>

          {/* Avatars and Play Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '15px',
            }}
          >
            {avatars.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`User ${idx + 1}`}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #222938',
                }}
              />
            ))}
            <button
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid #F9BF1F',
                backgroundColor: 'transparent',
                color: '#F9BF1F',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              ▶
            </button>
          </div>
        </motion.div>

        {/* Right: Join Waiting List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: '#222938',
            padding: '30px',
            borderRadius: '16px',
            flex: '1',
            minWidth: '280px',
            maxWidth: '500px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={logo}
              alt="ViewMe Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          </div>
          <h3
            style={{
              textAlign: 'center',
              fontSize: '22px',
              marginBottom: '20px',
            }}
          >
            Join Waiting List
          </h3>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '8px',
              border: '1px solid #D9D9D9',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
            }}
          />
          <textarea
            placeholder="Speak to us"
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '8px',
              border: '1px solid #D9D9D9',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#F9BF1F',
              color: '#161C28',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Send Request
          </button>
        </motion.div>
      </div>

      {/* Email Subscription Section */}
      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h2 style={{ fontSize: '26px', marginBottom: '10px', color: '#F9BF1F' }}>
            ViewMe
          </h2>
          <p style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Get started now try our product
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#222938',
              padding: '8px 10px',
              borderRadius: '999px',
              maxWidth: '320px',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email here"
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
              }}
            />
            <button
              style={{
                backgroundColor: '#F9BF1F',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div
          style={{
            flex: '2',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          {[
            {
              title: 'Support',
              links: ['Help centre', 'Account information', 'About', 'Contact us'],
            },
            {
              title: 'Help and Solution',
              links: ['Talk to support', 'Support docs', 'System status', 'Covid responde'],
            },
            {
              title: 'Product',
              links: ['Update', 'Security', 'Beta test', 'Pricing product'],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 style={{ marginBottom: '10px', color: '#FFFFFF' }}>{section.title}</h4>
              {section.links.map((link, idx) => (
                <p key={idx} style={{ color: '#A6A6A6', fontSize: '14px', margin: '6px 0' }}>
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal Line */}
      <div
        style={{
          borderTop: '1px solid #222938',
          marginTop: '40px',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          color: '#A6A6A6',
          fontSize: '14px',
        }}
      >
        <p>© 2024 ViewMe Inc. Copyright and rights reserved</p>
        <p>
          <a href="#" style={{ color: '#A6A6A6', textDecoration: 'none', marginRight: '10px' }}>
            Terms and Conditions
          </a>
          •
          <a href="#" style={{ color: '#A6A6A6', textDecoration: 'none', marginLeft: '10px' }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
