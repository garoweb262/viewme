import React, { useState, useEffect } from 'react';
import logo from '../assets/viewme-logo.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      style={{
        backgroundColor: '#FBF6C4',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div>
          <img src={logo} alt="ViewMe Logo" style={{ height: '40px', width: 'auto' }} />
        </div>

        {/* Desktop Nav Links & Button */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                gap: '2rem',
                margin: 0,
                padding: 0,
              }}
            >
              {['Home', 'Core Values', 'FAQs', 'About Us'].map((text, index) => (
                <li key={index}>
                  <a
                    href={`#${text.toLowerCase().replace(/\s/g, '-')}`}
                    style={{
                      textDecoration: 'none',
                      color: '#666',
                      fontWeight: 500,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f4a261')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            <button
              style={{
                backgroundColor: '#f4a261',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e07a5f')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f4a261')}
            >
              Contact Us
            </button>
          </div>
        )}

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <div
            onClick={toggleMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <span style={{ height: '3px', width: '25px', background: '#333', marginBottom: '5px' }}></span>
            <span style={{ height: '3px', width: '25px', background: '#333', marginBottom: '5px' }}></span>
            <span style={{ height: '3px', width: '25px', background: '#333' }}></span>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: '#FBF6C4',
            width: '100%',
            padding: '1rem 1.5rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {['Home', 'Core Values', 'FAQs', 'About Us'].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase().replace(/\s/g, '-')}`}
              style={{
                textDecoration: 'none',
                color: '#666',
                fontWeight: 500,
                transition: 'color 0.3s',
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f4a261')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
