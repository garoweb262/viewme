import React from 'react';

const TestimonialsAndCTA: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#1a2a44',
      color: '#fff',
      padding: '4rem 3rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'space-between',
    }}>
      {/* Testimonials Section */}
      <div style={{ maxWidth: '40%', flex: '1 1 40%' }}>
        <h2 style={{
          color: '#f4a261',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>
          People are Saying About ViewMe
        </h2>
        <p style={{
          color: '#ccc',
          fontSize: '1rem',
          marginBottom: '2rem',
        }}>
          Discover why users love ViewMe and how it’s transforming their social media journey
        </p>
        <div style={{
          backgroundColor: '#2a4d69',
          padding: '1.5rem',
          borderRadius: '10px',
          position: 'relative',
        }}>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
            "ViewMe has been a game-changer for me! I’ve gained real followers and meaningful engagement on my posts in just a few weeks."
          </p>
          <p style={{ color: '#f4a261', fontSize: '0.9rem' }}>- Alex, Content Creator</p>
          <span role="img" aria-label="Play Icon" style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem' }}>▶</span>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {/* Placeholder for profile images */}
            <div style={{ width: '30px', height: '30px', backgroundColor: '#ccc', borderRadius: '50%' }}></div>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#ccc', borderRadius: '50%' }}></div>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#ccc', borderRadius: '50%' }}></div>
          </div>
        </div>
      </div>

      {/* Join Waiting List Section */}
      <div style={{ maxWidth: '25%', flex: '1 1 25%', textAlign: 'center' }}>
        <h3 style={{
          color: '#f4a261',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>
          Join Waiting List
        </h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            placeholder="Message"
            style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#f4a261',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.8rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Get Started Section */}
      <div style={{ maxWidth: '25%', flex: '1 1 25%', textAlign: 'center' }}>
        <h3 style={{
          color: '#f4a261',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>
          ViewMe
        </h3>
        <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '1rem' }}>
          Get started now try our product
        </p>
        <input
          type="email"
          placeholder="Enter your email here"
          style={{
            padding: '0.5rem',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            width: '100%',
            marginBottom: '1rem',
          }}
        />
        <button
          style={{
            backgroundColor: '#f4a261',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '1rem',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Support and Footer Links */}
      <div style={{ maxWidth: '25%', flex: '1 1 25%', display: 'flex', gap: '2rem' }}>
        <div>
          <h4 style={{ color: '#f4a261', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.9rem' }}>
            <li>Help Centre</li>
            <li>Account Information</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#f4a261', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Help & Solution</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.9rem' }}>
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid response</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#f4a261', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.9rem' }}>
            <li>Update</li>
            <li>Security</li>
            <li>Beta test</li>
            <li>Pricing product</li>
          </ul>
        </div>
      </div>

      {/* Footer Text */}
      <div style={{ width: '100%', textAlign: 'center', color: '#ccc', fontSize: '0.8rem', marginTop: '2rem' }}>
        <p>© 2024 ViewMe Inc. Copyright and rights reserved</p>
        <p><a href="#" style={{ color: '#f4a261', textDecoration: 'none' }}>Terms & Conditions</a> - <a href="#" style={{ color: '#f4a261', textDecoration: 'none' }}>Privacy Policy</a></p>
      </div>
    </section>
  );
};

export default TestimonialsAndCTA;