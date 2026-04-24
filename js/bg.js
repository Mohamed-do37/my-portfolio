/* ============================================
   FUTURISTIC BACKGROUND ENGINE
   Deep space grid + ambient orbs + data streams
   Mohamed Dogheim Portfolio
============================================ */

(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Stars ─────────────────────────────────────
    const STAR_COUNT = 180;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // ── Ambient Orbs ──────────────────────────────
    const orbs = [
        { xRatio: 0.15, yRatio: 0.20, r: 340, color: '59,130,246',  speed: 0.00018 },  // blue
        { xRatio: 0.80, yRatio: 0.55, r: 280, color: '251,191,36',   speed: 0.00022 },  // gold
        { xRatio: 0.50, yRatio: 0.85, r: 310, color: '139,92,246',   speed: 0.00015 },  // purple
        { xRatio: 0.90, yRatio: 0.10, r: 200, color: '20,184,166',   speed: 0.0003  },  // teal
        { xRatio: 0.05, yRatio: 0.75, r: 220, color: '99,102,241',   speed: 0.00025 },  // indigo
    ].map(o => ({ ...o, angle: Math.random() * Math.PI * 2 }));

    // ── Perspective Grid ──────────────────────────
    const GRID_LINES = 20;
    let gridOffset = 0;

    // ── Data Stream Particles ─────────────────────
    const STREAM_COUNT = 40;
    const streams = Array.from({ length: STREAM_COUNT }, () => createStream());

    function createStream() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            vy: Math.random() * 0.6 + 0.2,
            length: Math.floor(Math.random() * 12) + 4,
            chars: generateChars(16),
            alpha: Math.random() * 0.25 + 0.05,
            color: Math.random() > 0.5 ? '251,191,36' : '100,160,255',
            speed: Math.random() * 0.8 + 0.3,
            charIndex: 0,
            shimmer: Math.random() * Math.PI * 2,
        };
    }

    function generateChars(n) {
        const pool = '01アイウエオカキクデータABCDEF<>[]{}|';
        return Array.from({ length: n }, () => pool[Math.floor(Math.random() * pool.length)]);
    }

    let t = 0;

    function draw() {
        t += 1;
        gridOffset = (gridOffset + 0.3) % (H / GRID_LINES);

        // ── Clear ──────────────────────────────────
        ctx.clearRect(0, 0, W, H);

        // ── Deep space base ────────────────────────
        const bg = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.8);
        bg.addColorStop(0, '#060a1e');
        bg.addColorStop(0.5, '#03050f');
        bg.addColorStop(1, '#010208');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        // ── Ambient Orbs ───────────────────────────
        orbs.forEach(orb => {
            orb.angle += orb.speed;
            const cx = orb.xRatio * W + Math.sin(orb.angle) * 60;
            const cy = orb.yRatio * H + Math.cos(orb.angle * 0.7) * 40;
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
            g.addColorStop(0, `rgba(${orb.color}, 0.07)`);
            g.addColorStop(0.5, `rgba(${orb.color}, 0.03)`);
            g.addColorStop(1, `rgba(${orb.color}, 0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
            ctx.fill();
        });

        // ── Stars ──────────────────────────────────
        stars.forEach(s => {
            const pulse = Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.4 + 0.6;
            ctx.beginPath();
            ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,220,255,${s.alpha * pulse})`;
            ctx.fill();
        });

        // ── Perspective Grid ───────────────────────
        const VANISH_X = W / 2;
        const VANISH_Y = H * 0.35;
        const HORIZON  = H * 0.85;

        ctx.save();
        ctx.globalAlpha = 0.045;

        // Vertical lines converging to vanishing point
        for (let i = 0; i <= GRID_LINES; i++) {
            const xBase = (i / GRID_LINES) * W;
            ctx.beginPath();
            ctx.moveTo(VANISH_X, VANISH_Y);
            ctx.lineTo(xBase, HORIZON);
            ctx.strokeStyle = i % 4 === 0
                ? 'rgba(251,191,36,0.8)'
                : 'rgba(100,160,255,0.6)';
            ctx.lineWidth = i % 4 === 0 ? 1.2 : 0.6;
            ctx.stroke();
        }

        // Horizontal lines with parallax scroll
        const hLines = 18;
        for (let j = 0; j < hLines; j++) {
            const progress = ((j / hLines) + (gridOffset / H)) % 1;
            const easedP = Math.pow(progress, 2.2); // perspective easing
            const y = VANISH_Y + easedP * (HORIZON - VANISH_Y);
            if (y < VANISH_Y || y > HORIZON) continue;

            const scale = (y - VANISH_Y) / (HORIZON - VANISH_Y);
            const xL = VANISH_X - scale * (W / 2);
            const xR = VANISH_X + scale * (W / 2);

            ctx.beginPath();
            ctx.moveTo(xL, y);
            ctx.lineTo(xR, y);
            ctx.strokeStyle = j % 3 === 0
                ? 'rgba(251,191,36,0.9)'
                : 'rgba(100,160,255,0.5)';
            ctx.lineWidth = j % 3 === 0 ? 1 : 0.5;
            ctx.stroke();
        }
        ctx.restore();

        // ── Data Streams ───────────────────────────
        ctx.font = '11px "JetBrains Mono", monospace';
        streams.forEach(s => {
            s.y += s.speed;
            s.shimmer += 0.04;
            if (s.y > H + 200) {
                s.x = Math.random() * W;
                s.y = -200;
                s.chars = generateChars(16);
            }

            const glowAlpha = (Math.sin(s.shimmer) * 0.3 + 0.7) * s.alpha;

            for (let k = 0; k < s.length; k++) {
                const charY = s.y - k * 14;
                if (charY < 0 || charY > H) continue;
                const fadeRatio = 1 - k / s.length;
                ctx.globalAlpha = glowAlpha * fadeRatio * 0.7;
                ctx.fillStyle = k === 0
                    ? `rgba(255,255,255,0.9)`
                    : `rgba(${s.color}, ${fadeRatio})`;
                const char = s.chars[(Math.floor(t * 0.05) + k) % s.chars.length];
                ctx.fillText(char, s.x, charY);
            }
            ctx.globalAlpha = 1;
        });

        // ── Scanline Vignette ──────────────────────
        const vignette = ctx.createRadialGradient(W/2, H/2, H*0.3, W/2, H/2, H*0.9);
        vignette.addColorStop(0, 'rgba(0,0,0,0)');
        vignette.addColorStop(1, 'rgba(0,0,5,0.55)');
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, W, H);

        requestAnimationFrame(draw);
    }

    draw();
})();
