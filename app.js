/* ==============================================
   VERTEX — Premium Animated Site
   app.js
   ============================================== */



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
