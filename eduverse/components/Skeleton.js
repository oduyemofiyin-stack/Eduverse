// these skeleton loaders are kinda ugly but better than nothing
export function CourseSkeleton() {
  return (
    <div style={{
      background:'var(--card-bg)',
      border:'1px solid var(--border)',
      borderRadius:'16px', overflow:'hidden',
    }}>
      <div style={{width:'100%', height:'175px', background:'var(--surface2)'}} className="shimmer-block"/>
      <div style={{padding:'1rem'}}>
        <div style={{width:'60px', height:'10px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.6rem'}} className="shimmer-block"/>
        <div style={{width:'100%', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.4rem'}} className="shimmer-block"/>
        <div style={{width:'70%', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.8rem'}} className="shimmer-block"/>
        <div style={{width:'50%', height:'11px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.9rem'}} className="shimmer-block"/>
        <div style={{borderTop:'1px solid var(--border)', paddingTop:'0.65rem', display:'flex', justifyContent:'space-between'}}>
          <div style={{width:'60px', height:'11px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
          <div style={{width:'50px', height:'11px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
          <div style={{width:'30px', height:'11px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div style={{maxWidth:'1100px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{height:'120px', background:'var(--surface)', borderRadius:'20px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem'}}>
        {[1,2].map(i => (
          <div key={i} style={{height:'200px', background:'var(--surface)', borderRadius:'16px'}} className="shimmer-block"/>
        ))}
      </div>
      <div style={{height:'300px', background:'var(--surface)', borderRadius:'16px'}} className="shimmer-block"/>
    </div>
  );
}

export function CourseGridSkeleton({ count = 6 }) {
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fill, minmax(min(295px, 100%), 1fr))',
      gap:'1rem',
    }}>
      {Array.from({ length: count }, (_, i) => i).map(i => (
        <div key={i} style={{
          background:'var(--card-bg)', border:'1px solid var(--border)',
          borderRadius:'16px', overflow:'hidden',
        }}>
          <div style={{width:'100%', height:'170px', background:'var(--surface2)'}} className="shimmer-block"/>
          <div style={{padding:'1rem'}}>
            <div style={{width:'80px', height:'10px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
            <div style={{width:'100%', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.3rem'}} className="shimmer-block"/>
            <div style={{width:'60%', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.7rem'}} className="shimmer-block"/>
            <div style={{width:'40%', height:'11px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CourseDetailSkeleton() {
  return (
    <div className="page-container" style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'60%', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1rem'}} className="shimmer-block"/>
      <div style={{width:'40%', height:'16px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{width:'100%', height:'400px', background:'var(--surface2)', borderRadius:'16px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'flex', gap:'0.5rem', marginBottom:'1.5rem'}}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{width:'80px', height:'30px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
        ))}
      </div>
      <div style={{width:'100%', height:'200px', background:'var(--surface2)', borderRadius:'16px'}} className="shimmer-block"/>
    </div>
  );
}

export function AdminSkeleton() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{height:'80px', background:'var(--surface)', borderRadius:'14px', padding:'1rem'}} className="shimmer-block"/>
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div style={{maxWidth:'900px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{background:'var(--card-bg)', border:'1px solid var(--border)', borderRadius:'20px', padding:'2rem', display:'flex', alignItems:'center', gap:'1.5rem', marginBottom:'1.5rem', flexWrap:'wrap'}}>
        <div style={{width:'90px', height:'90px', borderRadius:'50%', background:'var(--surface2)', flexShrink:0}} className="shimmer-block"/>
        <div style={{flex:1}}>
          <div style={{width:'200px', height:'20px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.6rem'}} className="shimmer-block"/>
          <div style={{width:'150px', height:'14px', background:'var(--surface2)', borderRadius:'100px'}} className="shimmer-block"/>
        </div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(160px,100%), 1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{background:'var(--card-bg)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem', textAlign:'center'}}>
            <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'var(--surface2)', margin:'0 auto 0.6rem'}} className="shimmer-block"/>
            <div style={{width:'60%', height:'20px', background:'var(--surface2)', borderRadius:'100px', margin:'0 auto 0.3rem'}} className="shimmer-block"/>
            <div style={{width:'40%', height:'12px', background:'var(--surface2)', borderRadius:'100px', margin:'0 auto'}} className="shimmer-block"/>
          </div>
        ))}
      </div>
    </div>
  );
}