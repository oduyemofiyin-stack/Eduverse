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
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
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
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * 8;
      const rotY = ((cx - x) / cx) * 8;
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
      card.style.boxShadow = `0 25px 60px rgba(68,136,255,0.25), 0 0 0 1px rgba(68,136,255,0.15)`;
      // Add light reflection
      const inner = card.querySelector('[data-tilt-inner]');
      if (inner) {
        inner.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.boxShadow = 'none';
      card.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease';
      const inner = card.querySelector('[data-tilt-inner]');
      if (inner) inner.style.background = 'none';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

// ── PARALLAX ──
export function initParallax() {
  if (typeof window === 'undefined') return;
  const handleScroll = () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
    // Parallax for hero text
    const heroText = document.querySelector('[data-parallax-text]');
    if (heroText) {
      heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroText.style.opacity = `${1 - scrollY * 0.002}`;
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}

// ── MAGNETIC BUTTONS ──
export function initMagneticButtons() {
  if (typeof window === 'undefined') return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
      btn.style.transition = 'transform 0.1s ease';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });
}

// ── SMOOTH CURSOR ──
export function initCustomCursor() {
  if (typeof window === 'undefined' || window.innerWidth < 768) return;
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed; width: 12px; height: 12px;
    background: #4488ff; border-radius: 50%;
    pointer-events: none; z-index: 99999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
    mix-blend-mode: difference;
  `;
  const cursorRing = document.createElement('div');
  cursorRing.id = 'cursor-ring';
  cursorRing.style.cssText = `
    position: fixed; width: 36px; height: 36px;
    border: 1.5px solid rgba(68,136,255,0.5); border-radius: 50%;
    pointer-events: none; z-index: 99998;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease;
  `;
  document.body.appendChild(cursor);
  document.body.appendChild(cursorRing);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll('button, a, [class*="card"], input').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '6px';
      cursor.style.height = '6px';
      cursorRing.style.width = '50px';
      cursorRing.style.height = '50px';
      cursorRing.style.borderColor = 'rgba(240,192,64,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'rgba(68,136,255,0.5)';
    });
  });
}

// ── FLOWING LINES (Air Effect) ──
export function initFlowingLines(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animFrame;
  let lines = [];
  let mouse = { x: 0, y: 0 };

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  // Create flowing line particles
  for (let i = 0; i < 80; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      life: Math.random(),
      maxLife: 0.6 + Math.random() * 0.4,
      color: ['#4488ff','#00d4aa','#f0c040','#ff6b9d'][Math.floor(Math.random()*4)],
      size: Math.random() * 1.5 + 0.5,
      trail: [],
      trailLength: Math.floor(Math.random() * 20) + 10,
    });
  }

  const animate = () => {
    ctx.fillStyle = 'rgba(6,8,15,0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    lines.forEach(p => {
      // Mouse repulsion — the "air flowing" effect
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.vx += (dx / dist) * force * 0.3;
        p.vy += (dy / dist) * force * 0.3;
      }

      // Add slight wave motion
      p.vx += Math.sin(p.y * 0.01 + Date.now() * 0.0005) * 0.02;
      p.vy += Math.cos(p.x * 0.01 + Date.now() * 0.0005) * 0.02;

      // Dampen velocity
      p.vx *= 0.98;
      p.vy *= 0.98;

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Store trail
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > p.trailLength) p.trail.shift();

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw trail
      if (p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let i = 1; i < p.trail.length; i++) {
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        ctx.strokeStyle = p.color + '40';
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + 'cc';
      ctx.fill();
    });

    animFrame = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(animFrame);
    window.removeEventListener('resize', resize);
  };
}

// ── STARFIELD (Universe Background) ──
export function initStarfield(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animFrame;
  let stars = [];
  const STAR_COUNT = 250;

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const createStars = () => {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.3,
        dx: (Math.random() - 0.5) * 0.15,
        dy: (Math.random() - 0.5) * 0.15,
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.005 + Math.random() * 0.02,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      });
    }
  };
  createStars();

  // Shooting stars
  let shootingStars = [];

  const addShootingStar = () => {
    shootingStars.push({
      x: Math.random() * canvas.width,
      y: 0,
      dx: (Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1),
      dy: Math.random() * 3 + 2,
      life: 1,
      speed: 0.01 + Math.random() * 0.02,
    });
  };

  const shootingInterval = setInterval(() => {
    if (Math.random() > 0.7) addShootingStar();
  }, 3000);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.opacity += star.twinkleSpeed * star.twinkleDir;
      if (star.opacity > 1) { star.opacity = 1; star.twinkleDir = -1; }
      if (star.opacity < 0.2) { star.opacity = 0.2; star.twinkleDir = 1; }

      star.x += star.dx;
      star.y += star.dy;

      if (star.x < -10) star.x = canvas.width + 10;
      if (star.x > canvas.width + 10) star.x = -10;
      if (star.y < -10) star.y = canvas.height + 10;
      if (star.y > canvas.height + 10) star.y = -10;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 215, 255, ${star.opacity})`;
      ctx.fill();
    });

    shootingStars = shootingStars.filter(s => {
      s.x += s.dx;
      s.y += s.dy;
      s.life -= s.speed;
      if (s.life <= 0) return false;

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.dx * 8, s.y - s.dy * 8);
      ctx.strokeStyle = `rgba(200, 215, 255, ${s.life * 0.8})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      return true;
    });

    animFrame = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(animFrame);
    clearInterval(shootingInterval);
    window.removeEventListener('resize', resize);
  };
}