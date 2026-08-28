import Link from "next/link";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><i className="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>
            <span><i className="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7</span>
          </div>
          <div className="topbar-right">
            <a href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="tel:0559505001"><i className="fa-solid fa-phone"></i> Contactez-nous</a>
            <div className="lang-switcher">
              <button className="lang-btn active" data-lang="fr">FR</button>
              <button className="lang-btn" data-lang="ar">العربية</button>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header" id="header" style={{ position: "sticky", top: 0 }}>
        <div className="container header-container">
          <Link href="/" className="logo">
            <div className="logo-icon-wrap"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="logo-text">
              <span className="logo-en">Rouibah Medical</span>
              <span className="logo-ar">عيادة الرويبح</span>
            </div>
          </Link>

          <nav className="navbar" id="navbar">
            <ul className="nav-links inner-page-nav-links">
              <li className="page-switcher-container">
                <div className="page-switcher">
                  <Link href="/" className="page-btn"><i className="fa-solid fa-house"></i> Accueil</Link>
                  <Link href="/services" className="page-btn"><i className="fa-solid fa-stethoscope"></i> Services</Link>
                  <Link href="/specialistes" className="page-btn"><i className="fa-solid fa-user-doctor"></i> Spécialistes</Link>
                </div>
              </li>
              <li><Link href="/#about">À propos</Link></li>
              <li><Link href="/#doctors">Notre Équipe</Link></li>
              <li><Link href="/#gallery">Galerie</Link></li>
              <li><Link href="/#testimonials">Avis Patients</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
            {/* Mobile page links */}
            <div className="mobile-page-links">
              <a href="/services"><i className="fa-solid fa-stethoscope"></i> Nos Services</a>
              <a href="/specialistes"><i className="fa-solid fa-user-doctor"></i> Spécialistes</a>
            </div>
          </nav>

          <div className="header-cta">
            <Link href="/#appointment" className="btn btn-primary" data-i18n="btn-book">
              <i className="fa-solid fa-calendar-plus"></i> Rendez-vous
            </Link>
            <div className="lang-switcher lang-switcher-mobile">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>
            <button
              className="menu-toggle"
              id="menu-toggle"
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container footer-top-grid">
            <div className="footer-brand">
              <Link href="/" className="logo" style={{ marginBottom: 14 }}>
                <div className="logo-icon-wrap"><i className="fa-solid fa-heart-pulse"></i></div>
                <div className="logo-text">
                  <span className="logo-en">Rouibah Medical</span>
                  <span className="logo-ar">عيادة الرويبح</span>
                </div>
              </Link>
              <p>Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.</p>
              <div className="footer-rating">
                <i className="fa-brands fa-google" style={{ color: "#4285F4" }}></i>
                <span>3.7/5 — 31 avis sur Google</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Liens Rapides</h4>
              <ul>
                <li><Link href="/"><i className="fa-solid fa-chevron-right"></i> Accueil</Link></li>
                <li><Link href="/services"><i className="fa-solid fa-chevron-right"></i> Services</Link></li>
                <li><Link href="/specialistes"><i className="fa-solid fa-chevron-right"></i> Spécialistes</Link></li>
                <li><Link href="/#about"><i className="fa-solid fa-chevron-right"></i> À propos</Link></li>
                <li><Link href="/#contact"><i className="fa-solid fa-chevron-right"></i> Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Nos Services</h4>
              <ul>
                <li><Link href="/services#urgences"><i className="fa-solid fa-chevron-right"></i> Urgences 24/7</Link></li>
                <li><Link href="/services#anapate"><i className="fa-solid fa-chevron-right"></i> Anapate</Link></li>
                <li><Link href="/services#laboratoire"><i className="fa-solid fa-chevron-right"></i> Laboratoire</Link></li>
                <li><Link href="/services#imagerie"><i className="fa-solid fa-chevron-right"></i> Imagerie</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Informations de Contact</h4>
              <ul className="footer-contact-list">
                <li><i className="fa-solid fa-location-dot"></i> Bordj Menaïel, Boumerdès, Algérie</li>
                <li><a href="tel:0559505001"><i className="fa-solid fa-phone"></i> 0559 50 50 01</a></li>
                <li><a href="tel:0559505002"><i className="fa-solid fa-phone"></i> 0559 50 50 02</a></li>
                <li><i className="fa-solid fa-clock"></i> 24h/24 — 7j/7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>Tous droits réservés © Groupe Médical Rouibah.</p>
            <p>Bordj Menaïel, Algérie</p>
          </div>
        </div>
      </footer>
    </>
  );
}
