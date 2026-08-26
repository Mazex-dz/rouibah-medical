const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// Normalize line endings to \n
page = page.replace(/\r\n/g, '\n');
html = html.replace(/\r\n/g, '\n');

// 1. Set html attributes
page = page.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');
html = html.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');

// 2. Add language switcher to topbar
page = page.replace(
  '            <a href="tel:0559505001">\n              <i className="fa-solid fa-phone"></i> اتصل بنا\n            </a>',
  `            <a href="tel:0559505001" data-i18n="topbar-contact">
              <i className="fa-solid fa-phone"></i> Contactez-nous
            </a>
            <div className="lang-switcher">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>`
);

html = html.replace(
  '                <a href="tel:0559505001"><i\n                        class="fa-solid fa-phone"></i> اتصل بنا</a>',
  `                <a href="tel:0559505001" data-i18n="topbar-contact"><i class="fa-solid fa-phone"></i> Contactez-nous</a>
                <div class="lang-switcher">
                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
                </div>`
);

// 3. Add mobile language switcher to header-cta
page = page.replace(
  '          <div className="header-cta">\n            <a href="#appointment" className="btn btn-primary">\n              <i className="fa-solid fa-calendar-plus"></i>\n              احجز موعداً\n            </a>',
  `          <div className="header-cta">
            <a href="#appointment" className="btn btn-primary" data-i18n="btn-book">
              <i className="fa-solid fa-calendar-plus"></i>
              Prendre Rendez-vous
            </a>
            <div className="lang-switcher lang-switcher-mobile">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>`
);

html = html.replace(
  '            <div class="header-cta">\n                <a href="#appointment" class="btn btn-primary">\n                    <i class="fa-solid fa-calendar-plus"></i>\n                    احجز موعداً\n                </a>',
  `            <div class="header-cta">
                <a href="#appointment" class="btn btn-primary" data-i18n="btn-book">
                    <i class="fa-solid fa-calendar-plus"></i>
                    Prendre Rendez-vous
                </a>
                <div class="lang-switcher lang-switcher-mobile">
                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
                </div>`
);

// 4. Exact French text replacements with data-i18n
const replacements = [
  // Topbar
  [
    '<span>\n              <i className="fa-solid fa-location-dot"></i> برج منايل، ولاية\n              بومرداس، الجزائر\n            </span>',
    '<span><i class="fa-solid fa-location-dot"></i> برج منايل، ولاية بومرداس، الجزائر</span>',
    '<span data-i18n="topbar-address"><i class="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>'
  ],
  [
    '<span>\n              <i className="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام\n            </span>',
    '<span><i class="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام</span>',
    '<span data-i18n="topbar-hours"><i class="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7</span>'
  ],

  // Nav
  ['<a href="#home">الرئيسية</a>', '<a href="#home">الرئيسية</a>', '<a href="#home" data-i18n="nav-home">Accueil</a>'],
  ['<a href="#about">من نحن</a>', '<a href="#about">من نحن</a>', '<a href="#about" data-i18n="nav-about">À propos</a>'],
  ['<a href="#services">خدماتنا</a>', '<a href="#services">خدماتنا</a>', '<a href="#services" data-i18n="nav-services">Nos Services</a>'],
  ['<a href="#doctors">فريقنا</a>', '<a href="#doctors">فريقنا</a>', '<a href="#doctors" data-i18n="nav-doctors">Notre Équipe</a>'],
  ['<a href="#gallery">معرض الصور</a>', '<a href="#gallery">معرض الصور</a>', '<a href="#gallery" data-i18n="nav-gallery">Galerie</a>'],
  ['<a href="#testimonials">آراء المرضى</a>', '<a href="#testimonials">آراء المرضى</a>', '<a href="#testimonials" data-i18n="nav-testimonials">Avis Patients</a>'],
  ['<a href="#contact">تواصل معنا</a>', '<a href="#contact">تواصل معنا</a>', '<a href="#contact" data-i18n="nav-contact">Contact</a>'],

  // Hero
  [
    '<div className="hero-badge fade-in" data-delay="100">\n            <i className="fa-solid fa-shield-heart"></i>\n            <span>مركز طبي معتمد — برج منايل، الجزائر</span>\n          </div>',
    '<div class="hero-badge fade-in" data-delay="100">\n                <i class="fa-solid fa-shield-heart"></i>\n                <span>مركز طبي معتمد — برج منايل، الجزائر</span>\n            </div>',
    '<div class="hero-badge fade-in" data-delay="100" data-i18n="hero-badge"><i class="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie</div>'
  ],
  [
    '<h1 className="hero-title fade-in" data-delay="200">\n            صحتك أمانة في أيدٍ\n            <br />\n            <span className="gradient-text">متخصصة وموثوقة</span>\n          </h1>',
    '<h1 class="hero-title fade-in" data-delay="200">\n            صحتك أمانة في أيدٍ\n            <br>\n            <span class="gradient-text">متخصصة وموثوقة</span>\n        </h1>',
    '<h1 class="hero-title fade-in" data-delay="200" data-i18n="hero-title">Votre santé est une priorité entre des mains<br><span class="gradient-text">spécialisées et de confiance</span></h1>'
  ],
  [
    '<p className="hero-subtitle fade-in" data-delay="300">\n            في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية\n            الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.\n          </p>',
    '<p class="hero-subtitle fade-in" data-delay="300">\n            في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية\n            الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.\n        </p>',
    '<p class="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.</p>'
  ],
  [
    '<a href="#appointment" className="btn btn-hero-primary">\n              احجز موعداً الآن\n              <i className="fa-solid fa-arrow-left"></i>\n            </a>',
    '<a href="#appointment" class="btn btn-hero-primary">\n                    احجز موعداً الآن\n                    <i class="fa-solid fa-arrow-left"></i>\n                </a>',
    '<a href="#appointment" class="btn btn-hero-primary" data-i18n="hero-btn-book">Réserver un rendez-vous <i class="fa-solid fa-arrow-right"></i></a>'
  ],
  [
    '<a href="#about" className="btn btn-hero-ghost">\n              <i className="fa-solid fa-play-circle"></i>\n              تعرف علينا\n            </a>',
    '<a href="#about" class="btn btn-hero-ghost">\n                    <i class="fa-solid fa-play-circle"></i>\n                    تعرف علينا\n                </a>',
    '<a href="#about" class="btn btn-hero-ghost" data-i18n="hero-btn-about"><i class="fa-solid fa-play-circle"></i> Découvrez-nous</a>'
  ],
  ['<div className="stat-label">تقييم على Google</div>', '<div class="stat-label">تقييم على Google</div>', '<div class="stat-label" data-i18n="stat-google-label">Avis sur Google</div>'],
  ['<div className="stat-label">تخصصات طبية</div>', '<div class="stat-label">تخصصات طبية</div>', '<div class="stat-label" data-i18n="stat-spec-label">Spécialités médicales</div>'],
  ['<div className="stat-label">استعجالات على مدار الساعة</div>', '<div class="stat-label">استعجالات على مدار الساعة</div>', '<div class="stat-label" data-i18n="stat-emerg-label">Urgences 24/7</div>'],
  ['<span>اكتشف المزيد</span>', '<span>اكتشف المزيد</span>', '<span data-i18n="hero-scroll">Découvrir plus</span>'],

  // Emergency Bar
  ['<strong>قسم الطوارئ مفتوح 24/7</strong>', '<strong>قسم الطوارئ مفتوح 24/7</strong>', '<strong data-i18n="emerg-title">Service des Urgences Ouvert 24/7</strong>'],
  [
    '<span>\n              نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل\n            </span>',
    '<span>نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل</span>',
    '<span data-i18n="emerg-desc">Nous accueillons les urgences médicales 24h/24 — N\'hésitez pas à nous contacter</span>'
  ],
  [
    '<a href="tel:0559505001" className="btn btn-emergency">\n            <i className="fa-solid fa-phone-volume"></i>\n            اتصل الآن\n          </a>',
    '<a href="tel:0559505001" class="btn btn-emergency">\n                <i class="fa-solid fa-phone-volume"></i>\n                اتصل الآن\n            </a>',
    '<a href="tel:0559505001" class="btn btn-emergency" data-i18n="emerg-btn"><i class="fa-solid fa-phone-volume"></i> Appeler Maintenant</a>'
  ],

  // About Section
  [
    '<span className="label-tag">\n                <i className="fa-solid fa-circle-dot"></i> من نحن\n              </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> من نحن</span>',
    '<span class="label-tag" data-i18n="about-tag"><i class="fa-solid fa-circle-dot"></i> À propos de nous</span>'
  ],
  [
    '<h2 className="section-title">\n                رسالتنا: رعاية\n                <br />\n                طبية تستحقها\n              </h2>',
    '<h2 class="section-title">رسالتنا: رعاية<br>طبية تستحقها</h2>',
    '<h2 class="section-title" data-i18n="about-title">Notre mission : des soins<br>médicaux d\'excellence</h2>'
  ],
  [
    '<p className="about-lead">\n                عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة\n                أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية\n                متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.\n              </p>',
    '<p class="about-lead">\n                عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة\n                أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية\n                متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.\n            </p>',
    '<p class="about-lead" data-i18n="about-lead">Le Groupe Médical Rouibah (Rouibah Medical Group) est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.</p>'
  ],
  [
    '<p className="about-desc">\n                نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف\n                أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف\n                التخصصات.\n              </p>',
    '<p class="about-desc">\n                نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف\n                أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف\n                التخصصات.\n            </p>',
    '<p class="about-desc" data-i18n="about-desc">Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C\'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.</p>'
  ],
  ['<h4>الدقة والكفاءة</h4>', '<h4>الدقة والكفاءة</h4>', '<h4 data-i18n="val1-title">Précision & Efficacité</h4>'],
  ['<p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>', '<p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>', '<p data-i18n="val1-desc">Diagnostic exact et traitement efficace dès la première visite</p>'],
  ['<h4>الرعاية الإنسانية</h4>', '<h4>الرعاية الإنسانية</h4>', '<h4 data-i18n="val2-title">Soins Humains</h4>'],
  ['<p>نعامل كل مريض بالاحترام والتعاطف</p>', '<p>نعامل كل مريض بالاحترام والتعاطف</p>', '<p data-i18n="val2-desc">Nous traitons chaque patient avec respect et compassion</p>'],
  ['<h4>تقنيات متطورة</h4>', '<h4>تقنيات متطورة</h4>', '<h4 data-i18n="val3-title">Technologies Avancées</h4>'],
  ['<p>أحدث الأجهزة التشخيصية والعلاجية</p>', '<p>أحدث الأجهزة التشخيصية والعلاجية</p>', '<p data-i18n="val3-desc">Équipements de diagnostic et de traitement de pointe</p>'],
  ['<h4>تطوير مستمر</h4>', '<h4>تطوير مستمر</h4>', '<h4 data-i18n="val4-title">Développement Continu</h4>'],
  ['<p>نستثمر دائماً في التحسين والنمو</p>', '<p>نستثمر دائماً في التحسين والنمو</p>', '<p data-i18n="val4-desc">Nous investissons constamment dans l\'amélioration de nos services</p>'],
  ['<strong>مركز طبي متكامل</strong>', '<strong>مركز طبي متكامل</strong>', '<strong data-i18n="about-badge-title">Centre Médical Intégré</strong>'],
  ['<span>برج منايل</span>', '<span>برج منايل</span>', '<span data-i18n="about-badge-sub">Bordj Menaïel</span>'],
  ['<span>تقييم Google</span>', '<span>تقييم Google</span>', '<span data-i18n="about-rating-text">Avis Google</span>'],
  [
    '<a href="#services" className="btn btn-primary mt-30">\n                اكتشف خدماتنا\n                <i className="fa-solid fa-arrow-left"></i>\n              </a>',
    '<a href="#services" class="btn btn-primary mt-30">\n                    اكتشف خدماتنا\n                    <i class="fa-solid fa-arrow-left"></i>\n                </a>',
    '<a href="#services" class="btn btn-primary mt-30" data-i18n="about-btn">Découvrez nos services <i class="fa-solid fa-arrow-right"></i></a>'
  ],

  // Counters
  ['<p>مريض خُدم</p>', '<p>مريض خُدم</p>', '<p data-i18n="stat-counter1-label">Patients accompagnés</p>'],
  ['<p>طبيب متخصص</p>', '<p>طبيب متخصص</p>', '<p data-i18n="stat-counter2-label">Médecins spécialistes</p>'],
  ['<p>تخصصات طبية</p>', '<p>تخصصات طبية</p>', '<p data-i18n="stat-counter3-label">Spécialités médicales</p>'],
  ['<p>تقييم Google Maps</p>', '<p>تقييم Google Maps</p>', '<p data-i18n="stat-counter4-label">Avis Google Maps</p>'],

  // Services
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> خدماتنا الطبية\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية</span>',
    '<span class="label-tag" data-i18n="services-tag"><i class="fa-solid fa-circle-dot"></i> Nos Services Médicaux</span>'
  ],
  [
    '<h2 className="section-title">\n              تخصصات شاملة <span className="text-teal">لرعايتك الكاملة</span>\n            </h2>',
    '<h2 class="section-title">تخصصات شاملة <span class="text-teal">لرعايتك الكاملة</span></h2>',
    '<h2 class="section-title" data-i18n="services-title">Spécialités complètes <span class="text-teal">pour vos soins</span></h2>'
  ],
  [
    '<p className="section-lead">\n              نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا\n              تستحق أقل من ذلك.\n            </p>',
    '<p class="section-lead">\n              نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا\n              تستحق أقل من ذلك.\n            </p>',
    '<p class="section-lead" data-i18n="services-lead">Nous offrons une gamme complète de services médicaux et diagnostiques au même endroit, car votre santé mérite le meilleur.</p>'
  ],

  // Service 1
  ['<h3>الطب العام والطوارئ</h3>', '<h3>الطب العام والطوارئ</h3>', '<h3 data-i18n="s1-title">Médecine Générale & Urgences</h3>'],
  [
    '<p>\n                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع\n                  لاستقبال جميع الحالات المستعجلة.\n                </p>',
    '<p>\n                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع\n                  لاستقبال جميع الحالات المستعجلة.\n                </p>',
    '<p data-i18n="s1-desc">Un service d\'urgence entièrement équipé, ouvert 24h/24 et 7j/7 pour accueillir tous les cas urgents.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> استقبال فوري للحالات\n                    الطارئة\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> استقبال فوري للحالات\n                    الطارئة\n                </li>',
    '<li data-i18n="s1-f1"><i class="fa-solid fa-check"></i> Prise en charge immédiate des urgences</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> تشخيص وعلاج سريع\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> تشخيص وعلاج سريع\n                </li>',
    '<li data-i18n="s1-f2"><i class="fa-solid fa-check"></i> Diagnostic et traitement rapides</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> إشراف طبي مستمر\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> إشراف طبي مستمر\n                </li>',
    '<li data-i18n="s1-f3"><i class="fa-solid fa-check"></i> Surveillance médicale continue</li>'
  ],

  // Service 2: Dentiste
  ['<h3>طب وجراحة الأسنان</h3>', '<h3>طب وجراحة الأسنان</h3>', '<h3 data-i18n="s2-title">Médecine Dentaire & Chirurgie</h3>'],
  [
    '<p>\n                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء\n                  متخصصين ذوي خبرة.\n                </p>',
    '<p>\n                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء\n                  متخصصين ذوي خبرة.\n                </p>',
    '<p data-i18n="s2-desc">Services d\'orthodontie, de soin et d\'esthétique dentaire avec des technologies récentes et des spécialistes expérimentés.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> علاج وحشوات بدون ألم\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> علاج وحشوات بدون ألم\n                </li>',
    '<li data-i18n="s2-f1"><i class="fa-solid fa-check"></i> Soins et obturations sans douleur</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> تجميل الأسنان\n                    والابتسامة\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> تجميل الأسنان\n                    والابتسامة\n                </li>',
    '<li data-i18n="s2-f2"><i class="fa-solid fa-check"></i> Esthétique dentaire et du sourire</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> زراعة الأسنان الفورية\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> زراعة الأسنان الفورية\n                </li>',
    '<li data-i18n="s2-f3"><i class="fa-solid fa-check"></i> Implantologie dentaire</li>'
  ],

  // Service 3: Gynécologie
  ['<h3>النساء والتوليد</h3>', '<h3>النساء والتوليد</h3>', '<h3 data-i18n="s3-title">Gynécologie & Obstétrique</h3>'],
  [
    '<p>\n                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة\n                  مريحة وآمنة.\n                </p>',
    '<p>\n                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة\n                  مريحة وآمنة.\n                </p>',
    '<p data-i18n="s3-desc">Suivi complet de la grossesse, accouchement sécurisé et soins post-partum dans un environnement confortable.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> متابعة دورية للحامل\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> متابعة دورية للحامل\n                </li>',
    '<li data-i18n="s3-f1"><i class="fa-solid fa-check"></i> Suivi prénatal régulier</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> ولادة طبيعية وقيصرية\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> ولادة طبيعية وقيصرية\n                </li>',
    '<li data-i18n="s3-f2"><i class="fa-solid fa-check"></i> Accouchement naturel et césarienne</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> رعاية ما بعد الوضع\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> رعاية ما بعد الوضع\n                </li>',
    '<li data-i18n="s3-f3"><i class="fa-solid fa-check"></i> Soins gynécologiques post-partum</li>'
  ],

  // Service 4: Pédiatrie
  ['<h3>طب الأطفال</h3>', '<h3>طب الأطفال</h3>', '<h3 data-i18n="s4-title">Pédiatrie</h3>'],
  [
    '<p>\n                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،\n                  بأيدي أطباء متفانين.\n                </p>',
    '<p>\n                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،\n                  بأيدي أطباء متفانين.\n                </p>',
    '<p data-i18n="s4-desc">Soins complets pour la santé de vos enfants, de la naissance à l\'adolescence, dispensés par des pédiatres dévoués.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> متابعة النمو والتطور\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> متابعة النمو والتطور\n                </li>',
    '<li data-i18n="s4-f1"><i class="fa-solid fa-check"></i> Suivi de la croissance et du développement</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> التطعيمات والوقاية\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> التطعيمات والوقاية\n                </li>',
    '<li data-i18n="s4-f2"><i class="fa-solid fa-check"></i> Vaccination et prévention</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> علاج أمراض الأطفال\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> علاج أمراض الأطفال\n                </li>',
    '<li data-i18n="s4-f3"><i class="fa-solid fa-check"></i> Traitement des maladies infantiles</li>'
  ],

  // Service 5: Laboratoire
  ['<h3>المخبر والتحاليل الطبية</h3>', '<h3>المخبر والتحاليل الطبية</h3>', '<h3 data-i18n="s5-title">Laboratoire d\'Analyses Médicales</h3>'],
  [
    '<p>\n                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع\n                  أنواع التحاليل.\n                </p>',
    '<p>\n                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع\n                  أنواع التحاليل.\n                </p>',
    '<p data-i18n="s5-desc">Laboratoire moderne équipé d\'appareils de pointe offrant des résultats rapides et précis pour toutes les analyses.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> تحاليل دم وبول شاملة\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> تحاليل دم وبول شاملة\n                </li>',
    '<li data-i18n="s5-f1"><i class="fa-solid fa-check"></i> Bilan sanguin et urinaire complet</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> تحاليل البكتيريولوجيا\n                    (Anapath)\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> تحاليل البكتيريولوجيا\n                    (Anapath)\n                </li>',
    '<li data-i18n="s5-f2"><i class="fa-solid fa-check"></i> Analyses bactériologiques et d\'anapath</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> نتائج سريعة ودقيقة\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> نتائج سريعة ودقيقة\n                </li>',
    '<li data-i18n="s5-f3"><i class="fa-solid fa-check"></i> Résultats fiables et rapides</li>'
  ],

  // Service 6: Radiologie
  ['<h3>الأشعة والتصوير الطبي</h3>', '<h3>الأشعة والتصوير الطبي</h3>', '<h3 data-i18n="s6-title">Imagerie Médicale & Radiologie</h3>'],
  [
    '<p>\n                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة\n                  للتشخيص الدقيق.\n                </p>',
    '<p>\n                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة\n                  للتشخيص الدقيق.\n                </p>',
    '<p data-i18n="s6-desc">Service d\'imagerie entièrement équipé proposant tous les examens nécessaires à un diagnostic précis.</p>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> أشعة سينية (Radio)\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> أشعة سينية (Radio)\n                </li>',
    '<li data-i18n="s6-f1"><i class="fa-solid fa-check"></i> Radiographie numérique (Radio)</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> الموجات فوق الصوتية\n                    (Echo)\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> الموجات فوق الصوتية\n                    (Echo)\n                </li>',
    '<li data-i18n="s6-f2"><i class="fa-solid fa-check"></i> Échographie (Echo 3D/4D)</li>'
  ],
  [
    '<li>\n                    <i className="fa-solid fa-check"></i> تصوير متخصص\n                  </li>',
    '<li>\n                    <i class="fa-solid fa-check"></i> تصوير متخصص\n                </li>',
    '<li data-i18n="s6-f3"><i class="fa-solid fa-check"></i> Examens spécialisés</li>'
  ],

  // Why Choose Us
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> لماذا تختارنا؟\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> لماذا تختارنا؟</span>',
    '<span class="label-tag" data-i18n="why-tag"><i class="fa-solid fa-circle-dot"></i> Pourquoi nous choisir ?</span>'
  ],
  [
    '<h2 className="section-title">\n              ما يجعلنا الخيار\n              <br />\n              <span className="text-teal">الأول في برج منايل</span>\n            </h2>',
    '<h2 class="section-title">ما يجعلنا الخيار<br><span class="text-teal">الأول في برج منايل</span></h2>',
    '<h2 class="section-title" data-i18n="why-title">Ce qui fait de nous le premier choix <br><span class="text-teal">à Bordj Menaïel</span></h2>'
  ],
  [
    '<p className="whyus-desc">\n              نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في\n              الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر، حتى في\n              مواجهة التحديات.\n            </p>',
    '<p class="whyus-desc">\n              نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في\n              الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر، حتى في\n              مواجهة التحديات.\n            </p>',
    '<p class="whyus-desc" data-i18n="why-desc">Nous ne proposons pas uniquement un service médical : nous bâtissons avec vous une relation de confiance et de partenariat pour votre santé. Notre engagement envers la qualité et l\'amélioration continue fait notre force.</p>'
  ],
  ['<h4>استعجالات 24/7 بلا انقطاع</h4>', '<h4>استعجالات 24/7 بلا انقطاع</h4>', '<h4 data-i18n="w1-title">Urgences 24/7 sans interruption</h4>'],
  [
    '<p>\n                    طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة\n                    باحترافية تامة.\n                  </p>',
    '<p>\n                    طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة\n                    باحترافية تامة.\n                </p>',
    '<p data-i18n="w1-desc">Équipe médicale disponible 24h/24 pour prendre en charge toute urgence avec professionnalisme.</p>'
  ],
  ['<h4>تجهيزات وتقنيات حديثة</h4>', '<h4>تجهيزات وتقنيات حديثة</h4>', '<h4 data-i18n="w2-title">Équipements et technologies modernes</h4>'],
  [
    '<p>\n                    نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج\n                    وسلامتك.\n                  </p>',
    '<p>\n                    نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج\n                    وسلامتك.\n                </p>',
    '<p data-i18n="w2-desc">Nous investissons dans des appareils de diagnostic de pointe pour garantir des résultats précis.</p>'
  ],
  ['<h4>أطباء متخصصون وذوو خبرة</h4>', '<h4>أطباء متخصصون وذوو خبرة</h4>', '<h4 data-i18n="w3-title">Médecins spécialisés et expérimentés</h4>'],
  [
    '<p>\n                    فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف\n                    المجالات الطبية.\n                  </p>',
    '<p>\n                    فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف\n                    المجالات الطبية.\n                </p>',
    '<p data-i18n="w3-desc">Une équipe médicale hautement qualifiée dans diverses disciplines à votre service.</p>'
  ],
  ['<h4>بيئة نظيفة ومريحة</h4>', '<h4>بيئة نظيفة ومريحة</h4>', '<h4 data-i18n="w4-title">Environnement propre et confortable</h4>'],
  [
    '<p>\n                    عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.\n                  </p>',
    '<p>\n                    عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.\n                </p>',
    '<p data-i18n="w4-desc">Une clinique conçue selon les plus hauts standards d\'hygiène pour assurer votre bien-être.</p>'
  ],

  // Doctors
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> فريقنا الطبي\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> فريقنا الطبي</span>',
    '<span class="label-tag" data-i18n="doctors-tag"><i class="fa-solid fa-circle-dot"></i> Équipe Médicale</span>'
  ],
  [
    '<h2 className="section-title">\n              أطباء متخصصون <span className="text-teal">في خدمتك</span>\n            </h2>',
    '<h2 class="section-title">أطباء متخصصون <span class="text-teal">في خدمتك</span></h2>',
    '<h2 class="section-title" data-i18n="doctors-title">Des médecins spécialisés <span class="text-teal">à votre service</span></h2>'
  ],
  [
    '<p className="section-lead">\n              يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل\n              مستوى من الرعاية الطبية.\n            </p>',
    '<p class="section-lead">\n              يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل\n              مستوى من الرعاية الطبية.\n            </p>',
    '<p class="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>'
  ],
  ['<h3>د. الرويبح</h3>', '<h3>د. الرويبح</h3>', '<h3 data-i18n="d1-name">Dr. Rouibah</h3>'],
  ['<p className="doc-role">طبيب مدير وطبيب عام</p>', '<p class="doc-role">طبيب مدير وطبيب عام</p>', '<p class="doc-role" data-i18n="d1-role">Médecin Directeur & Généraliste</p>'],
  ['<span className="doc-exp">خبرة تزيد عن 15 سنة</span>', '<span class="doc-exp">خبرة تزيد عن 15 سنة</span>', '<span class="doc-exp" data-i18n="d1-exp">15+ ans d\'expérience</span>'],
  ['<h3>د. أخصائي الأطفال</h3>', '<h3>د. أخصائي الأطفال</h3>', '<h3 data-i18n="d2-name">Dr. Pédiatre Spécialiste</h3>'],
  ['<p className="doc-role">أخصائي في طب الأطفال</p>', '<p class="doc-role">أخصائي في طب الأطفال</p>', '<p class="doc-role" data-i18n="d2-role">Spécialiste en Pédiatrie</p>'],
  ['<span className="doc-exp">خبرة تزيد عن 10 سنوات</span>', '<span class="doc-exp">خبرة تزيد عن 10 سنوات</span>', '<span class="doc-exp" data-i18n="d2-exp">10+ ans d\'expérience</span>'],
  ['<h3>د. أخصائية النساء</h3>', '<h3>د. أخصائية النساء</h3>', '<h3 data-i18n="d3-name">Dr. Gynécologue Spécialiste</h3>'],
  ['<p className="doc-role">أخصائية في أمراض النساء والتوليد</p>', '<p class="doc-role">أخصائية في أمراض النساء والتوليد</p>', '<p class="doc-role" data-i18n="d3-role">Spécialiste en Gynécologie-Obstétrique</p>'],
  ['<span className="doc-exp">خبرة تزيد عن 12 سنة</span>', '<span class="doc-exp">خبرة تزيد عن 12 سنة</span>', '<span class="doc-exp" data-i18n="d3-exp">12+ ans d\'expérience</span>'],
  ['<h3>فريق الاستعجالات</h3>', '<h3>فريق الاستعجالات</h3>', '<h3 data-i18n="d4-name">Équipe d\'Urgences</h3>'],
  ['<p className="doc-role">أطباء وممرضون مستعدون 24/7</p>', '<p class="doc-role">أطباء وممرضون مستعدون 24/7</p>', '<p class="doc-role" data-i18n="d4-role">Médecins Urgentistes & Infirmiers</p>'],
  ['<span className="doc-exp">خدمة مستمرة طوال اليوم</span>', '<span class="doc-exp">خدمة مستمرة طوال اليوم</span>', '<span class="doc-exp" data-i18n="d4-exp">Service continu 24/7</span>'],

  // Appointment Form
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> حجز موعد\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> حجز موعد</span>',
    '<span class="label-tag" data-i18n="apt-tag"><i class="fa-solid fa-circle-dot"></i> Prise de Rendez-vous</span>'
  ],
  [
    '<h2 className="section-title">\n              احجز موعدك الآن <span className="text-teal">بسهولة عبر الإنترنت</span>\n            </h2>',
    '<h2 class="section-title">احجز موعدك الآن <span class="text-teal">بسهولة عبر الإنترنت</span></h2>',
    '<h2 class="section-title" data-i18n="apt-title">Prenez votre rendez-vous <span class="text-teal">facilement en ligne</span></h2>'
  ],
  [
    '<p className="section-lead">\n              قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد\n              موعدك.\n            </p>',
    '<p class="section-lead">\n              قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد\n              موعدك.\n            </p>',
    '<p class="section-lead" data-i18n="apt-lead">Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement pour confirmer votre rendez-vous.</p>'
  ],
  ['<h3>نموذج طلب موعد</h3>', '<h3>نموذج طلب موعد</h3>', '<h3 data-i18n="form-title">Formulaire de demande de rendez-vous</h3>'],
  [
    '<p className="form-subtitle">\n                  يرجى إدخال البيانات التالية لحجز استشارتك الطبية\n                </p>',
    '<p class="form-subtitle">\n                    يرجى إدخال البيانات التالية لحجز استشارتك الطبية\n                </p>',
    '<p class="form-subtitle" data-i18n="form-sub">Remplissez les informations suivantes pour réserver votre consultation</p>'
  ],
  ['<label htmlFor="f-name">الاسم الكامل *</label>', '<label for="f-name">الاسم الكامل *</label>', '<label htmlFor="f-name" data-i18n="lbl-name">Nom et Prénom *</label>'],
  ['<label htmlFor="f-phone">رقم الهاتف *</label>', '<label for="f-phone">رقم الهاتف *</label>', '<label htmlFor="f-phone" data-i18n="lbl-phone">Numéro de téléphone *</label>'],
  ['<label htmlFor="f-service">التخصص المطلوب *</label>', '<label for="f-service">التخصص المطلوب *</label>', '<label htmlFor="f-service" data-i18n="lbl-service">Spécialité souhaitée *</label>'],
  ['<option value="">-- اختر الخدمة --</option>', '<option value="">-- اختر الخدمة --</option>', '<option value="" data-i18n="opt-select">-- Choisissez un service --</option>'],
  ['<option value="الطب العام والطوارئ">الطب العام والطوارئ</option>', '<option value="الطب العام والطوارئ">الطب العام والطوارئ</option>', '<option value="Médecine Générale" data-i18n="opt-s1">Médecine Générale / Urgences</option>'],
  ['<option value="طب الأسنان">طب الأسنان</option>', '<option value="طب الأسنان">طب الأسنان</option>', '<option value="Médecine Dentaire" data-i18n="opt-s2">Dentiste / Chirurgie dentaire</option>'],
  ['<option value="النساء والتوليد">النساء والتوليد</option>', '<option value="النساء والتوليد">النساء والتوليد</option>', '<option value="Gynécologie" data-i18n="opt-s3">Gynécologie & Obstétrique</option>'],
  ['<option value="طب الأطفال">طب الأطفال</option>', '<option value="طب الأطفال">طب الأطفال</option>', '<option value="Pédiatrie" data-i18n="opt-s4">Pédiatrie</option>'],
  ['<option value="التحاليل الطبية">التحاليل الطبية</option>', '<option value="التحاليل الطبية">التحاليل الطبية</option>', '<option value="Laboratoire" data-i18n="opt-s5">Laboratoire d\'analyses</option>'],
  ['<option value="الأشعة والتصوير">الأشعة والتصوير</option>', '<option value="الأشعة والتصوير">الأشعة والتصوير</option>', '<option value="Radiologie" data-i18n="opt-s6">Radiologie / Échographie</option>'],

  ['<label htmlFor="f-date">التاريخ المطلوب *</label>', '<label for="f-date">التاريخ المطلوب *</label>', '<label htmlFor="f-date" data-i18n="lbl-date">Date souhaitée *</label>'],
  ['<label htmlFor="f-time">الفترة المفضلة</label>', '<label for="f-time">الفترة المفضلة</label>', '<label htmlFor="f-time" data-i18n="lbl-time">Période préférée</label>'],
  ['<option value="صباحاً">صباحاً (08:00 - 12:00)</option>', '<option value="صباحاً">صباحاً (08:00 - 12:00)</option>', '<option value="Matin" data-i18n="opt-t1">Matin (08:00 - 12:00)</option>'],
  ['<option value="مساءً">مساءً (13:00 - 17:00)</option>', '<option value="مساءً">مساءً (13:00 - 17:00)</option>', '<option value="Après-midi" data-i18n="opt-t2">Après-midi (13:00 - 17:00)</option>'],
  ['<option value="ليلاً">ليلاً (17:00 - 20:00)</option>', '<option value="ليلاً">ليلاً (17:00 - 20:00)</option>', '<option value="Soir" data-i18n="opt-t3">Soir (17:00 - 20:00)</option>'],
  ['<label htmlFor="f-notes">ملاحظات أو أعراض (اختياري)</label>', '<label for="f-notes">ملاحظات أو أعراض (اختياري)</label>', '<label htmlFor="f-notes" data-i18n="lbl-notes">Remarques ou symptômes (Optionnel)</label>'],
  [
    '<button type="submit" className="btn btn-primary btn-submit-appt">\n                  <i className="fa-solid fa-paper-plane"></i>\n                  تأكيد طلب الحجز\n                </button>',
    '<button type="submit" class="btn btn-primary btn-submit-appt">\n                    <i class="fa-solid fa-paper-plane"></i>\n                    تأكيد طلب الحجز\n                </button>',
    '<button type="submit" className="btn btn-primary btn-submit-appt" data-i18n="btn-submit-apt"><i className="fa-solid fa-paper-plane"></i> Confirmer la demande de rendez-vous</button>'
  ],

  // Gallery, Testimonials, Contact, Footer
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> معرض الصور\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> معرض الصور</span>',
    '<span class="label-tag" data-i18n="gallery-tag"><i class="fa-solid fa-circle-dot"></i> Galerie de la Clinique</span>'
  ],
  [
    '<h2 className="section-title">\n              جولة مصورة <span className="text-teal">داخل العيادة</span>\n            </h2>',
    '<h2 class="section-title">جولة مصورة <span class="text-teal">داخل العيادة</span></h2>',
    '<h2 class="section-title" data-i18n="gallery-title">Découvrez notre clinique <span class="text-teal">en images</span></h2>'
  ],
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> آراء المرضى\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> آراء المرضى</span>',
    '<span class="label-tag" data-i18n="testi-tag"><i class="fa-solid fa-circle-dot"></i> Avis Patients</span>'
  ],
  [
    '<h2 className="section-title">\n              ماذا يقول مرضانا <span className="text-teal">عن خدماتنا</span>\n            </h2>',
    '<h2 class="section-title">ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span></h2>',
    '<h2 class="section-title" data-i18n="testi-title">Ce que disent nos patients <span class="text-teal">sur la clinique</span></h2>'
  ],
  [
    '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> تواصل معنا\n            </span>',
    '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> تواصل معنا</span>',
    '<span class="label-tag" data-i18n="contact-tag"><i class="fa-solid fa-circle-dot"></i> Contactez-nous</span>'
  ],
  [
    '<h2 className="section-title">\n              نحن هنا للمساعدة <span className="text-teal">والإجابة على استفساراتك</span>\n            </h2>',
    '<h2 class="section-title">نحن هنا للمساعدة <span class="text-teal">والإجابة على استفساراتك</span></h2>',
    '<h2 class="section-title" data-i18n="contact-title">Nous sommes là pour vous aider <span class="text-teal">et répondre à vos questions</span></h2>'
  ],
  ['<h4>عنوان العيادة</h4>', '<h4>عنوان العيادة</h4>', '<h4 data-i18n="c-addr-title">Adresse de la Clinique</h4>'],
  [
    '<p className="info-val">\n                  برج منايل، ولاية بومرداس، الجزائر\n                </p>',
    '<p class="info-val">برج منايل، ولاية بومرداس، الجزائر</p>',
    '<p class="info-val" data-i18n="c-addr-val">Bordj Menaïel, Wilaya de Boumerdès, Algérie</p>'
  ],
  ['<h4>الهاتف والاستعجالات</h4>', '<h4>الهاتف والاستعجالات</h4>', '<h4 data-i18n="c-phone-title">Téléphone & Urgences</h4>'],
  ['<h4>أوقات العمل</h4>', '<h4>أوقات العمل</h4>', '<h4 data-i18n="c-hours-title">Heures de travail</h4>'],
  [
    '<p className="info-val">\n                  7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)\n                </p>',
    '<p class="info-val">\n                  7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)\n                </p>',
    '<p class="info-val" data-i18n="c-hours-val">7j/7 - 24h/24 (Service d\'urgences continu)</p>'
  ],
  [
    '<p className="footer-desc">\n              عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7،\n              رعاية طبية عالية الجودة ومتابعة مخصصة.\n            </p>',
    '<p class="footer-desc">\n              عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7،\n              رعاية طبية عالية الجودة ومتابعة مخصصة.\n            </p>',
    '<p class="footer-desc" data-i18n="footer-desc">Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.</p>'
  ],
  ['<h4>روابط سريعة</h4>', '<h4>روابط سريعة</h4>', '<h4 data-i18n="footer-quick">Liens Rapides</h4>'],
  ['<h4>خدماتنا الطبية</h4>', '<h4>خدماتنا الطبية</h4>', '<h4 data-i18n="footer-services">Nos Services</h4>'],
  ['<h4>معلومات الاتصال</h4>', '<h4>معلومات الاتصال</h4>', '<h4 data-i18n="footer-contact">Informations de Contact</h4>']
];

replacements.forEach(([pageSearch, htmlSearch, rep]) => {
  page = page.split(pageSearch).join(rep);
  html = html.split(htmlSearch).join(rep);
});

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log('Complete robust French default conversion and data-i18n tagging finished!');
