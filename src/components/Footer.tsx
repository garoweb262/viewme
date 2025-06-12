import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '2rem 3rem',
      backgroundColor: '#2a4d69', // Dark blue from Figma
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <p style={{ margin: 0, fontSize: '1rem' }}>© 2025 ViewMe. All rights reserved.</p>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#core-values" style={{ color: '#fff', textDecoration: 'none' }}>Core Values</a>
        <a href="#faqs" style={{ color: '#fff', textDecoration: 'none' }}>FAQs</a>
        <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
      </div>
      
      
    </footer>
  );
};

export default Footer;