/* ================================================================
   IDSOL 2026 — Shared JS
   Injects nav + footer, nodal background, scroll reveal
   ================================================================ */

(function () {
    'use strict';

    /* ── 1. Determine current page for active link ── */
    const path = window.location.pathname.split('/').pop() || 'index.html';

    /* ── 2. Nav HTML ── */
    const navHTML = `
<nav id="site-nav">
    <a class="nav-logo" href="index.html">
        <img src="https://cdn.kb.institute/eto-2026/IDSOL/Logo/Square_Dark_Background_2026_500.png" alt="IDSOL Logo">
        <span class="nav-logo-text">IDSOL 2026</span>
    </a>
    <ul class="nav-links">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li><a href="about.html" data-page="about.html">About Us</a></li>
        <li>
            <span>
                Competition
                <svg class="nav-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="4 6 8 10 12 6"/>
                </svg>
            </span>
            <div class="nav-dropdown">
                <a href="competition.html" data-page="competition.html">Overview</a>
                <a href="eligibility.html"  data-page="eligibility.html">Eligibility</a>
                <a href="timeline.html"     data-page="timeline.html">Timeline</a>
                <a href="submission.html"   data-page="submission.html">Submission</a>
                <a href="accolades.html"    data-page="accolades.html">Accolades</a>
            </div>
        </li>
        <li><a href="registration.html" data-page="registration.html">Registration</a></li>
        <li><a href="contact.html"      data-page="contact.html">Contact</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
    </button>
</nav>

<div id="mobile-nav">
    <ul>
        <li><a href="index.html"        data-page="index.html">Home</a></li>
        <li><a href="about.html"        data-page="about.html">About Us</a></li>
        <li>
            <span id="mob-comp-toggle">Competition ▾</span>
            <div class="mobile-sub" id="mob-comp-sub">
                <a href="competition.html" data-page="competition.html">Overview</a>
                <a href="eligibility.html"  data-page="eligibility.html">Eligibility</a>
                <a href="timeline.html"     data-page="timeline.html">Timeline</a>
                <a href="submission.html"   data-page="submission.html">Submission</a>
                <a href="accolades.html"    data-page="accolades.html">Accolades</a>
            </div>
        </li>
        <li><a href="registration.html" data-page="registration.html">Registration</a></li>
        <li><a href="contact.html"      data-page="contact.html">Contact</a></li>
    </ul>
</div>
<div class="nav-spacer"></div>`;

    /* ── 3. Footer HTML ── */
    const footerHTML = `
<footer class="site-footer">
    <div class="footer-line"></div>
    <div class="footer-inner">
        <div class="footer-columns">
            <div class="footer-col">
                <h4>IDSOL: International Data Science Olympiad</h4>
                <div class="footer-icons">
                    <a href="https://2026.idsol.org/idsol" target="_blank" rel="noopener" title="Website">
                        <i data-lucide="globe" style="width:24px;height:24px;"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/idsol-org" target="_blank" rel="noopener" title="LinkedIn">
                        <i data-lucide="linkedin" style="width:24px;height:24px;"></i>
                    </a>
                    <a href="https://www.instagram.com/idsol_org/" target="_blank" rel="noopener" title="Instagram">
                        <i data-lucide="instagram" style="width:24px;height:24px;"></i>
                    </a>
                </div>
            </div>
            <div class="footer-col">
                <h4>KBI: Königsberger Bridges Institute</h4>
                <div class="footer-icons">
                    <a href="https://www.kb.institute/" target="_blank" rel="noopener" title="Website">
                        <i data-lucide="globe" style="width:24px;height:24px;"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/kbi-eu/" target="_blank" rel="noopener" title="LinkedIn">
                        <i data-lucide="linkedin" style="width:24px;height:24px;"></i>
                    </a>
                    <a href="https://www.instagram.com/kbi.eu/" target="_blank" rel="noopener" title="Instagram">
                        <i data-lucide="instagram" style="width:24px;height:24px;"></i>
                    </a>
                </div>
            </div>
        </div>
        <p class="footer-copyright">© 2020–2026 International Data Science Olympiad (IDSOL Foundation). All Rights Reserved.</p>
    </div>
</footer>`;

    /* ── 4. Inject into page ── */
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    /* ── 5. Mark active links ── */
    document.querySelectorAll('[data-page]').forEach(a => {
        if (a.getAttribute('data-page') === path) a.classList.add('active');
    });

    /* ── 6. Hamburger toggle ── */
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

    /* Mobile competition sub-menu */
    document.getElementById('mob-comp-toggle').addEventListener('click', () => {
        document.getElementById('mob-comp-sub').classList.toggle('open');
    });

    /* Close mobile nav on link click */
    mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    });

    /* ── 7. Nav scroll style ── */
    const nav = document.getElementById('site-nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* ── 8. Scroll reveal ── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── 9. Nodal background canvas ── */
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [];

    class Node {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            const vh = canvas.height * 4;
            this.y = Math.pow(Math.random(), 0.6) * vh;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2.5 + 1.5;
            this.z = Math.random() * 1.2 + 0.2;
            this.baseAlpha = 0.25 + Math.random() * 0.35;
        }
        update() {
            this.x += this.vx * this.z;
            this.y += this.vy * this.z;
            const lim = canvas.height * 4;
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = lim;
            if (this.y > lim) this.y = 0;
        }
        draw(scrollY) {
            const dy = (this.y - scrollY * this.z) % (canvas.height * 2.5);
            if (dy < -100 || dy > canvas.height + 100) return;
            ctx.beginPath();
            ctx.arc(this.x, dy, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(156,233,255,${this.baseAlpha})`;
            ctx.fill();
        }
    }

    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        nodes = [];
        const count = Math.floor((canvas.width * canvas.height) / 7000);
        for (let i = 0; i < count; i++) nodes.push(new Node());
    }

    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const maxDist = 200;
        const pos = nodes.map(n => ({
            x: n.x,
            y: (n.y - scrollY * n.z) % (canvas.height * 2.5),
            z: n.z
        }));
        for (let i = 0; i < nodes.length; i++) {
            const pi = pos[i];
            if (pi.y < -100 || pi.y > canvas.height + 100) continue;
            for (let j = i + 1; j < nodes.length; j++) {
                const pj = pos[j];
                const dist = Math.hypot(pi.x - pj.x, pi.y - pj.y);
                if (dist < maxDist) {
                    ctx.strokeStyle = `rgba(156,233,255,${(1 - dist / maxDist) * 0.28})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(pi.x, pi.y);
                    ctx.lineTo(pj.x, pj.y);
                    ctx.stroke();
                }
            }
        }
        nodes.forEach(n => { n.update(); n.draw(scrollY); });
        requestAnimationFrame(drawCanvas);
    }

    initCanvas();
    drawCanvas();
    window.addEventListener('resize', initCanvas, { passive: true });
    setTimeout(() => canvas.classList.add('active'), 300);

    /* ── 10. Lucide icons (after nav/footer injected) ── */
    if (window.lucide) lucide.createIcons();
    else window.addEventListener('load', () => { if (window.lucide) lucide.createIcons(); });
})();
