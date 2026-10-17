/* Lightweight AI/data visualization for the opening hero. No libraries required. */
(() => {
  const canvas = document.getElementById('hero-intelligence-canvas');
  const hero = document.getElementById('hero');
  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobileQuery = window.matchMedia('(max-width: 768px)');
  let width = 0, height = 0, dpr = 1, nodes = [], frame = 0, raf = 0;

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(28, Math.min(76, Math.floor(width / (mobileQuery.matches ? 17 : 14))));
    nodes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .24,
      vy: (Math.random() - .5) * .24,
      r: Math.random() * 1.6 + .7,
      phase: Math.random() * Math.PI * 2,
      band: i % 4
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    const time = frame * .012;
    const connectionDistance = mobileQuery.matches ? 85 : 135;

    // Network graph: nodes and local connections.
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!reduceMotion) {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -8) a.x = width + 8;
        if (a.x > width + 8) a.x = -8;
        if (a.y < -8) a.y = height + 8;
        if (a.y > height + 8) a.y = -8;
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * .19;
          ctx.strokeStyle = 'rgba(56,189,248,' + alpha.toFixed(3) + ')';
          ctx.lineWidth = .7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      const pulse = .72 + Math.sin(time + a.phase) * .28;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(103,232,249,' + (.26 + pulse * .48).toFixed(3) + ')';
      ctx.arc(a.x, a.y, a.r * pulse, 0, Math.PI * 2);
      ctx.fill();
    }

    // A flowing signal line across the hero, like data moving through a model.
    const left = width * .30, right = width * .96;
    for (let band = 0; band < 3; band++) {
      ctx.beginPath();
      for (let x = left; x <= right; x += 7) {
        const progress = (x - left) / (right - left);
        const envelope = Math.sin(progress * Math.PI);
        const y = height * (.28 + band * .19) +
          Math.sin(progress * 9 + time * (band % 2 ? -1 : 1) + band) * (12 + band * 3) * envelope;
        if (x === left) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(56,189,248,' + (band === 1 ? '.18' : '.10') + ')';
      ctx.lineWidth = 1;
      ctx.stroke();
      const p = (time * (.045 + band * .008) + band * .31) % 1;
      const px = left + p * (right - left);
      const py = height * (.28 + band * .19) + Math.sin(p * 9 + time * (band % 2 ? -1 : 1) + band) * (12 + band * 3) * Math.sin(p * Math.PI);
      ctx.beginPath();
      ctx.fillStyle = '#67e8f9';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#38bdf8';
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    frame++;
    if (!reduceMotion) raf = window.requestAnimationFrame(draw);
  };

  const start = () => {
    if (raf) window.cancelAnimationFrame(raf);
    resize();
    if (reduceMotion) draw();
    else raf = window.requestAnimationFrame(draw);
  };

  if ('ResizeObserver' in window) new ResizeObserver(start).observe(hero);
  else window.addEventListener('resize', start, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (raf) window.cancelAnimationFrame(raf); raf = 0; }
    else start();
  });
  start();
})();
