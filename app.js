/* ==============================================
   VERTEX — Premium Animated Site
   app.js
   ============================================== */

/* ── 1. BOOT SEQUENCE ── */
(function bootSequence() {
    const lines = [
        '> VERTEX OS v2.0 initializing...',
        '> Loading security modules... [OK]',
        '> ALU E-Lab Think Tank online',
        '> 6 nodes connected',
        '> Digital Print: ACTIVE',
        '> Welcome, visitor.',
    ];
    const container = document.getElementById('bootLines');
    if (!container) return;
    lines.forEach((line, i) => {
        setTimeout(() => {
            const el = document.createElement('span');
            el.className = 'boot-line';
            el.textContent = line;
            el.style.animationDelay = '0s';
            container.appendChild(el);
        }, i * 380);
    });
    // Remove overlay after animation
    setTimeout(() => {
        const overlay = document.getElementById('bootOverlay');
        if (overlay) { overlay.style.display = 'none'; }
    }, 3400);
})();

/* ── 2. CUSTOM CURSOR ── */
(function initCursor() {
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    if (!cursor || !trail) return;
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    });
    // Trail with lag
    let tx = 0, ty = 0;
    function animTrail() {
        tx += (mx - tx) * 0.18;
        ty += (my - ty) * 0.18;
        trail.style.left = tx + 'px';
        trail.style.top = ty + 'px';
        requestAnimationFrame(animTrail);
    }
    animTrail();
})();

/* ── 3. MATRIX CANVAS ── */
(function matrixCanvas() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, cols, drops;

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
        cols = Math.floor(W / 22);
        drops = Array(cols).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    const chars = 'VERTEXABC0123456789!@#$%^&*<>?/\\|{}[]01アイウエオ';
    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 8, 0.06)';
        ctx.fillRect(0, 0, W, H);
        ctx.font = '14px JetBrains Mono, monospace';
        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const prog = y / (H / 22);
            // Lead char bright
            if (Math.random() > 0.93) {
                ctx.fillStyle = '#fff';
            } else {
                ctx.fillStyle = `rgba(0, 240, 255, ${Math.max(0, 1 - prog * 0.7)})`;
            }
            ctx.fillText(char, i * 22, y * 22);
            if (y * 22 > H && Math.random() > 0.975) { drops[i] = 0; }
            drops[i]++;
        });
    }
    setInterval(draw, 55);
})();

/* ── 4. NAVBAR SCROLL STATE ── */
(function navbar() {
    const nav = document.getElementById('nav');
    const links = document.querySelectorAll('.nl');
    const secs = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
        // Active link
        let current = '';
        secs.forEach(s => {
            if (window.scrollY >= s.offsetTop - 140) current = s.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    }, { passive: true });

    // Burger
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('.nl').forEach(l =>
            l.addEventListener('click', () => {
                burger.classList.remove('open');
                navLinks.classList.remove('open');
            })
        );
    }
})();

/* ── 5. COUNTER ANIMATION ── */
(function counters() {
    const nums = document.querySelectorAll('.ls-num[data-target]');
    if (!nums.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const dur = target > 100 ? 1800 : 900;
            const step = dur / 60;
            let current = 0;
            const inc = target / (dur / (1000 / 60));
            const timer = setInterval(() => {
                current += inc;
                if (current >= target) {
                    el.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current).toLocaleString();
                }
            }, 1000 / 60);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });
    nums.forEach(n => observer.observe(n));
})();

/* ── 6. SCROLL REVEAL ── */
(function scrollReveal() {
    const els = document.querySelectorAll('.reveal-card');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
})();

/* ── 7. 3D TILT ON MEMBER CARDS ── */
(function tiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);
            const rotY = dx * 8;
            const rotX = -dy * 8;
            card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
            card.style.transition = 'none';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, box-shadow 0.3s';
        });
    });
})();

/* ── 8. GLITCH TITLE — random interval ── */
(function glitchEffect() {
    const el = document.getElementById('glitchTitle');
    if (!el) return;
    // CSS handles it via animation — just trigger occasional extra burst
    setInterval(() => {
        if (Math.random() > 0.7) {
            el.style.animation = 'none';
            void el.offsetWidth; // reflow
            el.style.animation = '';
        }
    }, 4000);
})();

/* ── 9. SMOOTH ANCHOR SCROLLING ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
