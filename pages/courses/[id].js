import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../../context/AppContext';
import { useToast } from '../../components/Toast';
import courses from '../../data/courses';
import StarRating from '../../components/StarRating';
import { CourseDetailSkeleton } from '../../components/Skeleton';
import CourseRecommendations from '../../components/CourseRecommendations';
import resources from '../../data/resources';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { currentUser, wishlist, toggleWishlist, enrolled, toggleEnroll, markLesson, getCourseProgress, markCompleted, isBookmarked, toggleBookmark, notes, addNote, removeNote, comments, addComment, getReplies, markQuizPassed, certificates, leaderboard, addScore, startTracking, stopTracking, getStudyTime, readingProgress, markReading, getReadingProgress, getCombinedProgress, reviews, addReview, getCourseReviews, getAverageRating, getRatingDistribution, forumTopics, addForumTopic, addForumReply, getForumTopics } = useApp();
  const toast = useToast();
  const [activeTab, setActiveTab] = useState('videos');
  const [openLesson, setOpenLesson] = useState(null);
  const [quizState, setQuizState] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [noteText, setNoteText] = useState({});
  const [commentText, setCommentText] = useState({});
  const [commentName, setCommentName] = useState({});
  const [replyText, setReplyText] = useState({});
  const [showReply, setShowReply] = useState({});
  const [playlistIdx, setPlaylistIdx] = useState(null);
  const [timer, setTimer] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewHover, setReviewHover] = useState(0);
  const [forumTitle, setForumTitle] = useState('');
  const [forumBody, setForumBody] = useState('');
  const [replyTexts, setReplyTexts] = useState({});

  const course = courses.find(c => c.id === parseInt(id));
  if (!course) return <CourseDetailSkeleton/>;

  const isEnrolled = enrolled.includes(course.id);
  const isWishlisted = wishlist.includes(course.id);
  const progressPct = getCourseProgress(course.id, course.lessons.length);

  function handleLessonOpen(i) {
    setOpenLesson(openLesson === i ? null : i);
    if (openLesson !== i) {
      markLesson(course.id, i, course.lessons.length);
      setPlaylistIdx(i);
    } else {
      setPlaylistIdx(null);
    }
  }

  useEffect(() => {
    function onMessage(e) {
      if (!e.origin || !e.origin.includes('youtube.com')) return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === 'onStateChange' && data.info === 0 && playlistIdx !== null) {
          const next = playlistIdx + 1;
          if (next < course.lessons.length) {
            setPlaylistIdx(next);
            setOpenLesson(next);
            markLesson(course.id, next, course.lessons.length);
          } else {
            setPlaylistIdx(null);
          }
        }
      } catch {}
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [playlistIdx, course, markLesson]);

  function startQuiz() {
    setQuizState({ idx: 0, score: 0, answered: false, answers: new Array(course.quiz.length).fill(null) });
    setTimer(course.quiz.length * 60);
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
    setTimer(course.quiz.length * 60);
  }

  function downloadNotes() {
    const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const lines = [];
    course.lessons.forEach((l, i) => {
      const lessonNotes = notes[`${course.id}_${i}`] || [];
      if (lessonNotes.length > 0) {
        lines.push(`Lesson ${i + 1}:\n` + lessonNotes.map(n => n.text).join('\n'));
      }
    });
    if (!lines.length) return;
    const blob = new Blob([lines.join('\n\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${slug}-notes.txt`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  const pct = quizState ? Math.round((quizState.score / course.quiz.length) * 100) : 0;
  const finished = quizState && quizState.idx === course.quiz.length - 1 && quizState.answered;
  const passed = pct >= 60;
  const timerRunning = timer !== null && timer > 0 && !finished;
  const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const timerColor = timer <= 30 ? '#ff6b9d' : timer <= 60 ? '#f0c040' : 'var(--text)';
  const courseLeaderboard = leaderboard.filter(e => e.courseId === course.id).sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date)).slice(0, 10);

  // Timer countdown
  useEffect(() => {
    if (!timerRunning) return;
    const id = setInterval(() => setTimer(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(id);
  }, [timerRunning]);

  // Time-up auto-submit
  useEffect(() => {
    if (timer !== 0 || finished || !quizState) return;
    setQuizState(prev => ({ ...prev, idx: course.quiz.length - 1, answered: true }));
  }, [timer, finished, quizState]);

  useEffect(() => {
    if (finished && passed) {
      markCompleted(course.id, course.title);
      markQuizPassed(course.id);
      addScore(currentUser?.firstName || 'Anonymous', course.id, quizState.score, course.quiz.length);
    }
  }, [finished, passed]);

  // Study time tracking
  useEffect(() => {
    startTracking(course.id);
    return () => stopTracking();
  }, [course.id]);

  return (
    <div style={{maxWidth:'1100px', margin:'0 auto', padding:'0 0 4rem'}}>

      {/* BACK */}
      <div onClick={() => router.push('/')} style={{
        display:'inline-flex', alignItems:'center', gap:'6px',
        fontSize:'0.83rem', color:'var(--muted)', cursor:'pointer',
        padding:'1.2rem 1.2rem 0',
      }}>
        ← Back to courses
      </div>

      {/* MOBILE HERO IMAGE */}
      <div style={{width:'100%', height:'200px', overflow:'hidden', marginTop:'1rem', position:'relative'}}
        className="mobile-hero-img">
        <img src={course.img} alt={course.title} loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,15,0.8) 0%, transparent 60%)'}}/>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{padding:'1rem 1.2rem 0'}} className="detail-layout">

        {/* SIDEBAR */}
        <div className="detail-sidebar">
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden'}}>
            <img src={course.img} alt={course.title} loading="lazy"
              style={{width:'100%', height:'160px', objectFit:'cover', display:'block'}}
              className="sidebar-img"
            />
            <div style={{padding:'1.2rem'}}>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.7rem', fontWeight:'700', color:'#00d4aa', marginBottom:'0.9rem'}}>Free</div>

              {/* PROGRESS BAR */}
              {isEnrolled && (
                <div style={{marginBottom:'1rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.72rem', color:'var(--muted)', marginBottom:'0.3rem'}}>
                    <span>Course Progress</span>
                    <span>{progressPct}%</span>
                  </div>
                  <div style={{width:'100%', height:'6px', background:'var(--border)', borderRadius:'100px'}}>
                    <div style={{
                      height:'100%', borderRadius:'100px',
                      background:'linear-gradient(135deg,#4488ff,#00d4aa)',
                      width:`${progressPct}%`,
                      transition:'width 0.4s ease',
                    }}/>
                  </div>
                  <div style={{fontSize:'0.72rem', color:'var(--muted)', marginTop:'0.3rem'}}>
                    {progressPct === 100 ? 'All lessons watched!' : `${Math.round(progressPct / 100 * course.lessons.length)}/${course.lessons.length} lessons watched`}
                  </div>
                </div>
              )}

              <button onClick={() => toggleEnroll(course.id, course.title, toast)} style={{
                width:'100%', padding:'0.85rem', borderRadius:'12px',
                fontWeight:'700', fontSize:'0.9rem', border:'none', cursor:'pointer',
                marginBottom:'0.6rem',
                background: isEnrolled ? 'linear-gradient(135deg,#0f2d1a,#1a4d2a)' : 'linear-gradient(135deg,#4488ff,#3366dd)',
                color: isEnrolled ? '#00d4aa' : '#fff',
              }}>
                {isEnrolled ? 'Enrolled' : 'Enroll in Course'}
              </button>
              <button onClick={() => toggleWishlist(course.id, toast)} style={{
                width:'100%', padding:'0.65rem', borderRadius:'12px',
                fontSize:'0.85rem', fontWeight:'500', cursor:'pointer',
                border:'1px solid var(--border2)', background:'transparent',
                color: isWishlisted ? '#ff6b9d' : 'var(--text)',
              }}>
                {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
              <button onClick={() => {
                const url = window.location.href;
                if (navigator.share) {
                  navigator.share({ title: course.title, url });
                } else {
                  navigator.clipboard.writeText(url).then(() => toast?.('Link copied!', 'success'));
                }
              }} style={{
                width:'100%', padding:'0.65rem', borderRadius:'12px',
                fontSize:'0.85rem', fontWeight:'500', cursor:'pointer',
                border:'1px solid var(--border2)', background:'transparent',
                color:'var(--muted)',
              }}>
                ↗ Share Course
              </button>
              <div style={{marginTop:'1rem', display:'flex', flexDirection:'column', gap:'0.45rem'}}>
                {[
                  {l:'Instructor', v:course.instructor},
                  {l:'Category', v:course.category},
                  {l:'Level', v:course.level},
                  {l:'Duration', v:course.duration},
                  {l:'Lessons', v:`${course.lessons.length} videos`},
                  {l:'Language', v:'English'},
                  {l:'Certificate', v:'On completion'},
                ].map(item => (
                  <div key={item.l} style={{display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.79rem', color:'var(--muted)'}}>
                    <span>{item.l}: <strong style={{color:'var(--text)'}}>{item.v}</strong></span>
                  </div>
                ))}
                <div key="study-time" style={{display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.79rem', color:'var(--muted)'}}>
                  <span>Study Time: <strong style={{color:'var(--text)'}}>{getStudyTime(course.id) >= 60 ? `${Math.floor(getStudyTime(course.id) / 60)}h ${getStudyTime(course.id) % 60}m` : `${getStudyTime(course.id)}m`}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="detail-main">
          <div style={{fontSize:'0.73rem', fontWeight:'600', letterSpacing:'0.08em', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.6rem'}}>{course.category}</div>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.4rem,4vw,2.2rem)', fontWeight:'700', lineHeight:'1.15', marginBottom:'0.9rem'}}>{course.title}</h1>
          <div style={{display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap', marginBottom:'1.3rem'}}>
            <span style={{fontSize:'0.84rem', color:'var(--muted)'}}>{course.rating} <strong style={{color:'var(--text)'}}>stars</strong></span>
            <span style={{fontSize:'0.84rem', color:'var(--muted)'}}><strong style={{color:'var(--text)'}}>{course.instructor}</strong></span>
            <span style={{fontSize:'0.84rem', color:'var(--muted)'}}>{course.duration}</span>
            <span style={{fontSize:'0.84rem', color:'#00d4aa'}}>Free</span>
          </div>
          <p style={{fontSize:'0.95rem', lineHeight:'1.75', color:'var(--text2)', marginBottom:'1.5rem'}}>{course.description}</p>

          {/* TABS */}
          <div style={{display:'flex', borderBottom:'1px solid var(--border)', marginBottom:'1.3rem', overflowX:'auto', scrollbarWidth:'none'}}>
            {['videos','reading','quiz','resources','reviews','forum'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                fontSize:'0.82rem', fontWeight:'600',
                padding:'0.6rem 1rem', border:'none', background:'transparent',
                color: activeTab === tab ? 'var(--text)' : 'var(--muted)',
                borderBottom: activeTab === tab ? '2px solid #f0c040' : '2px solid transparent',
                cursor:'pointer', marginBottom:'-1px', whiteSpace:'nowrap',
              }}>
                {tab === 'videos' ? 'Videos' : tab === 'reading' ? 'Reading' : tab === 'quiz' ? 'Quiz' : tab === 'resources' ? 'Resources' : tab === 'reviews' ? 'Reviews' : 'Forum'}
              </button>
            ))}
          </div>

          {/* VIDEOS TAB */}
          {activeTab === 'videos' && (
            <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
              {course.lessons.map((l, i) => (
                <div key={i} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'12px', overflow:'hidden'}}>
                  <div onClick={() => handleLessonOpen(i)}
                    style={{display:'flex', alignItems:'center', gap:'0.8rem', padding:'0.8rem 1rem', cursor:'pointer'}}>
                    <div style={{
                      width:'26px', height:'26px', borderRadius:'50%',
                      background: isBookmarked(course.id, i) ? 'rgba(240,192,64,0.2)' : 'var(--surface2)',
                      border: `1px solid ${isBookmarked(course.id, i) ? 'rgba(240,192,64,0.4)' : 'var(--border2)'}`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'0.7rem', fontWeight:'700',
                      color: isBookmarked(course.id, i) ? '#f0c040' : 'var(--muted)', flexShrink:0,
                    }}>{isBookmarked(course.id, i) ? '★' : i + 1}</div>
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{fontSize:'0.86rem', fontWeight:'600', marginBottom:'0.1rem', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{l.title}</div>
                      <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>▶ {l.dur}</div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); toggleBookmark(course.id, i); }}
                      style={{background:'none', border:'none', cursor:'pointer', fontSize:'1rem', color: isBookmarked(course.id, i) ? 'var(--gold)' : 'var(--muted2)', padding:'0 0.2rem'}}
                      title={isBookmarked(course.id, i) ? 'Remove bookmark' : 'Bookmark this lesson'}
                    >{isBookmarked(course.id, i) ? '★' : '☆'}</button>
                    <span style={{fontSize:'0.78rem', color:'#4488ff', transform: openLesson === i ? 'rotate(90deg)' : 'none', transition:'transform 0.25s', flexShrink:0}}>▶</span>
                  </div>
                  {openLesson === i && (
                    <div style={{padding:'0 0.8rem 0.8rem'}}>
                      {playlistIdx === i && (
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.5rem 0.75rem', marginBottom:'0.5rem', background:'rgba(240,192,64,0.08)', borderRadius:'8px', border:'1px solid rgba(240,192,64,0.15)'}}>
                          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.78rem', fontWeight:'600', color:'#f0c040'}}>
                            <span>▶ Now Playing:</span>
                            <span style={{color:'var(--text)'}}>{l.title}</span>
                          </div>
                          <span style={{fontSize:'0.72rem', color:'var(--muted2)', fontWeight:'500'}}>{i + 1} / {course.lessons.length}</span>
                        </div>
                      )}
                      <iframe
                        style={{width:'100%', aspectRatio:'16/9', borderRadius:'10px', border:'none', background:'#000'}}
                        src={`https://www.youtube.com/embed/${l.yt}?rel=0&modestbranding=1&enablejsapi=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen loading="lazy"
                      />
                      {/* NOTES */}
                      <div style={{marginTop:'0.8rem', background:'var(--surface2)', borderRadius:'10px', padding:'0.8rem'}}>
                        <div style={{fontSize:'0.78rem', fontWeight:'700', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.3rem'}}>Notes<button onClick={downloadNotes}
                            style={{marginLeft:'auto', fontSize:'0.68rem', fontWeight:'600', padding:'0.2rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border2)', background:'transparent', color:'var(--muted)', cursor:'pointer', whiteSpace:'nowrap'}}
                            title="Download all notes">Download</button></div>
                        <div style={{display:'flex', gap:'0.4rem', marginBottom:'0.5rem'}}>
                          <input value={noteText[i] || ''} onChange={e => setNoteText(p => ({...p, [i]: e.target.value}))}
                            placeholder="Write a note..."
                            style={{flex:1, padding:'0.4rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)', fontSize:'0.78rem', outline:'none'}}
                            onKeyDown={e => { if (e.key === 'Enter' && noteText[i]?.trim()) { addNote(course.id, i, noteText[i].trim()); setNoteText(p => ({...p, [i]: ''})); } }}/>
                          <button onClick={() => { if (noteText[i]?.trim()) { addNote(course.id, i, noteText[i].trim()); setNoteText(p => ({...p, [i]: ''})); } }}
                            style={{padding:'0.4rem 0.7rem', borderRadius:'6px', border:'none', background:'var(--blue)', color:'#fff', fontSize:'0.78rem', cursor:'pointer', fontWeight:'600'}}>Add</button>
                        </div>
                        {(notes[`${course.id}_${i}`] || []).slice().reverse().map(n => (
                          <div key={n.id} style={{display:'flex', alignItems:'flex-start', gap:'0.4rem', padding:'0.4rem 0', borderBottom:'1px solid var(--border)'}}>
                            <span style={{flex:1, fontSize:'0.78rem', color:'var(--text2)', lineHeight:'1.4'}}>{n.text}</span>
                            <button onClick={() => removeNote(course.id, i, n.id)} style={{background:'none', border:'none', cursor:'pointer', color:'var(--muted2)', fontSize:'0.7rem', padding:'0.1rem'}}>X</button>
                          </div>
                        ))}
                      </div>
                      {/* COMMENTS */}
                      <div style={{marginTop:'0.8rem', background:'var(--surface2)', borderRadius:'10px', padding:'0.8rem'}}>
                        <div style={{fontSize:'0.78rem', fontWeight:'700', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.3rem'}}>Discussion</div>
                        <div style={{display:'flex', gap:'0.4rem', marginBottom:'0.5rem', flexWrap:'wrap'}}>
                          <input value={commentName[i] || ''} onChange={e => setCommentName(p => ({...p, [i]: e.target.value}))}
                            placeholder="Your name"
                            style={{width:'100px', padding:'0.4rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)', fontSize:'0.78rem', outline:'none', flex:1}}/>
                          <input value={commentText[i] || ''} onChange={e => setCommentText(p => ({...p, [i]: e.target.value}))}
                            placeholder="Share your thoughts..."
                            style={{flex:'2', minWidth:'120px', padding:'0.4rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)', fontSize:'0.78rem', outline:'none'}}
                            onKeyDown={e => { if (e.key === 'Enter' && commentText[i]?.trim()) { addComment(course.id, i, commentName[i]?.trim() || 'Anonymous', commentText[i].trim()); setCommentText(p => ({...p, [i]: ''})); } }}/>
                          <button onClick={() => { if (commentText[i]?.trim()) { addComment(course.id, i, commentName[i]?.trim() || 'Anonymous', commentText[i].trim()); setCommentText(p => ({...p, [i]: ''})); } }}
                            style={{padding:'0.4rem 0.7rem', borderRadius:'6px', border:'none', background:'var(--teal)', color:'#fff', fontSize:'0.78rem', cursor:'pointer', fontWeight:'600'}}>Post</button>
                        </div>
                        {(comments[`${course.id}_${i}`] || []).filter(c => !c.parentId).slice().reverse().map(c => {
                          const replies = (comments[`${course.id}_${i}`] || []).filter(r => r.parentId === c.id);
                          return (
                          <div key={c.id} style={{padding:'0.4rem 0', borderBottom:'1px solid var(--border)'}}>
                            <div style={{display:'flex', alignItems:'center', gap:'0.4rem', marginBottom:'0.15rem'}}>
                              <span style={{fontWeight:'600', fontSize:'0.78rem', color:'var(--blue)'}}>{c.userName}</span>
                              <span style={{fontSize:'0.62rem', color:'var(--muted2)'}}>{new Date(c.createdAt).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                            </div>
                            <div style={{fontSize:'0.8rem', color:'var(--text2)', lineHeight:'1.5', marginBottom:'0.3rem'}}>{c.text}</div>
                            <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
                              {replies.length > 0 && <span style={{fontSize:'0.68rem', color:'var(--muted2)'}}>{replies.length} {replies.length === 1 ? 'reply' : 'replies'}</span>}
                              <button onClick={() => setShowReply(p => ({...p, [`${i}_${c.id}`]: !p[`${i}_${c.id}`]}))} style={{background:'none', border:'none', cursor:'pointer', fontSize:'0.7rem', color:'#4488ff', padding:'0'}}>Reply</button>
                            </div>
                            {showReply[`${i}_${c.id}`] && (
                              <div style={{display:'flex', gap:'0.4rem', marginTop:'0.4rem', marginBottom:'0.4rem'}}>
                                <input value={replyText[`${i}_${c.id}`] || ''} onChange={e => setReplyText(p => ({...p, [`${i}_${c.id}`]: e.target.value}))}
                                  placeholder="Write a reply..."
                                  style={{flex:1, padding:'0.3rem 0.5rem', borderRadius:'6px', border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)', fontSize:'0.7rem', outline:'none'}}
                                  onKeyDown={e => { if (e.key === 'Enter' && replyText[`${i}_${c.id}`]?.trim()) { addComment(course.id, i, commentName[i]?.trim() || 'Anonymous', replyText[`${i}_${c.id}`].trim(), c.id); setReplyText(p => ({...p, [`${i}_${c.id}`]: ''})); setShowReply(p => ({...p, [`${i}_${c.id}`]: false})); } }}/>
                                <button onClick={() => { if (replyText[`${i}_${c.id}`]?.trim()) { addComment(course.id, i, commentName[i]?.trim() || 'Anonymous', replyText[`${i}_${c.id}`].trim(), c.id); setReplyText(p => ({...p, [`${i}_${c.id}`]: ''})); setShowReply(p => ({...p, [`${i}_${c.id}`]: false})); } }}
                                  style={{padding:'0.3rem 0.6rem', borderRadius:'6px', border:'none', background:'var(--teal)', color:'#fff', fontSize:'0.7rem', cursor:'pointer', fontWeight:'600'}}>Reply</button>
                              </div>
                            )}
                            {replies.map(r => (
                              <div key={r.id} style={{padding:'0.35rem 0 0.35rem 1.2rem', borderLeft:'2px solid rgba(255,255,255,0.08)', marginLeft:'0.3rem', marginTop:'0.2rem'}}>
                                <div style={{display:'flex', alignItems:'center', gap:'0.4rem', marginBottom:'0.1rem'}}>
                                  <span style={{fontWeight:'600', fontSize:'0.72rem', color:'var(--teal)'}}>{r.userName}</span>
                                  <span style={{fontSize:'0.6rem', color:'var(--muted2)'}}>{new Date(r.createdAt).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                                </div>
                                <div style={{fontSize:'0.74rem', color:'var(--text2)', lineHeight:'1.4'}}>{r.text}</div>
                              </div>
                            ))}
                          </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* READING TAB */}
          {activeTab === 'reading' && (
            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <StarRating courseId={course.id} courseName={course.title} />
              {course.reading.length > 0 && (
                <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1rem 1.2rem', marginBottom:'0.5rem'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.5rem'}}>
                    <span style={{fontSize:'0.75rem', fontWeight:'700', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em'}}>Reading Progress</span>
                    <span style={{fontSize:'0.8rem', color:'var(--blue)', fontWeight:'600'}}>{readingProgress[course.id]?.length || 0}/{course.reading.length} read</span>
                  </div>
                  <div style={{width:'100%', height:'5px', background:'var(--border)', borderRadius:'100px'}}>
                    <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,#4488ff,#00d4aa)', width:`${getReadingProgress(course.id, course.reading.length)}%`, transition:'width 0.4s ease'}}/>
                  </div>
                </div>
              )}
              {course.reading.map((r, i) => {
                const isRead = readingProgress[course.id]?.includes(i);
                return (
                <div key={i} style={{
                  background:'var(--surface)', border:`1px solid ${isRead ? 'rgba(0,212,170,0.2)' : 'var(--border)'}`,
                  borderRadius:'14px', padding:'1.2rem', transition:'border 0.3s',
                }}>
                  <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'0.5rem', marginBottom:'0.6rem'}}>
                    <h4 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', color:'#f0c040'}}>{r.title}</h4>
                    {isEnrolled && (
                      <button onClick={() => markReading(course.id, i)}
                        style={{
                          flexShrink:0, fontSize:'0.7rem', fontWeight:'700', textTransform:'uppercase',
                          padding:'0.3rem 0.7rem', borderRadius:'100px', border:'none', cursor:'pointer',
                          background: isRead ? 'rgba(0,212,170,0.15)' : 'var(--border)',
                          color: isRead ? '#00d4aa' : 'var(--muted)',
                          fontFamily:'inherit', letterSpacing:'0.04em',
                          transition:'all 0.2s',
                        }}
                        onMouseEnter={e => { if (!isRead) { e.currentTarget.style.background='rgba(68,136,255,0.15)'; e.currentTarget.style.color='var(--blue)'; } }}
                        onMouseLeave={e => { if (!isRead) { e.currentTarget.style.background='var(--border)'; e.currentTarget.style.color='var(--muted)'; } }}
                      >
                        {isRead ? 'Read' : 'Mark Read'}
                      </button>
                    )}
                  </div>
                  <p style={{fontSize:'0.85rem', lineHeight:'1.75', color:'var(--text2)', marginBottom:'0.6rem'}}>{r.body}</p>
                  {r.points && (
                    <ul style={{paddingLeft:'1.2rem', display:'flex', flexDirection:'column', gap:'0.35rem'}}>
                      {r.points.map((p, j) => (
                        <li key={j} style={{fontSize:'0.83rem', color:'var(--text2)', lineHeight:'1.6'}}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
                );
              })}
            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem'}}>
              {!isEnrolled ? (
                  <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', marginBottom:'0.5rem'}}>Enroll to Take the Quiz</h3>
                    <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1.2rem'}}>Enroll in this course to unlock the quiz and earn your certificate.</p>
                    <button onClick={() => toggleEnroll(course.id, course.title, toast)} style={{
                      fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                      borderRadius:'12px', border:'none', cursor:'pointer',
                      background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                    }}>Enroll Now — It&apos;s Free</button>
                  </div>
                ) : !quizState ? (
                  <div style={{textAlign:'center', padding:'1.5rem 1rem'}}>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', marginBottom:'0.5rem'}}>Ready for the Quiz?</h3>
                    <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1.2rem'}}>{course.quiz.length} questions · Pass with 60% to earn your certificate</p>
                    <button onClick={startQuiz} style={{
                      fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                      borderRadius:'12px', border:'none', cursor:'pointer',
                      background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff',
                    }}>Start Quiz</button>
                  </div>
                ) : finished && passed ? (
                  <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                    <div style={{fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>You passed!</h3>
                    <p style={{fontSize:'0.86rem', color:'var(--muted)', marginBottom:'1.2rem'}}>Your certificate is ready!</p>
                    <button onClick={() => setShowCert(true)} style={{
                      fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                      borderRadius:'12px', border:'none', cursor:'pointer',
                      background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                    }}>Get Your Certificate</button>
                  </div>
                ) : finished && !passed ? (
                  <div style={{textAlign:'center', padding:'1.5rem 0.5rem'}}>
                    <div style={{fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700', color:'#f0c040', marginBottom:'0.5rem'}}>{quizState.score}/{course.quiz.length} ({pct}%)</div>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', marginBottom:'0.5rem'}}>Keep Learning!</h3>
                    <p style={{fontSize:'0.86rem', color:'var(--muted)', marginBottom:'1.2rem'}}>You need 60% to pass. Review and try again!</p>
                    <button onClick={retake} style={{
                      fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                      borderRadius:'12px', border:'1px solid var(--border2)',
                      cursor:'pointer', background:'transparent', color:'var(--text)',
                    }}>Retake Quiz</button>
                  </div>
              ) : (
                <div>
                  <div style={{fontSize:'0.76rem', color:'var(--muted)', marginBottom:'1rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span>Question {quizState.idx + 1} of {course.quiz.length} · Score: {quizState.score}/{quizState.idx + (quizState.answered ? 1 : 0)}</span>
                    <span style={{fontWeight:'700', fontFamily:'monospace', fontSize:'0.9rem', color:timerColor}}>{fmtTime(timer)}</span>
                  </div>
                  <p style={{fontSize:'0.9rem', fontWeight:'600', marginBottom:'0.85rem', lineHeight:'1.5'}}>
                    {quizState.idx + 1}. {course.quiz[quizState.idx].q}
                  </p>
                  <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', marginBottom:'1rem'}}>
                    {course.quiz[quizState.idx].opts.map((opt, i) => {
                      let bg = 'var(--surface2)', border = 'var(--border2)', color = 'var(--text)';
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
                      <button onClick={prevQ} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'var(--surface3)', color:'var(--text)'}}>← Back</button>
                    )}
                    {quizState.answered && !finished && (
                      <button onClick={nextQ} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'#4488ff', color:'#fff'}}>Next →</button>
                    )}
                    {quizState.answered && finished && passed && (
                      <button onClick={() => setShowCert(true)} style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>Certificate</button>
                    )}
                  </div>
                </div>
              )}
              {isEnrolled && (
                <div style={{marginTop:'1.5rem', borderTop:'1px solid var(--border)', paddingTop:'1.2rem'}}>
                  <h4 style={{fontSize:'0.9rem', fontWeight:'700', marginBottom:'0.8rem', color:'var(--text)'}}>Leaderboard</h4>
                  {courseLeaderboard.length === 0 ? (
                    <p style={{fontSize:'0.8rem', color:'var(--muted)'}}>No scores yet. Be the first to take the quiz!</p>
                  ) : (
                    <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
                      {courseLeaderboard.map((entry, i) => (
                        <div key={entry.date + entry.userName} style={{
                          display:'flex', alignItems:'center', gap:'0.6rem',
                          padding:'0.5rem 0.7rem', borderRadius:'8px',
                          background: i === 0 ? 'rgba(240,192,64,0.08)' : 'transparent',
                          border: i === 0 ? '1px solid rgba(240,192,64,0.15)' : 'none',
                        }}>
                          <span style={{fontSize:'0.85rem', fontWeight:'700', color: i === 0 ? '#f0c040' : 'var(--muted)', width:'20px'}}>#{i + 1}</span>
                          <span style={{flex:1, fontSize:'0.82rem', fontWeight:'600', color:'var(--text)'}}>{entry.userName}</span>
                          <span style={{fontSize:'0.82rem', fontWeight:'700', color:'#00d4aa'}}>{entry.score}/{entry.total}</span>
                          <span style={{fontSize:'0.68rem', color:'var(--muted2)'}}>{new Date(entry.date).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'resources' && (
            <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem'}}>
              {(() => {
                const allResources = resources.filter(r => r.courseId === course.id);
                if (allResources.length === 0) return (
                  <div style={{textAlign:'center', padding:'1.5rem', color:'var(--muted)'}}>
                    <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>📁</div>
                    <p style={{fontSize:'0.88rem'}}>No downloadable resources for this course yet.</p>
                  </div>
                );
                return (
                  <div>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.3rem'}}>Course Resources</h3>
                    <p style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'1rem'}}>Downloadable files to support your learning.</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                      {allResources.map((section, si) => (
                        <div key={si}>
                          <div style={{fontSize:'0.72rem', fontWeight:'600', color:'var(--blue)', marginBottom:'0.3rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>
                            Lesson {section.lessonIdx + 1}: {course.lessons[section.lessonIdx]?.title || `Lesson ${section.lessonIdx + 1}`}
                          </div>
                          {section.files.map((f, fi) => (
                            <a key={fi} href={f.url} target="_blank" rel="noopener noreferrer" style={{
                              display:'flex', alignItems:'center', gap:'0.6rem', padding:'0.6rem 0.8rem',
                              borderRadius:'8px', marginBottom:'0.3rem',
                              background:'var(--surface2)', border:'1px solid var(--border)',
                              color:'var(--text)', fontSize:'0.82rem', textDecoration:'none',
                              transition:'background 0.2s',
                            }}
                              onMouseEnter={e => e.currentTarget.style.background='var(--surface3)'}
                              onMouseLeave={e => e.currentTarget.style.background='var(--surface2)'}
                            >
                              <span style={{fontSize:'0.9rem'}}>{f.type === 'pdf' ? '📄' : f.type === 'zip' ? '📦' : f.type === 'py' ? '🐍' : f.type === 'ipynb' ? '📓' : f.type === 'html' ? '🌐' : f.type === 'fig' ? '🎨' : f.type === 'xlsx' ? '📊' : '📎'}</span>
                              <span style={{flex:1}}>{f.name}</span>
                              <span style={{fontSize:'0.65rem', fontWeight:'600', padding:'0.15rem 0.5rem', borderRadius:'100px', background:'var(--surface3)', color:'var(--muted)', textTransform:'uppercase'}}>{f.type}</span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === 'reviews' && (
            <div>
              {/* Review summary */}
              {(() => {
                const courseReviews = getCourseReviews(course.id);
                const avgRating = getAverageRating(course.id);
                const dist = getRatingDistribution(course.id);
                const totalReviews = courseReviews.length;
                return (
                  <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem', marginBottom:'1rem'}}>
                    <h3 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.3rem'}}>Student Reviews</h3>
                    <p style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'1rem'}}>
                      {totalReviews > 0 ? `${totalReviews} review${totalReviews > 1 ? 's' : ''}` : 'No reviews yet. Be the first!'}
                    </p>
                    {totalReviews > 0 && (
                      <div style={{display:'flex', gap:'1.5rem', flexWrap:'wrap', marginBottom:'1rem'}}>
                        <div style={{textAlign:'center'}}>
                          <div style={{fontFamily:'Georgia, serif', fontSize:'2.2rem', fontWeight:'700', color:'var(--gold)'}}>{avgRating}</div>
                          <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>out of 5</div>
                        </div>
                        <div style={{flex:1, minWidth:'150px'}}>
                          {[5,4,3,2,1].map(star => (
                            <div key={star} style={{display:'flex', alignItems:'center', gap:'0.4rem', marginBottom:'0.2rem', fontSize:'0.74rem'}}>
                              <span style={{color:'var(--muted)', width:'30px'}}>{star} star</span>
                              <div style={{flex:1, height:'6px', background:'var(--border)', borderRadius:'100px', overflow:'hidden'}}>
                                <div style={{
                                  height:'100%', borderRadius:'100px',
                                  background:'linear-gradient(135deg,#f0c040,#c8960a)',
                                  width: totalReviews > 0 ? `${(dist[star-1] / totalReviews) * 100}%` : '0%',
                                }}/>
                              </div>
                              <span style={{color:'var(--muted2)', width:'20px', textAlign:'right'}}>{dist[star-1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Review form */}
                    {isEnrolled && (
                      <div style={{background:'var(--surface2)', borderRadius:'12px', padding:'1rem', marginTop:'0.5rem'}}>
                        <h4 style={{fontSize:'0.85rem', fontWeight:'700', marginBottom:'0.5rem'}}>Write a Review</h4>
                        <div style={{display:'flex', gap:'0.3rem', marginBottom:'0.6rem'}}>
                          {[1,2,3,4,5].map(star => (
                            <button key={star} onClick={() => setReviewRating(star)}
                              onMouseEnter={() => setReviewHover(star)}
                              onMouseLeave={() => setReviewHover(0)}
                              style={{
                                fontSize:'1.4rem', background:'none', border:'none', cursor:'pointer',
                                color: (reviewHover || reviewRating) >= star ? '#f0c040' : 'var(--muted2)',
                                transform: (reviewHover || reviewRating) >= star ? 'scale(1.15)' : 'scale(1)',
                                transition:'all 0.15s',
                              }}
                            >★</button>
                          ))}
                          {reviewRating > 0 && <span style={{fontSize:'0.78rem', color:'var(--muted)', marginLeft:'0.3rem', alignSelf:'center'}}>{reviewRating} star{reviewRating > 1 ? 's' : ''}</span>}
                        </div>
                        <textarea value={reviewText} onChange={e => setReviewText(e.target.value)}
                          placeholder="Share your experience with this course..."
                          style={{
                            width:'100%', minHeight:'70px', padding:'0.6rem', borderRadius:'8px',
                            border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)',
                            fontSize:'0.82rem', outline:'none', resize:'vertical', fontFamily:'inherit',
                          }}/>
                        <button onClick={() => {
                          if (!reviewRating) { toast('Please select a rating', 'error'); return; }
                          if (!reviewText.trim()) { toast('Please write a review', 'error'); return; }
                          addReview(course.id, course.title, reviewRating, reviewText.trim());
                          setReviewText(''); setReviewRating(0);
                          toast('Review submitted!', 'success');
                        }} style={{
                          marginTop:'0.5rem', padding:'0.55rem 1.2rem', borderRadius:'8px',
                          border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.82rem',
                          background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                        }}>Submit Review</button>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Review list */}
              <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
                {getCourseReviews(course.id).map(r => (
                  <div key={r.id} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'12px', padding:'1rem'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.3rem'}}>
                      <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                        <div style={{
                          width:'28px', height:'28px', borderRadius:'50%',
                          background:'linear-gradient(135deg,var(--blue),var(--teal))',
                          display:'flex', alignItems:'center', justifyContent:'center',
                          fontSize:'0.7rem', fontWeight:'700', color:'#fff',
                        }}>{r.userName[0]?.toUpperCase()}</div>
                        <span style={{fontWeight:'600', fontSize:'0.82rem', color:'var(--text)'}}>{r.userName}</span>
                        <span style={{fontSize:'0.65rem', color:'var(--muted2)'}}>{new Date(r.createdAt).toLocaleDateString(undefined, {month:'short', day:'numeric', year:'numeric'})}</span>
                      </div>
                      <div style={{display:'flex', gap:'0.15rem'}}>
                        {[1,2,3,4,5].map(s => (
                          <span key={s} style={{fontSize:'0.75rem', color: s <= r.rating ? '#f0c040' : 'var(--muted2)'}}>★</span>
                        ))}
                      </div>
                    </div>
                    <p style={{fontSize:'0.84rem', color:'var(--text2)', lineHeight:'1.6'}}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORUM TAB */}
          {activeTab === 'forum' && (
            <div>
              <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem', marginBottom:'1rem'}}>
                <h3 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.3rem'}}>Discussion Forum</h3>
                <p style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'1rem'}}>Ask questions and discuss this course with other learners.</p>

                {isEnrolled && (
                  <div style={{background:'var(--surface2)', borderRadius:'12px', padding:'1rem', marginBottom:'1rem'}}>
                    <h4 style={{fontSize:'0.85rem', fontWeight:'700', marginBottom:'0.5rem'}}>Start a Discussion</h4>
                    <input value={forumTitle} onChange={e => setForumTitle(e.target.value)}
                      placeholder="Topic title"
                      style={{
                        width:'100%', padding:'0.55rem 0.7rem', borderRadius:'8px',
                        border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)',
                        fontSize:'0.82rem', outline:'none', marginBottom:'0.5rem',
                      }}/>
                    <textarea value={forumBody} onChange={e => setForumBody(e.target.value)}
                      placeholder="What would you like to discuss?"
                      style={{
                        width:'100%', minHeight:'60px', padding:'0.55rem 0.7rem', borderRadius:'8px',
                        border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)',
                        fontSize:'0.82rem', outline:'none', resize:'vertical', fontFamily:'inherit',
                      }}/>
                    <button onClick={() => {
                      if (!forumTitle.trim()) { toast('Please enter a topic title', 'error'); return; }
                      if (!forumBody.trim()) { toast('Please enter some text', 'error'); return; }
                      addForumTopic(course.id, course.title, forumTitle.trim(), forumBody.trim());
                      setForumTitle(''); setForumBody('');
                      toast('Topic posted!', 'success');
                    }} style={{
                      padding:'0.55rem 1.2rem', borderRadius:'8px',
                      border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.82rem',
                      background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff',
                    }}>Post Topic</button>
                  </div>
                )}

                {/* Topic list */}
                <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
                  {getForumTopics(course.id).length === 0 ? (
                    <p style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', padding:'1rem'}}>
                      No discussions yet. Be the first to start one!
                    </p>
                  ) : getForumTopics(course.id).map(topic => (
                    <div key={topic.id} style={{background:'var(--surface2)', borderRadius:'12px', padding:'1rem', border:'1px solid var(--border)'}}>
                      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.3rem'}}>
                        <h4 style={{fontSize:'0.88rem', fontWeight:'700', color:'var(--text)'}}>{topic.title}</h4>
                        <span style={{fontSize:'0.68rem', color:'var(--muted2)'}}>{topic.replies.length} reply{topic.replies.length !== 1 ? 's' : ''}</span>
                      </div>
                      <p style={{fontSize:'0.82rem', color:'var(--text2)', lineHeight:'1.5', marginBottom:'0.4rem'}}>{topic.body}</p>
                      <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.6rem', fontSize:'0.7rem', color:'var(--muted2)'}}>
                        <span style={{fontWeight:'600', color:'var(--blue)'}}>{topic.userName}</span>
                        <span>{new Date(topic.createdAt).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                      </div>

                      {/* Replies */}
                      {topic.replies.length > 0 && (
                        <div style={{marginLeft:'0.5rem', borderLeft:'2px solid var(--border)', paddingLeft:'0.8rem', marginBottom:'0.6rem'}}>
                          {topic.replies.map(reply => (
                            <div key={reply.id} style={{padding:'0.4rem 0', borderBottom:'1px solid var(--border)'}}>
                              <div style={{display:'flex', alignItems:'center', gap:'0.4rem', marginBottom:'0.15rem'}}>
                                <span style={{fontWeight:'600', fontSize:'0.74rem', color:'var(--teal)'}}>{reply.userName}</span>
                                <span style={{fontSize:'0.6rem', color:'var(--muted2)'}}>{new Date(reply.createdAt).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                              </div>
                              <p style={{fontSize:'0.78rem', color:'var(--text2)', lineHeight:'1.4'}}>{reply.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply form */}
                      {isEnrolled && (
                        <div style={{display:'flex', gap:'0.4rem'}}>
                          <input value={replyTexts[topic.id] || ''} onChange={e => setReplyTexts(p => ({...p, [topic.id]: e.target.value}))}
                            placeholder="Write a reply..."
                            style={{
                              flex:1, padding:'0.4rem 0.6rem', borderRadius:'6px',
                              border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)',
                              fontSize:'0.75rem', outline:'none',
                            }}
                            onKeyDown={e => { if (e.key === 'Enter' && replyTexts[topic.id]?.trim()) { addForumReply(topic.id, replyTexts[topic.id].trim()); setReplyTexts(p => ({...p, [topic.id]: ''})); } }}/>
                          <button onClick={() => { if (replyTexts[topic.id]?.trim()) { addForumReply(topic.id, replyTexts[topic.id].trim()); setReplyTexts(p => ({...p, [topic.id]: ''})); } }}
                            style={{padding:'0.4rem 0.7rem', borderRadius:'6px', border:'none', background:'var(--teal)', color:'#fff', fontSize:'0.75rem', cursor:'pointer', fontWeight:'600'}}>Reply</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <CourseRecommendations currentCourseId={course.id} />

      {/* CERTIFICATE MODAL */}
      {showCert && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', backdropFilter:'blur(12px)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', overflowY:'auto'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border2)', borderRadius:'20px', padding:'1.5rem', maxWidth:'680px', width:'100%', position:'relative'}}>
            <button onClick={() => setShowCert(false)} style={{position:'absolute', top:'1rem', right:'1rem', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:'8px', padding:'0.28rem 0.6rem', fontSize:'0.78rem', cursor:'pointer', color:'var(--muted)'}}>Close</button>
            <div style={{background:'linear-gradient(135deg,#0a0e1a,#0f1528,#0a1020)', border:'2px solid #f0c040', borderRadius:'14px', padding:'2rem', textAlign:'center'}}>
              <div style={{fontSize:'0.66rem', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', color:'#f0c040', marginBottom:'0.7rem'}}>Certificate of Completion</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'1.5rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'0.2rem'}}>Eduverse Academy</div>
              <div style={{fontSize:'0.68rem', color:'var(--muted)', marginBottom:'1.2rem'}}>Where Curiosity Meets Knowledge</div>
              <hr style={{border:'none', borderTop:'1px solid rgba(240,192,64,0.25)', marginBottom:'1.2rem'}}/>
              <div style={{fontSize:'0.74rem', color:'var(--muted)', marginBottom:'0.3rem'}}>This is to certify that</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.2rem,4vw,1.6rem)', fontStyle:'italic', color:'var(--text)', marginBottom:'0.7rem'}}>
                {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Dedicated Learner'}
              </div>
              <div style={{fontSize:'0.81rem', color:'var(--muted)', marginBottom:'0.7rem'}}>has successfully completed the course</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'clamp(0.9rem,3vw,1.1rem)', fontWeight:'700', color:'#f0c040', marginBottom:'1.2rem'}}>{course.title}</div>
              <div style={{fontSize:'0.81rem', color:'var(--muted)', lineHeight:'1.7', marginBottom:'0.7rem'}}>
                Taught by <strong style={{color:'var(--text)'}}>{course.instructor}</strong> · Duration: {course.duration}
              </div>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:'1rem', paddingTop:'1rem', borderTop:'1px solid rgba(240,192,64,0.2)', flexWrap:'wrap', gap:'0.5rem'}}>
                {[{l:'Achievement Unlocked'},{l:'Eduverse Academy'},{l:'Certified Graduate'}].map(s => (
                  <div key={s.l} style={{textAlign:'center', fontSize:'0.66rem', color:'var(--muted)'}}>
                    {s.l}
                  </div>
                ))}
              </div>
              <div style={{fontSize:'0.74rem', color:'var(--muted2)', marginTop:'0.8rem'}}>
                Issued on {new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
              </div>
              <div style={{fontSize:'0.7rem', color:'var(--muted2)', marginTop:'0.5rem', fontFamily:'monospace', letterSpacing:'0.05em'}}>
                {certificates.filter(c => c.courseId === course.id).slice(-1)[0]?.code ? `Code: ${certificates.filter(c => c.courseId === course.id).slice(-1)[0].code}` : ''}
              </div>
            </div>
            <div style={{display:'flex', gap:'0.8rem', justifyContent:'center', marginTop:'1.2rem', flexWrap:'wrap'}}>
              <button onClick={() => window.print()} style={{fontSize:'0.88rem', fontWeight:'600', padding:'0.75rem 1.5rem', borderRadius:'12px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000'}}>Print Certificate</button>
              <button onClick={() => setShowCert(false)} style={{fontSize:'0.88rem', fontWeight:'600', padding:'0.75rem 1.5rem', borderRadius:'12px', border:'1px solid var(--border2)', cursor:'pointer', background:'transparent', color:'var(--text)'}}>Done</button>
            </div>
          </div>
        </div>
      )}

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
          .detail-layout { grid-template-columns: 1fr; }
          .detail-sidebar { order: 1; position: static; }
          .detail-main { order: 2; }
          .sidebar-img { display: none; }
          .mobile-hero-img { display: block; }
        }
      `}</style>
    </div>
  );
}