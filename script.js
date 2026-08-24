'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. SET YEAR
    ========================================================= */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* =========================================================
       2. TOPBAR HEIGHT → Push header down
    ========================================================= */
    const topbar = document.querySelector('.topbar');
    function setHeaderOffset() {
        const h = topbar ? topbar.offsetHeight : 0;
        document.querySelector('.header').style.top = h + 'px';
    }
    setHeaderOffset();
    window.addEventListener('resize', setHeaderOffset);

    /* =========================================================
       3. STICKY HEADER
    ========================================================= */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        toggleBackToTop();
    }, { passive: true });

    /* =========================================================
       4. MOBILE MENU
    ========================================================= */
    const menuBtn = document.getElementById('menu-toggle');
    const navbar  = document.getElementById('navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navbar.classList.toggle('open');
        });
        // Close on link click
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navbar.classList.remove('open');
            });
        });
    }

    /* =========================================================
       5. SCROLL SPY
    ========================================================= */
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY + 120 >= sec.offsetTop) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    /* =========================================================
       6. INTERSECTION OBSERVER — ANIMATE ELEMENTS
    ========================================================= */
    const animateEls = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    animateEls.forEach(el => observer.observe(el));

    /* =========================================================
       7. NUMBER COUNTER ANIMATION
    ========================================================= */
    function animateCounter(el) {
        const target  = parseInt(el.getAttribute('data-target') || '0');
        const decimal = el.getAttribute('data-decimal') || '';
        const suffix  = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const steps    = 60;
        const step      = target / steps;
        let count       = 0;
        const timer = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            if (decimal) {
                el.textContent = count.toFixed(0) + decimal;
            } else if (suffix) {
                el.textContent = suffix;
            } else {
                el.textContent = Math.floor(count);
            }
        }, duration / steps);
    }

    const counters = document.querySelectorAll('.stat-counter, .hero-stat .stat-number[data-target]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));

    /* =========================================================
       8. HERO PARTICLE DOTS
    ========================================================= */
    const particlesContainer = document.getElementById('hero-particles');
    if (particlesContainer) {
        const TOTAL = 18;
        for (let i = 0; i < TOTAL; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 3}px;
                height: ${Math.random() * 6 + 3}px;
                background: rgba(20,184,166,${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-particle ${Math.random() * 8 + 6}s ease-in-out infinite;
                animation-delay: ${Math.random() * -8}s;
            `;
            particlesContainer.appendChild(dot);
        }
        // Add keyframes for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0%,100% { transform: translate(0,0); opacity: .4; }
                33%  { transform: translate(${Math.random()*30-15}px, ${Math.random()*30-15}px); opacity: .8; }
                66%  { transform: translate(${Math.random()*30-15}px, ${Math.random()*30-15}px); opacity: .2; }
            }
        `;
        document.head.appendChild(style);
    }

    /* =========================================================
       9. GALLERY LIGHTBOX (simple)
    ========================================================= */
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');
            const overlay = document.createElement('div');
            overlay.id = 'lightbox';
            overlay.style.cssText = `
                position: fixed; inset: 0; z-index: 9999;
                background: rgba(0,0,0,.92);
                display: flex; flex-direction: column;
                align-items: center; justify-content: center; gap: 16px;
                cursor: zoom-out; padding: 20px;
            `;
            const lbImg = document.createElement('img');
            lbImg.src = img.src;
            lbImg.style.cssText = 'max-width: 90vw; max-height: 80vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,.5);';
            const lbCaption = document.createElement('p');
            lbCaption.textContent = caption ? caption.textContent : '';
            lbCaption.style.cssText = 'color: rgba(255,255,255,.85); font-size: 1rem;';
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            closeBtn.style.cssText = `position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,.15); border: none; color: #fff; font-size: 1.5rem; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;`;
            overlay.appendChild(lbImg);
            overlay.appendChild(lbCaption);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            const close = () => { overlay.remove(); document.body.style.overflow = ''; };
            overlay.addEventListener('click', close);
            closeBtn.addEventListener('click', close);
        });
    });

    /* =========================================================
       10. BACK TO TOP BUTTON
    ========================================================= */
    const bttBtn = document.getElementById('back-to-top');
    function toggleBackToTop() {
        if (bttBtn) bttBtn.classList.toggle('visible', window.scrollY > 400);
    }
    if (bttBtn) {
        bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* =========================================================
       11. FORM SUBMISSION (mock)
    ========================================================= */
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name    = document.getElementById('f-name').value.trim();
            const service = document.getElementById('f-service');
            const svcText = service.options[service.selectedIndex]?.text || '';
            const date    = document.getElementById('f-date').value;

            // Simple success notification
            const btn = form.querySelector('.btn-submit-appt');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check-circle"></i> تم الإرسال بنجاح!';
            btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert(`✅ شكراً لك يا ${name}!\n\nتم استلام طلب حجز موعدك بنجاح.\nالتخصص: ${svcText}\nالتاريخ: ${date}\n\nسيتواصل معك فريقنا خلال أقل من 24 ساعة لتأكيد الموعد.`);
                form.reset();
                btn.innerHTML = orig;
                btn.style.background = '';
                btn.disabled = false;
            }, 800);
        });
    }

    /* =========================================================
       12. SMOOTH TOPBAR HIDE ON SCROLL
    ========================================================= */
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if (topbar) {
            if (current > 80) {
                topbar.style.transform = 'translateY(-100%)';
                topbar.style.transition = 'transform .3s ease';
                if (header.classList.contains('scrolled')) {
                    header.style.top = '0';
                }
            } else {
                topbar.style.transform = 'translateY(0)';
                setHeaderOffset();
            }
        }
        lastScroll = current;
    }, { passive: true });

});
