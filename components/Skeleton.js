export function CourseSkeleton() {
  return (
    <div style={{
      background:'#0d1117',
      border:'1px solid rgba(255,255,255,0.06)',
      borderRadius:'16px', overflow:'hidden',
    }}>
      <div style={{width:'100%', height:'175px', background:'#161b26', position:'relative', overflow:'hidden'}}>
        <div className="shimmer"/>
      </div>
      <div style={{padding:'1rem'}}>
        <div style={{width:'60px', height:'10px', background:'#161b26', borderRadius:'100px', marginBottom:'0.6rem', position:'relative', overflow:'hidden'}}>
          <div className="shimmer"/>
        </div>
        <div style={{width:'100%', height:'14px', background:'#161b26', borderRadius:'100px', marginBottom:'0.4rem', position:'relative', overflow:'hidden'}}>
          <div className="shimmer"/>
        </div>
        <div style={{width:'70%', height:'14px', background:'#161b26', borderRadius:'100px', marginBottom:'0.8rem', position:'relative', overflow:'hidden'}}>
          <div className="shimmer"/>
        </div>
        <div style={{width:'50%', height:'11px', background:'#161b26', borderRadius:'100px', marginBottom:'0.9rem', position:'relative', overflow:'hidden'}}>
          <div className="shimmer"/>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:'0.65rem', display:'flex', justifyContent:'space-between'}}>
          <div style={{width:'60px', height:'11px', background:'#161b26', borderRadius:'100px', position:'relative', overflow:'hidden'}}>
            <div className="shimmer"/>
          </div>
          <div style={{width:'50px', height:'11px', background:'#161b26', borderRadius:'100px', position:'relative', overflow:'hidden'}}>
            <div className="shimmer"/>
          </div>
          <div style={{width:'30px', height:'11px', background:'#161b26', borderRadius:'100px', position:'relative', overflow:'hidden'}}>
            <div className="shimmer"/>
          </div>
        </div>
      </div>
      <style>{`
        .shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div style={{maxWidth:'900px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'20px', padding:'2rem', display:'flex', alignItems:'center', gap:'1.5rem', marginBottom:'1.5rem', flexWrap:'wrap'}}>
        <div style={{width:'90px', height:'90px', borderRadius:'50%', background:'#161b26', position:'relative', overflow:'hidden', flexShrink:0}}>
          <div className="shimmer"/>
        </div>
        <div style={{flex:1}}>
          <div style={{width:'200px', height:'20px', background:'#161b26', borderRadius:'100px', marginBottom:'0.6rem', position:'relative', overflow:'hidden'}}>
            <div className="shimmer"/>
          </div>
          <div style={{width:'150px', height:'14px', background:'#161b26', borderRadius:'100px', position:'relative', overflow:'hidden'}}>
            <div className="shimmer"/>
          </div>
        </div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(160px,100%), 1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.2rem', textAlign:'center'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'#161b26', margin:'0 auto 0.6rem', position:'relative', overflow:'hidden'}}>
              <div className="shimmer"/>
            </div>
            <div style={{width:'60%', height:'20px', background:'#161b26', borderRadius:'100px', margin:'0 auto 0.3rem', position:'relative', overflow:'hidden'}}>
              <div className="shimmer"/>
            </div>
            <div style={{width:'40%', height:'12px', background:'#161b26', borderRadius:'100px', margin:'0 auto', position:'relative', overflow:'hidden'}}>
              <div className="shimmer"/>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}