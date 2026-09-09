"use client";

import { useEffect } from "react";

export default function DoraScrollEffects() {
  useEffect(() => {
    // ── 1. 3D Card Gyroscopic Glare & Specular Spotlight ───────────────
    const cards = document.querySelectorAll<HTMLElement>(
      ".service-card, .doctor-card, .review-card, .stat-box, .news-card, .whyus-cta-card, .info-card"
    );

    const cardCleanups: Array<() => void> = [];

    cards.forEach((card) => {
      let rafId: number;

      const onMouseMove = (e: MouseEvent) => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const px = (x / rect.width - 0.5) * 2; // -1 to 1
          const py = (y / rect.height - 0.5) * 2;

          card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
          card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
          card.style.transform = `perspective(1000px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(8px)`;
          card.classList.add("dora-specular-active");
        });
      };

      const onMouseLeave = () => {
        cancelAnimationFrame(rafId);
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
        card.classList.remove("dora-specular-active");
      };

      card.addEventListener("mousemove", onMouseMove, { passive: true });
      card.addEventListener("mouseleave", onMouseLeave, { passive: true });

      cardCleanups.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    // ── 2. Dora 3D Scroll Reveal Observer ─────────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dora-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const targetElements = document.querySelectorAll<HTMLElement>(
      ".service-card, .doctor-card, .review-card, .process-step, .news-card, .stat-box, .about-values .value-item, .contact-grid > div"
    );

    targetElements.forEach((el, index) => {
      el.classList.add("dora-scroll-target");
      el.style.setProperty("--dora-stagger", `${(index % 4) * 0.08}s`);
      observer.observe(el);
    });

    // ── 3. Smooth Anchor Click Handler with Offset for Fixed Header ───
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cardCleanups.forEach((c) => c());
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
