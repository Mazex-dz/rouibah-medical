const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

// Fix buttons data-lang attribute in case
page = page.replace(/data-lang="fr" aria-label="التحويل إلى العربية"/g, 'data-lang="ar" aria-label="التحويل إلى العربية"');
html = html.replace(/data-lang="fr" aria-label="التحويل إلى العربية"/g, 'data-lang="ar" aria-label="التحويل إلى العربية"');

// 1. Topbar
page = page.replace(
  '<span>\n              <i className="fa-solid fa-location-dot"></i> برج منايل، ولاية\n              بومرداس، الجزائر\n            </span>',
  '<span data-i18n="topbar-address"><i className="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>'
);
html = html.replace(
  '<span><i class="fa-solid fa-location-dot"></i> برج منايل، ولاية بومرداس، الجزائر</span>',
  '<span data-i18n="topbar-address"><i class="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie</span>'
);

page = page.replace(
  '<span>\n              <i className="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام\n            </span>',
  '<span data-i18n="topbar-hours"><i className="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7</span>'
);
html = html.replace(
  '<span><i class="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام</span>',
  '<span data-i18n="topbar-hours"><i class="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7</span>'
);

page = page.replace(
  '<a href="tel:0559505001" data-i18n="topbar-contact">\n              <i className="fa-solid fa-phone"></i> اتصل بنا\n            </a>',
  '<a href="tel:0559505001" data-i18n="topbar-contact"><i className="fa-solid fa-phone"></i> Contactez-nous</a>'
);
html = html.replace(
  '<a href="tel:0559505001" data-i18n="topbar-contact"><i class="fa-solid fa-phone"></i> اتصل بنا</a>',
  '<a href="tel:0559505001" data-i18n="topbar-contact"><i class="fa-solid fa-phone"></i> Contactez-nous</a>'
);

// 2. Navigation links
const navLinks = [
  ['href="#home">الرئيسية</a>', 'href="#home" data-i18n="nav-home">Accueil</a>'],
  ['href="#about">من نحن</a>', 'href="#about" data-i18n="nav-about">À propos</a>'],
  ['href="#services">خدماتنا</a>', 'href="#services" data-i18n="nav-services">Nos Services</a>'],
  ['href="#doctors">فريقنا</a>', 'href="#doctors" data-i18n="nav-doctors">Notre Équipe</a>'],
  ['href="#gallery">معرض الصور</a>', 'href="#gallery" data-i18n="nav-gallery">Galerie</a>'],
  ['href="#testimonials">آراء المرضى</a>', 'href="#testimonials" data-i18n="nav-testimonials">Avis Patients</a>'],
  ['href="#contact">تواصل معنا</a>', 'href="#contact" data-i18n="nav-contact">Contact</a>'],
];
navLinks.forEach(([search, replace]) => {
  page = page.split(search).join(replace);
  html = html.split(search).join(replace);
});

// Book button
page = page.replace(
  '<a href="#appointment" className="btn btn-primary" data-i18n="btn-book">\n              <i className="fa-solid fa-calendar-plus"></i>\n              احجز موعداً\n            </a>',
  '<a href="#appointment" className="btn btn-primary" data-i18n="btn-book"><i className="fa-solid fa-calendar-plus"></i> Prendre Rendez-vous</a>'
);
html = html.replace(
  '<a href="#appointment" class="btn btn-primary" data-i18n="btn-book">\n                    <i class="fa-solid fa-calendar-plus"></i>\n                    احجز موعداً\n                </a>',
  '<a href="#appointment" class="btn btn-primary" data-i18n="btn-book"><i class="fa-solid fa-calendar-plus"></i> Prendre Rendez-vous</a>'
);

// 3. Hero
page = page.replace(
  '<div className="hero-badge fade-in" data-delay="100">\n            <i className="fa-solid fa-shield-heart"></i>\n            <span>مركز طبي معتمد — برج منايل، الجزائر</span>\n          </div>',
  '<div className="hero-badge fade-in" data-delay="100" data-i18n="hero-badge"><i className="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie</div>'
);
html = html.replace(
  '<div class="hero-badge fade-in" data-delay="100">\n                <i class="fa-solid fa-shield-heart"></i>\n                <span>مركز طبي معتمد — برج منايل، الجزائر</span>\n            </div>',
  '<div class="hero-badge fade-in" data-delay="100" data-i18n="hero-badge"><i class="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie</div>'
);

page = page.replace(
  '<h1 className="hero-title fade-in" data-delay="200">\n            صحتك أمانة في أيدٍ\n            <br />\n            <span className="gradient-text">متخصصة وموثوقة</span>\n          </h1>',
  '<h1 className="hero-title fade-in" data-delay="200" data-i18n="hero-title">Votre santé est une priorité entre des mains<br /><span className="gradient-text">spécialisées et de confiance</span></h1>'
);
html = html.replace(
  '<h1 class="hero-title fade-in" data-delay="200">\n            صحتك أمانة في أيدٍ\n            <br>\n            <span class="gradient-text">متخصصة وموثوقة</span>\n        </h1>',
  '<h1 class="hero-title fade-in" data-delay="200" data-i18n="hero-title">Votre santé est une priorité entre des mains<br><span class="gradient-text">spécialisées et de confiance</span></h1>'
);

page = page.replace(
  '<p className="hero-subtitle fade-in" data-delay="300">\n            في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية\n            الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.\n          </p>',
  '<p className="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.</p>'
);
html = html.replace(
  '<p class="hero-subtitle fade-in" data-delay="300">\n            في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية\n            الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.\n        </p>',
  '<p class="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.</p>'
);

page = page.replace(
  '<a href="#appointment" className="btn btn-hero-primary">\n              احجز موعداً الآن\n              <i className="fa-solid fa-arrow-left"></i>\n            </a>',
  '<a href="#appointment" className="btn btn-hero-primary" data-i18n="hero-btn-book">Réserver un rendez-vous <i className="fa-solid fa-arrow-right"></i></a>'
);
html = html.replace(
  '<a href="#appointment" class="btn btn-hero-primary">\n                    احجز موعداً الآن\n                    <i class="fa-solid fa-arrow-left"></i>\n                </a>',
  '<a href="#appointment" class="btn btn-hero-primary" data-i18n="hero-btn-book">Réserver un rendez-vous <i class="fa-solid fa-arrow-right"></i></a>'
);

page = page.replace(
  '<a href="#about" className="btn btn-hero-ghost">\n              <i className="fa-solid fa-play-circle"></i>\n              تعرف علينا\n            </a>',
  '<a href="#about" className="btn btn-hero-ghost" data-i18n="hero-btn-about"><i className="fa-solid fa-play-circle"></i> Découvrez-nous</a>'
);
html = html.replace(
  '<a href="#about" class="btn btn-hero-ghost">\n                    <i class="fa-solid fa-play-circle"></i>\n                    تعرف علينا\n                </a>',
  '<a href="#about" class="btn btn-hero-ghost" data-i18n="hero-btn-about"><i class="fa-solid fa-play-circle"></i> Découvrez-nous</a>'
);

page = page.replace(
  '<div className="stat-label">تقييم على Google</div>',
  '<div className="stat-label" data-i18n="stat-google-label">Avis sur Google</div>'
);
html = html.replace(
  '<div class="stat-label">تقييم على Google</div>',
  '<div class="stat-label" data-i18n="stat-google-label">Avis sur Google</div>'
);

page = page.replace(
  '<div className="stat-label">تخصصات طبية</div>',
  '<div className="stat-label" data-i18n="stat-spec-label">Spécialités médicales</div>'
);
html = html.replace(
  '<div class="stat-label">تخصصات طبية</div>',
  '<div class="stat-label" data-i18n="stat-spec-label">Spécialités médicales</div>'
);

page = page.replace(
  '<div className="stat-label">استعجالات على مدار الساعة</div>',
  '<div className="stat-label" data-i18n="stat-emerg-label">Urgences 24/7</div>'
);
html = html.replace(
  '<div class="stat-label">استعجالات على مدار الساعة</div>',
  '<div class="stat-label" data-i18n="stat-emerg-label">Urgences 24/7</div>'
);

page = page.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');
html = html.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Clean French defaults applied');
