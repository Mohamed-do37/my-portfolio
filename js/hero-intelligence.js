/* Lightweight, responsive AI/data animation for the first-screen hero.
   No libraries, external assets, or network calls required. */
(() => {
    const canvas = document.getElementById('hero-intelligence-canvas');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0, height = 0, dpr = 1, frame = 0;
    let nodes = [], particles = [], resizeObserver;
    const rand = (min, max) => min + Math.random() * (max - min);

    function resize() {
        const rect = hero.getBoundingClientRect();
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        dpr = Math.min(window.devicePixelRatio || 1, 1.7);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const count = Math.max(26, Math.min(66, Math.round(width / 20)));
        nodes = Array.from({ length: count }, (_, i) => {
            // Keep a large calm zone behind the headline; bias the network toward the right.
            const x = width * (0.34 + Math.random() * 0.64);
            const y = height * (0.12 + Math.random() * 0.76);
            return { x, y, ox: x, oy: y, r: rand(1.1, 2.5), phase: rand(0, Math.PI * 2), speed: rand(.25, .75) };
        });
        particles = Array.from({ length: Math.max(22, Math.round(width / 28)) }, () => ({
            x: rand(width * .25, width), y: rand(0, height), t: rand(0, 1),
            speed: rand(.0018, .005), size: rand(1, 2.1)
        }));
        draw(0);
    }

    function draw(time) {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        const t = reduceMotion ? 0 : time * .001;

        // Soft radial light behind the AI portrait and network.
        const glowX = width * .76, glowY = height * .48;
        const glow = ctx.createRadialGradient(glowX, glowY, 2, glowX, glowY, Math.min(width, height) * .52);
        glow.addColorStop(0, 'rgba(14,165,233,0.105)');
        glow.addColorStop(.55, 'rgba(37,99,235,0.035)');
        glow.addColorStop(1, 'rgba(2,6,23,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        // Neural network: nearby nodes connect, with a soft moving signal on selected edges.
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            const driftX = reduceMotion ? 0 : Math.sin(t * a.speed + a.phase) * 8;
            const driftY = reduceMotion ? 0 : Math.cos(t * a.speed * .8 + a.phase) * 9;
            a.x = a.ox + driftX;
            a.y = a.oy + driftY;
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const distance = Math.hypot(dx, dy);
                const maxDistance = width < 600 ? 95 : 128;
                if (distance < maxDistance) {
                    const alpha = (1 - distance / maxDistance) * .22;
                    ctx.strokeStyle = 'rgba(56,189,248,' + alpha.toFixed(3) + ')';
                    ctx.lineWidth = .7;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                    if (!reduceMotion && (i + j) % 13 === 0) {
                        const p = (t * .16 + (i * .17 + j * .11)) % 1;
                        const px = a.x + (b.x - a.x) * p;
                        const py = a.y + (b.y - a.y) * p;
                        ctx.fillStyle = 'rgba(103,232,249,.8)';
                        ctx.beginPath();
                        ctx.arc(px, py, 1.35, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
            ctx.fillStyle = 'rgba(103,232,249,.74)';
            ctx.shadowColor = 'rgba(56,189,248,.8)';
            ctx.shadowBlur = reduceMotion ? 0 : 8;
            ctx.beginPath();
            ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        // Floating data packets moving along a subtle diagonal flow.
        particles.forEach((p, i) => {
            if (!reduceMotion) p.t = (p.t + p.speed) % 1;
            const x = p.x - p.t * width * .38;
            const y = p.y + Math.sin(t * .7 + i) * 10;
            ctx.fillStyle = 'rgba(56,189,248,' + (0.12 + (1 - p.t) * .48).toFixed(2) + ')';
            ctx.fillRect(x, y, p.size * 2.8, .8);
        });

        // Minimal analytical chart motif near the bottom-right edge, kept subtle.
        const chartW = Math.min(130, width * .15);
        const chartH = 54;
        const chartX = width - chartW - 26;
        const chartY = height - chartH - 38;
        if (width > 650) {
            ctx.strokeStyle = 'rgba(56,189,248,.12)';
            ctx.lineWidth = 1;
            for (let k = 0; k < 3; k++) {
                ctx.beginPath();
                ctx.moveTo(chartX, chartY + k * 19);
                ctx.lineTo(chartX + chartW, chartY + k * 19);
                ctx.stroke();
            }
            const values = [.25, .44, .36, .66, .52, .82, .73, .95];
            ctx.beginPath();
            values.forEach((v, i) => {
                const x = chartX + i * (chartW / (values.length - 1));
                const y = chartY + chartH * (1 - v);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            });
            ctx.strokeStyle = 'rgba(103,232,249,.62)';
            ctx.lineWidth = 1.7;
            ctx.stroke();
        }

        if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    }

    if ('ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(hero);
    } else {
        window.addEventListener('resize', resize, { passive: true });
    }
    resize();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            window.cancelAnimationFrame(frame);
        } else if (!reduceMotion) {
            window.cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(draw);
        }
    });
})();
