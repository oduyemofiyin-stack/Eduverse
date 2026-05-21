import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import { initScrollReveal, initCardTilt, initParallax, initMagneticButtons } from '../lib/animations';
import courses from '../data/courses';

export default function Home() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress, theme } = useApp();
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const canvasRef = useRef(null);
  const isLight = theme === 'light';

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Init animations after loading
  useEffect(() => {
    if (!loading) {
      const revealCleanup = initScrollReveal();
      initCardTilt();
      const parallaxCleanup = initParallax();
      initMagneticButtons();
      return () => {
        if (typeof parallaxCleanup === 'function') parallaxCleanup();
      };
    }
  }, [loading]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.1,
        color: ['#f0c040','#4488ff','#00d4aa','#ff6b9d'][Math.floor(Math.random()*4)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2,'0');
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const filtered = courses.filter(c => {
    const catMatch = activeCat === 'All' || c.category === activeCat;
    const q = search.toLowerCase();
    const searchMatch = !q ||
      c.title.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.keywords.some(k => k.toLowerCase().includes(q));
    return catMatch && searchMatch;
  });

  return (
    <div className="page-transition">

      {/* ── HERO ── */}
      <div style={{
        position:'relative', overflow:'hidden',
        padding:'5rem 1.2rem 4rem', textAlign:'center',
        minHeight:'520px', display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
      }}>
        {/* PARTICLE CANVAS */}
        <canvas ref={canvasRef} style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}/>

        {/* FLOATING ORBS */}
        <div style={{position:'absolute', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(68,136,255,0.15) 0%, transparent 70%)', top:'-50px', left:'-50px', animation:'float 8s ease-in-out infinite', pointerEvents:'none'}}/>
        <div style={{position:'absolute', width:'250px', height:'250px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)', bottom:'-30px', right:'-30px', animation:'float2 10s ease-in-out infinite', pointerEvents:'none'}}/>
        <div style={{position:'absolute', width:'180px', height:'180px', borderRadius:'50%', background:'radial-gradient(circle, rgba(240,192,64,0.1) 0%, transparent 70%)', top:'40%', right:'10%', animation:'float 12s ease-in-out infinite 2s', pointerEvents:'none'}}/>

        {/* CONTENT */}
        <div style={{position:'relative', zIndex:1, maxWidth:'860px', margin:'0 auto'}}>
          <div className="reveal" style={{
            display:'inline-flex', alignItems:'center', gap:'6px',
            fontSize:'0.73rem', fontWeight:'700', letterSpacing:'0.12em', textTransform:'uppercase',
            color:'#00d4aa', background:'rgba(0,212,170,0.08)',
            border:'1px solid rgba(0,212,170,0.25)', padding:'0.3rem 1rem',
            borderRadius:'100px', marginBottom:'1.5rem',
          }}>
            ✦ 100% Free · No Credit Card Required
          </div>

          <h1 className="reveal delay-1" style={{
            fontFamily:'Georgia, serif',
            fontSize:'clamp(2.2rem, 7vw, 5rem)',
            fontWeight:'700', lineHeight:'1.05',
            letterSpacing:'-0.03em', marginBottom:'1.2rem',
            color:'var(--text)',
          }}>
            Learn Without{' '}
            <span className="shimmer-text">Limits.</span>
          </h1>

          <p className="reveal delay-2" style={{
            fontSize:'clamp(0.95rem, 2.5vw, 1.15rem)',
            color:'var(--muted)', lineHeight:'1.8',
            maxWidth:'560px', margin:'0 auto 2.2rem',
          }}>
            World-class courses, real video lessons, reading materials, and free certificates — completely free, forever.
          </p>

          <div className="reveal delay-3" style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <button
              className="magnetic glow-border"
              onClick={() => document.getElementById('searchInput').focus()}
              style={{
                fontSize:'0.95rem', fontWeight:'700',
                padding:'0.85rem 2rem', borderRadius:'14px',
                border:'none', cursor:'pointer',
                background:'linear-gradient(135deg,#f0c040,#c8960a)',
                color:'#000', boxShadow:'0 8px 30px rgba(240,192,64,0.4)',
                transition:'all 0.3s',
              }}>
              Explore Courses ✦
            </button>
            <button
              className="magnetic"
              onClick={() => router.push('/enrolled')}
              style={{
                fontSize:'0.95rem', fontWeight:'600',
                padding:'0.85rem 2rem', borderRadius:'14px',
                border:'1px solid var(--border2)',
                cursor:'pointer', background:'transparent',
                color:'var(--text)', transition:'all 0.3s',
              }}>
              My Learning →
            </button>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(2, 1fr)',
        gap:'1rem', padding:'0 1.2rem 3rem',
        maxWidth:'600px', margin:'0 auto',
      }}>
        {[
          {n:'12', l:'Expert Courses', color:'#4488ff'},
          {n:'100%', l:'Free Forever', color:'#f0c040'},
          {n:'50K+', l:'Learners', color:'#00d4aa'},
          {n:'7', l:'Categories', color:'#ff6b9d'},
        ].map((s, i) => (
          <div key={s.l}
            className={`reveal-scale delay-${i+1}`}
            style={{
              textAlign:'center',
              background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'16px', padding:'1.2rem',
              transition:'transform 0.3s, box-shadow 0.3s',
              cursor:'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow=`0 12px 30px ${s.color}22`; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
          >
            <div style={{fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700', color:s.color}}>{s.n}</div>
            <div style={{fontSize:'0.76rem', color:'var(--muted)', marginTop:'4px'}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── SEARCH & FILTERS ── */}
      <div className="reveal" style={{maxWidth:'1240px', margin:'0 auto', padding:'0 1.2rem 1.2rem'}}>
        <div style={{position:'relative', marginBottom:'0.9rem'}}>
          <span style={{position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'var(--muted)', fontSize:'1.1rem'}}>⌕</span>
          <input
            id="searchInput"
            type="text"
            placeholder="Search courses…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:'100%', background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'14px', padding:'0.9rem 1rem 0.9rem 2.8rem',
              fontSize:'0.95rem', color:'var(--text)', outline:'none',
              transition:'border 0.2s, box-shadow 0.2s',
              boxShadow:'0 2px 8px rgba(0,0,0,0.05)',
            }}
            onFocus={e => { e.target.style.borderColor='rgba(68,136,255,0.5)'; e.target.style.boxShadow='0 0 0 3px rgba(68,136,255,0.1)'; }}
            onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='0 2px 8px rgba(0,0,0,0.05)'; }}
          />
        </div>

        <div style={{display:'flex', gap:'0.45rem', overflowX:'auto', paddingBottom:'0.3rem', scrollbarWidth:'none'}}>
          <span style={{fontSize:'0.76rem', color:'var(--muted)', marginRight:'0.2rem', whiteSpace:'nowrap', alignSelf:'center'}}>Filter:</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.76rem', fontWeight:'600',
              padding:'0.38rem 0.9rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat ? 'linear-gradient(135deg,#4488ff,#3366dd)' : 'transparent',
              color: activeCat === cat ? '#fff' : 'var(--muted)',
              cursor:'pointer', whiteSpace:'nowrap', flexShrink:0,
              transition:'all 0.2s',
              boxShadow: activeCat === cat ? '0 4px 12px rgba(68,136,255,0.3)' : 'none',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS INFO */}
      <div style={{fontSize:'0.8rem', color:'var(--muted)', padding:'0 1.2rem', maxWidth:'1240px', margin:'0 auto 0.6rem'}}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses available`}
      </div>

      {/* ── COURSE GRID ── */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(295px, 100%), 1fr))',
        gap:'1.2rem', padding:'0 1.2rem 5rem',
        maxWidth:'1240px', margin:'0 auto',
      }}>
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem', color:'var(--muted)'}}>
            <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🔍</div>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', color:'var(--text)', marginBottom:'0.4rem'}}>No courses found</h3>
            <p>Try a different keyword or category</p>
          </div>
        ) : filtered.map((c, i) => (
          <div key={c.id}
            className="tilt-card reveal glow-border"
            style={{animationDelay:`${Math.min(i * 0.05, 0.35)}s`}}
            onClick={() => router.push(`/courses/${c.id}`)}
          >
            <div style={{
              background:'var(--card-bg)',
              border:'1px solid var(--border)',
              borderRadius:'16px', overflow:'hidden', cursor:'pointer',
              transition:'border-color 0.3s',
              boxShadow: isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
            }}>
              {/* THUMBNAIL */}
              <div style={{width:'100%', height:'175px', position:'relative', overflow:'hidden', background:'var(--surface2)'}}>
                <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s ease'}}
                  onMouseEnter={e => e.target.style.transform='scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                />
                <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,15,0.7) 0%, transparent 60%)'}}/>
                {enrolled.includes(c.id) ? (
                  <span style={{position:'absolute', top:'9px', left:'9px', fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', padding:'0.22rem 0.65rem', borderRadius:'100px', background:'rgba(68,136,255,0.25)', color:'#4488ff', border:'1px solid rgba(68,136,255,0.4)', backdropFilter:'blur(8px)'}}>✓ Enrolled</span>
                ) : (
                  <span style={{position:'absolute', top:'9px', left:'9px', fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', padding:'0.22rem 0.65rem', borderRadius:'100px', background:'rgba(0,212,170,0.2)', color:'#00d4aa', border:'1px solid rgba(0,212,170,0.35)', backdropFilter:'blur(8px)'}}>Free</span>
                )}
                <div
                  onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                  style={{
                    position:'absolute', top:'9px', right:'9px',
                    width:'32px', height:'32px', borderRadius:'50%',
                    background:'rgba(6,8,15,0.6)', backdropFilter:'blur(10px)',
                    border:'1px solid rgba(255,255,255,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1rem', cursor:'pointer', zIndex:2,
                    color: wishlist.includes(c.id) ? '#ff6b9d' : '#eef0f8',
                    transition:'all 0.2s', transform:'scale(1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform='scale(1.2)'; e.currentTarget.style.background='rgba(255,107,157,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.background='rgba(6,8,15,0.6)'; }}
                >
                  {wishlist.includes(c.id) ? '♥' : '♡'}
                </div>
              </div>

              {/* CARD BODY */}
              <div style={{padding:'1rem'}}>
                <div style={{fontSize:'0.7rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.4rem'}}>{c.category}</div>
                <div style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', lineHeight:'1.35', marginBottom:'0.4rem', color:'var(--text)', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.title}</div>
                <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.7rem'}}>by {c.instructor}</div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid var(--border)', paddingTop:'0.65rem', flexWrap:'wrap', gap:'0.3rem'}}>
                  <span style={{display:'flex', alignItems:'center', gap:'0.25rem', fontSize:'0.78rem', color:'var(--text)'}}>
                    <span style={{color:'#fbbf24'}}>★★★★★</span> {c.rating}
                  </span>
                  <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>⏱ {c.duration}</span>
                  <span style={{fontFamily:'Georgia, serif', fontSize:'0.92rem', fontWeight:'700', color:'#00d4aa'}}>Free</span>
                </div>
                {enrolled.includes(c.id) && (
                  <div style={{marginTop:'0.7rem'}}>
                    <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.72rem', color:'var(--muted)', marginBottom:'0.3rem'}}>
                      <span>Progress</span>
                      <span>{getCourseProgress(c.id, c.lessons.length)}%</span>
                    </div>
                    <div style={{width:'100%', height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{
                        height:'100%', borderRadius:'100px',
                        background:'linear-gradient(135deg,#4488ff,#00d4aa)',
                        width:`${getCourseProgress(c.id, c.lessons.length)}%`,
                        transition:'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow:'0 0 8px rgba(68,136,255,0.5)',
                      }}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}