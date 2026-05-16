export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid rgba(255,255,255,0.06)',
      padding:'2rem', textAlign:'center',
      fontSize:'0.78rem', color:'#7a80a0',
      position:'relative', zIndex:1,
    }}>
      <div style={{
        fontFamily:'Georgia, serif', fontSize:'1.1rem',
        background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)',
        WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
        marginBottom:'0.4rem',
      }}>
        Eduverse
      </div>
      <em style={{color:'#3a4060'}}>Where Curiosity Meets Knowledge</em>
      <br/><br/>
      © 2025 <span style={{color:'#f0c040'}}>Eduverse</span> · Founded by Oduye Emmanuel · All courses free forever
    </footer>
  );
}