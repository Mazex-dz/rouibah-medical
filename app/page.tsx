import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          TOP BAR
         ============================================================ */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span data-i18n="topbar-address"><i className="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>
            <span data-i18n="topbar-hours"><i className="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7</span>
          </div>
          <div className="topbar-right">
            <a
              href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:0559505001" data-i18n="topbar-contact">
              <i className="fa-solid fa-phone"></i> Contactez-nous
            </a>
            <div className="lang-switcher">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          HEADER
         ============================================================ */}
      <header className="header" id="header">
        <div className="container header-container">
          <a href="#home" className="logo">
            <div className="logo-icon-wrap">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="logo-text">
              <span className="logo-en">Rouibah Medical</span>
              <span className="logo-ar">عيادة الرويبح</span>
            </div>
          </a>

          <nav className="navbar" id="navbar">
            {/* Mobile page links - MOVED TO TOP */}
            <div className="mobile-page-links">
              <Link href="/"><i className="fa-solid fa-house"></i> Accueil</Link>
              <Link href="/services"><i className="fa-solid fa-stethoscope"></i> Nos Services</Link>
              <Link href="/specialistes"><i className="fa-solid fa-user-doctor"></i> Spécialistes</Link>
            </div>
            
            <ul className="nav-links">
              <li className="page-switcher-container">
                <div className="page-switcher">
                  <Link href="/" className="page-btn active"><i className="fa-solid fa-house"></i> Accueil</Link>
                  <Link href="/services" className="page-btn"><i className="fa-solid fa-stethoscope"></i> Services</Link>
                  <Link href="/specialistes" className="page-btn"><i className="fa-solid fa-user-doctor"></i> Spécialistes</Link>
                </div>
              </li>
              <li><a href="/#about" data-i18n="nav-about">À propos</a></li>
              <li><a href="/#doctors" data-i18n="nav-doctors">Notre Équipe</a></li>
              <li><a href="/#gallery" data-i18n="nav-gallery">Galerie</a></li>
              <li><a href="/#testimonials" data-i18n="nav-testimonials">Avis Patients</a></li>
              <li><a href="/#contact" data-i18n="nav-contact">Contact</a></li>
            </ul>
            <div className="lang-switcher-mobile">
              <button className="lang-btn active" data-lang="fr" aria-label="Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="Arabic">العربية</button>
            </div>
          </nav>

          <div className="header-cta">
            <a href="#appointment" className="btn btn-primary" data-i18n="btn-book">
              <i className="fa-solid fa-calendar-plus"></i>
              Prendre Rendez-vous
            </a>
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

      {/* ============================================================
          HERO SECTION
         ============================================================ */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img
            src="/downloaded_images/img_1.jpg"
            alt="Clinique Rouibah — Bordj Menaïel"
            loading="eager"
          />
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-particles" id="hero-particles"></div>
        <div className="container hero-content">
          <div className="hero-badge fade-in" data-delay="100" data-i18n="hero-badge"><i className="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie</div>
          <h1 className="hero-title fade-in" data-delay="200" data-i18n="hero-title">Votre santé est une priorité entre des mains<br /><span className="gradient-text">spécialisées et de confiance</span></h1>
          <p className="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.</p>
          <div className="hero-buttons fade-in" data-delay="400">
            <a href="#appointment" className="btn btn-hero-primary" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#about" className="btn btn-hero-ghost" data-i18n="hero-btn-about"><i className="fa-solid fa-play-circle"></i> Découvrez-nous</a>
          </div>

          <div className="hero-stats fade-in" data-delay="500">
            <div className="hero-stat">
              <div className="stat-number" data-target="31">
                0
              </div>
              <div className="stat-label" data-i18n="stat-google-label">Avis sur Google</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number" data-target="6">
                0
              </div>
              <div className="stat-label" data-i18n="stat-spec-label">Spécialités médicales</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number" data-suffix="ساعة">
                24
              </div>
              <div className="stat-label" data-i18n="stat-emerg-label">Urgences 24/7</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span data-i18n="hero-scroll">Découvrir plus</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* ============================================================
          EMERGENCY BANNER
         ============================================================ */}
      <section className="emergency-bar">
        <div className="container emergency-inner">
          <div className="emergency-icon pulse-ring">
            <i className="fa-solid fa-truck-medical"></i>
          </div>
          <div className="emergency-text">
            <strong data-i18n="emerg-title">Service des Urgences Ouvert 24/7</strong>
            <span data-i18n="emerg-desc">Nous accueillons les urgences médicales 24h/24 — N'hésitez pas à nous contacter</span>
          </div>
          <a href="tel:0559505001" className="btn btn-emergency" data-i18n="emerg-btn"><i className="fa-solid fa-phone-volume"></i> Appeler Maintenant</a>
        </div>
      </section>

      {/* ============================================================
          ABOUT SECTION
         ============================================================ */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual animate" data-animation="slide-right">
              <div className="about-img-main">
                <img
                  src="/downloaded_images/img_13.jpg"
                  alt="Clinique Rouibah — équipe médicale"
                />
              </div>
              <div className="about-img-secondary">
                <img
                  src="/downloaded_images/img_15.jpg"
                  alt="Clinique Rouibah — matériel médical"
                />
              </div>
              <div className="about-badge-float">
                <i className="fa-solid fa-award"></i>
                <div>
                  <strong data-i18n="about-badge-title">Centre Médical Intégré</strong>
                  <span data-i18n="about-badge-sub">Bordj Menaïel</span>
                </div>
              </div>
              <div className="about-rating-float">
                <div className="float-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span data-i18n="about-rating-text">Avis Google</span>
                <strong>3.7 / 5</strong>
              </div>
            </div>

            <div className="about-content animate" data-animation="slide-left">
              <span className="label-tag" data-i18n="about-tag"><i className="fa-solid fa-circle-dot"></i> À propos de nous</span>
              <h2 className="section-title" data-i18n="about-title">Notre mission : des soins<br />médicaux d'excellence</h2>
              <p className="about-lead" data-i18n="about-lead">Le Groupe Médical Rouibah (Rouibah Medical Group) est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.</p>
              <p className="about-desc" data-i18n="about-desc">Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.</p>

              <div className="about-values">
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div className="value-text">
                    <h4 data-i18n="val1-title">Précision & Efficacité</h4>
                    <p data-i18n="val1-desc">Diagnostic exact et traitement efficace dès la première visite</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="value-text">
                    <h4 data-i18n="val2-title">Soins Humains</h4>
                    <p data-i18n="val2-desc">Nous traitons chaque patient avec respect et compassion</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-flask"></i>
                  </div>
                  <div className="value-text">
                    <h4 data-i18n="val3-title">Technologies Avancées</h4>
                    <p data-i18n="val3-desc">Équipements de diagnostic et de traitement de pointe</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-rotate"></i>
                  </div>
                  <div className="value-text">
                    <h4 data-i18n="val4-title">Développement Continu</h4>
                    <p data-i18n="val4-desc">Nous investissons constamment dans l'amélioration de nos services</p>
                  </div>
                </div>
              </div>
              <a href="#services" className="btn btn-primary mt-30" data-i18n="about-btn">Découvrez nos services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS SECTION
         ============================================================ */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="0"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="stat-counter" data-target="500">
              0
            </div>
            <div className="stat-suffix">+</div>
            <p data-i18n="stat-counter1-label">Patients accompagnés</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="100"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <div className="stat-counter" data-target="12">
              0
            </div>
            <div className="stat-suffix">+</div>
            <p data-i18n="stat-counter2-label">Médecins spécialistes</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="200"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-microscope"></i>
            </div>
            <div className="stat-counter" data-target="6">
              0
            </div>
            <div className="stat-suffix"></div>
            <p data-i18n="stat-counter3-label">Spécialités médicales</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="300"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="stat-counter" data-target="3" data-decimal=".7">
              0
            </div>
            <div className="stat-suffix">/5</div>
            <p data-i18n="stat-counter4-label">Avis Google Maps</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
         ============================================================ */}
      <section className="services section bg-wave" id="services">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="services-tag"><i className="fa-solid fa-circle-dot"></i> Nos Services Médicaux</span>
            <h2 className="section-title" data-i18n="services-title">Spécialités complètes <span className="text-teal">pour vos soins</span></h2>
            <p className="section-lead" data-i18n="services-lead">Nous offrons une gamme complète de services médicaux et diagnostiques au même endroit, car votre santé mérite le meilleur.</p>
          </div>

          <div className="services-grid">
            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="service-card-inner">
                <div className="service-number">01</div>
                <div className="service-icon">
                  <i className="fa-solid fa-truck-medical"></i>
                </div>
                <h3 data-i18n="s1-title">Médecine Générale & Urgences</h3>
                <p data-i18n="s1-desc">Un service d'urgence entièrement équipé, ouvert 24h/24 et 7j/7 pour accueillir tous les cas urgents.</p>
                <ul className="service-features">
                  <li data-i18n="s1-f1"><i className="fa-solid fa-check"></i> Prise en charge immédiate des urgences</li>
                  <li data-i18n="s1-f2"><i className="fa-solid fa-check"></i> Diagnostic et traitement rapides</li>
                  <li data-i18n="s1-f3"><i className="fa-solid fa-check"></i> Surveillance médicale continue</li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="service-card-inner">
                <div className="service-number">02</div>
                <div className="service-icon">
                  <i className="fa-solid fa-tooth"></i>
                </div>
                <h3 data-i18n="s2-title">Médecine Dentaire & Chirurgie</h3>
                <p data-i18n="s2-desc">Services d'orthodontie, de soin et d'esthétique dentaire avec des technologies récentes et des spécialistes expérimentés.</p>
                <ul className="service-features">
                  <li data-i18n="s2-f1"><i className="fa-solid fa-check"></i> Soins et obturations sans douleur</li>
                  <li data-i18n="s2-f2"><i className="fa-solid fa-check"></i> Esthétique dentaire et du sourire</li>
                  <li data-i18n="s2-f3"><i className="fa-solid fa-check"></i> Implantologie dentaire</li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="service-card-inner">
                <div className="service-number">03</div>
                <div className="service-icon">
                  <i className="fa-solid fa-baby"></i>
                </div>
                <h3 data-i18n="s3-title">Gynécologie & Obstétrique</h3>
                <p data-i18n="s3-desc">Suivi complet de la grossesse, accouchement sécurisé et soins post-partum dans un environnement confortable.</p>
                <ul className="service-features">
                  <li data-i18n="s3-f1"><i className="fa-solid fa-check"></i> Suivi prénatal régulier</li>
                  <li data-i18n="s3-f2"><i className="fa-solid fa-check"></i> Accouchement naturel et césarienne</li>
                  <li data-i18n="s3-f3"><i className="fa-solid fa-check"></i> Soins gynécologiques post-partum</li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="service-card-inner">
                <div className="service-number">04</div>
                <div className="service-icon">
                  <i className="fa-solid fa-child-reaching"></i>
                </div>
                <h3 data-i18n="s4-title">Pédiatrie</h3>
                <p data-i18n="s4-desc">Soins complets pour la santé de vos enfants, de la naissance à l'adolescence, dispensés par des pédiatres dévoués.</p>
                <ul className="service-features">
                  <li data-i18n="s4-f1"><i className="fa-solid fa-check"></i> Suivi de la croissance et du développement</li>
                  <li data-i18n="s4-f2"><i className="fa-solid fa-check"></i> Vaccination et prévention</li>
                  <li data-i18n="s4-f3"><i className="fa-solid fa-check"></i> Traitement des maladies infantiles</li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="400"
            >
              <div className="service-card-inner">
                <div className="service-number">05</div>
                <div className="service-icon">
                  <i className="fa-solid fa-flask-vial"></i>
                </div>
                <h3 data-i18n="s5-title">Laboratoire d'Analyses Médicales</h3>
                <p data-i18n="s5-desc">Laboratoire moderne équipé d'appareils de pointe offrant des résultats rapides et précis pour toutes les analyses.</p>
                <ul className="service-features">
                  <li data-i18n="s5-f1"><i className="fa-solid fa-check"></i> Bilan sanguin et urinaire complet</li>
                  <li data-i18n="s5-f2"><i className="fa-solid fa-check"></i> Analyses bactériologiques et d'anapath</li>
                  <li data-i18n="s5-f3"><i className="fa-solid fa-check"></i> Résultats fiables et rapides</li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="500"
            >
              <div className="service-card-inner">
                <div className="service-number">06</div>
                <div className="service-icon">
                  <i className="fa-solid fa-x-ray"></i>
                </div>
                <h3 data-i18n="s6-title">Imagerie Médicale & Radiologie</h3>
                <p data-i18n="s6-desc">Service d'imagerie entièrement équipé proposant tous les examens nécessaires à un diagnostic précis.</p>
                <ul className="service-features">
                  <li data-i18n="s6-f1"><i className="fa-solid fa-check"></i> Radiographie numérique (Radio)</li>
                  <li data-i18n="s6-f2"><i className="fa-solid fa-check"></i> Échographie (Echo 3D/4D)</li>
                  <li data-i18n="s6-f3"><i className="fa-solid fa-check"></i> Examens spécialisés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY US SECTION
         ============================================================ */}
      <section className="whyus section" id="whyus">
        <div className="container whyus-grid">
          <div className="whyus-content animate" data-animation="slide-right">
            <span className="label-tag" data-i18n="why-tag"><i className="fa-solid fa-circle-dot"></i> Pourquoi nous choisir ?</span>
            <h2 className="section-title" data-i18n="why-title">Ce qui fait de nous le premier choix <br /><span className="text-teal">à Bordj Menaïel</span></h2>
            <p className="whyus-desc" data-i18n="why-desc">Nous ne proposons pas uniquement un service médical : nous bâtissons avec vous une relation de confiance et de partenariat pour votre santé. Notre engagement envers la qualité et l'amélioration continue fait notre force.</p>

            <div className="features-list">
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="0"
              >
                <div className="feature-icon teal">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className="feature-body">
                  <h4 data-i18n="w1-title">Urgences 24/7 sans interruption</h4>
                  <p data-i18n="w1-desc">Équipe médicale disponible 24h/24 pour prendre en charge toute urgence avec professionnalisme.</p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="100"
              >
                <div className="feature-icon blue">
                  <i className="fa-solid fa-microscope"></i>
                </div>
                <div className="feature-body">
                  <h4 data-i18n="w2-title">Équipements et technologies modernes</h4>
                  <p data-i18n="w2-desc">Nous investissons dans des appareils de diagnostic de pointe pour garantir des résultats précis.</p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="200"
              >
                <div className="feature-icon green">
                  <i className="fa-solid fa-person-walking-luggage"></i>
                </div>
                <div className="feature-body">
                  <h4 data-i18n="w3-title">Médecins spécialisés et expérimentés</h4>
                  <p data-i18n="w3-desc">Une équipe médicale hautement qualifiée dans diverses disciplines à votre service.</p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="300"
              >
                <div className="feature-icon purple">
                  <i className="fa-solid fa-shield-virus"></i>
                </div>
                <div className="feature-body">
                  <h4 data-i18n="w4-title">Environnement propre et confortable</h4>
                  <p data-i18n="w4-desc">Une clinique conçue selon les plus hauts standards d'hygiène pour assurer votre bien-être.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="whyus-image animate" data-animation="slide-left">
            <div className="img-stack">
              <img
                className="img-back"
                src="/downloaded_images/img_14.jpg"
                alt="طاقم طبي"
              />
            </div>
            <div className="whyus-cta-card">
              <i className="fa-solid fa-headset"></i>
              <div>
                <strong data-i18n="whyus-cta-q">Vous avez une question ?</strong>
                <span data-i18n="whyus-cta-sub">Notre équipe est toujours à votre service</span>
              </div>
              <a href="#contact" className="btn btn-sm-primary" data-i18n="nav-contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DOCTORS / TEAM SECTION
         ============================================================ */}
      <section className="doctors section bg-soft" id="doctors">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="doctors-tag"><i className="fa-solid fa-circle-dot"></i> Équipe Médicale</span>
            <h2 className="section-title" data-i18n="doctors-title">Des médecins spécialisés <span className="text-teal">à votre service</span></h2>
            <p className="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>
          </div>

          <div className="doctors-grid">
            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب متخصص"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="doctor-info">
                <h4 data-i18n="d1-name">Dr. Rouibah</h4>
                <p data-i18n="d1-role">Médecin Directeur & Généraliste</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-stethoscope"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="150"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيبة أخصائية"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="doctor-info">
                <h4 data-i18n="d3-name">Dr. Gynécologue Spécialiste</h4>
                <p data-i18n="d3-role">Spécialiste en Gynécologie-Obstétrique</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-heart-pulse"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب أطفال"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="doctor-info">
                <h4 data-i18n="d2-name">Dr. Pédiatre Spécialiste</h4>
                <p data-i18n="d2-role">Spécialiste en Pédiatrie</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-child"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="450"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب أسنان"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="doctor-info">
                <h4 data-i18n="d4-name">Équipe d'Urgences</h4>
                <p data-i18n="d4-role">Médecins Urgentistes & Infirmiers</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-tooth"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY SECTION
         ============================================================ */}
      <section className="gallery section" id="gallery">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="gallery-tag"><i className="fa-solid fa-circle-dot"></i> Galerie de la Clinique</span>
            <h2 className="section-title" data-i18n="gallery-title">Découvrez notre clinique <span className="text-teal">en images</span></h2>
            <p className="section-lead" data-i18n="gallery-lead">Nous offrons un cadre médical moderne et confortable, digne de chaque patient.</p>
          </div>

          <div className="gallery-grid">
            <div
              className="gallery-item gallery-item-wide animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <img
                src="/downloaded_images/img_1.jpg"
                alt="Photo clinique Rouibah 1"
              />
              <div className="gallery-caption">Photo 1 : Établissement médical certifié 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="50">
              <img src="/downloaded_images/img_2.jpg" alt="Clinique Rouibah 2" />
              <div className="gallery-caption">Photo 2 : Équipements modernes 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="100">
              <img src="/downloaded_images/img_3.jpg" alt="Clinique Rouibah 3" />
              <div className="gallery-caption">Photo 3 : Salles de soins 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="150">
              <img src="/downloaded_images/img_4.jpg" alt="Clinique Rouibah 4" />
              <div className="gallery-caption">Photo 4 : Environnement confortable 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="0">
              <img src="/downloaded_images/img_5.jpg" alt="Clinique Rouibah 5" />
              <div className="gallery-caption">Photo 5 : Accueil des patients 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="50">
              <img src="/downloaded_images/img_6.jpg" alt="Clinique Rouibah 6" />
              <div className="gallery-caption">Photo 6 : Laboratoire d'analyses 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="100">
              <img src="/downloaded_images/img_7.jpg" alt="Clinique Rouibah 7" />
              <div className="gallery-caption">Photo 7 : Service de radiologie 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="150">
              <img src="/downloaded_images/img_8.jpg" alt="Clinique Rouibah 8" />
              <div className="gallery-caption">Photo 8 : Bloc opératoire 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="0">
              <img src="/downloaded_images/img_9.jpg" alt="Clinique Rouibah 9" />
              <div className="gallery-caption">Photo 9 : Salle d'attente 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="50">
              <img src="/downloaded_images/img_10.jpg" alt="Clinique Rouibah 10" />
              <div className="gallery-caption">Photo 10 : Cabinets de consultation 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="100">
              <img src="/downloaded_images/img_11.jpg" alt="Clinique Rouibah 11" />
              <div className="gallery-caption">Photo 11 : Service des urgences 🩺</div>
            </div>
            <div className="gallery-item animate" data-animation="fade-up" data-delay="150">
              <img src="/downloaded_images/img_12.jpg" alt="Clinique Rouibah 12" />
              <div className="gallery-caption">Photo 12 : Infrastructure médicale 🩺</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS SECTION
         ============================================================ */}
      <section className="testimonials section bg-soft" id="testimonials">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="testi-tag"><i className="fa-solid fa-circle-dot"></i> Avis Patients</span>
            <h2 className="section-title" data-i18n="testi-title">Ce que disent nos patients <span className="text-teal">sur la clinique</span></h2>
            <p className="section-lead" data-i18n="testi-lead">Avis authentiques de nos patients sur Google Maps — leur confiance est notre plus grande récompense.</p>
            <div className="overall-rating animate" data-animation="fade-up" data-delay="100">
              <div className="rating-score">3.7</div>
              <div className="rating-details">
                <div className="stars-row">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p data-i18n="testi-rating-count">Basé sur <strong>31 avis</strong> sur Google Maps</p>
                <a href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z" target="_blank" rel="noreferrer" className="google-link">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" alt="Google" />{" "}
                  <span data-i18n="testi-rate-btn">Nous évaluer sur Google</span>
                </a>
              </div>
            </div>
          </div>

          <div className="testimonials-grid">
            {/* ★★★★★ Review 1 - Lynda Lynda */}
            <div
              className="review-card featured animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="review-header">
                <div className="reviewer-avatar">L</div>
                <div className="reviewer-info">
                  <h5>Lynda Lynda</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Je tiens à exprimer ma plus profonde gratitude à l'une des
                formidables médecins du service de médecine interne de la
                clinique Rouibah. Elle a fait preuve d'une compétence et d'un
                dévouement exceptionnels lors de mes soins. Elle ne s'est pas
                contentée de me soigner, mais a également veillé constamment à
                mon bien-être physique et mental, avec une grande gentillesse et
                beaucoup de patience. Un immense merci à cette remarquable
                médecin pour tous ses efforts et son dévouement envers ses
                patients."
              </blockquote>
              <div className="review-translation">
                🌟 Review from Google Maps — Clinique Rouibah, Bordj Menaïel
              </div>
            </div>

            {/* ★★★★★ Review 2 - Aklil Sou */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#10b981,#065f46)",
                  }}
                >
                  A
                </div>
                <div className="reviewer-info">
                  <h5>Aklil Sou</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Que Dieu vous accorde santé et bien-être. Vos soins et votre
                dévouement sont véritablement exceptionnels. Vous êtes une
                source de fierté et d'honneur pour nous et pour les patients, de
                véritables héros de l'ombre !"
              </blockquote>
              <div className="review-translation">
                🌟 Review from Google Maps — Clinique Rouibah, Bordj Menaïel
              </div>
            </div>

            {/* ★★★★★ Review 3 - xasraw ismail */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#8b5cf6,#4c1d95)",
                  }}
                >
                  X
                </div>
                <div className="reviewer-info">
                  <h5>Xasraw Ismail</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "La clinique Masha'Allah ne cesse de s'améliorer. Malgré les
                conditions difficiles de la région, vous avez su vous adapter
                et prodiguer d'excellents soins. Vous avez été d'un soutien
                indéfectible envers nous et nos patients, malgré nos inquiétudes
                et nos manquements. Cela témoigne de votre grand
                professionnalisme."
              </blockquote>
              <div className="review-translation">
                🌟 Review from Google Maps — Clinique Rouibah, Bordj Menaïel
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong data-i18n="clinic-reply-label">Réponse de la Clinique Rouibah :</strong> <span data-i18n="clinic-reply-3">"Que Dieu vous bénisse. Nous vous souhaitons bonne santé à tous."</span>
              </div>
            </div>

            {/* ★★★★★ Review 4 - youcef rouibah */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#f59e0b,#92400e)",
                  }}
                >
                  Y
                </div>
                <div className="reviewer-info">
                  <h5>Youcef Rouibah</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Très bonne clinique, personnel accueillant et médecin
                compétent. Merci pour votre sérieux."
              </blockquote>
              <div className="review-translation">
                🌟 Review from Google Maps — Clinique Rouibah, Bordj Menaïel
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong data-i18n="clinic-reply-label">Réponse de la Clinique Rouibah :</strong> <span data-i18n="clinic-reply-4">"Merci infiniment pour votre confiance."</span>
              </div>
            </div>

            {/* ★★★★★ Review 5 - Bilal Salem */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="400"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#06b6d4,#164e63)",
                  }}
                >
                  B
                </div>
                <div className="reviewer-info">
                  <h5>Bilal Salem</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Personnel sérieux et à l'écoute des patients, la prise en
                charge est rapide. Le service Anapath est très bien."
              </blockquote>
              <div className="review-translation">
                🌟 Review from Google Maps — Clinique Rouibah, Bordj Menaïel
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong data-i18n="clinic-reply-label">Réponse de la Clinique Rouibah :</strong> <span data-i18n="clinic-reply-5">"Que Dieu vous garde. Nous souhaitons la guérison à tous les patients. Merci beaucoup."</span>
              </div>
            </div>

            {/* Commitment Card */}
            <div
              className="review-commitment animate"
              data-animation="fade-up"
              data-delay="500"
            >
              <div className="commitment-icon">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h3 data-i18n="commit-title">Notre engagement envers vous</h3>
              <p data-i18n="commit-desc">Nous prenons chaque avis et commentaire très au sérieux. Nos réponses immédiates à chaque évaluation témoignent de notre engagement constant à améliorer nos services pour répondre à vos attentes.</p>
              <a href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z" target="_blank" rel="noreferrer" className="btn btn-outline-teal">
                <i className="fa-brands fa-google"></i>
                <span data-i18n="commit-btn">Lire tous les avis</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS / HOW TO BOOK SECTION
         ============================================================ */}
      <section className="process section" id="process">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="process-tag"><i className="fa-solid fa-circle-dot"></i> Comment ça marche ?</span>
            <h2 className="section-title" data-i18n="process-title">Quatre étapes simples <span className="text-teal">pour obtenir vos soins</span></h2>
          </div>

          <div className="process-steps">
            <div className="process-step animate" data-animation="fade-up" data-delay="0">
              <div className="step-number">01</div>
              <div className="step-icon"><i className="fa-solid fa-calendar-days"></i></div>
              <h4 data-i18n="step1-title">Prenez rendez-vous</h4>
              <p data-i18n="step1-desc">Contactez-nous par téléphone, formulaire en ligne ou WhatsApp pour fixer votre rendez-vous.</p>
            </div>
            <div className="process-arrow"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="process-step animate" data-animation="fade-up" data-delay="100">
              <div className="step-number">02</div>
              <div className="step-icon"><i className="fa-solid fa-user-clock"></i></div>
              <h4 data-i18n="step2-title">Accueil par le médecin</h4>
              <p data-i18n="step2-desc">À l'heure convenue, le spécialiste vous reçoit pour l'examen et l'évaluation initiale.</p>
            </div>
            <div className="process-arrow"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="process-step animate" data-animation="fade-up" data-delay="200">
              <div className="step-number">03</div>
              <div className="step-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
              <h4 data-i18n="step3-title">Diagnostic précis</h4>
              <p data-i18n="step3-desc">Les analyses et examens nécessaires sont réalisés pour établir un diagnostic exact et fiable.</p>
            </div>
            <div className="process-arrow"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="process-step animate" data-animation="fade-up" data-delay="300">
              <div className="step-number">04</div>
              <div className="step-icon"><i className="fa-solid fa-notes-medical"></i></div>
              <h4 data-i18n="step4-title">Plan de traitement</h4>
              <p data-i18n="step4-desc">Le médecin établit un plan thérapeutique clair avec un suivi régulier jusqu'à votre rétablissement complet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT & MAP SECTION
         ============================================================ */}
      <section className="contact section bg-soft" id="contact">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag" data-i18n="contact-tag"><i className="fa-solid fa-circle-dot"></i> Contactez-nous</span>
            <h2 className="section-title" data-i18n="contact-title">Nous sommes à <span className="text-teal">Bordj Menaïel</span> — Venez nous voir</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info animate" data-animation="slide-right">
              <div className="info-card">
                <div className="info-icon blue">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 data-i18n="c-addr-title">Adresse de la Clinique</h4>
                  <p data-i18n="c-addr-val">Bordj Menaïel, Wilaya de Boumerdès, Algérie</p>
                  <p className="coords">
                    <small>Lat: 36.7404707 — Long: 3.7351859</small>
                  </p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon teal">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 data-i18n="c-hours-title">Heures de travail</h4>
                  <table className="hours-table">
                    <tbody>
                      <tr>
                        <td data-i18n="hours-weekdays">Lundi – Vendredi</td>
                        <td><span className="open" data-i18n="hours-open">Ouvert 24/7</span></td>
                      </tr>
                      <tr>
                        <td data-i18n="hours-weekend">Samedi – Dimanche</td>
                        <td><span className="open" data-i18n="hours-open">Ouvert 24/7</span></td>
                      </tr>
                      <tr>
                        <td data-i18n="hours-holidays">Jours fériés</td>
                        <td><span className="open" data-i18n="hours-open">Ouvert 24/7</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon green">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 data-i18n="c-phone-title">Téléphone & Urgences</h4>
                  <div className="contact-channels">
                    <a href="tel:0559505001" className="channel-btn phone" data-i18n="contact-call-btn"><i className="fa-solid fa-phone"></i> Appeler</a>
                    <a href="https://wa.me/213559505001" className="channel-btn whatsapp" data-i18n="contact-wa-btn"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/" target="_blank" rel="noreferrer" className="channel-btn facebook"><i className="fa-brands fa-facebook-f"></i> Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-wrapper animate" data-animation="slide-left">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.253683058869!2d3.732611!3d36.740475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e7786fe9f2429%3A0x4a748e99eb894554!2sClinique%20Rouibah!5e0!3m2!1sar!2sdz!4v1700000000000!5m2!1sar!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z" target="_blank" rel="noreferrer" className="directions-btn" data-i18n="directions-btn">
                <i className="fa-solid fa-map-location-dot"></i> Obtenir l'itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          APPOINTMENT FORM SECTION
         ============================================================ */}
      <section className="appointment section" id="appointment">
        <div className="appt-bg">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm02njxxQUSz_VbHcdcNouoeHSMhf_VfnQJdu7K_At85GF4ZMz1gwX29RcjpPHoUhsDaShXHOC6KzWssqg_yn90Kd6fBJmH0LG67UbvPpwAj5N3kcXx2cq5zfAEdabhmasRhgZ8=s1920"
            alt="خلفية طبية"
          />
          <div className="appt-overlay"></div>
        </div>
        <div className="container appt-container">
          <div className="appt-form-card animate" data-animation="fade-up">
            <div className="appt-form-header">
              <div className="appt-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h2 data-i18n="form-title">Formulaire de demande de rendez-vous</h2>
              <p data-i18n="form-sub">Remplissez les informations suivantes pour réserver votre consultation</p>
            </div>
            <form className="appt-form" id="booking-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-name" data-i18n="lbl-name"><i className="fa-solid fa-user"></i> Nom et Prénom *</label>
                  <input type="text" id="f-name" data-i18n-ph="ph-name" placeholder="Ex: Benali Mohamed" required />
                </div>
                <div className="form-field">
                  <label htmlFor="f-phone" data-i18n="lbl-phone"><i className="fa-solid fa-phone"></i> Numéro de téléphone *</label>
                  <input type="tel" id="f-phone" data-i18n-ph="ph-phone" placeholder="Ex: 0550 12 34 56" required />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-service" data-i18n="lbl-service"><i className="fa-solid fa-stethoscope"></i> Spécialité souhaitée *</label>
                  <select id="f-service" defaultValue="" required>
                    <option value="" disabled data-i18n="opt-select">-- Choisissez un service --</option>
                    <option value="Médecine Générale" data-i18n="opt-s1">Médecine Générale / Urgences</option>
                    <option value="Dentiste" data-i18n="opt-s2">Dentiste / Chirurgie dentaire</option>
                    <option value="Gynécologie" data-i18n="opt-s3">Gynécologie & Obstétrique</option>
                    <option value="Pédiatrie" data-i18n="opt-s4">Pédiatrie</option>
                    <option value="Laboratoire" data-i18n="opt-s5">Laboratoire d'analyses</option>
                    <option value="Radiologie" data-i18n="opt-s6">Radiologie / Échographie</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="f-date" data-i18n="lbl-date"><i className="fa-solid fa-calendar"></i> Date souhaitée *</label>
                  <input type="date" id="f-date" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="f-message" data-i18n="lbl-notes"><i className="fa-solid fa-comment-medical"></i> Remarques ou symptômes (Optionnel)</label>
                <textarea id="f-message" rows={4} data-i18n-ph="ph-notes" placeholder="Décrivez brièvement le motif de votre visite..."></textarea>
              </div>
              <button type="submit" className="btn btn-submit-appt" data-i18n="btn-submit-apt">
                <i className="fa-solid fa-paper-plane"></i> Confirmer la demande de rendez-vous
              </button>
              <p className="form-note" data-i18n="form-privacy"><i className="fa-solid fa-lock"></i> Vos informations sont sécurisées — elles ne seront jamais partagées avec des tiers.</p>
            </form>
          </div>

          <div className="appt-info animate" data-animation="slide-left">
            <h3 data-i18n="appt-why-title">Pourquoi réserver chez nous ?</h3>
            <ul className="appt-benefits">
              <li data-i18n="appt-b1"><i className="fa-solid fa-check-circle"></i> Confirmation immédiate du rendez-vous</li>
              <li data-i18n="appt-b2"><i className="fa-solid fa-check-circle"></i> Rappel 24h avant votre rendez-vous</li>
              <li data-i18n="appt-b3"><i className="fa-solid fa-check-circle"></i> Équipe médicale spécialisée qui vous attend</li>
              <li data-i18n="appt-b4"><i className="fa-solid fa-check-circle"></i> Environnement propre et confortable</li>
              <li data-i18n="appt-b5"><i className="fa-solid fa-check-circle"></i> Suivi médical après la visite</li>
            </ul>
            <div className="appt-emergency-box">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <div>
                <strong data-i18n="emerg-box-title">Urgence médicale ?</strong>
                <p data-i18n="emerg-box-desc">N'attendez pas — appelez-nous directement ou venez aux urgences immédiatement.</p>
                <a href="tel:0559505001" className="emergency-call-btn" data-i18n="emerg-btn"><i className="fa-solid fa-phone-volume"></i> Appeler Maintenant</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
         ============================================================ */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container footer-top-grid">
            <div className="footer-brand">
              <div className="logo footer-logo">
                <div className="logo-icon-wrap">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div className="logo-text">
                  <span className="logo-en">Rouibah Medical</span>
                  <span className="logo-ar">عيادة الرويبح</span>
                </div>
              </div>
              <p data-i18n="footer-desc">Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.</p>
              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Maps"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4 data-i18n="footer-quick">Liens Rapides</h4>
              <ul>
                <li><a href="#home" data-i18n="nav-home"><i className="fa-solid fa-chevron-right"></i> Accueil</a></li>
                <li><a href="#about" data-i18n="nav-about"><i className="fa-solid fa-chevron-right"></i> À propos</a></li>
                <li><a href="#services" data-i18n="nav-services"><i className="fa-solid fa-chevron-right"></i> Nos Services</a></li>
                <li><a href="#doctors" data-i18n="nav-doctors"><i className="fa-solid fa-chevron-right"></i> Notre Équipe</a></li>
                <li><a href="#gallery" data-i18n="nav-gallery"><i className="fa-solid fa-chevron-right"></i> Galerie</a></li>
                <li><a href="#testimonials" data-i18n="nav-testimonials"><i className="fa-solid fa-chevron-right"></i> Avis Patients</a></li>
                <li><a href="#appointment" data-i18n="btn-book"><i className="fa-solid fa-chevron-right"></i> Prendre Rendez-vous</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 data-i18n="footer-services">Nos Services</h4>
              <ul>
                <li><a href="#services" data-i18n="s1-title"><i className="fa-solid fa-chevron-right"></i> Médecine Générale & Urgences</a></li>
                <li><a href="#services" data-i18n="s2-title"><i className="fa-solid fa-chevron-right"></i> Médecine Dentaire & Chirurgie</a></li>
                <li><a href="#services" data-i18n="s3-title"><i className="fa-solid fa-chevron-right"></i> Gynécologie & Obstétrique</a></li>
                <li><a href="#services" data-i18n="s4-title"><i className="fa-solid fa-chevron-right"></i> Pédiatrie</a></li>
                <li><a href="#services" data-i18n="s5-title"><i className="fa-solid fa-chevron-right"></i> Laboratoire d'Analyses</a></li>
                <li><a href="#services" data-i18n="s6-title"><i className="fa-solid fa-chevron-right"></i> Imagerie Médicale & Radiologie</a></li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4 data-i18n="footer-contact">Informations de Contact</h4>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span data-i18n="c-addr-val">Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-clock"></i>
                <span data-i18n="c-hours-val">7j/7 - 24h/24 (Service d'urgences continu)</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-brands fa-facebook-f"></i>
                <a
                  href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rouibah Medical Group
                </a>
              </div>
              <div className="footer-google-rating">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                  alt="Google"
                />
                <div>
                  <div className="mini-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span data-i18n="footer-google-rating">3.7/5 — 31 avis sur Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p data-i18n="footer-rights">Tous droits réservés © Groupe Médical Rouibah.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        id="back-to-top"
        aria-label="العودة للأعلى"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
