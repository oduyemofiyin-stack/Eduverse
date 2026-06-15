import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useToast } from './Toast';

export default function StarRating({ courseId, courseName }) {
  const { getUserRating, rateCourse, completed, enrolled } = useApp();
  const toast = useToast();
  const [hovered, setHovered] = useState(0);

  const userRating = getUserRating(courseId);
  const isEnrolled = enrolled.includes(courseId);

  if (!isEnrolled) return null;

  function handleRate(star) {
    rateCourse(courseId, star);
    toast(`You rated "${courseName}" ${star} star${star > 1 ? 's' : ''}`, 'success');
  }

  return (
    <div style={{
      background:'var(--surface)', border:'1px solid var(--border)',
      borderRadius:'14px', padding:'1.2rem', marginBottom:'1rem',
    }}>
      <h4 style={{
        fontFamily:'Georgia, serif', fontSize:'1rem',
        fontWeight:'700', marginBottom:'0.4rem', color:'var(--gold)',
      }}>
        {userRating > 0 ? '⭐ Your Rating' : '🌟 Rate This Course'}
      </h4>
      <p style={{fontSize:'0.82rem', color:'var(--muted)', marginBottom:'0.8rem'}}>
        {userRating > 0
          ? `You rated this course ${userRating} star${userRating > 1 ? 's' : ''}`
          : 'How would you rate this course?'}
      </p>
      <div style={{display:'flex', gap:'0.4rem'}}>
        {[1,2,3,4,5].map(star => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            style={{
              fontSize:'1.8rem', background:'none', border:'none',
              cursor:'pointer', transition:'transform 0.15s',
              transform: hovered >= star || userRating >= star ? 'scale(1.2)' : 'scale(1)',
              filter: hovered >= star || userRating >= star ? 'none' : 'grayscale(1) opacity(0.4)',
            }}
          >
            ★
          </button>
        ))}
      </div>
      {userRating > 0 && (
        <button
          onClick={() => { rateCourse(courseId, 0); toast('Rating removed', 'error'); }}
          style={{
            marginTop:'0.7rem', fontSize:'0.75rem', color:'var(--muted)',
            background:'none', border:'none', cursor:'pointer', textDecoration:'underline',
          }}
        >
          Remove rating
        </button>
      )}
    </div>
  );
}