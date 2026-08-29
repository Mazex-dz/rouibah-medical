import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Les Spécialités | Groupe Médical Rouibah — Bordj Menaïel",
  description:
    "Découvrez les spécialités médicales à Bordj Menaïel : Dentisterie, Gynécologie, Orthopédie, CCI, Gastroentérologie, Pédiatrie, Cardiologie — sur rendez-vous.",
};

const specialists = [
  {
    id: "dentiste",
    icon: "fa-solid fa-tooth",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Dentisterie",
    specialist: "Chirurgien-Dentiste",
    description:
      "Notre cabinet dentaire prend en charge toutes les pathologies bucco-dentaires : soins conservateurs, extractions, prothèses, détartrage et blanchiment. Un suivi régulier pour une santé bucco-dentaire optimale.",
    actes: ["Soins conservateurs", "Extraction dentaire", "Prothèses dentaires", "Détartrage", "Traitement des caries"],
  },
  {
    id: "gynecologie",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    bg: "#fdf2f8",
    title: "Gynécologie",
    specialist: "Gynécologue-Obstétricien",
    description:
      "Notre service de gynécologie assure le suivi gynécologique et obstétrical de la femme à tous les stades de sa vie. Consultations, grossesse, dépistage et prévention des pathologies féminines.",
    actes: ["Suivi de grossesse", "Consultations gynécologiques", "Échographies obstétricales", "Dépistage", "Contraception"],
  },
  {
    id: "orthopedie",
    icon: "fa-solid fa-bone",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Orthopédie",
    specialist: "Chirurgien Orthopédiste",
    description:
      "Le service orthopédique traite les affections de l'appareil locomoteur : traumatismes, fractures, douleurs articulaires, pathologies osseuses et tendineuses. Diagnostic précis et plan de traitement adapté.",
    actes: ["Fractures & traumatismes", "Douleurs articulaires", "Pathologies osseuses", "Rééducation", "Entorses & tendinites"],
  },
  {
    id: "cci",
    icon: "fa-solid fa-syringe",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "CCI",
    specialist: "Centre de Chimiothérapie Intraveineux",
    description:
      "Notre centre CCI (Chambre à Cathéter Implantable) assure la pose, le suivi et l'entretien des chambres implantables pour les patients sous traitement intraveineux prolongé, dans un environnement sécurisé et stérile.",
    actes: ["Pose de CCI", "Suivi et entretien", "Perfusions intraveineuses", "Protocoles oncologiques", "Soins infirmiers spécialisés"],
  },
  {
    id: "gastrologie",
    icon: "fa-solid fa-stomach",
    color: "#059669",
    bg: "#f0fdf4",
    title: "Gastroentérologie",
    specialist: "Gastroentérologue",
    description:
      "Notre gastroentérologue prend en charge les maladies du système digestif : estomac, intestin, foie, pancréas et vésicule biliaire. Consultations, endoscopies et suivi des pathologies digestives chroniques.",
    actes: ["Pathologies digestives", "Hépatologie", "Coloscopie & endoscopie", "Reflux & ulcères", "Maladies inflammatoires"],
  },
  {
    id: "pediatrie",
    icon: "fa-solid fa-baby",
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Pédiatrie",
    specialist: "Pédiatre Spécialisé",
    description:
      "Notre pédiatre assure le suivi de la croissance et du développement de l'enfant de la naissance à l'adolescence. Consultations, vaccinations, maladies infantiles, et bilans de santé réguliers.",
    actes: ["Suivi de croissance", "Vaccinations", "Maladies infantiles", "Bilans de santé", "Alimentation & nutrition"],
  },
  {
    id: "cardiologie",
    icon: "fa-solid fa-heart-pulse",
    color: "#dc2626",
    bg: "#fef2f2",
    title: "Cardiologie",
    specialist: "Cardiologue",
    description:
      "Le service de cardiologie assure le dépistage, le diagnostic et le suivi des maladies cardiovasculaires. Électrocardiogramme, échocardiographie, Holter et consultations spécialisées pour la santé de votre cœur.",
    actes: ["Électrocardiogramme (ECG)", "Échocardiographie", "Holter cardiaque", "Hypertension artérielle", "Insuffisance cardiaque"],
  },
];

export default function SpecialistesPage() {
  return (
    <PageShell>
      {/* ── HERO BANNER ── */}
      <section className="inner-hero inner-hero--specialists">
        <div className="container inner-hero-content">
          <div className="label-tag" data-i18n="spec-page-tag">
            <i className="fa-solid fa-circle-dot"></i> Nos Spécialités Médicales
          </div>
          <h1 data-i18n="spec-page-title">Les spécialités médicales <span className="text-teal">à votre service</span></h1>
          <p data-i18n="spec-page-desc">
            Notre clinique regroupe de nombreuses spécialités médicales sous un même toit.
            Consultez nos médecins qualifiés et expérimentés,
            tous disponibles sur rendez-vous à Bordj Menaïel.
          </p>
          <div className="inner-hero-actions">
            <a href="/#appointment" className="btn btn-primary" data-i18n="spec-page-btn-book">
              <i className="fa-solid fa-calendar-plus"></i> Prendre rendez-vous
            </a>
            <a href="tel:0559505001" className="btn btn-outline-teal" data-i18n="spec-page-btn-call">
              <i className="fa-solid fa-phone"></i> 0559 50 50 01
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV PILLS ── */}
      <section className="spec-nav-bar">
        <div className="container">
          <div className="spec-nav-pills">
            {specialists.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="spec-pill" style={{ "--pill-color": s.color } as React.CSSProperties}>
                <i className={s.icon}></i>
                <span data-i18n={`spec-${s.id}-title`}>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALISTS LIST ── */}
      <section className="inner-section">
        <div className="container">
          <div className="spec-list">
            {specialists.map((spec, idx) => (
              <article
                className={`spec-card ${idx % 2 === 1 ? "spec-card--reverse" : ""}`}
                key={spec.id}
                id={spec.id}
              >
                {/* Image placeholder */}
                <div className="spec-image-block">
                  <div className="spec-image-placeholder" aria-label={`Photo — Dr. ${spec.title}`}>
                    <div className="placeholder-icon" style={{ color: spec.color }}>
                      <i className={spec.icon}></i>
                    </div>
                    <span className="placeholder-label">Consultation Spécialisée</span>
                  </div>
                  {/* Availability badge */}
                  <div className="spec-avail-badge">
                    <i className="fa-solid fa-circle-check"></i> <span data-i18n="spec-avail-badge">Disponible sur rendez-vous</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="spec-info-block">
                  <div className="spec-info-header">
                    <div className="spec-icon-badge" style={{ background: spec.bg, color: spec.color }}>
                      <i className={spec.icon}></i>
                    </div>
                    <div>
                      <h2 className="spec-name" data-i18n={`spec-${spec.id}-title`}>{spec.title}</h2>
                      <p className="spec-role" data-i18n={`spec-${spec.id}-role`}>{spec.specialist}</p>
                    </div>
                  </div>

                  <p className="spec-desc" data-i18n={`spec-${spec.id}-desc`}>{spec.description}</p>

                  <div className="spec-actes">
                    <h4 className="spec-actes-title" data-i18n="spec-actes-title">Actes & consultations :</h4>
                    <ul>
                      {spec.actes.map((a, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-check" style={{ color: spec.color }}></i>
                          <span data-i18n={`spec-${spec.id}-acte-${i}`}>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="spec-actions">
                    <a href="/#appointment" className="btn btn-primary" data-i18n="spec-card-btn-book">
                      <i className="fa-solid fa-calendar-plus"></i> Prendre rendez-vous
                    </a>
                    <a href="tel:0559505001" className="btn btn-outline-teal" data-i18n="spec-card-btn-call">
                      <i className="fa-solid fa-phone"></i> Appeler
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
            <h3 data-i18n="spec-page-cta-title">Besoin d'une consultation spécialisée ?</h3>
            <p data-i18n="spec-page-cta-desc">Appelez-nous pour prendre rendez-vous dans la spécialité de votre choix.</p>
          </div>
          <div className="inner-cta-btns">
            <a href="tel:0559505001" className="btn btn-primary">
              <i className="fa-solid fa-phone-volume"></i> 0559 50 50 01
            </a>
            <a href="/#appointment" className="btn btn-sm-white">
              <i className="fa-solid fa-calendar-plus"></i> Rendez-vous en ligne
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
