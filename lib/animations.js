// ── SCROLL REVEAL ──
export function initScrollReveal() {
  if (typeof window === 'undefined') return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return observer;
}

// ── 3D CARD TILT ──
export function initCardTilt() {
  if (typeof window === 'undefined') return;
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(68,136,255,0.3)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
      card.style.boxShadow = 'none';
    });
  });
}

// ── PARALLAX ──
export function initParallax() {
  if (typeof window === 'undefined') return;
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}

// ── MAGNETIC BUTTON ──
export function initMagneticButtons() {
  if (typeof window === 'undefined') return;
  const buttons = document.querySelectorAll('.magnetic');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });
}