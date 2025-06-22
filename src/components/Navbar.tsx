import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/viewme-logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Core Values', path: '/core-values' },
    { label: 'FAQs', path: '/faq' },
    { label: 'T&C', path: '/terms' },
  ];

  return (
    <nav style={{
      backgroundColor: '#FBF6C4',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="ViewMe Logo" style={{ height: '40px' }} />
        </Link>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      style={{
                        textDecoration: 'none',
                        color: '#666',
                        fontWeight: 500,
                        borderBottom: isActive ? '2px solid #f4a261' : 'none',
                        paddingBottom: '4px',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
              }}
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
        )}

        {/* Hamburger Menu (Mobile) */}
        {isMobile && (
          <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            <span style={{ height: '3px', width: '25px', background: '#333', display: 'block', marginBottom: '5px' }}></span>
            <span style={{ height: '3px', width: '25px', background: '#333', display: 'block', marginBottom: '5px' }}></span>
            <span style={{ height: '3px', width: '25px', background: '#333', display: 'block' }}></span>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: '#FBF6C4',
          width: '100%',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: location.pathname === item.path ? '#f4a261' : '#666',
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile-only Contact Us link */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              color: location.pathname === '/contact' ? '#f4a261' : '#666',
              fontWeight: 500,
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
