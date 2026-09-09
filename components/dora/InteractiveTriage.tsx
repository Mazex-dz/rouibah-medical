"use client";

import React, { useState, useEffect } from "react";
import BorderBeam from "./BorderBeam";

interface TriageOption {
  id: string;
  icon: string;
  badge: { fr: string; ar: string };
  title: { fr: string; ar: string };
  subtitle: { fr: string; ar: string };
  description: { fr: string; ar: string };
  phone: string;
  availability: { fr: string; ar: string };
  symptoms: { fr: string[]; ar: string[] };
  accentColor: string;
  gradient: string;
}

const TRIAGE_OPTIONS: TriageOption[] = [
  {
    id: "urgences",
    icon: "fa-solid fa-truck-medical",
    badge: { fr: "Priorité Vitale", ar: "أولوية قصوى" },
    title: { fr: "Urgences 24/7 & Traumatologie", ar: "الاستعجالات 24/7 والحالات الطارئة" },
    subtitle: { fr: "Accueil immédiat sans rendez-vous", ar: "استقبال فوري دون موعد مسبق" },
    description: {
      fr: "Prise en charge instantanée des urgences aiguës, traumatismes, détresses respiratoires et malaises. Équipe médicale de garde permanente avec équipement de réanimation complet et ECG.",
      ar: "تكفل فوري بالحالات الحرجة، الحوادث، ضيق التنفس والآلام الحادة. طاقم طبي مناوب على مدار الساعة مجهز بأحدث أدوات الإنعاش وتخطيط القلب.",
    },
    phone: "0559 50 50 05",
    availability: { fr: "Ouvert 24h/24 — 7j/7", ar: "مفتوح 24/7 بدون انقطاع" },
    symptoms: {
      fr: ["Douleurs thoraciques", "Traumatisme & Blessure", "Fièvre aiguë", "Malaise soudain"],
      ar: ["آلام حادة بالصدر", "إصابات وجروح", "حمى مفاجئة", "إغماء ووعكة صحية"],
    },
    accentColor: "#ef4444",
    gradient: "from-red-500/10 to-rose-600/10",
  },
  {
    id: "pediatrie",
    icon: "fa-solid fa-child-reaching",
    badge: { fr: "Spécialité Enfant", ar: "طب الأطفال" },
    title: { fr: "Pédiatrie & Soins du Nourrisson", ar: "طب الأطفال وحديثي الولادة" },
    subtitle: { fr: "Dr. Pédiatre Spécialiste", ar: "طبيب مختص في طب الأطفال" },
    description: {
      fr: "Consultations pédiatriques complètes, suivi de croissance, vaccinations, bilan néonatal et traitement des pathologies infectieuses de l'enfant dans un espace adapté et rassurant.",
      ar: "فحوصات شاملة لحديثي الولادة والأطفال، متابعة النمو، اللقاحات الدورية وعلاج الأمراض المعدية في بيئة دافئة ومطمئنة للطفل وأسرته.",
    },
    phone: "0559 50 50 01",
    availability: { fr: "Consultations sur Rendez-vous", ar: "فحوصات بالمواعيد" },
    symptoms: {
      fr: ["Suivi de croissance", "Vaccinations", "Toux & Bronchiolite", "Coliques du nourrisson"],
      ar: ["متابعة الوزن والنمو", "التلقيحات الرسمية", "السعال والزكام", "آلام ومغص الرضع"],
    },
    accentColor: "#0284c7",
    gradient: "from-sky-500/10 to-blue-600/10",
  },
  {
    id: "dentaire",
    icon: "fa-solid fa-tooth",
    badge: { fr: "Cabinet Dentaire", ar: "طب وجراحة الأسنان" },
    title: { fr: "Médecine Dentaire & Esthétique", ar: "طب وجراحة وتجميل الأسنان" },
    subtitle: { fr: "Soins conservateurs sans douleur", ar: "علاجات حديثة بدون ألم" },
    description: {
      fr: "Soins des caries, dévitalisations indolores, détartrage ultrasonique, prothèses dentaires et esthétique du sourire. Équipements de pointe pour un confort maximal.",
      ar: "علاج تسوس الأسنان، سحب العصب بدون ألم، تنظيف وتبييض الأسنان، وتركيب الأطقم والتعويضات السنية الثابتة والمتحركة بأحدث التقنيات.",
    },
    phone: "0559 50 50 06",
    availability: { fr: "Sur RDV + Urgences dentaires", ar: "بالمواعيد + طوارئ الأسنان" },
    symptoms: {
      fr: ["Rage de dents", "Détartrage & Blanchiment", "Extraction & Carie", "Prothèses dentaires"],
      ar: ["ألم الأسنان الحاد", "تنظيف وتبييض الأسنان", "علاج التسوس والقلع", "تركيبات الأسنان"],
    },
    accentColor: "#0d9488",
    gradient: "from-teal-500/10 to-emerald-600/10",
  },
  {
    id: "gynecologie",
    icon: "fa-solid fa-person-breastfeeding",
    badge: { fr: "Santé Féminine", ar: "صحة المرأة" },
    title: { fr: "Gynécologie & Obstétrique", ar: "أمراض النساء والتوليد" },
    subtitle: { fr: "Suivi de grossesse & Maternité", ar: "متابعة الحمل والولادة" },
    description: {
      fr: "Suivi attentif de la femme enceinte de la conception à l'accouchement, échographies obstétricales 3D/4D de précision, dépistage préventif et consultations gynécologiques spécialisées.",
      ar: "متابعة دقيقة للحامل طيلة مراحل الحمل والولادة، إيكوغرافيا ثلاثية ورباعية الأبعاد، فحوصات دورية وتشخيص مبكر لصحة المرأة والرحم.",
    },
    phone: "0559 50 50 01",
    availability: { fr: "Présence Spécialiste Dédiée", ar: "طبيبة مختصة متواجدة" },
    symptoms: {
      fr: ["Suivi mensuel de grossesse", "Échographie morphologique", "Bilan gynécologique", "Douleurs pelviennes"],
      ar: ["متابعة الحمل الشهرية", "إيكوغرافيا الجنين المورفولوجية", "فحص دوري وقائي", "آلام الحوض"],
    },
    accentColor: "#db2777",
    gradient: "from-pink-500/10 to-rose-600/10",
  },
  {
    id: "laboratoire",
    icon: "fa-solid fa-flask-vial",
    badge: { fr: "Biologie Médicale", ar: "مخبر التحاليل" },
    title: { fr: "Laboratoire d'Analyses & Anapate", ar: "مخبر التحاليل الطبية والتشريح المرضي" },
    subtitle: { fr: "Analyses automatisées de haute précision", ar: "تحاليل آلية سريعة ودقيقة" },
    description: {
      fr: "Panel complet d'analyses biologiques : numération sanguine (FNS), biochimie, hormonologie, bactériologie et service d'anatomopathologie dirigé par un spécialiste fort de 25+ ans d'expérience.",
      ar: "باقة شاملة من التحاليل البيولوجية: تحليل الدم الكامل، الهرمونات، السكري، البكتيريا، وخدمة التشريح المرضي بإشراف طبيب مختص بخبرة تفوق 25 سنة.",
    },
    phone: "0559 50 50 01",
    availability: { fr: "Résultats Rapides & Fiables", ar: "نتائج سريعة وموثوقة" },
    symptoms: {
      fr: ["Bilan sanguin complet", "Glycémie & Cholestérol", "Biopsies & Cytologie", "Analyses d'urine"],
      ar: ["تحليل الدم الكامل FNS", "فحص السكري والكولسترول", "فحص الأنسجة والخلايا", "تحاليل البول"],
    },
    accentColor: "#7c3aed",
    gradient: "from-purple-500/10 to-indigo-600/10",
  },
  {
    id: "imagerie",
    icon: "fa-solid fa-x-ray",
    badge: { fr: "Imagerie de Pointe", ar: "الأشعة والسكانير" },
    title: { fr: "Radiologie Numérique & Scanner", ar: "الأشعة الرقمية، السكانير والإيكوغرافيا" },
    subtitle: { fr: "Scanner haute résolution & Échographies", ar: "جهاز سكانير حديث وفحوصات فورية" },
    description: {
      fr: "Centre d'imagerie diagnostique équipé d'un scanner moderne, de radiographie numérique haute définition et d'échographes dernière génération avec interprétation immédiate par nos spécialistes.",
      ar: "قسم تصوير طبي متكامل مزود بجهاز سكانير عالي الدقة، أشعة سينية رقمية وإيكوغرافيا متطورة لتشخيص فوري ومضمون بإشراف أطباء الأشعة.",
    },
    phone: "0559 50 50 03",
    availability: { fr: "Service Permanent", ar: "خدمة مستمرة" },
    symptoms: {
      fr: ["Scanner corps entier", "Radiographie pulmonaire", "Échographie abdominale", "Bilan traumatique"],
      ar: ["فحص السكانير الكامل", "أشعة الصدر والعظام", "إيكوغرافيا البطن", "فحص الكسور"],
    },
    accentColor: "#059669",
    gradient: "from-emerald-500/10 to-teal-600/10",
  },
  {
    id: "ambulance",
    icon: "fa-solid fa-ambulance",
    badge: { fr: "Assistance Mobile", ar: "الإسعاف المنزلي" },
    title: { fr: "Ambulance 24/7 & Soins à Domicile", ar: "الإسعاف والنقل الصحي والرعاية المنزلية" },
    subtitle: { fr: "Intervention rapide à Bordj Menaïel", ar: "تدخل سريع بولاية بومرداس" },
    description: {
      fr: "Véhicules d'ambulance tout confort pour transport médicalisé d'urgence ou programmé, et équipe soignante pour perfusions, pansements et suivi infirmier directement à votre domicile.",
      ar: "سيارات إسعاف مجهزة لنقل المرضى في أفضل الظروف براحة وأمان، مع فريق تمريض لتقديم الحقن، الضمادات والمتابعة الطبية في منازلكم.",
    },
    phone: "0559 90 01 00",
    availability: { fr: "Disponible 24h/24", ar: "خدمة 24 ساعة" },
    symptoms: {
      fr: ["Transfert médicalisé", "Soins à domicile", "Injections & Perfusions", "Transport personnes âgées"],
      ar: ["نقل صحي طارئ", "رعاية منزلية للمريض", "حقن وتغيير ضمادات", "نقل كبار السن"],
    },
    accentColor: "#ea580c",
    gradient: "from-amber-500/10 to-orange-600/10",
  },
];

export default function InteractiveTriage() {
  const [activeId, setActiveId] = useState<string>("urgences");
  const [currentLang, setCurrentLang] = useState<string>("fr");

  useEffect(() => {
    setCurrentLang(document.documentElement.lang || "fr");
    const observer = new MutationObserver(() => {
      setCurrentLang(document.documentElement.lang || "fr");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"],
    });
    return () => observer.disconnect();
  }, []);

  const isAr = currentLang === "ar";
  const activeService = TRIAGE_OPTIONS.find((s) => s.id === activeId) || TRIAGE_OPTIONS[0];

  return (
    <section className="dora-triage-section py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white relative overflow-hidden" id="interactive-triage">
      {/* Ambient background glow dots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-500/20 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <i className="fa-solid fa-compass-drafting text-teal-500"></i>
            {isAr ? "دليل التوجيه التفاعلي الذكي" : "Triage & Orientation Médicale"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {isAr ? (
              <>
                كيف يمكننا <span className="gradient-text">مساعدتكم اليوم ؟</span>
              </>
            ) : (
              <>
                Comment pouvons-nous vous <span className="gradient-text">aider aujourd'hui ?</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {isAr
              ? "اختر حاجتك الطبية لتحصل فوراً على القسم المختص، رقم الهاتف المباشر، وأسرع طريقة للرعاية."
              : "Sélectionnez votre besoin ou symptôme pour identifier instantanément le bon service, le contact direct et la prise en charge la plus rapide."}
          </p>
        </div>

        {/* Triage Grid: Category Buttons on Left/Top, 3D Morphing Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {TRIAGE_OPTIONS.map((opt) => {
              const isActive = opt.id === activeId;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveId(opt.id)}
                  type="button"
                  className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white border-teal-500/50 shadow-xl shadow-teal-900/10 translate-x-1 scale-[1.02]"
                      : "bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                  style={{
                    borderLeftColor: isActive ? opt.accentColor : undefined,
                    borderLeftWidth: isActive ? "4px" : undefined,
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl transition-transform group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: isActive ? opt.accentColor : "#f1f5f9",
                        color: isActive ? "#ffffff" : opt.accentColor,
                      }}
                    >
                      <i className={`${opt.icon} text-lg`}></i>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors">
                          {isAr ? opt.title.ar : opt.title.fr}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {isAr ? opt.subtitle.ar : opt.subtitle.fr}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${opt.accentColor}18`,
                        color: opt.accentColor,
                      }}
                    >
                      {isAr ? opt.badge.ar : opt.badge.fr}
                    </span>
                    <i
                      className={`fa-solid ${
                        isAr ? "fa-chevron-left" : "fa-chevron-right"
                      } text-xs text-slate-400 transition-transform ${
                        isActive ? "text-teal-600 scale-125" : ""
                      }`}
                    ></i>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive 3D Card Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-2xl shadow-slate-900/10 overflow-hidden transition-all duration-500">
              {/* Dora Laser Border Beam */}
              <BorderBeam
                size={280}
                duration={10}
                borderWidth={2}
                colorFrom={activeService.accentColor}
                colorTo="#38bdf8"
              />

              {/* Dynamic Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl shadow-md text-white text-2xl"
                    style={{ backgroundColor: activeService.accentColor }}
                  >
                    <i className={activeService.icon}></i>
                  </div>
                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1"
                      style={{
                        backgroundColor: `${activeService.accentColor}18`,
                        color: activeService.accentColor,
                      }}
                    >
                      {isAr ? activeService.badge.ar : activeService.badge.fr}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {isAr ? activeService.title.ar : activeService.title.fr}
                    </h3>
                  </div>
                </div>

                {/* Status Beacon */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-800 text-xs font-bold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>
                    {isAr ? activeService.availability.ar : activeService.availability.fr}
                  </span>
                </div>
              </div>

              {/* Body Description */}
              <div className="py-6">
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  {isAr ? activeService.description.ar : activeService.description.fr}
                </p>

                {/* Symptom Tags */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    {isAr ? "الحالات والأعراض المعالجة :" : "Symptômes & motifs de consultation :"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(isAr ? activeService.symptoms.ar : activeService.symptoms.fr).map(
                      (symp, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          <i className="fa-solid fa-circle-check text-teal-600 text-[10px]"></i>
                          {symp}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Quick Action Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${activeService.phone.replace(/\s+/g, "")}`}
                    className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: `linear-gradient(135deg, ${activeService.accentColor}, #0f172a)`,
                    }}
                  >
                    <i className="fa-solid fa-phone-volume"></i>
                    <span>
                      {isAr ? "اتصال مباشر :" : "Appel direct :"}{" "}
                      <span className="font-mono">{activeService.phone}</span>
                    </span>
                  </a>

                  <a
                    href={`https://wa.me/213559505001?text=${encodeURIComponent(
                      isAr
                        ? `السلام عليكم، أود الاستفسار بخصوص خدمة ${activeService.title.ar}`
                        : `Bonjour, je souhaite des renseignements sur le service : ${activeService.title.fr}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-600/20"
                    title="WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>

                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all hover:scale-105 active:scale-95"
                  >
                    <i className="fa-solid fa-calendar-plus text-teal-600"></i>
                    <span>{isAr ? "طلب موعد" : "Réserver"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
