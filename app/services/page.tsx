import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { galleryData } from "../data/galleries";

export const metadata: Metadata = {
  title: "Nos Services | Groupe Médical Rouibah — Bordj Menaïel",
  description:
    "Découvrez les services médicaux du Groupe Médical Rouibah : Urgences 24/7, Anapate, Laboratoire d'analyses, Imagerie médicale à Bordj Menaïel.",
};

const services = [
  {
    id: "urgences",
    icon: "fa-solid fa-truck-medical",
    color: "#ef4444",
    bg: "#fef2f2",
    title: "Urgences 24/7",
    subtitle: "Service des urgences médicales",
    description: "Notre service des urgences est ouvert 24h/24 et 7j/7. Une équipe médicale qualifiée est toujours présente pour prendre en charge toute situation d'urgence.",
    arabicDesc: "لأن الحالات الطارئة لا تنتظر، تضع عيادة رويبح بين أيديكم مصلحة استعجالات مجهزة بكل ما يلزم للتكفل السريع والفعال: استقبال 24 ساعة، طاقم طبي جاهز للتدخل في أي لحظة، وتجهيزات حديثة ومتكاملة (جهاز ECG، مركزات الأوكسجين).",
    features: [
      "Disponible 24h/24 — 7j/7",
      "Équipe médicale permanente",
      "Matériel de réanimation complet",
      "Prise en charge immédiate",
    ],
    phone: "0559 50 50 05",
  },
  {
    id: "dentaire",
    icon: "fa-solid fa-tooth",
    color: "#3b82f6",
    bg: "#eff6ff",
    title: "Soins Dentaires",
    subtitle: "Médecine et chirurgie dentaire",
    description: "Des soins de haute qualité, de la prévention à la restauration complexe, avec les dernières technologies.",
    arabicDesc: "نوفّر لكم خدمات علاج الأسنان تحت إشراف طبيب أسنان مختص، باستخدام تجهيزات حديثة، من أجل صحة فم وأسنان أفضل. علاج التسوّس، آلام الأسنان، تبييض الأسنان، ومتابعة دورية للوقاية من المضاعفات.",
    features: [
      "Soins et obturations",
      "Blanchiment dentaire",
      "Prothèses fixes et amovibles",
      "Équipement de pointe",
    ],
    phone: "0559 50 50 05",
  },
  {
    id: "anapate",
    icon: "fa-solid fa-microscope",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Anapate (Anatomopathologie)",
    subtitle: "Analyse des tissus et cellules",
    description: "Le service d'anatomie et de pathologie réalise des analyses histologiques et cytologiques pour établir des diagnostics précis.",
    arabicDesc: "نوفر لكم خدمة التشريح المرضي بإشراف طبيب مختص بخبرة تفوق 25 سنة. يساعد على تشخيص العديد من الأمراض من خلال فحص الأنسجة والخلايا بدقة.",
    features: [
      "Analyses histologiques",
      "Études cytologiques",
      "Biopsies et prélèvements",
      "Résultats fiables et rapides",
    ],
    phone: "0559 50 50 02",
  },
  {
    id: "laboratoire",
    icon: "fa-solid fa-flask",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Laboratoire",
    subtitle: "Analyses biologiques et médicales",
    description: "Laboratoire d'analyses médicales pour un large éventail d'examens biologiques avec résultats rapides.",
    arabicDesc: "مخبر التحاليل الطبية مزود بأحدث الأجهزة لضمان دقة وسرعة النتائج. نقوم بجميع أنواع التحاليل بفضل فريقنا المخبري المتخصص.",
    features: [
      "Analyses de sang complètes",
      "Bactériologie & sérologie",
      "Résultats rapides",
      "Équipements automatisés",
    ],
    phone: "0559 50 50 01",
  },
  {
    id: "imagerie",
    icon: "fa-solid fa-x-ray",
    color: "#0f766e",
    bg: "#f0fdfa",
    title: "Imagerie Médicale",
    subtitle: "Radiologie, Échographie & Scanner",
    description: "Le service d'imagerie médicale propose des radiographies numériques, des échographies, et des examens Scanner.",
    arabicDesc: "نضع بين أيديكم جهاز سكانير حديث وعالي الجودة، إضافة إلى خدمة التصوير بالأمواج فوق الصوتية (الإيكوغرافيا) باستعمال تجهيزات حديثة لضمان فحوصات دقيقة وسريعة.",
    features: [
      "Scanner de haute précision",
      "Échographie (Echo 3D/4D)",
      "Radiographie numérique",
      "Interprétation par radiologues",
    ],
    phone: "0559 50 50 03",
  },
  {
    id: "ambulance",
    icon: "fa-solid fa-truck-medical",
    color: "#f59e0b",
    bg: "#fffbeb",
    title: "Ambulance & Transport",
    subtitle: "Transport médicalisé",
    description: "Transport sanitaire rapide et sécurisé, assuré par des professionnels.",
    arabicDesc: "لأن سلامتكم لا تحتمل الانتظار، نوفر لكم خدمة إسعاف سريعة وآمنة لنقل المرضى في أفضل الظروف، مع تغطية شاملة لولاية بومرداس بأسعار تنافسية (مجاناً لتلاميذ المدارس).",
    features: [
      "Disponible 24h/24 — 7j/7",
      "Intervention rapide",
      "Véhicules équipés",
      "Couverture de toute la wilaya",
    ],
    phone: "0559 90 01 00",
  },
  {
    id: "domicile",
    icon: "fa-solid fa-house-medical",
    color: "#10b981",
    bg: "#ecfdf5",
    title: "Soins à Domicile",
    subtitle: "Rعاية منزلية",
    description: "Prise en charge médicale et soins infirmiers dans le confort de votre foyer.",
    arabicDesc: "بما أن بعض الحالات تحتاج إلى الراحة بعيدا عن عناء التنقل، توفر لكم عيادة رويبح خدمة العلاج والرعاية المنزلية لتستفيدوا من متابعة طبية في منزلكم بكل راحة وأمان.",
    features: [
      "Soins infirmiers à domicile",
      "Changement de pansements",
      "Injections et traitements",
      "Évaluation médicale",
    ],
    phone: "0559 50 50 01",
  }
];

export default function ServicesPage() {
  return (
    <PageShell>
      {/* ── HERO BANNER ── */}
      <section className="inner-hero">
        <div className="container inner-hero-content">
          <div className="label-tag" data-i18n="srv-page-tag">
            <i className="fa-solid fa-circle-dot"></i> Nos Services Médicaux
          </div>
          <h1 data-i18n="srv-page-title">Des soins médicaux <span className="text-teal">complets et accessibles</span></h1>
          <p data-i18n="srv-page-desc">
            Le Groupe Médical Rouibah met à votre disposition des services médicaux de
            haute qualité à Bordj Menaïel. Chaque service est assuré par des
            professionnels qualifiés avec des équipements modernes.
          </p>
          <div className="inner-hero-actions">
            <a href="tel:0559505001" className="btn btn-primary" data-i18n="srv-page-call">
              <i className="fa-solid fa-phone"></i> Appeler maintenant
            </a>
            <a href="/#appointment" className="btn btn-outline-teal" data-i18n="srv-page-book">
              <i className="fa-solid fa-calendar-plus"></i> Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="inner-section bg-soft">
        <div className="container">
          <div className="services-full-grid">
            {services.map((svc) => (
              <article className="svc-full-card" key={svc.id} id={svc.id}>
                {/* Featured Image */}
                <div className="svc-image-wrap" style={{ position: 'relative' }}>
                  <img
                    src={galleryData[svc.id]?.images[0] || "/clinic-images/gallery/pro-01.jpeg"}
                    alt={svc.title}
                    className="svc-real-img"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '15px' }}
                    loading="lazy"
                  />
                  <div className="svc-img-badge" style={{ background: svc.color, position: 'absolute', top: '15px', left: '15px', zIndex: 10 }}>
                    <i className={svc.icon}></i>
                  </div>
                </div>

                {/* Card body */}
                <div className="svc-full-body">
                  <div className="svc-full-header">
                    <div className="svc-icon-box" style={{ background: svc.bg, color: svc.color }}>
                      <i className={svc.icon}></i>
                    </div>
                    <div>
                      <h2 className="svc-full-title" data-i18n={`srv-${svc.id}-title`}>{svc.title}</h2>
                      <p className="svc-full-subtitle" data-i18n={`srv-${svc.id}-sub`}>{svc.subtitle}</p>
                    </div>
                  </div>

                  <p className="svc-full-desc" data-i18n={`srv-${svc.id}-desc`}>{svc.description}</p>
                  
                  {svc.arabicDesc && (
                    <div className="svc-arabic-desc">
                      <p dir="rtl">{svc.arabicDesc}</p>
                    </div>
                  )}

                  <ul className="svc-features">
                    {svc.features.map((f, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check-circle" style={{ color: svc.color }}></i>
                        <span data-i18n={`srv-${svc.id}-feat-${i}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-full-actions" style={{ flexWrap: 'wrap', gap: '10px' }}>
                    <a href={`tel:${svc.phone.replace(/\s/g, "")}`} className="btn btn-primary" data-i18n="srv-card-call">
                      <i className="fa-solid fa-phone"></i> Appeler
                    </a>
                    <a href="/#appointment" className="btn btn-outline-teal" data-i18n="srv-card-book">
                      <i className="fa-solid fa-calendar-plus"></i> Rendez-vous
                    </a>
                    {galleryData[svc.id] && galleryData[svc.id].images.length > 1 && (
                      <Link href={`/galerie/${svc.id}`} className="btn btn-outline" style={{ flexBasis: '100%' }}>
                        <i className="fa-solid fa-camera"></i> Voir l'album photo ({galleryData[svc.id].images.length}) / شاهد الصور
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="inner-cta-strip">
        <div className="container inner-cta-inner">
          <div>
            <h3 data-i18n="srv-page-cta-title">Besoin d&apos;une consultation d&apos;urgence ?</h3>
            <p data-i18n="srv-page-cta-desc">Notre équipe est disponible 24h/24 — Ne tardez pas.</p>
          </div>
          <div className="inner-cta-btns">
            <a href="tel:0559505001" className="btn btn-primary">
              <i className="fa-solid fa-phone-volume"></i> 0559 50 50 01
            </a>
            <a href="tel:0559505002" className="btn btn-sm-white">
              <i className="fa-solid fa-phone"></i> 0559 50 50 02
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
