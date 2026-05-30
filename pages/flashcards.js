import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import courses from '../data/courses';

export default function Flashcards() {
  const { currentUser, flashcardDecks, enrolled, addFlashcardDeck, addCardToDeck, removeCardFromDeck, removeFlashcardDeck, markCardStudied, getDeckProgress } = useApp();
  const router = useRouter();
  const toast = useToast();
  const [activeDeckId, setActiveDeckId] = useState(null);
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState([]);
  const [showCreateDeck, setShowCreateDeck] = useState(false);
  const [newDeckCourseId, setNewDeckCourseId] = useState('');
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');

  const enrolledCourses = courses.filter(c => enrolled.includes(c.id));
  const userDecks = flashcardDecks.filter(d => d.userEmail === currentUser?.email || !d.userEmail);
  const activeDeck = userDecks.find(d => d.id === activeDeckId);
  const deckProgress = activeDeckId ? getDeckProgress(activeDeckId) : null;

  function startStudy() {
    if (!activeDeck || activeDeck.cards.length === 0) {
      toast('Add some cards to this deck first!', 'error');
      return;
    }
    const cards = [...activeDeck.cards].sort(() => Math.random() - 0.5);
    setShuffled(cards);
    setCurrentCardIdx(0);
    setFlipped(false);
    setStudyMode(true);
  }

  function markCard(known) {
    if (!shuffled[currentCardIdx]) return;
    markCardStudied(activeDeckId, shuffled[currentCardIdx].id, known);
    if (currentCardIdx < shuffled.length - 1) {
      setCurrentCardIdx(prev => prev + 1);
      setFlipped(false);
    } else {
      toast('Deck complete! Great studying!', 'success');
      setStudyMode(false);
    }
  }

  return (
    <div style={{maxWidth:'900px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}} className="page-transition">
      <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:'700', marginBottom:'0.4rem'}}>Flashcards</h1>
      <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1.5rem'}}>Create and study flashcards for your enrolled courses.</p>

      {!studyMode ? (
        <div>
          {/* Course selector for new deck */}
          {showCreateDeck && (
            <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem', marginBottom:'1rem'}}>
              <h3 style={{fontSize:'0.9rem', fontWeight:'700', marginBottom:'0.6rem'}}>Create New Deck</h3>
              <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'0.8rem'}}>
                {enrolledCourses.map(c => (
                  <button key={c.id} onClick={() => {
                    const existing = userDecks.find(d => d.courseId === c.id);
                    if (existing) {
                      setActiveDeckId(existing.id);
                      setShowCreateDeck(false);
                      toast('Deck already exists for this course', 'info');
                      return;
                    }
                    const deckId = addFlashcardDeck(c.id, c.title);
                    setActiveDeckId(deckId);
                    setNewDeckCourseId(c.id);
                    setShowCreateDeck(false);
                    toast('Deck created! Now add some cards.', 'success');
                  }}
                    style={{
                      padding:'0.5rem 1rem', borderRadius:'8px', border:'1px solid var(--border2)',
                      background:'var(--surface2)', color:'var(--text)', fontSize:'0.78rem',
                      cursor:'pointer', fontWeight:'500',
                    }}>{c.title}</button>
                ))}
              </div>
              <button onClick={() => setShowCreateDeck(false)}
                style={{fontSize:'0.75rem', color:'var(--muted)', background:'none', border:'none', cursor:'pointer'}}>Cancel</button>
            </div>
          )}

          {userDecks.length === 0 ? (
            <div style={{textAlign:'center', padding:'3rem 1rem', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px'}}>
              <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', marginBottom:'0.4rem'}}>No Flashcard Decks Yet</h3>
              <p style={{fontSize:'0.84rem', color:'var(--muted)', marginBottom:'1.2rem'}}>Create a deck for an enrolled course to start studying.</p>
              {enrolledCourses.length > 0 ? (
                <button onClick={() => setShowCreateDeck(true)}
                  style={{padding:'0.65rem 1.4rem', borderRadius:'10px', border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.85rem', background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff'}}>
                  Create Your First Deck
                </button>
              ) : (
                <p style={{fontSize:'0.8rem', color:'var(--muted2)'}}>Enroll in a course first to create flashcards.</p>
              )}
            </div>
          ) : (
            <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
              {enrolledCourses.length > 0 && (
                <button onClick={() => setShowCreateDeck(true)}
                  style={{alignSelf:'flex-start', padding:'0.5rem 1.2rem', borderRadius:'8px', border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.8rem', background:'var(--surface2)', color:'var(--blue)', border:'1px solid var(--border2)', marginBottom:'0.5rem'}}>
                  + New Deck
                </button>
              )}
              {userDecks.map(deck => {
                const progress = getDeckProgress(deck.id);
                return (
                  <div key={deck.id} onClick={() => setActiveDeckId(deck.id)}
                    style={{
                      background: activeDeckId === deck.id ? 'var(--surface2)' : 'var(--surface)',
                      border:'1px solid var(--border)', borderRadius:'12px', padding:'1rem',
                      cursor:'pointer', transition:'background 0.2s',
                    }}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <div>
                        <h3 style={{fontSize:'0.9rem', fontWeight:'700', marginBottom:'0.15rem'}}>{deck.courseName}</h3>
                        <p style={{fontSize:'0.75rem', color:'var(--muted)'}}>
                          {deck.cards.length} card{deck.cards.length !== 1 ? 's' : ''}
                          {progress.total > 0 && ` · ${progress.known}/${progress.total} known`}
                        </p>
                      </div>
                      <div style={{display:'flex', gap:'0.4rem'}}>
                        <button onClick={e => { e.stopPropagation(); setActiveDeckId(deck.id); }}
                          style={{padding:'0.35rem 0.8rem', borderRadius:'6px', border:'none', cursor:'pointer', background:'var(--blue)', color:'#fff', fontSize:'0.72rem', fontWeight:'600'}}>
                          Study
                        </button>
                        <button onClick={e => { e.stopPropagation(); removeFlashcardDeck(deck.id); if (activeDeckId === deck.id) setActiveDeckId(null); toast('Deck removed', 'info'); }}
                          style={{padding:'0.35rem 0.6rem', borderRadius:'6px', border:'none', cursor:'pointer', background:'transparent', color:'var(--muted)', fontSize:'0.7rem'}}>
                          X
                        </button>
                      </div>
                    </div>
                    {progress.total > 0 && (
                      <div style={{marginTop:'0.5rem', height:'4px', background:'var(--border)', borderRadius:'100px', overflow:'hidden'}}>
                        <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,#00d4aa,#4488ff)', width:`${progress.pct}%`, transition:'width 0.3s'}}/>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Card management for active deck */}
          {activeDeck && !showCreateDeck && (
            <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem', marginTop:'1.5rem'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.8rem'}}>
                <h3 style={{fontSize:'0.95rem', fontWeight:'700'}}>{activeDeck.courseName} — Cards</h3>
                <div style={{display:'flex', gap:'0.5rem'}}>
                  <button onClick={startStudy}
                    style={{padding:'0.45rem 1rem', borderRadius:'8px', border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.8rem', background:'linear-gradient(135deg,#00d4aa,#00b894)', color:'#fff'}}>
                    Study Deck
                  </button>
                </div>
              </div>
              {deckProgress && deckProgress.total > 0 && (
                <p style={{fontSize:'0.75rem', color:'var(--muted)', marginBottom:'0.8rem'}}>
                  {deckProgress.studied}/{deckProgress.total} studied · {deckProgress.known} known
                </p>
              )}

              {/* Add card form */}
              <div style={{background:'var(--surface2)', borderRadius:'10px', padding:'0.8rem', marginBottom:'0.8rem'}}>
                <h4 style={{fontSize:'0.8rem', fontWeight:'700', marginBottom:'0.4rem'}}>Add Card</h4>
                <div style={{display:'flex', gap:'0.4rem', marginBottom:'0.4rem'}}>
                  <input value={frontText} onChange={e => setFrontText(e.target.value)}
                    placeholder="Front (question/term)"
                    style={{
                      flex:1, padding:'0.4rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border)',
                      background:'var(--surface)', color:'var(--text)', fontSize:'0.78rem', outline:'none',
                    }}/>
                  <input value={backText} onChange={e => setBackText(e.target.value)}
                    placeholder="Back (answer/definition)"
                    style={{
                      flex:1, padding:'0.4rem 0.6rem', borderRadius:'6px', border:'1px solid var(--border)',
                      background:'var(--surface)', color:'var(--text)', fontSize:'0.78rem', outline:'none',
                    }}/>
                </div>
                <button onClick={() => {
                  if (!frontText.trim() || !backText.trim()) { toast('Fill in both sides', 'error'); return; }
                  addCardToDeck(activeDeck.id, frontText.trim(), backText.trim());
                  setFrontText(''); setBackText('');
                  toast('Card added!', 'success');
                }} style={{
                  padding:'0.35rem 0.9rem', borderRadius:'6px', border:'none', cursor:'pointer',
                  fontWeight:'600', fontSize:'0.78rem', background:'var(--blue)', color:'#fff',
                }}>Add Card</button>
              </div>

              {/* Card list */}
              {activeDeck.cards.length === 0 ? (
                <p style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', padding:'1rem'}}>No cards yet. Add your first card above!</p>
              ) : (
                <div style={{display:'flex', flexDirection:'column', gap:'0.4rem', maxHeight:'300px', overflowY:'auto'}}>
                  {activeDeck.cards.map((card, i) => (
                    <div key={card.id} style={{
                      display:'flex', alignItems:'center', gap:'0.5rem',
                      padding:'0.5rem 0.7rem', borderRadius:'8px',
                      background:'var(--surface2)', border:'1px solid var(--border)',
                    }}>
                      <span style={{fontSize:'0.7rem', fontWeight:'700', color:'var(--muted2)', width:'24px'}}>{i + 1}.</span>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontSize:'0.78rem', fontWeight:'600', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{card.front}</div>
                        <div style={{fontSize:'0.72rem', color:'var(--muted)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{card.back}</div>
                      </div>
                      <button onClick={() => removeCardFromDeck(activeDeck.id, card.id)}
                        style={{background:'none', border:'none', cursor:'pointer', color:'var(--muted2)', fontSize:'0.7rem'}}>X</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* STUDY MODE */
        <div>
          <div style={{textAlign:'center', marginBottom:'1rem'}}>
            <span style={{fontSize:'0.78rem', color:'var(--muted)'}}>Card {currentCardIdx + 1} of {shuffled.length}</span>
          </div>

          {/* Flashcard */}
          <div onClick={() => setFlipped(!flipped)} style={{
            perspective:'1000px', cursor:'pointer', marginBottom:'1.5rem',
          }}>
            <div style={{
              background:'var(--surface)', border:'1px solid var(--border2)',
              borderRadius:'16px', padding:'2.5rem 1.5rem', minHeight:'250px',
              display:'flex', alignItems:'center', justifyContent:'center',
              transition:'transform 0.5s ease',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle:'preserve-3d',
              position:'relative',
            }}>
              <div style={{position:'absolute', top:'0.8rem', left:'1rem', fontSize:'0.68rem', fontWeight:'600', color:'var(--muted2)'}}>
                {flipped ? 'Answer' : 'Question'}
              </div>
              {!flipped ? (
                <p style={{fontSize:'1.05rem', fontWeight:'600', lineHeight:'1.6', textAlign:'center', maxWidth:'500px'}}>
                  {shuffled[currentCardIdx]?.front}
                </p>
              ) : (
                <p style={{fontSize:'1rem', lineHeight:'1.6', textAlign:'center', maxWidth:'500px', color:'var(--teal)'}}>
                  {shuffled[currentCardIdx]?.back}
                </p>
              )}
            </div>
          </div>

          <p style={{textAlign:'center', fontSize:'0.75rem', color:'var(--muted2)', marginBottom:'1rem'}}>
            Click the card to flip
          </p>

          {/* Know / Don't Know buttons */}
          {flipped && (
            <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
              <button onClick={() => markCard(false)}
                style={{
                  padding:'0.7rem 1.5rem', borderRadius:'10px', border:'none', cursor:'pointer',
                  fontWeight:'600', fontSize:'0.85rem',
                  background:'rgba(255,107,107,0.15)', color:'#ff6b6b',
                  transition:'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              >
                Still Learning
              </button>
              <button onClick={() => markCard(true)}
                style={{
                  padding:'0.7rem 1.5rem', borderRadius:'10px', border:'none', cursor:'pointer',
                  fontWeight:'600', fontSize:'0.85rem',
                  background:'rgba(0,212,170,0.15)', color:'#00d4aa',
                  transition:'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              >
                Got It
              </button>
            </div>
          )}

          {!flipped && (
            <div style={{display:'flex', justifyContent:'center'}}>
              <button onClick={() => setFlipped(true)}
                style={{padding:'0.7rem 1.5rem', borderRadius:'10px', border:'none', cursor:'pointer', fontWeight:'600', fontSize:'0.85rem', background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff'}}>
                Flip Card
              </button>
            </div>
          )}

          <div style={{display:'flex', justifyContent:'center', gap:'0.8rem', marginTop:'1.5rem'}}>
            <button onClick={() => setStudyMode(false)}
              style={{padding:'0.5rem 1.2rem', borderRadius:'8px', border:'1px solid var(--border2)', cursor:'pointer', fontWeight:'500', fontSize:'0.8rem', background:'transparent', color:'var(--muted)'}}>
              Exit Study Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
