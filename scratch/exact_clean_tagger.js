const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const ar = JSON.parse(fs.readFileSync('scratch/ar_clean.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

// Add switcher HTML to page.tsx & index.html topbar & header-cta
page = page.replace(
  '<a href="tel:0559505001">\n              <i className="fa-solid fa-phone"></i> اتصل بنا\n            </a>',
  '<a href="tel:0559505001" data-i18n="topbar-contact">\n              <i className="fa-solid fa-phone"></i> Contactez-nous\n            </a>\n            <div className="lang-switcher">\n              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>\n              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>\n            </div>'
);

html = html.replace(
  '<a href="tel:0559505001"><i class="fa-solid fa-phone"></i> اتصل بنا</a>',
  '<a href="tel:0559505001" data-i18n="topbar-contact"><i class="fa-solid fa-phone"></i> Contactez-nous</a>\n                <div class="lang-switcher">\n                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>\n                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>\n                </div>'
);

page = page.replace(
  '<div className="header-cta">\n            <a href="#appointment" className="btn btn-primary">\n              <i className="fa-solid fa-calendar-plus"></i>\n              احجز موعداً\n            </a>',
  '<div className="header-cta">\n            <a href="#appointment" className="btn btn-primary" data-i18n="btn-book">\n              <i className="fa-solid fa-calendar-plus"></i>\n              Prendre Rendez-vous\n            </a>\n            <div className="lang-switcher lang-switcher-mobile">\n              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>\n              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>\n            </div>'
);

html = html.replace(
  '<div class="header-cta">\n                <a href="#appointment" class="btn btn-primary">\n                    <i class="fa-solid fa-calendar-plus"></i>\n                    احجز موعداً\n                </a>',
  '<div class="header-cta">\n                <a href="#appointment" class="btn btn-primary" data-i18n="btn-book">\n                    <i class="fa-solid fa-calendar-plus"></i>\n                    Prendre Rendez-vous\n                </a>\n                <div class="lang-switcher lang-switcher-mobile">\n                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>\n                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>\n                </div>'
);

// Map of exact original snippet to French snippet with data-i18n
const replaceMap = [
  // Topbar & Nav
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

  // About
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

  // Counter labels
  ['<p>مريض خُدم</p>', '<p>مريض خُدم</p>', '<p data-i18n="stat-counter1-label">Patients accompagnés</p>'],
  ['<p>طبيب متخصص</p>', '<p>طبيب متخصص</p>', '<p data-i18n="stat-counter2-label">Médecins spécialistes</p>'],
  ['<p>تخصصات طبية</p>', '<p>تخصصات طبية</p>', '<p data-i18n="stat-counter3-label">Spécialités médicales</p>'],
  ['<p>تقييم Google Maps</p>', '<p>تقييم Google Maps</p>', '<p data-i18n="stat-counter4-label">Avis Google Maps</p>']
];

replaceMap.forEach(([pageSearch, htmlSearch, replacement]) => {
  page = page.split(pageSearch).join(replacement);
  html = html.split(htmlSearch).join(replacement);
});

// Replace lang="ar" to lang="fr"
page = page.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');
html = html.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log('Finished clean replacement with exact matching!');
