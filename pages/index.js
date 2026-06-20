import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import { initScrollReveal } from '../lib/animations';

import courses from '../data/courses';

const HeroScene = dynamic(() => import('../components/HeroScene'), { ssr: false });

function AnimatedNumber({ value, color }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef(null);
  const revealed = useRef(false);
  const suffix = value.replace(/[\d]/g, '');
  const target = parseInt(value) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !revealed.current) {
        revealed.current = true;
        let start = 0;
        const duration = 1500;
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { start = target; clearInterval(timer); }
          setDisplayed(start);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, target]);

  return (
    <span ref={ref} style={{ color }}>
      {displayed}{suffix}
    </span>
  );
}

export default function Home() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress, theme } = useApp();
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const router = useRouter();
  const heroRef = useRef(null);
  const isLight = theme === 'light';
  const [typewriter, setTypewriter] = useState('');
  const typewriterRef = useRef(null);

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      initScrollReveal();
    }
  }, [loading]);

  useEffect(() => {
    const phrases = ['your pace.', 'zero cost.', 'anywhere.', 'your potential.'];
    let pi = 0, ci = 0;
    typewriterRef.current = setInterval(() => {
      const phrase = phrases[pi];
      if (ci <= phrase.length) {
        setTypewriter(phrase.slice(0, ci));
        ci++;
      } else {
        clearInterval(typewriterRef.current);
        setTimeout(() => {
          ci = 0;
          pi = (pi + 1) % phrases.length;
          typewriterRef.current = setInterval(() => {
            const p = phrases[pi];
            if (ci <= p.length) {
              setTypewriter(p.slice(0, ci));
              ci++;
            } else {
              clearInterval(typewriterRef.current);
            }
          }, 60);
        }, 2000);
      }
    }, 60);
    return () => clearInterval(typewriterRef.current);
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

      {/* HERO — Full-screen */}
      <div ref={heroRef} style={{
        position: 'relative', overflow: 'hidden',
        textAlign: 'center',
        height: '100vh', minHeight: '600px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <HeroScene />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '2rem 1.2rem' }}>

          <div className="reveal delay-1 eyebrow" style={{ marginBottom: '0.6rem' }}>
            Eduverse Academy
          </div>

          <h1 className="reveal delay-2 heading-serif" style={{
            fontSize: 'clamp(2.8rem, 9vw, 6rem)',
            fontWeight: '700', lineHeight: '1.02',
            letterSpacing: '-0.03em', marginBottom: '0.8rem',
            color: 'var(--text)',
          }}>
            Learn Without{' '}
            <span className="opal-text">Limits.</span>
          </h1>

          <p className="reveal delay-3" style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: 'var(--muted)', lineHeight: '1.85',
            maxWidth: '580px', margin: '0.5rem auto 2.2rem',
            fontWeight: '400',
          }}>
            World-class courses with real video lessons, reading materials, quizzes, and free certificates — completely free forever.
          </p>

          <div className="reveal delay-4" style={{
            display: 'flex', gap: '1rem',
            justifyContent: 'center', flexWrap: 'wrap',
          }}>
            <button
              onClick={() => {
                document.getElementById('searchInput')?.focus();
                heroRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontSize: '0.95rem', fontWeight: '700',
                padding: '0.9rem 2.4rem', borderRadius: '14px',
                border: 'none', cursor: 'pointer',
                background: 'var(--accent)',
                color: '#fff',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow-accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Explore Courses
            </button>
            <button
              onClick={() => router.push('/enrolled')}
              className="glass"
              style={{
                fontSize: '0.95rem', fontWeight: '600',
                padding: '0.9rem 2.2rem', borderRadius: '14px',
                border: '1px solid var(--border)', cursor: 'pointer',
                color: 'var(--text)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb), 0.3)'; e.currentTarget.style.background = 'rgba(17,17,21,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = ''; }}
            >
              My Learning
            </button>
          </div>
        </div>
      </div>

      {/* STATS — Asymmetrical layout */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '1rem',
        padding: '0 1.2rem 3rem',
        maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap',
      }}>
        {[
          { n: '20', l: 'Expert Courses', accent: true },
          { n: '100%', l: 'Free Forever' },
          { n: '9', l: 'Categories' },
        ].map((s, i) => (
          <div key={s.l}
            className={`reveal-scale delay-${i + 1} glass-card`}
            style={{
              textAlign: 'center',
              borderRadius: 'var(--radius-lg)',
              padding: '1.4rem 1.8rem',
              flex: i === 0 ? '1 1 200px' : '1 1 140px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div className="heading-serif" style={{
              fontSize: '2.4rem',
              fontWeight: '700',
              color: s.accent ? 'var(--accent)' : 'var(--text)',
              lineHeight: '1',
              marginBottom: '0.3rem',
            }}>
              <AnimatedNumber value={s.n} color={s.accent ? 'var(--accent)' : 'var(--text)'} />
            </div>
            <div className="eyebrow" style={{ color: 'var(--muted)', marginBottom: 0 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* RESUME LEARNING */}
      {(() => {
        const inProgress = enrolled.filter(id => {
          const p = getCourseProgress(id, courses.find(c => c.id === id)?.lessons.length || 1);
          return p > 0 && p < 100;
        });
        if (inProgress.length === 0) return null;
        const resumeId = inProgress[0];
        const course = courses.find(c => c.id === resumeId);
        if (!course) return null;
        const prog = getCourseProgress(resumeId, course.lessons.length);
        return (
          <div className="reveal" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.2rem 1.5rem' }}>
            <div className="glass-card" style={{
              borderRadius: 'var(--radius-lg)', padding: '1.2rem 1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '200px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0,
                  background: 'var(--surface2)',
                }}>
                  <img src={course.img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '0.15rem' }}>Continue Learning</div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.3' }}>{course.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem' }}>
                    <div className="progress-track" style={{ flex: 1, maxWidth: '200px' }}>
                      <div className="progress-fill" style={{ width: `${prog}%` }} />
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: '600' }}>{prog}%</span>
                  </div>
                </div>
              </div>
              <button onClick={() => router.push(`/courses/${resumeId}`)}
                style={{
                  fontSize: '0.85rem', fontWeight: '700', padding: '0.6rem 1.4rem',
                  borderRadius: '10px', border: 'none', cursor: 'pointer',
                  background: 'var(--accent)', color: '#fff',
                  whiteSpace: 'nowrap', transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >Continue</button>
            </div>
          </div>
        );
      })()}

      {/* SEARCH */}
      <div className="reveal" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.2rem 1.2rem' }}>
        <div style={{ position: 'relative', marginBottom: '0.9rem' }}>
          <svg style={{
            position: 'absolute', left: '1.2rem', top: '50%',
            transform: 'translateY(-50%)', color: 'var(--muted)',
            pointerEvents: 'none',
          }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="searchInput"
            type="text"
            placeholder="Search courses by title, instructor, or keyword..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px', padding: '0.95rem 1rem 0.95rem 3.2rem',
              fontSize: '0.95rem', color: 'var(--text)', outline: 'none',
              transition: 'border 0.2s ease, box-shadow 0.2s ease',
            }}
            onFocus={e => {
              e.target.style.borderColor = 'rgba(var(--accent-rgb), 0.4)';
              e.target.style.boxShadow = '0 0 0 3px rgba(var(--accent-rgb), 0.08)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* FILTERS */}
        <div style={{
          display: 'flex', gap: '0.5rem',
          overflowX: 'auto', paddingBottom: '0.3rem',
          scrollbarWidth: 'none',
        }}>
          <span className="eyebrow" style={{
            marginRight: '0.2rem', whiteSpace: 'nowrap',
            alignSelf: 'center', marginBottom: 0,
          }}>Filter</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize: '0.76rem', fontWeight: '600',
              padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat ? 'var(--accent)' : 'transparent',
              color: activeCat === cat ? '#fff' : 'var(--muted)',
              cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'all 0.25s ease',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS INFO */}
      <div style={{
        fontSize: '0.8rem', color: 'var(--muted)',
        padding: '0 1.2rem', maxWidth: '1240px',
        margin: '0 auto 0.8rem',
        letterSpacing: '0.03em',
      }}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses available`}
      </div>

      {/* COURSE GRID — desktop */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: '1.3rem', padding: '0 1.2rem 2rem',
        maxWidth: '1240px', margin: '0 auto',
      }} className="course-grid-desktop">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <CourseSkeleton key={i} />)
        ) : filtered.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 2rem', color: 'var(--muted)' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '0.4rem' }}>No courses found</h3>
            <p style={{ marginBottom: '1.2rem' }}>Try a different keyword or category</p>
            <button onClick={() => { setSearch(''); setActiveCat('All'); }} style={{
              fontSize: '0.85rem', fontWeight: '600', padding: '0.6rem 1.4rem',
              borderRadius: '10px', border: 'none', cursor: 'pointer',
              background: 'var(--accent)', color: '#fff',
            }}>Reset Filters</button>
          </div>
        ) : filtered.map((c, i) => {
          const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
          return (
            <div
              key={c.id}
              className="reveal list-item"
              style={{
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                cursor: 'pointer', position: 'relative',
              }}
              onClick={() => router.push(`/courses/${c.id}`)}
            >
              <div className="glass-card" style={{
                overflow: 'hidden', height: '100%',
              }}>
                {/* THUMBNAIL */}
                <div style={{
                  width: '100%', height: '180px',
                  position: 'relative', overflow: 'hidden',
                  background: 'var(--surface2)',
                }}>
                  <img
                    src={c.img} alt={c.title} loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      display: 'block', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.12)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,12,0.8) 0%, transparent 50%)',
                  }} />
                  {/* BADGE */}
                  {enrolled.includes(c.id) ? (
                    <span className="badge" style={{
                      position: 'absolute', top: '10px', left: '10px',
                    }}>Enrolled</span>
                  ) : (
                    <span className="badge" style={{
                      position: 'absolute', top: '10px', left: '10px',
                      borderColor: 'rgba(94,234,212,0.25)',
                      background: 'rgba(94,234,212,0.08)',
                      color: 'var(--opal-teal)',
                    }}>Free</span>
                  )}
                  {/* WISHLIST HEART */}
                  <div
                    onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                    style={{
                      position: 'absolute', top: '10px', right: '10px',
                      width: '34px', height: '34px', borderRadius: '50%',
                      background: 'rgba(10,10,12,0.55)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', cursor: 'pointer', zIndex: 3,
                      color: wishlist.includes(c.id) ? 'var(--pink)' : 'rgba(255,255,255,0.7)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.background = 'rgba(10,10,12,0.7)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(10,10,12,0.55)'; }}
                  >
                    {wishlist.includes(c.id) ? '♥' : '♡'}
                  </div>
                </div>

                {/* BODY */}
                <div style={{ padding: '1.1rem 1.2rem 1.2rem' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap',
                    marginBottom: '0.35rem',
                  }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.68rem' }}>{c.category}</span>
                    {c.level && (
                      <span style={{
                        fontSize: '0.6rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em',
                        padding: '0.12rem 0.45rem', borderRadius: 'var(--radius-full)',
                        background: c.level === 'beginner' ? 'rgba(94,234,212,0.12)' : c.level === 'intermediate' ? 'rgba(244,197,66,0.12)' : 'rgba(244,114,182,0.12)',
                        color: c.level === 'beginner' ? 'var(--opal-teal)' : c.level === 'intermediate' ? 'var(--gold)' : 'var(--pink)',
                        border: c.level === 'beginner' ? '1px solid rgba(94,234,212,0.2)' : c.level === 'intermediate' ? '1px solid rgba(244,197,66,0.2)' : '1px solid rgba(244,114,182,0.2)',
                      }}>{c.level}</span>
                    )}
                  </div>
                  <div className="heading-serif" style={{
                    fontSize: '1rem', fontWeight: '700',
                    lineHeight: '1.35', marginBottom: '0.4rem',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>{c.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.7rem' }}>by {c.instructor}</div>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderTop: '1px solid var(--border)', paddingTop: '0.7rem',
                    flexWrap: 'wrap', gap: '0.3rem',
                  }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gold)' }}><span style={{ color: 'var(--muted)' }}>{c.rating}</span></span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--muted)' }}>{c.duration}</span>
                    <span className="heading-serif" style={{ fontWeight: '700', color: 'var(--opal-teal)', fontSize: '0.92rem' }}>Free</span>
                  </div>
                  {prog > 0 && (
                    <div style={{ marginTop: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="progress-track" style={{ flex: 1 }}>
                        <div className="progress-fill" style={{ width: `${prog}%` }} />
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: '600' }}>{prog}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* COURSE CAROUSEL — mobile */}
      <div style={{ padding: '0 0 3rem' }} className="carousel-section-mobile">
        <div style={{ padding: '0 1.2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="heading-serif" style={{ fontSize: '1.1rem', fontWeight: '700' }}>
            {search || activeCat !== 'All' ? 'Search Results' : 'Browse Courses'}
          </h2>
          {!showAllMobile ? (
            <button onClick={() => setShowAllMobile(true)}
              style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}>
              See All
            </button>
          ) : (
            <button onClick={() => setShowAllMobile(false)}
              style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}>
              Show Less
            </button>
          )}
        </div>
        {!showAllMobile ? (
          <div className="carousel">
            {filtered.length === 0 ? (
              <div style={{ padding: '2rem 1.2rem', color: 'var(--muted)', fontSize: '0.88rem', width: '100%', textAlign: 'center' }}>No courses found</div>
            ) : filtered.map((c, i) => {
              const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
              return (
                <div key={c.id} onClick={() => router.push(`/courses/${c.id}`)}
                  className="list-item glass-card"
                  style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <div style={{ width: '100%', height: '150px', overflow: 'hidden', position: 'relative', background: 'var(--surface2)' }}>
                    <img src={c.img} alt={c.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="badge" style={{
                      position: 'absolute', top: '8px', left: '8px',
                      borderColor: 'rgba(94,234,212,0.25)',
                      background: 'rgba(94,234,212,0.08)',
                      color: 'var(--opal-teal)',
                    }}>Free</span>
                  </div>
                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.62rem' }}>{c.category}</span>
                      {c.level && (
                        <span style={{
                          fontSize: '0.55rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em',
                          padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)',
                          background: c.level === 'beginner' ? 'rgba(94,234,212,0.12)' : c.level === 'intermediate' ? 'rgba(244,197,66,0.12)' : 'rgba(244,114,182,0.12)',
                          color: c.level === 'beginner' ? 'var(--opal-teal)' : c.level === 'intermediate' ? 'var(--gold)' : 'var(--pink)',
                          border: c.level === 'beginner' ? '1px solid rgba(94,234,212,0.2)' : c.level === 'intermediate' ? '1px solid rgba(244,197,66,0.2)' : '1px solid rgba(244,114,182,0.2)',
                        }}>{c.level}</span>
                      )}
                    </div>
                    <div className="heading-serif" style={{ fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.3', marginBottom: '0.2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.duration}</div>
                    {prog > 0 && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: `${prog}%` }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ padding: '0 1.2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))', gap: '1rem' }}>
            {filtered.map((c, i) => {
              const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
              return (
                <div key={c.id} onClick={() => router.push(`/courses/${c.id}`)}
                  className="list-item glass-card"
                  style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <div style={{ width: '100%', height: '150px', overflow: 'hidden', position: 'relative', background: 'var(--surface2)' }}>
                    <img src={c.img} alt={c.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="badge" style={{
                      position: 'absolute', top: '8px', left: '8px',
                      borderColor: 'rgba(94,234,212,0.25)',
                      background: 'rgba(94,234,212,0.08)',
                      color: 'var(--opal-teal)',
                    }}>Free</span>
                  </div>
                  <div style={{ padding: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.62rem' }}>{c.category}</span>
                      {c.level && (
                        <span style={{
                          fontSize: '0.55rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em',
                          padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)',
                          background: c.level === 'beginner' ? 'rgba(94,234,212,0.12)' : c.level === 'intermediate' ? 'rgba(244,197,66,0.12)' : 'rgba(244,114,182,0.12)',
                          color: c.level === 'beginner' ? 'var(--opal-teal)' : c.level === 'intermediate' ? 'var(--gold)' : 'var(--pink)',
                          border: c.level === 'beginner' ? '1px solid rgba(94,234,212,0.2)' : c.level === 'intermediate' ? '1px solid rgba(244,197,66,0.2)' : '1px solid rgba(244,114,182,0.2)',
                        }}>{c.level}</span>
                      )}
                    </div>
                    <div className="heading-serif" style={{ fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.3', marginBottom: '0.2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.duration}</div>
                    {prog > 0 && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: `${prog}%` }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
