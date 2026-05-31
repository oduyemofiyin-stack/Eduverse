import Accordion from '../components/Accordion';

const sections = [
  { title:'1. Introduction', body:'Eduverse Academy Ltd ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. If you disagree with its terms, please discontinue use of our Service.' },
  { title:'2. Information We Collect', body:'We collect the following types of information:\n\n• Account Information: When you register, we collect your first name, last name, and email address.\n\n• Google Sign-In Data: If you sign in with Google, we receive your name, email address, and profile picture from Google.\n\n• Learning Data: We store your enrolled courses, completed lessons, quiz scores, wishlist, and course ratings.\n\n• Usage Data: We may collect information about how you interact with our platform, including pages visited and features used.' },
  { title:'3. How We Use Your Information', body:'We use the information we collect to: (a) provide, maintain, and improve our Service; (b) create and manage your account; (c) track your learning progress and issue certificates; (d) send you important updates about the Service; (e) respond to your comments and questions; (f) monitor and analyze usage patterns to improve user experience.' },
  { title:'4. Data Storage & Security', body:'Your data is stored securely using Google Firebase, which provides enterprise-grade security including: (a) encryption of data in transit using TLS/SSL; (b) encryption of data at rest; (c) regular security audits and compliance certifications; (d) access controls and authentication. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
  { title:'5. Data Retention', body:'We retain your personal information for as long as your account is active or as needed to provide you with our services. You may request deletion of your account and associated data at any time by contacting us at Oduyemofiyin@gmail.com. We will respond to deletion requests within 30 days.' },
  { title:'6. Sharing of Information', body:'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: (a) with your consent; (b) to comply with legal obligations; (c) to protect the rights and safety of Eduverse Academy Ltd and our users; (d) with service providers who assist in operating our platform (such as Firebase/Google), under strict confidentiality agreements.' },
  { title:'7. Google Services', body:'We use Google Firebase for authentication and data storage, and Google Sign-In for social login. When you use these features, Google\'s Privacy Policy also applies. We recommend reviewing Google\'s Privacy Policy at policies.google.com/privacy to understand how Google handles your data.' },
  { title:'8. Cookies & Local Storage', body:'We use browser localStorage to store your session information, preferences (such as dark/light mode), and learning progress locally on your device. This data stays on your device and is not transmitted to our servers unless you are logged in. You can clear this data by clearing your browser\'s local storage.' },
  { title:'9. Children\'s Privacy', body:'Our Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will delete such information promptly.' },
  { title:'10. Your Rights (NDPR Compliance)', body:'Under Nigeria\'s National Data Protection Regulation (NDPR), you have the right to: (a) access your personal data; (b) correct inaccurate data; (c) request deletion of your data; (d) object to processing of your data; (e) data portability. To exercise these rights, contact us at Oduyemofiyin@gmail.com.' },
  { title:'11. International Data Transfers', body:'Your information may be transferred to and maintained on servers located outside of Nigeria. By using our Service, you consent to the transfer of your information to these locations. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.' },
  { title:'12. Changes to This Policy', body:'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.' },
  { title:'13. Contact & Data Protection Officer', body:'For any privacy-related questions, concerns, or requests, please contact:\n\nEduverse Academy Ltd\n10, Osoro Street, Papa Ajao\nMushin, Lagos, Nigeria\nEmail: Oduyemofiyin@gmail.com\nPhone: +234 916 257 8348' },
];

// Privacy policy page
export default function Privacy() {
  return (
    <div className="page-container" style={{maxWidth:'800px', margin:'0 auto', padding:'3rem 1.2rem 5rem'}}>
      <div style={{marginBottom:'2rem'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:'700', marginBottom:'0.5rem', color:'var(--text)'}}>
          Privacy Policy
        </h1>
        <p style={{fontSize:'0.85rem', color:'var(--muted)'}}>
          Last updated: January 1, 2026 · Eduverse Academy Ltd
        </p>
      </div>

      <Accordion sections={sections} accentColor="#00d4aa" />

      <div style={{background:'linear-gradient(135deg,rgba(0,212,170,0.08),rgba(68,136,255,0.08))', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.5rem', textAlign:'center', marginTop:'2rem'}}>
        <p style={{fontSize:'0.88rem', color:'var(--muted)', lineHeight:'1.7'}}>
          Your privacy matters to us. We are committed to being transparent about how we handle your data.
          <br/>
          <strong style={{color:'var(--text)'}}>Eduverse Academy Ltd</strong> · Lagos, Nigeria · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}