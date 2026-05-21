import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import { initScrollReveal, initCardTilt, initParallax, initMagneticButtons, initCustomCursor, initFlowingLines } from '../lib/animations';
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
      initScrollReveal();
      initCardTilt();
      const parallaxCleanup = initParallax();
      initMagneticButtons();
      initCustomCursor();
      return () => {
        if (typeof parallaxCleanup === 'function') parallaxCleanup();
      };
    }
  }, [loading]);

  // Flowing lines canvas — the air effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cleanup = initFlowingLines(canvas);
    return cleanup;
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

      {/* HERO */}
      <div style={{
        position:'relative', overflow:'hidden',
        padding:'5rem 1.2rem 4rem', textAlign:'center',
        minHeight:'520px', display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
      }}>
        {/* FLOWING LINES CANVAS */}
        <canvas
          ref={canvasRef}
          id="flow-canvas"
          style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}
        />

        {/* FLOATING ORBS — depth layers */}
        <div className="hero-layer-1" style={{
          position:'absolute', width:'400px', height:'400px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(68,136,255,0.12) 0%, transparent 70%)',
          top:'-80px', left:'-80px', pointerEvents:'none',
        }}/>
        <div className="hero-layer-2" style={{
          position:'absolute', width:'300px', height:'300px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
          bottom:'-40px', right:'-40px', pointerEvents:'none',
        }}/>
        <div className="hero-layer-3" style={{
          position:'absolute', width:'200px', height:'200px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(240,192,64,0.08) 0%, transparent 70%)',
          top:'40%', right:'15%', pointerEvents:'none',
        }}/>
        <div className="breathe" style={{
          position:'absolute', width:'500px', height:'500px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(68,136,255,0.06) 0%, transparent 60%)',
          top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          pointerEvents:'none',
        }}/>

        {/* 3D FLOATING OBJECT */}
        <div style={{
          position:'absolute', top:'12%', right:'8%',
          width:'80px', height:'80px',
          pointerEvents:'none', opacity:0.6,
        }} className="orbit-3d">
          <svg viewBox="0 0 80 80" fill="none">
            <polygon points="40,5 75,65 5,65" stroke="#4488ff" strokeWidth="1.5" fill="rgba(68,136,255,0.08)"/>
            <polygon points="40,20 65,60 15,60" stroke="#00d4aa" strokeWidth="1" fill="rgba(0,212,170,0.05)"/>
          </svg>
        </div>
        <div style={{
          position:'absolute', bottom:'15%', left:'8%',
          width:'60px', height:'60px',
          pointerEvents:'none', opacity:0.5,
        }} className="hero-layer-2">
          <svg viewBox="0 0 60 60" fill="none">
            <rect x="10" y="10" width="40" height="40" rx="8" stroke="#f0c040" strokeWidth="1.5" fill="rgba(240,192,64,0.06)" transform="rotate(20 30 30)"/>
          </svg>
        </div>

        {/* HERO CONTENT */}
        <div style={{position:'relative', zIndex:1, maxWidth:'860px', margin:'0 auto'}} data-parallax-text>

          <h1 className="reveal delay-1" style={{
            fontFamily:'Georgia, serif',
            fontSize:'clamp(2.4rem, 7.5vw, 5.5rem)',
            fontWeight:'700', lineHeight:'1.02',
            letterSpacing:'-0.03em', marginBottom:'1.2rem',
            color:'var(--text)',
          }}>
            Learn Without{' '}
            <span className="shimmer-text">Limits.</span>
          </h1>

          <p className="reveal delay-2" style={{
            fontSize:'clamp(0.95rem, 2.5vw, 1.18rem)',
            color:'var(--muted)', lineHeight:'1.85',
            maxWidth:'560px', margin:'0 auto 2.5rem',
            fontWeight:'400',
          }}>
            World-class courses, real video lessons, reading materials,
            and free certificates — completely free, forever.
          </p>

          <div className="reveal delay-3" style={{
            display:'flex', gap:'1rem',
            justifyContent:'center', flexWrap:'wrap',
          }}>
            <button
              className="magnetic glow-border"
              onClick={() => document.getElementById('searchInput').focus()}
              style={{
                fontSize:'0.95rem', fontWeight:'700',
                padding:'0.9rem 2.2rem', borderRadius:'14px',
                border:'none', cursor:'none',
                background:'linear-gradient(135deg,#f0c040,#c8960a)',
                color:'#000',
                boxShadow:'0 8px 30px rgba(240,192,64,0.4), 0 0 0 0 rgba(240,192,64,0)',
                transition:'all 0.3s',
                letterSpacing:'0.02em',
              }}>
              Explore Courses
            </button>
            <button
              className="magnetic"
              onClick={() => router.push('/enrolled')}
              style={{
                fontSize:'0.95rem', fontWeight:'600',
                padding:'0.9rem 2.2rem', borderRadius:'14px',
                border:'1px solid var(--border2)',
                cursor:'none', background:'var(--surface)',
                color:'var(--text)', transition:'all 0.3s',
                backdropFilter:'blur(10px)',
              }}>
              My Learning
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
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
            className={`reveal-scale delay-${i+1} glass`}
            style={{
              textAlign:'center',
              borderRadius:'16px', padding:'1.3rem',
              transition:'transform 0.3s, box-shadow 0.3s',
              cursor:'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform='translateY(-6px)';
              e.currentTarget.style.boxShadow=`0 16px 40px ${s.color}33`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform='translateY(0)';
              e.currentTarget.style.boxShadow='none';
            }}
          >
            <div style={{
              fontFamily:'Georgia, serif', fontSize:'2.2rem',
              fontWeight:'700', color:s.color,
              textShadow:`0 0 20px ${s.color}66`,
            }}>{s.n}</div>
            <div style={{fontSize:'0.76rem', color:'var(--muted)', marginTop:'4px', letterSpacing:'0.05em', textTransform:'uppercase'}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* SEARCH & FILTERS */}
      <div className="reveal" style={{maxWidth:'1240px', margin:'0 auto', padding:'0 1.2rem 1.2rem'}}>
        <div style={{position:'relative', marginBottom:'0.9rem'}}>
          <span style={{
            position:'absolute', left:'1.1rem', top:'50%',
            transform:'translateY(-50%)', color:'var(--muted)', fontSize:'1.1rem',
          }}>&#9906;</span>
          <input
            id="searchInput"
            type="text"
            placeholder="Search courses by title, instructor, or keyword..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:'100%', background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'14px', padding:'0.95rem 1rem 0.95rem 3rem',
              fontSize:'0.95rem', color:'var(--text)', outline:'none',
              transition:'border 0.2s, box-shadow 0.2s',
              backdropFilter:'blur(10px)',
            }}
            onFocus={e => {
              e.target.style.borderColor='rgba(68,136,255,0.5)';
              e.target.style.boxShadow='0 0 0 3px rgba(68,136,255,0.1), 0 8px 30px rgba(0,0,0,0.1)';
            }}
            onBlur={e => {
              e.target.style.borderColor='var(--border)';
              e.target.style.boxShadow='none';
            }}
          />
        </div>

        {/* FILTERS */}
        <div style={{
          display:'flex', gap:'0.5rem',
          overflowX:'auto', paddingBottom:'0.3rem',
          scrollbarWidth:'none',
        }}>
          <span style={{
            fontSize:'0.76rem', color:'var(--muted)',
            marginRight:'0.2rem', whiteSpace:'nowrap',
            alignSelf:'center', letterSpacing:'0.05em',
            textTransform:'uppercase',
          }}>Filter:</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.76rem', fontWeight:'600',
              padding:'0.4rem 1rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat
                ? 'linear-gradient(135deg,#4488ff,#3366dd)'
                : 'var(--surface)',
              color: activeCat === cat ? '#fff' : 'var(--muted)',
              cursor:'none', whiteSpace:'nowrap', flexShrink:0,
              transition:'all 0.25s',
              boxShadow: activeCat === cat ? '0 4px 16px rgba(68,136,255,0.35)' : 'none',
              backdropFilter:'blur(8px)',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS INFO */}
      <div style={{
        fontSize:'0.8rem', color:'var(--muted)',
        padding:'0 1.2rem', maxWidth:'1240px',
        margin:'0 auto 0.8rem',
        letterSpacing:'0.03em',
      }}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses available`}
      </div>

      {/* COURSE GRID */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap:'1.3rem', padding:'0 1.2rem 5rem',
        maxWidth:'1240px', margin:'0 auto',
      }}>
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem', color:'var(--muted)'}}>
            <div style={{fontSize:'3rem', marginBottom:'1rem', filter:'grayscale(0.3)'}}>&#128269;</div>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', color:'var(--text)', marginBottom:'0.4rem'}}>No courses found</h3>
            <p>Try a different keyword or category</p>
          </div>
        ) : filtered.map((c, i) => (
          <div
            key={c.id}
            className="tilt-card reveal"
            style={{
              animationDelay:`${Math.min(i * 0.06, 0.4)}s`,
              borderRadius:'18px', overflow:'hidden',
              cursor:'none', position:'relative',
            }}
            onClick={() => router.push(`/courses/${c.id}`)}
          >
            {/* TILT LIGHT REFLECTION */}
            <div data-tilt-inner style={{
              position:'absolute', inset:0, borderRadius:'18px',
              pointerEvents:'none', zIndex:2, transition:'background 0.1s',
            }}/>

            <div style={{
              background:'var(--card-bg)',
              border:'1px solid var(--border)',
              borderRadius:'18px', overflow:'hidden',
              transition:'border-color 0.3s',
              boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.2)',
              height:'100%',
            }}>
              {/* THUMBNAIL */}
              <div style={{
                width:'100%', height:'180px',
                position:'relative', overflow:'hidden',
                background:'var(--surface2)',
              }}>
                <img
                  src={c.img} alt={c.title}
                  style={{
                    width:'100%', height:'100%', objectFit:'cover',
                    display:'block', transition:'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => e.target.style.transform='scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                />
                {/* GRADIENT OVERLAY */}
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(to top, rgba(6,8,15,0.75) 0%, rgba(6,8,15,0.1) 50%, transparent 100%)',
                }}/>
                {/* BADGE */}
                {enrolled.includes(c.id) ? (
                  <span style={{
                    position:'absolute', top:'10px', left:'10px',
                    fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em',
                    textTransform:'uppercase', padding:'0.25rem 0.7rem',
                    borderRadius:'100px', background:'rgba(68,136,255,0.25)',
                    color:'#4488ff', border:'1px solid rgba(68,136,255,0.4)',
                    backdropFilter:'blur(10px)',
                  }}>Enrolled</span>
                ) : (
                  <span style={{
                    position:'absolute', top:'10px', left:'10px',
                    fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em',
                    textTransform:'uppercase', padding:'0.25rem 0.7rem',
                    borderRadius:'100px', background:'rgba(0,212,170,0.2)',
                    color:'#00d4aa', border:'1px solid rgba(0,212,170,0.35)',
                    backdropFilter:'blur(10px)',
                  }}>Free</span>
                )}
                {/* WISHLIST */}
                <div
                  onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                  style={{
                    position:'absolute', top:'10px', right:'10px',
                    width:'34px', height:'34px', borderRadius:'50%',
                    background:'rgba(6,8,15,0.55)', backdropFilter:'blur(12px)',
                    border:'1px solid rgba(255,255,255,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1rem', cursor:'none', zIndex:3,
                    color: wishlist.includes(c.id) ? '#ff6b9d' : 'rgba(255,255,255,0.8)',
                    transition:'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform='scale(1.2)';
                    e.currentTarget.style.background='rgba(255,107,157,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform='scale(1)';
                    e.currentTarget.style.background='rgba(6,8,15,0.55)';
                  }}
                >
                  {wishlist.includes(c.id) ? '♥' : '♡'}
                </div>
              </div>

              {/* CARD BODY */}
              <div style={{padding:'1.1rem'}}>
                <div style={{
                  fontSize:'0.68rem', fontWeight:'700',
                  letterSpacing:'0.09em', textTransform:'uppercase',
                  color:'#4488ff', marginBottom:'0.45rem',
                }}>{c.category}</div>
                <div style={{
                  fontFamily:'Georgia, serif', fontSize:'1rem',
                  fontWeight:'700', lineHeight:'1.35', marginBottom:'0.4rem',
                  color:'var(--text)',
                  display:'-webkit-box', WebkitLineClamp:2,
                  WebkitBoxOrient:'vertical', overflow:'hidden',
                }}>{c.title}</div>
                <div style={{
                  fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.75rem',
                }}>by {c.instructor}</div>

                {/* META ROW */}
                <div style={{
                  display:'flex', alignItems:'center',
                  justifyContent:'space-between',
                  borderTop:'1px solid var(--border)', paddingTop:'0.7rem',
                  flexWrap:'wrap', gap:'0.3rem',
                }}>
                  <span style={{display:'flex', alignItems:'center', gap:'0.25rem', fontSize:'0.78rem', color:'var(--text)'}}>
                    <span style={{color:'#fbbf24', fontSize:'0.72rem'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {c.rating}
                  </span>
                  <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>&#9201; {c.duration}</span>
                  <span style={{
                    fontFamily:'Georgia, serif', fontSize:'0.9rem',
                    fontWeight:'700', color:'#00d4aa',
                    textShadow:'0 0 12px rgba(0,212,170,0.4)',
                  }}>Free</span>
                </div>

                {/* PROGRESS BAR */}
                {enrolled.includes(c.id) && (
                  <div style={{marginTop:'0.75rem'}}>
                    <div style={{
                      display:'flex', justifyContent:'space-between',
                      fontSize:'0.72rem', color:'var(--muted)', marginBottom:'0.35rem',
                    }}>
                      <span>Progress</span>
                      <span style={{color:'#4488ff', fontWeight:'600'}}>
                        {getCourseProgress(c.id, c.lessons.length)}%
                      </span>
                    </div>
                    <div style={{
                      width:'100%', height:'3px',
                      background:'var(--surface3)', borderRadius:'100px', overflow:'hidden',
                    }}>
                      <div style={{
                        height:'100%', borderRadius:'100px',
                        background:'linear-gradient(90deg,#4488ff,#00d4aa)',
                        width:`${getCourseProgress(c.id, c.lessons.length)}%`,
                        transition:'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow:'0 0 8px rgba(68,136,255,0.6)',
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