"use client";

import { useEffect } from "react";

/**
 * PremiumEffects — Motion.dev-inspired animation system
 * All techniques extracted from motion.dev's own homepage:
 *
 * 1. Cursor Glow        – radial gradient tracking the mouse (lazy lerp)
 * 2. Magnetic Buttons   – buttons spring toward cursor on hover
 * 3. Card 3D Tilt       – perspective tilt + dynamic highlight on mousemove
 * 4. Hero Parallax      – background & content scroll at different rates
 * 5. Blur-Reveal IO     – IntersectionObserver adds blur→sharp reveal
 * 6. Stagger Grid       – sequential delay for grid children
 * 7. Word-Reveal Hero   – wraps hero h1 words in animated spans
 * 8. Shimmer on CTA     – periodic shimmer sweep on primary buttons
 * 9. Header Glass       – enhances existing scrolled state
 * 10. Section-line anim – animated separator lines on scroll
 */
export default function PremiumEffects() {
  useEffect(() => {
    /* ─── 1. CURSOR GLOW ─────────────────────────────────────────────────── */
    const glow = document.createElement("div");
    glow.className = "pm-cursor-glow";
    document.body.appendChild(glow);

    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let targetX = glowX;
    let targetY = glowY;
    let glowRaf: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateGlow = () => {
      glowX += (targetX - glowX) * 0.07;
      glowY += (targetY - glowY) * 0.07;
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      glowRaf = requestAnimationFrame(animateGlow);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    glowRaf = requestAnimationFrame(animateGlow);

    /* ─── 2. MAGNETIC BUTTONS ────────────────────────────────────────────── */
    const magnetCleanups: Array<() => void> = [];

    const applyMagnet = (btn: HTMLElement) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px) scale(1.03)`;
        btn.style.transition = "transform 0.1s ease";
      };
      const onLeave = () => {
        btn.style.transform = "translate(0,0) scale(1)";
        btn.style.transition = "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)";
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    };

    document
      .querySelectorAll<HTMLElement>(".btn-primary,.btn-hero-primary,.btn-emergency")
      .forEach((btn) => magnetCleanups.push(applyMagnet(btn)));

    /* ─── 3. CARD 3-D TILT & SPOTLIGHT ─────────────────────────────────── */
    const tiltCleanups: Array<() => void> = [];

    const applyTilt = (card: HTMLElement) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const x = px - 0.5;   // -0.5 → 0.5
        const y = py - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(6px)`;
        card.style.transition = "transform 0.08s ease-out";
        card.style.setProperty("--card-x", `${(px * 100).toFixed(1)}%`);
        card.style.setProperty("--card-y", `${(py * 100).toFixed(1)}%`);
        card.classList.add("card-spotlight-active");
      };
      const onLeave = () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
        card.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
        card.classList.remove("card-spotlight-active");
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    };

    document
      .querySelectorAll<HTMLElement>(".service-card,.stat-box,.doctor-card,.feature-card")
      .forEach((c) => tiltCleanups.push(applyTilt(c)));

    /* ─── 4. HERO PARALLAX ───────────────────────────────────────────────── */
    const heroBgImg = document.querySelector<HTMLElement>(".hero-bg img");
    const heroContent = document.querySelector<HTMLElement>(".hero-content");
    let ticking = false;

    const onParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          if (heroBgImg) {
            heroBgImg.style.transform = `scale(1.06) translateY(${sy * 0.28}px)`;
          }
          if (heroContent) {
            const progress = Math.min(sy / 650, 1);
            heroContent.style.transform = `translateY(${sy * 0.12}px)`;
            heroContent.style.opacity = String(1 - progress * 1.1);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onParallax, { passive: true });

    /* ─── 5. BLUR-REVEAL INTERSECTION OBSERVER ───────────────────────────── */
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("pm-visible");
            revealObs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const tag = (selector: string, motion: string, delayStep = 0) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        el.dataset.pmMotion = motion;
        if (delayStep) {
          const ms = Math.round(i * delayStep * 1000);
          el.style.transitionDelay = `${ms}ms`;
        }
        revealObs.observe(el);
      });
    };

    // Section headers — blur-in
    tag(".section-header", "blur-in");
    // Service cards — stagger slide-up
    tag(".service-card", "slide-up", 0.08);
    // Stat boxes — stagger slide-up
    tag(".stat-box", "slide-up", 0.1);
    // Value items — stagger slide-up
    tag(".value-item", "slide-up", 0.1);
    // Feature cards — stagger slide-up
    tag(".feature-card", "slide-up", 0.1);
    // Process steps — blur-in stagger
    tag(".process-step", "blur-in", 0.12);
    // Doctor cards — blur-in stagger
    tag(".doctor-card", "blur-in", 0.1);
    // Testimonial cards — slide-up stagger
    tag(".testimonial-card", "slide-up", 0.08);
    // About visuals — slide-right/left
    document.querySelectorAll<HTMLElement>(".about-visual").forEach((el) => {
      el.dataset.pmMotion = "slide-right";
      revealObs.observe(el);
    });
    document.querySelectorAll<HTMLElement>(".about-content").forEach((el) => {
      el.dataset.pmMotion = "slide-left";
      revealObs.observe(el);
    });
    // Contact cards
    tag(".contact-info-card", "slide-up", 0.08);
    // Appointment form
    tag(".appointment-form-wrap,.appointment-info", "blur-in", 0.1);

    /* ─── 6. HERO REVEAL (fade-in & blur-reveal) ─────────────────────────── */
    const triggerHeroFadeIns = () => {
      document.querySelectorAll<HTMLElement>(".hero .fade-in").forEach((el) => {
        const delay = parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(() => {
          el.classList.add("visible");
        }, delay);
      });
    };
    triggerHeroFadeIns();

    // Re-trigger if language button clicked
    const onLangChange = () => {
      setTimeout(triggerHeroFadeIns, 60);
    };
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", onLangChange);
    });

    /* ─── 8. ENHANCED PARTICLES (replace bare dots) ──────────────────────── */
    const pc = document.getElementById("hero-particles");
    if (pc && pc.childElementCount === 0) {
      const PARTICLES = [
        { s: 6, x: 8, y: 22, d: 7, dl: 0, o: 0.35, c: "rgba(20,184,166,.55)" },
        { s: 4, x: 22, y: 68, d: 5, dl: 1.2, o: 0.28, c: "rgba(33,116,196,.45)" },
        { s: 8, x: 78, y: 28, d: 9, dl: 2.1, o: 0.22, c: "rgba(20,184,166,.35)" },
        { s: 5, x: 63, y: 78, d: 6, dl: 0.6, o: 0.38, c: "rgba(45,212,191,.5)" },
        { s: 3, x: 44, y: 14, d: 5, dl: 1.8, o: 0.42, c: "rgba(33,116,196,.55)" },
        { s: 7, x: 88, y: 58, d: 10, dl: 3.2, o: 0.2, c: "rgba(20,184,166,.3)" },
        { s: 4, x: 33, y: 43, d: 7, dl: 2.6, o: 0.32, c: "rgba(45,212,191,.45)" },
        { s: 6, x: 68, y: 83, d: 8, dl: 4.1, o: 0.26, c: "rgba(20,184,166,.4)" },
        { s: 3, x: 14, y: 53, d: 6, dl: 0.9, o: 0.22, c: "rgba(33,116,196,.35)" },
        { s: 5, x: 52, y: 32, d: 9, dl: 3.7, o: 0.36, c: "rgba(45,212,191,.5)" },
        { s: 4, x: 91, y: 15, d: 7, dl: 1.5, o: 0.3, c: "rgba(20,184,166,.45)" },
        { s: 6, x: 6, y: 85, d: 8, dl: 2.8, o: 0.25, c: "rgba(33,116,196,.4)" },
      ];
      PARTICLES.forEach((p) => {
        const el = document.createElement("div");
        el.style.cssText = `
          position:absolute;
          width:${p.s}px; height:${p.s}px;
          left:${p.x}%; top:${p.y}%;
          border-radius:50%;
          background:${p.c};
          opacity:${p.o};
          will-change:transform;
          animation:pm-float-particle ${p.d}s ease-in-out infinite;
          animation-delay:${p.dl}s;
          pointer-events:none;
        `;
        pc.appendChild(el);
      });
    }

    /* ─── 9. ANIMATED SECTION DIVIDERS ──────────────────────────────────── */
    const lineObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("pm-line-visible");
            lineObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".pm-divider-line").forEach((el) => lineObs.observe(el));

    /* ─── 10. ENHANCED BACK-TO-TOP PULSE ─────────────────────────────────── */
    // Already handled by ClientScripts; just ensure the btn gets a class
    const btt = document.getElementById("back-to-top");
    if (btt) btt.classList.add("pm-btt");

    /* ─── CLEANUP ─────────────────────────────────────────────────────────── */
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onParallax);
      cancelAnimationFrame(glowRaf);
      revealObs.disconnect();
      lineObs.disconnect();
      magnetCleanups.forEach((fn) => fn());
      tiltCleanups.forEach((fn) => fn());
      if (document.body.contains(glow)) document.body.removeChild(glow);
    };
  }, []);

  return null;
}
