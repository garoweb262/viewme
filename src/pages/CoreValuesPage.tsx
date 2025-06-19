import React from 'react';
import FooterSection from '../components/FooterSection';
import img1 from '../assets/core1.png';
import img2 from '../assets/core2.png';
import img3 from '../assets/core3.png';
import img4 from '../assets/core4.png';
import img5 from '../assets/core5.png';

const values = [
  {
    title: 'Empowering Digital Growth',
    description:
      'ViewMe is more than just a platform; it’s a vibrant ecosystem designed to empower users to elevate their social media presence and achieve their goals.',
    image: img1,
  },
  {
    title: 'Driving Engagement and Building Connections',
    description:
      'At the heart of ViewMe is the mission to amplify engagement and drive meaningful interactions. Users can foster authentic relationships with their followers.',
    image: img2,
  },
  {
    title: 'Unlocking Monetization Opportunities',
    description:
      'ViewMe equips digital creators with the tools needed for unlocking revenue streams — from affiliate partnerships to fan subscriptions.',
    image: img3,
  },
  {
    title: 'A Community of Collaboration and Growth',
    description:
      'We believe in a world of collaboration and mutual growth. Every like, share, and comment fuels a growing ecosystem.',
    image: img4,
  },
  {
    title: 'Seamless Integration Across Platforms',
    description:
      'The ViewMe environment works seamlessly across multiple social platforms, enabling creators to unify their content strategy.',
    image: img5,
  },
];

const CoreValuesPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#fffef6', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{
        fontSize: '32px',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '40px',
        color: '#111827',
      }}>
        Core Values
      </h2>

      {values.map((val, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={val.image}
            alt={val.title}
            style={{
              width: '280px',
              maxWidth: '100%',
              borderRadius: '12px',
              objectFit: 'contain',
            }}
          />
          <div style={{ maxWidth: '600px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}>
              <div style={{
                backgroundColor: '#FBBF24',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
              }}>
                {idx + 1}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>{val.title}</h3>
            </div>
            <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>{val.description}</p>
          </div>
        </div>
      ))}

      <FooterSection />
    </div>
  );
};

export default CoreValuesPage;
