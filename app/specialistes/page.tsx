import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { galleryData } from "../data/galleries";

export const metadata: Metadata = {
  title: "Les Spécialités | Groupe Médical Rouibah — Bordj Menaïel",
  description:
    "Découvrez les spécialités médicales à Bordj Menaïel : Dentisterie, Gynécologie, Orthopédie, CCI, Gastroentérologie, Pédiatrie, Cardiologie — sur rendez-vous.",
};

const specialists = [
  {
    id: "gynecologie",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    bg: "#fdf2f8",
    title: "Gynécologie",
    specialist: "Gynécologue-Obstétricien",
    description: "Notre service de gynécologie assure le suivi gynécologique et obstétrical de la femme à tous les stades de sa vie. Consultations, grossesse, dépistage.",
    arabicDesc: "بشرى سارة، انضمام طبيبة مختصة في أمراض النساء والتوليد ذات خبرة كبيرة. متواجدة كل يوم ثلاثاء لضمان متابعة طبية دقيقة ورعاية متميزة.",
    actes: ["Suivi de grossesse", "Consultations gynécologiques", "Échographies obstétricales", "Dépistage"],
  },
  {
    id: "gastrologie",
    icon: "fa-solid fa-stomach",
    color: "#059669",
    bg: "#f0fdf4",
    title: "Gastroentérologie",
    specialist: "Gastroentérologue",
    description: "Notre gastroentérologue prend en charge les maladies du système digestif : estomac, intestin, foie, pancréas et vésicule biliaire.",
    arabicDesc: "هل تعانون من آلام أو حرق في المعدة؟ طبيب الجهاز الهضمي يستقبلكم كل يوم الثلاثاء والخميس بعيادة رويبح، للتشخيص الدقيق والتكفل المناسب.",
    actes: ["Pathologies digestives", "Hépatologie", "Coloscopie & endoscopie", "Reflux & ulcères"],
  },
  {
    id: "interne",
    icon: "fa-solid fa-stethoscope",
    color: "#4f46e5",
    bg: "#eef2ff",
    title: "Médecine Interne",
    specialist: "Spécialiste en médecine interne",
    description: "Prise en charge globale des patients adultes atteints de maladies chroniques ou complexes, impliquant souvent plusieurs organes.",
    arabicDesc: "فريق الطب الداخلي جاهز لاستقبالكم للتشخيص المتكامل للأمراض المزمنة والمعقدة وتوفير الرعاية الشاملة.",
    actes: ["Maladies chroniques", "Diabète & Hypertension", "Maladies auto-immunes", "Bilan de santé"],
  },
  {
    id: "orthopedie",
    icon: "fa-solid fa-bone",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Orthopédie",
    specialist: "Chirurgien Orthopédiste",
    description: "Le service orthopédique traite les affections de l'appareil locomoteur : traumatismes, fractures, douleurs articulaires.",
    actes: ["Fractures & traumatismes", "Douleurs articulaires", "Pathologies osseuses", "Rééducation"],
  },
  {
    id: "cci",
    icon: "fa-solid fa-syringe",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "CCI",
    specialist: "Centre de Chimiothérapie Intraveineux",
    description: "Notre centre CCI assure la pose, le suivi et l'entretien des chambres implantables pour les patients sous traitement intraveineux prolongé.",
    actes: ["Pose de CCI", "Suivi et entretien", "Perfusions intraveineuses", "Protocoles oncologiques"],
  },
  {
    id: "pediatrie",
    icon: "fa-solid fa-baby",
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Pédiatrie",
    specialist: "Pédiatre Spécialisé",
    description: "Notre pédiatre assure le suivi de la croissance et du développement de l'enfant de la naissance à l'adolescence.",
    actes: ["Suivi de croissance", "Vaccinations", "Maladies infantiles", "Bilans de santé"],
  },
  {
    id: "cardiologie",
    icon: "fa-solid fa-heart-pulse",
    color: "#dc2626",
    bg: "#fef2f2",
    title: "Cardiologie",
    specialist: "Cardiologue",
    description: "Le service de cardiologie assure le dépistage, le diagnostic et le suivi des maladies cardiovasculaires.",
    actes: ["Électrocardiogramme (ECG)", "Échocardiographie", "Holter cardiaque", "Hypertension artérielle"],
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
                {/* Featured Image */}
                <div className="spec-image-block">
                  <div className="spec-image-wrap" style={{ position: 'relative' }}>
                    <img
                      src={galleryData[spec.id]?.images[0] || "/clinic-images/gallery/pro-01.jpeg"}
                      alt={spec.title}
                      className="spec-real-img"
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '15px' }}
                      loading="lazy"
                    />
                    <div className="spec-img-overlay" style={{ background: spec.color, zIndex: 10 }}>
                      <i className={spec.icon}></i>
                    </div>
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
                  
                  {spec.arabicDesc && (
                    <div className="svc-arabic-desc">
                      <p dir="rtl">{spec.arabicDesc}</p>
                    </div>
                  )}

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

                  <div className="spec-actions" style={{ flexWrap: 'wrap', gap: '10px' }}>
                    <a href="/#appointment" className="btn btn-primary" data-i18n="spec-card-btn-book">
                      <i className="fa-solid fa-calendar-plus"></i> Prendre rendez-vous
                    </a>
                    <a href="tel:0559505001" className="btn btn-outline-teal" data-i18n="spec-card-btn-call">
                      <i className="fa-solid fa-phone"></i> Appeler
                    </a>
                    {galleryData[spec.id] && galleryData[spec.id].images.length > 1 && (
                      <Link href={`/galerie/${spec.id}`} className="btn btn-outline" style={{ flexBasis: '100%', marginTop: '10px' }}>
                        <i className="fa-solid fa-camera"></i> Voir l'album photo ({galleryData[spec.id].images.length}) / شاهد الصور
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
