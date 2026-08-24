"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // 1. Current year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // 2. Topbar & Header offset
    const topbar = document.querySelector(".topbar") as HTMLElement | null;
    const header = document.getElementById("header") as HTMLElement | null;

    const setHeaderOffset = () => {
      if (header) {
        const h = topbar ? topbar.offsetHeight : 0;
        header.style.top = h + "px";
      }
    };
    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);

    // 3. Sticky Header & Back to Top visibility & Scroll Spy
    const bttBtn = document.getElementById("back-to-top");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (header) {
        header.classList.toggle("scrolled", currentScroll > 60);
      }
      if (bttBtn) {
        bttBtn.classList.toggle("visible", currentScroll > 400);
      }
      if (topbar && header) {
        if (currentScroll > 80) {
          topbar.style.transform = "translateY(-100%)";
          topbar.style.transition = "transform .3s ease";
          if (header.classList.contains("scrolled")) {
            header.style.top = "0";
          }
        } else {
          topbar.style.transform = "translateY(0)";
          setHeaderOffset();
        }
      }

      // Scroll spy
      let currentSectionId = "";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (currentScroll + 120 >= el.offsetTop) {
          currentSectionId = el.id;
        }
      });
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === "#" + currentSectionId);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 4. Mobile menu
    const menuBtn = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {
      const toggleMenu = () => {
        menuBtn.classList.toggle("open");
        navbar.classList.toggle("open");
      };
      menuBtn.addEventListener("click", toggleMenu);

      const closeMenu = () => {
        menuBtn.classList.remove("open");
        navbar.classList.remove("open");
      };
      navbar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });
    }

    // 5. Intersection Observer — Animate elements
    const animateEls = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    animateEls.forEach((el) => observer.observe(el));

    // 6. Stat Counter animation
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const decimal = el.getAttribute("data-decimal") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1800;
      const steps = 60;
      const step = target / steps;
      let count = 0;
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
          el.textContent = Math.floor(count).toString();
        }
      }, duration / steps);
    };

    const counters = document.querySelectorAll(
      ".stat-counter, .hero-stat .stat-number[data-target]"
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));

    // 7. Hero Particles
    const particlesContainer = document.getElementById("hero-particles");
    if (particlesContainer && particlesContainer.childElementCount === 0) {
      const TOTAL = 18;
      for (let i = 0; i < TOTAL; i++) {
        const dot = document.createElement("div");
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
    }

    // 8. Gallery Lightbox
    const galleryItems = document.querySelectorAll(".gallery-item");
    const cleanupFns: Array<() => void> = [];

    galleryItems.forEach((item) => {
      const clickHandler = () => {
        const img = item.querySelector("img");
        if (!img) return;
        const caption = item.querySelector(".gallery-caption");
        const overlay = document.createElement("div");
        overlay.id = "lightbox";
        overlay.style.cssText = `
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,.92);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 16px;
          cursor: zoom-out; padding: 20px;
        `;
        const lbImg = document.createElement("img");
        lbImg.src = img.src;
        lbImg.style.cssText =
          "max-width: 90vw; max-height: 80vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,.5);";
        const lbCaption = document.createElement("p");
        lbCaption.textContent = caption ? caption.textContent : "";
        lbCaption.style.cssText =
          "color: rgba(255,255,255,.85); font-size: 1rem;";
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        closeBtn.style.cssText = `position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,.15); border: none; color: #fff; font-size: 1.5rem; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;`;

        overlay.appendChild(lbImg);
        overlay.appendChild(lbCaption);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        const close = () => {
          overlay.remove();
          document.body.style.overflow = "";
        };
        overlay.addEventListener("click", close);
        closeBtn.addEventListener("click", close);
      };
      item.addEventListener("click", clickHandler);
      cleanupFns.push(() => item.removeEventListener("click", clickHandler));
    });

    // 9. Back to Top Click
    if (bttBtn) {
      const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });
      bttBtn.addEventListener("click", scrollToTop);
      cleanupFns.push(() => bttBtn.removeEventListener("click", scrollToTop));
    }

    // 10. Booking Form submission
    const form = document.getElementById("booking-form") as HTMLFormElement | null;
    if (form) {
      const submitHandler = (e: Event) => {
        e.preventDefault();
        const nameInput = document.getElementById("f-name") as HTMLInputElement | null;
        const serviceSelect = document.getElementById("f-service") as HTMLSelectElement | null;
        const dateInput = document.getElementById("f-date") as HTMLInputElement | null;

        const name = nameInput ? nameInput.value.trim() : "";
        const svcText = serviceSelect
          ? serviceSelect.options[serviceSelect.selectedIndex]?.text || ""
          : "";
        const date = dateInput ? dateInput.value : "";

        const btn = form.querySelector(".btn-submit-appt") as HTMLButtonElement | null;
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check-circle"></i> تم الإرسال بنجاح!';
          btn.style.background = "linear-gradient(135deg, #059669, #10b981)";
          btn.disabled = true;

          setTimeout(() => {
            alert(
              `✅ شكراً لك يا ${name}!\n\nتم استلام طلب حجز موعدك بنجاح.\nالتخصص: ${svcText}\nالتاريخ: ${date}\n\nسيتواصل معك فريقنا خلال أقل من 24 ساعة لتأكيد الموعد.`
            );
            form.reset();
            btn.innerHTML = orig;
            btn.style.background = "";
            btn.disabled = false;
          }, 800);
        }
      };
      form.addEventListener("submit", submitHandler);
      cleanupFns.push(() => form.removeEventListener("submit", submitHandler));
    }

    return () => {
      window.removeEventListener("resize", setHeaderOffset);
      window.removeEventListener("scroll", onScroll);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return null;
}
