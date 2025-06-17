import React from 'react';
import { motion } from 'framer-motion';
import coreValuesImage from '../assets/core-values.png';

const CoreValuesSection: React.FC = () => {
  return (
    <section
      style={{
        padding: '64px 32px',
        background: '#FDFDFD',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Image */}
        <motion.img
          src={coreValuesImage}
          alt="Core Values"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            flex: '1 1 300px',
          }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: '1 1 300px',
            minWidth: '300px',
          }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
            Core Values
          </h2>
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
            Empowering Digital Growth
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>
            ViewMe is more than just a platform; it’s a vibrant ecosystem designed to empower users to elevate their social media presence and achieve their goals. Whether you’re a content creator, influencer, or digital marketer, ViewMe offers the tools, insights, and opportunities to help you thrive in the ever-evolving digital landscape.
          </p>
          <button
            style={{
              backgroundColor: '#FBBF24',
              color: '#111827',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
