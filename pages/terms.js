export default function Terms() {
  return (
    <div style={{maxWidth:'800px', margin:'0 auto', padding:'3rem 1.2rem 5rem'}}>
      <div style={{marginBottom:'2rem'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:'700', marginBottom:'0.5rem', color:'var(--text)'}}>
          Terms of Use
        </h1>
        <p style={{fontSize:'0.85rem', color:'var(--muted)'}}>
          Last updated: January 1, 2026 · Eduverse Academy Ltd
        </p>
      </div>

      {[
        {
          title:'1. Acceptance of Terms',
          body:`By accessing or using the Eduverse platform ("Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Service. These terms apply to all visitors, users, and others who access or use the Service.`
        },
        {
          title:'2. About Eduverse Academy Ltd',
          body:`Eduverse Academy Ltd is an online learning platform registered in Nigeria, dedicated to providing free, high-quality education to learners worldwide. Our registered address is 10, Osoro Street, Papa Ajao, Mushin, Lagos, Nigeria.`
        },
        {
          title:'3. User Accounts',
          body:`When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password you use to access the Service and for any activities under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`
        },
        {
          title:'4. Free Access & No Payment',
          body:`All courses, video lessons, reading materials, quizzes, and certificates on Eduverse are completely free of charge. We do not require any payment, subscription, or credit card information to access our content. This commitment to free education is central to our mission.`
        },
        {
          title:'5. Intellectual Property',
          body:`The Service and its original content, features, and functionality are and will remain the exclusive property of Eduverse Academy Ltd. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Eduverse Academy Ltd.`
        },
        {
          title:'6. User Conduct',
          body:`You agree not to use the Service to: (a) violate any applicable laws or regulations; (b) impersonate any person or entity; (c) transmit any unsolicited or unauthorized advertising; (d) interfere with or disrupt the integrity or performance of the Service; (e) attempt to gain unauthorized access to any systems or networks connected to the Service.`
        },
        {
          title:'7. Educational Content',
          body:`The educational content provided on Eduverse is for informational and learning purposes only. While we strive to ensure accuracy, we make no warranties about the completeness, reliability, or accuracy of the content. Any reliance you place on such information is strictly at your own risk.`
        },
        {
          title:'8. Certificates',
          body:`Certificates issued by Eduverse Academy Ltd upon course completion are recognition of your learning achievement on our platform. They are not accredited by government or regulatory bodies unless explicitly stated. Employers and institutions have discretion in recognizing these certificates.`
        },
        {
          title:'9. Limitation of Liability',
          body:`Eduverse Academy Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service. Our total liability to you for any claims arising from your use of the Service shall not exceed the amount you paid us in the last 12 months (which is zero, as our service is free).`
        },
        {
          title:'10. Termination',
          body:`We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.`
        },
        {
          title:'11. Changes to Terms',
          body:`We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by updating the date at the top of this page. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.`
        },
        {
          title:'12. Governing Law',
          body:`These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.`
        },
        {
          title:'13. Contact Us',
          body:`If you have any questions about these Terms, please contact us at: Eduverse Academy Ltd, 10 Osoro Street, Papa Ajao, Mushin, Lagos, Nigeria. Email: Oduyemofiyin@gmail.com`
        },
      ].map((section, i) => (
        <div key={i} style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:'14px', padding:'1.5rem', marginBottom:'1rem',
        }}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.05rem', fontWeight:'700', marginBottom:'0.7rem', color:'#4488ff'}}>{section.title}</h2>
          <p style={{fontSize:'0.88rem', lineHeight:'1.8', color:'var(--text2)'}}>{section.body}</p>
        </div>
      ))}

      <div style={{background:'linear-gradient(135deg,rgba(68,136,255,0.08),rgba(0,212,170,0.08))', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.5rem', textAlign:'center', marginTop:'2rem'}}>
        <p style={{fontSize:'0.88rem', color:'var(--muted)', lineHeight:'1.7'}}>
          By using Eduverse, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          <br/>
          <strong style={{color:'var(--text)'}}>Eduverse Academy Ltd</strong> · Lagos, Nigeria · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}