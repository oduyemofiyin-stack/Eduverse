import { useState } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import courses from '../../data/courses';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { currentUser, wishlist, toggleWishlist, enrolled, toggleEnroll } = useApp();
  const [activeTab, setActiveTab] = useState('videos');
  const [openLesson, setOpenLesson] = useState(null);
  const [quizState, setQuizState] = useState(null);
  const [showCert, setShowCert] = useState(false);

  const course = courses.find(c => c.id === parseInt(id));
  if (!course) return <div style={{padding:'2rem', color:'#7a80a0'}}>Loading...</div>;

  const isEnrolled = enrolled.includes(course.id);
  const isWishlisted = wishlist.includes(course.id);

  function startQuiz() {
    setQuizState({ idx: 0, score: 0, answered: false, answers: new Array(course.quiz.length).fill(null) });
  }
  function answerQ(chosen) {
    if (quizState.answered) return;
    const correct = chosen === course.quiz[quizState.idx].ans;
    setQuizState(prev => ({
      ...prev, answered: true,
      answers: prev.answers.map((a, i) => i === prev.idx ? chosen : a),
      score: correct ? prev.score + 1 : prev.score,
    }));
  }
  function nextQ() {
    setQuizState(prev => ({ ...prev, idx: prev.idx + 1, answered: prev.answers[prev.idx + 1] !== null }));
  }
  function prevQ() {
    setQuizState(prev => ({ ...prev, idx: prev.idx - 1, answered: prev.answers[prev.idx - 1] !== null }));
  }
  function retake() {
    setQuizState({ idx: 0, score: 0, answered: false, answers: new Array(course.quiz.length).fill(null) });
  }

  const pct = quizState ? Math.round((quizState.score / course.quiz.length) * 100) : 0;
  const finished = quizState && quizState.idx === course.quiz.length - 1 && quizState.answered;
  const passed = pct >= 60;

  return (
    <div style={{maxWidth:'1100px', margin:'0 auto', padding:'0 0 4rem'}}>

      {/* BACK */}
      <div onClick={() => router.push('/')} style={{
        display:'inline-flex', alignItems:'center', gap:'6px',
        fontSize:'0.83rem', color:'#7a80a0', cursor:'pointer',
        padding:'1.2rem 1.2rem 0',
      }}>
        ← Back to courses
      </div>

      {/* HERO IMAGE — mobile only */}
      <div style={{width:'100%', height:'200px', overflow:'hidden', marginTop:'1rem', position:'relative'}}
        className="mobile-hero-img">
        <img src={course.img} alt={course.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,15,0.8) 0%, transparent 60%)'}}/>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{padding:'1rem 1.2rem 0'}} className="detail-layout">

        {/* SIDEBAR — shown at top on mobile */}
        <div className="detail-sidebar">
          <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'16px', overflow:'hidden'}}>
            <img src={course.img} alt={course.title}
              style={{width:'100%', height:'160px', objectFit:'cover', display:'block'}}
              className="sidebar-img"
            />
            <div style={{padding:'1.2rem'}}>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.7rem', fontWeight:'700', color:'#00d4aa', marginBottom:'0.9rem'}}>Free</div>
              <button onClick={() => toggleEnroll(course.id)} style={{
                width:'100%', padding:'0.85rem', borderRadius:'12px',
                fontWeight:'700', fontSize:'0.9rem', border:'none', cursor:'pointer',
                marginBottom:'0.6rem',
                background: isEnrolled ? 'linear-gradient(135deg,#0f2d1a,#1a4d2a)' : 'linear-gradient(135deg,#4488ff,#3366dd)',
                color: isEnrolled ? '#00d4aa' : '#fff',
              }}>
                {isEnrolled ? '✓ Enrolled' : 'Enroll in Course'}
              </button>
              <button onClick={() => toggleWishlist(course.id)} style={{
                width:'100%', padding:'0.65rem', borderRadius:'12px',
                fontSize:'0.85rem', fontWeight:'500', cursor:'pointer',
                border:'1px solid rgba(255,255,255,0.13)', background:'transparent',
                color: isWishlisted ? '#ff6b9d' : '#eef0f8',
              }}>
                {isWishlisted ? '♥ In Wishlist' : '♡ Add to Wishlist'}
              </button>
              <div style={{marginTop:'1rem', display:'flex', flexDirection:'column', gap:'0.45rem'}}>
                {[
                  {i:'🎓', l:'Instructor', v:course.instructor},
                  {i:'📂', l:'Category', v:course.category},
                  {i:'⏱', l:'Duration', v:course.duration},
                  {i:'📹', l:'Lessons', v:`${course.lessons.length} videos`},
                  {i:'🌍', l:'Language', v:'English'},
                  {i:'🏆', l:'Certificate', v:'On completion'},
                ].map(item => (
                  <div key={item.l} style={{display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.79rem', color:'#7a80a0'}}>
                    {item.i} <span>{item.l}: <strong style={{color:'#eef0f8'}}>{item.v}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LEFT MAIN CONTENT */}
        <div className="detail-main">
          <div style={{fontSize:'0.73rem', fontWeight:'600', letterSpacing:'0.08em', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.6rem'}}>{course.category}</div>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.4rem,4vw,2.2rem)', fontWeight:'700', lineHeight:'1.15', marginBottom:'0.9rem'}}>{course.title}</h1>
          <div style={{display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap', marginBottom:'1.3rem'}}>
            <span style={{fontSize:'0.84rem', color:'#7a80a0'}}>⭐ <strong style={{color:'#eef0f8'}}>{course.rating}</strong></span>
            <span style={{fontSize:'0.84rem', color:'#7a80a0'}}>👤 <strong style={{color:'#eef0f8'}}>{course.instructor}</strong></span>
            <span style={{fontSize:'0.84rem', color:'#7a80a0'}}>⏱ <strong style={{color:'#eef0f8'}}>{course.duration}</strong></span>
            <span style={{fontSize:'0.84rem', color:'#00d4aa'}}>🆓 Free</span>
          </div>
          <p style={{fontSize:'0.95rem', lineHeight:'1.75', color:'#c0bce0', marginBottom:'1.5rem'}}>{course.description}</p>

          {/* TABS */}
          <div style={{display:'flex', borderBottom:'1px solid rgba(255,255,255,0.06)', marginBottom:'1.3rem', overflowX:'auto', scrollbarWidth:'none'}}>
            {['videos','reading','quiz'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                fontSize:'0.82rem', fontWeight:'600',
                padding:'0.6rem 1rem', border:'none', background:'transparent',
                color: activeTab === tab ? '#eef0f8' : '#7a80a0',
                borderBottom: activeTab === tab ? '2px solid #f0c040' : '2px solid transparent',
                cursor:'pointer', marginBottom:'-1px', whiteSpace:'nowrap',
              }}>
                {tab === 'videos' ? '📹 Videos' : tab === 'reading' ? '📄 Reading' : '📝 Quiz'}
              </button>
            ))}
          </div>

          {/* VIDEOS TAB */}
          {activeTab === 'videos' && (
            <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
              {course.lessons.map((l, i) => (
                <div key={i} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px', overflow:'hidden'}}>
                  <div onClick={() => setOpenLesson(openLesson === i ? null : i)}
                    style={{display:'flex', alignItems:'center', gap:'0.8rem', padding:'0.8rem 1rem', cursor:'pointer'}}>
                    <div style={{
                      width:'26px', height:'26px', borderRadius:'50%',
                      background:'#161b26', border:'1px solid rgba(255,255,255,0.13)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'0.7rem', fontWeight:'700', color:'#7a80a0', flexShrink:0,
                    }}>{i + 1}</div>
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{fontSize:'0.86rem', fontWeight:'600', marginBottom:'0.1rem', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{l.title}</div>
                      <div style={{fontSize:'0.72rem', color:'#7a80a0'}}>▶ {l.dur}</div>
                    </div>
                    <span style={{fontSize:'0.78rem', color:'#4488ff', transform: openLesson === i ? 'rotate(90deg)' : 'none', transition:'transform 0.25s', flexShrink:0}}>▶</span>
                  </div>
                  {openLesson === i && (
                    <div style={{padding:'0 0.8rem 0.8rem'}}>
                      <iframe
                        style={{width:'100%', aspectRatio:'16/9', borderRadius:'10px', border:'none', background:'#000'}}
                        src={`https://www.youtube.com/embed/${l.yt}?rel=0&modestbranding=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* READING TAB */}
          {activeTab === 'reading' && (
            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              {course.reading.map((r, i) => (
                <div key={i} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.2rem'}}>
                  <h4 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.6rem', color:'#f0c040'}}>{r.title}</h4>
                  <p style={{fontSize:'0.85rem', lineHeight:'1.75', color:'#b0acd0', marginBottom:'0.6rem'}}>{r.body}</p>
                  {r.points && (
                    <ul style={{paddingLeft:'1.2rem', display:'flex', flexDirection:'column', gap:'0.35rem'}}>
                      {r.points.map((p, j) => (
                        <li key={j} style={{fontSize:'0.83rem', color:'#b0acd0', lineHeight:'1.6'}}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.2rem'}}>
              {!isEnrolled ? (
                <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                  <span style={{fontSize:'3rem', display:'block', marginBottom:'0.8rem'}}>🔒</span>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', marginBottom:'0.5rem'}}>Enroll to Take the Quiz</h3>
                  <p style={{fontSize:'0.85rem', color:'#7a80a0', marginBottom:'1.2rem'}}>Enroll in this course to unlock the quiz and earn your certificate.</p>
                  <button onClick={() => toggleEnroll(course.id)} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                  }}>Enroll Now — It&apos;s Free</button>
                </div>
              ) : !quizState ? (
                <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                  <span style={{fontSize:'3rem', display:'block', marginBottom:'0.8rem'}}>📝</span>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', marginBottom:'0.5rem'}}>Ready for the Quiz?</h3>
                  <p style={{fontSize:'0.85rem', color:'#7a80a0', marginBottom:'1.2rem'}}>{course.quiz.length} questions · Pass with 60% to earn your certificate</p>
                  <button onClick={startQuiz} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff',
                  }}>Start Quiz</button>
                </div>
              ) : finished && passed ? (
                <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                  <span style={{fontSize:'3.5rem', display:'block', marginBottom:'0.8rem'}}>🏆</span>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>You passed! 🎉</h3>
                  <p style={{fontSize:'0.86rem', color:'#7a80a0', marginBottom:'1.2rem'}}>Your certificate is ready!</p>
                  <button onClick={() => setShowCert(true)} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                  }}>🎓 Get Your Certificate</button>
                </div>
              ) : finished && !passed ? (
                <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                  <span style={{fontSize:'3.5rem', display:'block', marginBottom:'0.8rem'}}>📚</span>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>Keep Learning!</h3>
                  <p style={{fontSize:'0.86rem', color:'#7a80a0', marginBottom:'1.2rem'}}>You need 60% to pass. Review and try again!</p>
                  <button onClick={retake} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                    borderRadius:'12px', border:'1px solid rgba(255,255,255,0.13)',
                    cursor:'pointer', background:'transparent', color:'#eef0f8',
                  }}>Retake Quiz</button>
                </div>
              ) : (
                <div>
                  <div style={{fontSize:'0.76rem', color:'#7a80a0', marginBottom:'1rem'}}>
                    Question {quizState.idx + 1} of {course.quiz.length} · Score: {quizState.score}/{quizState.idx + (quizState.answered ? 1 : 0)}
                  </div>
                  <p style={{fontSize:'0.9rem', fontWeight:'600', marginBottom:'0.85rem', lineHeight:'1.5'}}>
                    {quizState.idx + 1}. {course.quiz[quizState.idx].q}
                  </p>
                  <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', marginBottom:'1rem'}}>
                    {course.quiz[quizState.idx].opts.map((opt, i) => {
                      let bg = '#161b26', border = 'rgba(255,255,255,0.13)', color = '#eef0f8';
                      if (quizState.answered) {
                        if (i === course.quiz[quizState.idx].ans) { bg = 'rgba(0,212,170,0.1)'; border = '#00d4aa'; color = '#00d4aa'; }
                        else if (i === quizState.answers[quizState.idx]) { bg = 'rgba(255,107,157,0.1)'; border = '#ff6b9d'; color = '#ff6b9d'; }
                      }
                      return (
                        <button key={i} onClick={() => answerQ(i)} disabled={quizState.answered} style={{
                          fontSize:'0.84rem', fontWeight:'500', padding:'0.65rem 1rem',
                          borderRadius:'10px', border:`1px solid ${border}`,
                          background:bg, color, cursor: quizState.answered ? 'default' : 'pointer',
                          textAlign:'left',
                        }}>{opt}</button>
                      );
                    })}
                  </div>
                  <div style={{display:'flex', justifyContent:'flex-end', gap:'0.7rem'}}>
                    {quizState.idx > 0 && (
                      <button onClick={prevQ} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#1e2535', color:'#eef0f8'}}>← Back</button>
                    )}
                    {quizState.answered && !finished && (
                      <button onClick={nextQ} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#4488ff', color:'#fff'}}>Next →</button>
                    )}
                    {quizState.answered && finished && passed && (
                      <button onClick={() => setShowCert(true)} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>🎓 Certificate</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      {showCert && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', backdropFilter:'blur(12px)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', overflowY:'auto'}}>
          <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.13)', borderRadius:'20px', padding:'1.5rem', maxWidth:'680px', width:'100%', position:'relative'}}>
            <button onClick={() => setShowCert(false)} style={{position:'absolute', top:'1rem', right:'1rem', background:'#161b26', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'8px', padding:'0.28rem 0.6rem', fontSize:'0.78rem', cursor:'pointer', color:'#7a80a0'}}>✕ Close</button>
            <div style={{background:'linear-gradient(135deg,#0a0e1a,#0f1528,#0a1020)', border:'2px solid #f0c040', borderRadius:'14px', padding:'2rem', textAlign:'center'}}>
              <div style={{fontSize:'0.66rem', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', color:'#f0c040', marginBottom:'0.7rem'}}>Certificate of Completion</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.5rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'0.2rem'}}>Eduverse Academy</div>
              <div style={{fontSize:'0.68rem', color:'#7a80a0', marginBottom:'1.2rem'}}>Where Curiosity Meets Knowledge</div>
              <hr style={{border:'none', borderTop:'1px solid rgba(240,192,64,0.25)', marginBottom:'1.2rem'}}/>
              <div style={{fontSize:'0.74rem', color:'#7a80a0', marginBottom:'0.3rem'}}>This is to certify that</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.2rem,4vw,1.6rem)', fontStyle:'italic', color:'#eef0f8', marginBottom:'0.7rem'}}>
                {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Dedicated Learner'}
              </div>
              <div style={{fontSize:'0.81rem', color:'#7a80a0', marginBottom:'0.7rem'}}>has successfully completed the course</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'clamp(0.9rem,3vw,1.1rem)', fontWeight:'700', color:'#f0c040', marginBottom:'1.2rem'}}>{course.title}</div>
              <div style={{fontSize:'0.81rem', color:'#7a80a0', lineHeight:'1.7', marginBottom:'0.7rem'}}>
                Taught by <strong style={{color:'#eef0f8'}}>{course.instructor}</strong> · Duration: {course.duration}
              </div>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:'1rem', paddingTop:'1rem', borderTop:'1px solid rgba(240,192,64,0.2)', flexWrap:'wrap', gap:'0.5rem'}}>
                {[{i:'🏆',l:'Achievement Unlocked'},{i:'✦',l:'Eduverse Academy'},{i:'🎓',l:'Certified Graduate'}].map(s => (
                  <div key={s.l} style={{textAlign:'center', fontSize:'0.66rem', color:'#7a80a0'}}>
                    <div style={{fontSize:'1.4rem', marginBottom:'0.3rem'}}>{s.i}</div>
                    {s.l}
                  </div>
                ))}
              </div>
              <div style={{fontSize:'0.74rem', color:'#3a4060', marginTop:'0.8rem'}}>
                Issued on {new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
              </div>
            </div>
            <div style={{display:'flex', gap:'0.8rem', justifyContent:'center', marginTop:'1.2rem', flexWrap:'wrap'}}>
              <button onClick={() => window.print()} style={{fontSize:'0.88rem', fontWeight:'600', padding:'0.75rem 1.5rem', borderRadius:'12px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>🖨️ Print Certificate</button>
              <button onClick={() => setShowCert(false)} style={{fontSize:'0.88rem', fontWeight:'600', padding:'0.75rem 1.5rem', borderRadius:'12px', border:'1px solid rgba(255,255,255,0.13)', cursor:'pointer', background:'transparent', color:'#eef0f8'}}>Done</button>
            </div>
          </div>
        </div>
      )}

      {/* RESPONSIVE STYLES */}
      <style>{`
        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 310px;
          gap: 2rem;
          align-items: start;
        }
        .detail-sidebar { order: 2; position: sticky; top: 78px; }
        .detail-main { order: 1; }
        .mobile-hero-img { display: none; }
        @media (max-width: 768px) {
          .detail-layout {
            grid-template-columns: 1fr;
          }
          .detail-sidebar { order: 1; position: static; }
          .detail-main { order: 2; }
          .sidebar-img { display: none; }
          .mobile-hero-img { display: block; }
        }
      `}</style>
    </div>
  );
}