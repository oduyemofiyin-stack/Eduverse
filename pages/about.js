export default function About() {
  return (
    <div style={{padding:'0 0 3rem'}}>

      {/* HERO */}
      <div style={{padding:'3rem 1.2rem 2rem', maxWidth:'900px', margin:'0 auto', textAlign:'center'}}>
        <h1 style={{
          fontFamily:'Georgia, serif',
          fontSize:'clamp(1.8rem, 5vw, 3.2rem)',
          fontWeight:'700', lineHeight:'1.2', marginBottom:'1rem',
        }}>
          Education Should Be{' '}
          <span style={{background:'linear-gradient(135deg,#f0c040,#4488ff 50%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            Free for Everyone
          </span>
        </h1>
        <p style={{fontSize:'clamp(0.88rem, 2.5vw, 1rem)', color:'#7a80a0', lineHeight:'1.8', maxWidth:'580px', margin:'0 auto'}}>
          Eduverse was built on a simple belief — where you were born should never determine what you can learn. We are on a mission to democratize education, globally.
        </p>
      </div>

      {/* MISSION */}
      <div style={{padding:'0 1.2rem'}}>
        <div style={{
          background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
          borderRadius:'20px', padding:'2rem', textAlign:'center',
          maxWidth:'860px', margin:'0 auto 2rem',
        }}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'0.7rem', color:'#f0c040'}}>Our Mission</h2>
          <p style={{fontSize:'0.93rem', color:'#7a80a0', lineHeight:'1.8', maxWidth:'560px', margin:'0 auto'}}>
            To make world-class education accessible to everyone, everywhere — for free. We believe knowledge is a fundamental right, not a privilege.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(230px, 100%), 1fr))',
        gap:'1rem',
        maxWidth:'900px', margin:'0 auto 2.5rem',
        padding:'0 1.2rem',
      }}>
        {[
          {ico:null, title:'Accessibility', body:'Every course on Eduverse is completely free. No paywalls, no hidden fees, no subscriptions — ever.', color:'#4488ff'},
          {ico:null, title:'Excellence', body:'We curate only the best content from world-class instructors and trusted educational sources.', color:'#f0c040'},
          {ico:null, title:'Passion', body:'Learning should be exciting. Every experience is designed to ignite curiosity and keep you motivated.', color:'#ff6b9d'},
          {ico:null, title:'Community', body:'We are building a global community of learners who inspire, support, and grow together.', color:'#00d4aa'},
        ].map(v => (
          <div key={v.title} style={{
            background:'#0d1117',
            border:'1px solid rgba(255,255,255,0.06)',
            borderRadius:'16px', padding:'1.4rem',
            transition:'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.13)'; e.currentTarget.style.transform='translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
          >

            <h3 style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', marginBottom:'0.35rem'}}>{v.title}</h3>
            <p style={{fontSize:'0.82rem', color:'#7a80a0', lineHeight:'1.6'}}>{v.body}</p>
          </div>
        ))}
      </div>

      {/* FOUNDER */}
      <div style={{maxWidth:'680px', margin:'0 auto', padding:'0 1.2rem', textAlign:'center'}}>
        <div style={{
          width:'80px', height:'80px', borderRadius:'50%',
          background:'linear-gradient(135deg,#4488ff,#00d4aa)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700',
          color:'#fff', margin:'0 auto 0.9rem',
        }}>OE</div>
        <div style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700', marginBottom:'0.2rem'}}>Oduye Emmanuel</div>
        <div style={{fontSize:'0.78rem', color:'#4488ff', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:'0.8rem'}}>Founder & CEO, Eduverse</div>
        <p style={{fontSize:'0.87rem', color:'#7a80a0', lineHeight:'1.75'}}>
          Oduye Emmanuel founded Eduverse with a vision to eliminate educational inequality across Africa and the world. Driven by the belief that every curious mind deserves access to quality education, he built Eduverse to be the most accessible, high-quality free learning platform on the internet.
        </p>
      </div>

    </div>
  );
}