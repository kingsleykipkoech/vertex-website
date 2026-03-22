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

/* ── 3. YOUTUBE HERO BACKGROUND ── */
var ytHeroPlayer;
function onYouTubeIframeAPIReady() {
    ytHeroPlayer = new YT.Player('yt-hero-bg', {
        videoId: 'G8_igK93bB0',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            start: 5,
            playlist: 'G8_igK93bB0',
            controls: 0,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
        },
        events: {
            onReady: function (e) {
                e.target.mute();
                e.target.playVideo();
                // Hide particle canvas once YT video is playing
                var canvas = document.getElementById('matrixCanvas');
                if (canvas) canvas.style.opacity = '0';
            },
            onStateChange: function (e) {
                // Keep muted in case browser unmutes
                if (e.data === YT.PlayerState.PLAYING) {
                    e.target.mute();
                }
            }
        }
    });
}

/* ── 4. PARTICLE NETWORK CANVAS (hero fallback) ── */
(function particleNetwork() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    // Hide canvas if a video loaded successfully
    const video = canvas.previousElementSibling;
    if (video && video.tagName === 'VIDEO') {
        video.addEventListener('canplay', () => { canvas.style.display = 'none'; });
    }
    const ctx = canvas.getContext('2d');
    let W, H, particles;
    const COUNT = 55;
    const MAX_DIST = 130;

    function Particle() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.r = Math.random() * 1.8 + 0.8;
    }
    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
    };

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
        particles = Array.from({ length: COUNT }, () => new Particle());
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
        ctx.clearRect(0, 0, W, H);
        // Connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < MAX_DIST) {
                    const alpha = 0.18 * (1 - d / MAX_DIST);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        // Dots
        particles.forEach(p => {
            p.update();
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(148, 197, 250, 0.55)';
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
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
            const target = parseFloat(el.dataset.target);
            const isDecimal = el.dataset.target.includes('.');
            const dur = target > 100 ? 1800 : 900;
            let current = 0;
            const inc = target / (dur / (1000 / 60));
            const timer = setInterval(() => {
                current += inc;
                if (current >= target) {
                    el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
                    clearInterval(timer);
                } else {
                    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
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
