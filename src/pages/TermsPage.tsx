import React from 'react';
import FooterSection from '../components/FooterSection';

const Section = ({ title, text }: { title: string; text: string }) => (
  <div style={{ marginBottom: '32px', textAlign: 'left', maxWidth: '800px', marginInline: 'auto' }}>
    <h4 style={{ fontWeight: 'bold', color: '#111827', fontSize: '18px', marginBottom: '8px' }}>{title}</h4>
    <p style={{ whiteSpace: 'pre-line', color: '#4B5563', fontSize: '15px', lineHeight: 1.7 }}>{text}</p>
  </div>
);

const TermsPage: React.FC = () => {
  return (
    <div style={{ background: '#fffef6', paddingTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#111827',
            paddingBottom: '10px',
            display: 'inline-block',
            borderBottom: '3px solid #FBBF24',
            marginBottom: '24px',
          }}
        >
          Terms and Conditions
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Welcome to ViewMe! By accessing or using our platform, you agree to be bound by these Terms and Conditions...
        </p>
      </div>

      {[
        ['1. Acceptance of Terms', 'By creating an account on ViewMe, you agree that you’ve read and accepted the Terms and Privacy Policy.'],
        ['2. Eligibility', '• Must be 13+ to use ViewMe.\n• If under 18, parental consent required.\n• You affirm you meet these requirements.'],
        ['3. Account Responsibilities', '• Keep your credentials safe.\n• Provide accurate information.\n• Report unauthorized use immediately.'],
        ['4. Prohibited Activities', '• Don’t spam or share illegal/offensive content.\n• Don’t automate actions without permission.'],
        ['5. User Content', '• You retain ownership of your content.\n• We can display/promote your content.\n• You’re responsible for legality.'],
        ['6. Monetization and Earnings', '• Earnings depend on eligibility and policies.\n• You’re responsible for taxes.'],
        ['7. Termination of Account', '• We may suspend or terminate accounts violating our terms.\n• You may delete your account any time.'],
        ['8. Limitation of Liability', '• We provide ViewMe “as-is”.\n• We’re not liable for damages from platform use.'],
        ['9. Modifications to Terms', '• Terms may change.\n• Continued use implies acceptance of updates.']
      ].map(([title, text], i) => <Section key={i} title={title} text={text} />)}

      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#111827',
            paddingBottom: '10px',
            display: 'inline-block',
            borderBottom: '3px solid #FBBF24',
            marginTop: '48px',
            marginBottom: '24px',
          }}
        >
          Privacy Policy
        </h2>
        <p style={{ color: '#4B5563', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          This Privacy Policy explains how ViewMe collects, uses, and protects your information.
        </p>
      </div>

      {[
        ['1. Information We Collect', '• Personal Information: name, email, phone, payment details.\n• Usage Data: how you interact with the platform.\n• Device Info: IP address, browser, OS.'],
        ['2. How We Use Your Information', '• To Provide Services: improve functionality.\n• Personalize UX: content recommendations.\n• Communication: updates, promotions.\n• Security: detect fraud.'],
        ['3. Sharing of Information', '• With 3rd Parties: like payment or analytics services.\n• Legal Compliance: law may require disclosure.\n• With Consent: when you allow it.'],
        ['4. Cookies and Tracking Technologies', '• Cookies: improve experience, control via browser.\n• Analytics: understand usage trends.'],
        ['5. Data Retention', '• Retained only as long as needed.\n• You may request deletion anytime.'],
        ['6. Your Privacy Choices', '• Access & Update Info via settings.\n• Opt-out of emails or delete account via [support@viewme.com].'],
        ['7. Security Measures', '• Industry-standard protection.\n• However, no system is 100% secure.'],
        ['8. Changes to Privacy Policy', '• We may update this policy.\n• Continued use confirms acceptance.']
      ].map(([title, text], i) => <Section key={i + 100} title={title} text={text} />)}

      <FooterSection />
    </div>
  );
};

export default TermsPage;
