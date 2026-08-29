import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

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
    description:
      "Notre service des urgences est ouvert 24 heures sur 24, 7 jours sur 7, 365 jours par an. Une équipe médicale qualifiée est toujours présente pour prendre en charge toute situation d'urgence médicale rapidement et efficacement.",
    features: [
      "Disponible 24h/24 — 7j/7",
      "Équipe médicale permanente",
      "Matériel de réanimation complet",
      "Prise en charge immédiate",
      "Coordination avec les hôpitaux",
    ],
    phone: "0559 50 50 01",
  },
  {
    id: "anapate",
    icon: "fa-solid fa-microscope",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Anapate",
    subtitle: "Anatomie pathologique",
    description:
      "Le service d'anatomie et de pathologie (Anapate) réalise des analyses histologiques et cytologiques pour établir des diagnostics précis. Nos pathologistes examinent les prélèvements tissulaires avec les équipements les plus modernes.",
    features: [
      "Analyses histologiques",
      "Études cytologiques",
      "Biopsies et prélèvements",
      "Résultats fiables et rapides",
      "Rapports détaillés",
    ],
    phone: "0559 50 50 01",
  },
  {
    id: "laboratoire",
    icon: "fa-solid fa-flask",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Laboratoire",
    subtitle: "Analyses biologiques et médicales",
    description:
      "Notre laboratoire d'analyses médicales réalise un large éventail d'examens biologiques : analyses de sang, d'urine, bactériologie, sérologie et bien plus. Les résultats sont transmis rapidement pour une prise en charge optimale.",
    features: [
      "Analyses de sang complètes",
      "Analyses d'urine",
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
    subtitle: "Radiologie & échographie",
    description:
      "Le service d'imagerie médicale propose des radiographies numériques et des échographies pour un diagnostic précis et rapide. Nos techniciens et médecins radiologues interprètent les images avec la plus grande rigueur.",
    features: [
      "Radiographie numérique",
      "Échographie",
      "Interprétation par radiologues",
      "Résultats immédiats",
      "Archivage numérique",
    ],
    phone: "0559 50 50 01",
  },
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
                {/* Image placeholder */}
                <div className="svc-image-placeholder" aria-label={`Photo — ${svc.title}`}>
                  <div className="placeholder-icon" style={{ color: svc.color }}>
                    <i className={svc.icon}></i>
                  </div>
                  <span className="placeholder-label">Image à venir</span>
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

                  <ul className="svc-features">
                    {svc.features.map((f, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check-circle" style={{ color: svc.color }}></i>
                        <span data-i18n={`srv-${svc.id}-feat-${i}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-full-actions">
                    <a href={`tel:${svc.phone.replace(/\s/g, "")}`} className="btn btn-primary" data-i18n="srv-card-call">
                      <i className="fa-solid fa-phone"></i> Appeler
                    </a>
                    <a href="/#appointment" className="btn btn-outline-teal" data-i18n="srv-card-book">
                      <i className="fa-solid fa-calendar-plus"></i> Rendez-vous
                    </a>
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
