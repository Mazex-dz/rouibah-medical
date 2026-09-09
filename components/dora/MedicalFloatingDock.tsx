"use client";

import React, { useEffect, useState } from "react";

export default function MedicalFloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Track active language
    const lang = document.documentElement.lang || "fr";
    setCurrentLang(lang);

    const observer = new MutationObserver(() => {
      setCurrentLang(document.documentElement.lang || "fr");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"],
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleLangToggle = () => {
    const target = currentLang === "fr" ? "ar" : "fr";
    const btn = document.querySelector(`.lang-btn[data-lang="${target}"]`) as HTMLButtonElement | null;
    if (btn) {
      btn.click();
    } else if (typeof window !== "undefined" && (window as any).switchLanguage) {
      (window as any).switchLanguage(target);
    }
  };

  const isAr = currentLang === "ar";

  return (
    <div
      className={`dora-floating-dock-container fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="dora-floating-dock flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-teal-500/30 shadow-2xl shadow-blue-900/20">
        {/* 1. Emergency Speed Dial */}
        <a
          href="tel:0559505001"
          className="dora-dock-item emergency-item group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-red-500/40 hover:scale-105 active:scale-95 transition-all"
          title={isAr ? "اتصل بالإسعاف 24/7" : "Appel d'Urgence 24/7"}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <i className="fa-solid fa-phone-volume text-xs"></i>
          <span className="hidden md:inline font-bold">
            {isAr ? "طوارئ 24/7" : "Urgences 24/7"}
          </span>
        </a>

        {/* 2. WhatsApp Direct */}
        <a
          href="https://wa.me/213559505001"
          target="_blank"
          rel="noreferrer"
          className="dora-dock-item group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 transition-all"
          title={isAr ? "محادثة واتساب مباشرة" : "WhatsApp direct"}
        >
          <i className="fa-brands fa-whatsapp text-base sm:text-lg"></i>
          <span className="dora-dock-tooltip absolute -top-9 px-2 py-1 rounded bg-slate-900 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            WhatsApp 24/7
          </span>
        </a>

        {/* 3. Fast Appointment Booking */}
        <a
          href="#appointment"
          className="dora-dock-item group relative flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-teal-50 text-teal-700 border border-teal-500/25 hover:bg-teal-600 hover:text-white hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-semibold"
          title={isAr ? "حجز موعد" : "Prendre RDV"}
        >
          <i className="fa-solid fa-calendar-plus text-xs sm:text-sm"></i>
          <span className="hidden sm:inline">
            {isAr ? "حجز موعد" : "Prendre RDV"}
          </span>
          <span className="dora-dock-tooltip absolute -top-9 px-2 py-1 rounded bg-slate-900 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            {isAr ? "احجز استشارتك أونلاين" : "Réserver une consultation"}
          </span>
        </a>

        {/* 4. Interactive Triage Shortcut */}
        <a
          href="#interactive-triage"
          className="dora-dock-item group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-50 text-sky-700 border border-sky-500/25 hover:bg-sky-600 hover:text-white hover:scale-105 active:scale-95 transition-all"
          title={isAr ? "دليل التوجيه الطبي" : "Triage Médical Interactif"}
        >
          <i className="fa-solid fa-stethoscope text-sm sm:text-base"></i>
          <span className="dora-dock-tooltip absolute -top-9 px-2 py-1 rounded bg-slate-900 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            {isAr ? "توجيه طبي فوري" : "Orientation Médicale"}
          </span>
        </a>

        <div className="h-5 w-[1px] bg-slate-200 mx-0.5" />

        {/* 5. Language Switcher (FR / AR) */}
        <button
          onClick={handleLangToggle}
          type="button"
          className="dora-dock-item group relative flex items-center justify-center px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-teal-600 hover:text-white hover:scale-105 active:scale-95 transition-all text-xs font-bold font-mono"
          title={isAr ? "Passer en Français" : "التحويل إلى العربية"}
        >
          <span>{isAr ? "FR" : "عربي"}</span>
          <span className="dora-dock-tooltip absolute -top-9 px-2 py-1 rounded bg-slate-900 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            {isAr ? "Changer de langue (FR)" : "تغيير اللغة (العربية)"}
          </span>
        </button>

        {/* 6. Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          className="dora-dock-item group relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-800 hover:text-white hover:scale-105 active:scale-95 transition-all"
          aria-label="Haut de page"
        >
          <i className="fa-solid fa-arrow-up text-xs"></i>
          <span className="dora-dock-tooltip absolute -top-9 px-2 py-1 rounded bg-slate-900 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            {isAr ? "للأعلى" : "Haut"}
          </span>
        </button>
      </div>
    </div>
  );
}
