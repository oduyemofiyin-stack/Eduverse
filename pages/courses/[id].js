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

  // QUIZ LOGIC
  function startQuiz() {
    setQuizState({ idx: 0, score: 0, answered: false, answers: new Array(course.quiz.length).fill(null) });
  }
  function answerQ(chosen) {
    if (quizState.answered) return;
    const correct = chosen === course.quiz[quizState.idx].ans;
    setQuizState(prev => ({
      ...prev,
      answered: true,
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
    <div>
      {/* BACK */}
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <div onClick={() => router.push('/')} style={{
          display:'inline-flex', alignItems:'center', gap:'6px',
          fontSize:'0.83rem', color:'#7a80a0', cursor:'pointer',
          padding:'1.5rem 2rem 0', transition:'color 0.2s',
        }}>
          ← Back to courses
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{
        maxWidth:'1100px', margin:'0 auto', padding:'1.2rem 2rem 4rem',
        display:'grid', gridTemplateColumns:'1fr 330px', gap:'2.5rem', alignItems:'start',
      }}>

        {/* LEFT */}
        <div>
          <div style={{fontSize:'0.75rem', fontWeight:'600', letterSpacing:'0.08em', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.7rem'}}>{course.category}</div>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.6rem,4vw,2.3rem)', fontWeight:'700', lineHeight:'1.15', marginBottom:'1rem'}}>{course.title}</h1>
          <div style={{display:'flex', alignItems:'center', gap:'1.3rem', flexWrap:'wrap', marginBottom:'1.5rem'}}>
            <span style={{fontSize:'0.86rem', color:'#7a80a0'}}>⭐ <strong style={{color:'#eef0f8'}}>{course.rating}</strong></span>
            <span style={{fontSize:'0.86rem', color:'#7a80a0'}}>👤 <strong style={{color:'#eef0f8'}}>{course.instructor}</strong></span>
            <span style={{fontSize:'0.86rem', color:'#7a80a0'}}>⏱ <strong style={{color:'#eef0f8'}}>{course.duration}</strong></span>
            <span style={{fontSize:'0.86rem', color:'#00d4aa'}}>🆓 Free</span>
          </div>
          <p style={{fontSize:'0.97rem', lineHeight:'1.78', color:'#c0bce0', marginBottom:'1.8rem'}}>{course.description}</p>

          {/* TABS */}
          <div style={{display:'flex', borderBottom:'1px solid rgba(255,255,255,0.06)', marginBottom:'1.5rem'}}>
            {['videos','reading','quiz'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                fontSize:'0.83rem', fontWeight:'600',
                padding:'0.65rem 1.1rem', border:'none',
                background:'transparent',
                color: activeTab === tab ? '#eef0f8' : '#7a80a0',
                borderBottom: activeTab === tab ? '2px solid #f0c040' : '2px solid transparent',
                cursor:'pointer', marginBottom:'-1px',
              }}>
                {tab === 'videos' ? '📹 Video Lessons' : tab === 'reading' ? '📄 Reading' : '📝 Quiz'}
              </button>
            ))}
          </div>

          {/* VIDEOS TAB */}
          {activeTab === 'videos' && (
            <div style={{display:'flex', flexDirection:'column', gap:'0.65rem'}}>
              {course.lessons.map((l, i) => (
                <div key={i} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px', overflow:'hidden'}}>
                  <div onClick={() => setOpenLesson(openLesson === i ? null : i)}
                    style={{display:'flex', alignItems:'center', gap:'0.9rem', padding:'0.85rem 1rem', cursor:'pointer'}}>
                    <div style={{width:'28px', height:'28px', borderRadius:'50%', background:'#161b26',
                      border:'1px solid rgba(255,255,255,0.13)', display:'flex', alignItems:'center',
                      justifyContent:'center', fontSize:'0.72rem', fontWeight:'700', color:'#7a80a0', flexShrink:0}}>{i + 1}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:'0.88rem', fontWeight:'600', marginBottom:'0.1rem'}}>{l.title}</div>
                      <div style={{fontSize:'0.74rem', color:'#7a80a0'}}>▶ {l.dur}</div>
                    </div>
                    <span style={{fontSize:'0.8rem', color:'#4488ff', transform: openLesson === i ? 'rotate(90deg)' : 'none', transition:'transform 0.25s'}}>▶</span>
                  </div>
                  {openLesson === i && (
                    <div style={{padding:'0 1rem 1rem'}}>
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
                <div key={i} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.4rem'}}>
                  <h4 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.6rem', color:'#f0c040'}}>{r.title}</h4>
                  <p style={{fontSize:'0.86rem', lineHeight:'1.75', color:'#b0acd0', marginBottom:'0.6rem'}}>{r.body}</p>
                  {r.points && (
                    <ul style={{paddingLeft:'1.2rem', display:'flex', flexDirection:'column', gap:'0.35rem'}}>
                      {r.points.map((p, j) => (
                        <li key={j} style={{fontSize:'0.84rem', color:'#b0acd0', lineHeight:'1.6'}}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.5rem'}}>
              {!isEnrolled ? (
                <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                  <span style={{fontSize:'3rem', display:'block', marginBottom:'0.8rem'}}>🔒</span>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>Enroll to Take the Quiz</h3>
                  <p style={{fontSize:'0.87rem', color:'#7a80a0', marginBottom:'1.4rem'}}>Enroll in this course to unlock the final quiz and earn your certificate.</p>
                  <button onClick={() => toggleEnroll(course.id)} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                  }}>Enroll Now — It&apos;s Free</button>
                </div>
              ) : !quizState ? (
                <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                  <span style={{fontSize:'3rem', display:'block', marginBottom:'0.8rem'}}>📝</span>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>Ready for the Quiz?</h3>
                  <p style={{fontSize:'0.87rem', color:'#7a80a0', marginBottom:'1.4rem'}}>{course.quiz.length} questions · Pass with 60% to earn your certificate</p>
                  <button onClick={startQuiz} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff',
                  }}>Start Quiz</button>
                </div>
              ) : finished && passed ? (
                <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                  <span style={{fontSize:'4rem', display:'block', marginBottom:'0.8rem'}}>🏆</span>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'2.2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', marginBottom:'0.5rem'}}>Congratulations! You passed! 🎉</h3>
                  <p style={{fontSize:'0.88rem', color:'#7a80a0', marginBottom:'1.4rem'}}>You&apos;ve completed &quot;{course.title}&quot;. Your certificate is ready!</p>
                  <button onClick={() => setShowCert(true)} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                    borderRadius:'12px', border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                  }}>🎓 Get Your Certificate</button>
                </div>
              ) : finished && !passed ? (
                <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                  <span style={{fontSize:'4rem', display:'block', marginBottom:'0.8rem'}}>📚</span>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'2.2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                  <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', marginBottom:'0.5rem'}}>Keep Learning!</h3>
                  <p style={{fontSize:'0.88rem', color:'#7a80a0', marginBottom:'1.4rem'}}>You need 60% to pass. Review the material and try again!</p>
                  <button onClick={retake} style={{
                    fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                    borderRadius:'12px', border:'1px solid rgba(255,255,255,0.13)',
                    cursor:'pointer', background:'transparent', color:'#eef0f8',
                  }}>Retake Quiz</button>
                </div>
              ) : (
                <div>
                  <div style={{fontSize:'0.78rem', color:'#7a80a0', marginBottom:'1.1rem'}}>
                    Question {quizState.idx + 1} of {course.quiz.length} &nbsp;·&nbsp; Score: {quizState.score}/{quizState.idx + (quizState.answered ? 1 : 0)}
                  </div>
                  <p style={{fontSize:'0.92rem', fontWeight:'600', marginBottom:'0.85rem', lineHeight:'1.5'}}>
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
                          textAlign:'left', transition:'all 0.2s',
                        }}>{opt}</button>
                      );
                    })}
                  </div>
                  <div style={{display:'flex', justifyContent:'flex-end', gap:'0.7rem'}}>
                    {quizState.idx > 0 && (
                      <button onClick={prevQ} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.58rem 1.3rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#1e2535', color:'#eef0f8'}}>← Back</button>
                    )}
                    {quizState.answered && !finished && (
                      <button onClick={nextQ} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.58rem 1.3rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#4488ff', color:'#fff'}}>Next →</button>
                    )}
                    {quizState.answered && finished && !passed && (
                      <button onClick={retake} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.58rem 1.3rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#4488ff', color:'#fff'}}>Retake Quiz</button>
                    )}
                    {quizState.answered && finished && passed && (
                      <button onClick={() => setShowCert(true)} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.58rem 1.3rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>🎓 Get Certificate</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'20px', overflow:'hidden', position:'sticky', top:'78px'}}>
          <img src={course.img} alt={course.title} style={{width:'100%', height:'180px', objectFit:'cover', display:'block'}}/>
          <div style={{padding:'1.3rem'}}>
            <div style={{fontFamily:'Georgia, serif', fontSize:'1.9rem', fontWeight:'700', color:'#00d4aa', marginBottom:'1rem'}}>Free</div>
            <button onClick={() => toggleEnroll(course.id)} style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px',
              fontWeight:'700', fontSize:'0.92rem', border:'none', cursor:'pointer',
              marginBottom:'0.65rem', transition:'all 0.25s',
              background: isEnrolled ? 'linear-gradient(135deg,#0f2d1a,#1a4d2a)' : 'linear-gradient(135deg,#4488ff,#3366dd)',
              color: isEnrolled ? '#00d4aa' : '#fff',
              boxShadow: isEnrolled ? 'none' : '0 8px 22px rgba(68,136,255,0.28)',
            }}>
              {isEnrolled ? '✓ Enrolled' : 'Enroll in Course'}
            </button>
            <button onClick={() => toggleWishlist(course.id)} style={{
              width:'100%', padding:'0.68rem', borderRadius:'12px',
              fontSize:'0.86rem', fontWeight:'500', cursor:'pointer',
              border:'1px solid rgba(255,255,255,0.13)', background:'transparent',
              color: isWishlisted ? '#ff6b9d' : '#eef0f8',
            }}>
              {isWishlisted ? '♥ In Wishlist' : '♡ Add to Wishlist'}
            </button>
            <div style={{marginTop:'1rem', display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              {[
                {i:'🎓', l:'Instructor', v:course.instructor},
                {i:'📂', l:'Category', v:course.category},
                {i:'⏱', l:'Duration', v:course.duration},
                {i:'📹', l:'Lessons', v:`${course.lessons.length} videos`},
                {i:'🌍', l:'Language', v:'English'},
                {i:'🏆', l:'Certificate', v:'On completion'},
              ].map(item => (
                <div key={item.l} style={{display:'flex', alignItems:'center', gap:'0.6rem', fontSize:'0.81rem', color:'#7a80a0'}}>
                  {item.i} <span>{item.l}: <strong style={{color:'#eef0f8'}}>{item.v}</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      {showCert && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', backdropFilter:'blur(12px)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem'}}>
          <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.13)', borderRadius:'20px', padding:'1.8rem', maxWidth:'680px', width:'100%', position:'relative', maxHeight:'90vh', overflowY:'auto'}}>
            <button onClick={() => setShowCert(false)} style={{position:'absolute', top:'1rem', right:'1rem', background:'#161b26', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'8px', padding:'0.28rem 0.6rem', fontSize:'0.78rem', cursor:'pointer', color:'#7a80a0'}}>✕ Close</button>
            <div style={{background:'linear-gradient(135deg,#0a0e1a,#0f1528,#0a1020)', border:'2px solid #f0c040', borderRadius:'14px', padding:'2.2rem', textAlign:'center', position:'relative', overflow:'hidden'}}>
              <div style={{fontSize:'0.68rem', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', color:'#f0c040', marginBottom:'0.8rem'}}>Certificate of Completion</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.7rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'0.2rem'}}>Eduverse Academy</div>
              <div style={{fontSize:'0.7rem', color:'#7a80a0', marginBottom:'1.3rem'}}>Where Curiosity Meets Knowledge</div>
              <hr style={{border:'none', borderTop:'1px solid rgba(240,192,64,0.25)', marginBottom:'1.3rem'}}/>
              <div style={{fontSize:'0.76rem', color:'#7a80a0', marginBottom:'0.3rem'}}>This is to certify that</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.7rem', fontStyle:'italic', color:'#eef0f8', marginBottom:'0.8rem'}}>
                {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Dedicated Learner'}
              </div>
              <div style={{fontSize:'0.83rem', color:'#7a80a0', marginBottom:'0.8rem'}}>has successfully completed the course</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', color:'#f0c040', marginBottom:'1.3rem'}}>{course.title}</div>
              <div style={{fontSize:'0.83rem', color:'#7a80a0', lineHeight:'1.7', marginBottom:'0.8rem'}}>
                Taught by <strong style={{color:'#eef0f8'}}>{course.instructor}</strong> &nbsp;·&nbsp; Duration: {course.duration}
              </div>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:'1.2rem', paddingTop:'1rem', borderTop:'1px solid rgba(240,192,64,0.2)'}}>
                {[{i:'🏆',l:'Achievement Unlocked'},{i:'✦',l:'Eduverse Academy'},{i:'🎓',l:'Certified Graduate'}].map(s => (
                  <div key={s.l} style={{textAlign:'center', fontSize:'0.68rem', color:'#7a80a0'}}>
                    <div style={{fontSize:'1.6rem', marginBottom:'0.3rem'}}>{s.i}</div>
                    {s.l}
                  </div>
                ))}
              </div>
              <div style={{fontSize:'0.76rem', color:'#3a4060', marginTop:'1rem'}}>
                Issued on {new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
              </div>
            </div>
            <div style={{display:'flex', gap:'0.8rem', justifyContent:'center', marginTop:'1.4rem', flexWrap:'wrap'}}>
              <button onClick={() => window.print()} style={{fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem', borderRadius:'12px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>🖨️ Print Certificate</button>
              <button onClick={() => setShowCert(false)} style={{fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem', borderRadius:'12px', border:'1px solid rgba(255,255,255,0.13)', cursor:'pointer', background:'transparent', color:'#eef0f8'}}>Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}