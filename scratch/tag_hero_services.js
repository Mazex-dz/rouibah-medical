const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

// 1. Tag topbar
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

// 2. Hero Section
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
  '<span>اكتشف المزيد</span>',
  '<span data-i18n="hero-scroll">Découvrir plus</span>'
);
html = html.replace(
  '<span>اكتشف المزيد</span>',
  '<span data-i18n="hero-scroll">Découvrir plus</span>'
);

// 3. Emergency Bar
page = page.replace(
  '<strong>قسم الطوارئ مفتوح 24/7</strong>',
  '<strong data-i18n="emerg-title">Service des Urgences Ouvert 24/7</strong>'
);
html = html.replace(
  '<strong>قسم الطوارئ مفتوح 24/7</strong>',
  '<strong data-i18n="emerg-title">Service des Urgences Ouvert 24/7</strong>'
);

page = page.replace(
  '<span>\n              نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل\n            </span>',
  '<span data-i18n="emerg-desc">Nous accueillons les urgences médicales 24h/24 — N\'hésitez pas à nous contacter</span>'
);
html = html.replace(
  '<span>نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل</span>',
  '<span data-i18n="emerg-desc">Nous accueillons les urgences médicales 24h/24 — N\'hésitez pas à nous contacter</span>'
);

page = page.replace(
  '<a href="tel:0559505001" className="btn btn-emergency">\n            <i className="fa-solid fa-phone-volume"></i>\n            اتصل الآن\n          </a>',
  '<a href="tel:0559505001" className="btn btn-emergency" data-i18n="emerg-btn"><i className="fa-solid fa-phone-volume"></i> Appeler Maintenant</a>'
);
html = html.replace(
  '<a href="tel:0559505001" class="btn btn-emergency">\n                <i class="fa-solid fa-phone-volume"></i>\n                اتصل الآن\n            </a>',
  '<a href="tel:0559505001" class="btn btn-emergency" data-i18n="emerg-btn"><i class="fa-solid fa-phone-volume"></i> Appeler Maintenant</a>'
);

// 4. About Section
page = page.replace(
  '<span className="label-tag">\n                <i className="fa-solid fa-circle-dot"></i> من نحن\n              </span>',
  '<span className="label-tag" data-i18n="about-tag"><i className="fa-solid fa-circle-dot"></i> À propos de nous</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> من نحن</span>',
  '<span class="label-tag" data-i18n="about-tag"><i class="fa-solid fa-circle-dot"></i> À propos de nous</span>'
);

page = page.replace(
  '<h2 className="section-title">\n                رسالتنا: رعاية\n                <br />\n                طبية تستحقها\n              </h2>',
  '<h2 className="section-title" data-i18n="about-title">Notre mission : des soins<br />médicaux d\'excellence</h2>'
);
html = html.replace(
  '<h2 class="section-title">رسالتنا: رعاية<br>طبية تستحقها</h2>',
  '<h2 class="section-title" data-i18n="about-title">Notre mission : des soins<br>médicaux d\'excellence</h2>'
);

page = page.replace(
  '<p className="about-lead">\n                عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة\n                أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية\n                متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.\n              </p>',
  '<p className="about-lead" data-i18n="about-lead">Le Groupe Médical Rouibah (Rouibah Medical Group) est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.</p>'
);
html = html.replace(
  '<p class="about-lead">\n                عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة\n                أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية\n                متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.\n            </p>',
  '<p class="about-lead" data-i18n="about-lead">Le Groupe Médical Rouibah (Rouibah Medical Group) est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.</p>'
);

page = page.replace(
  '<p className="about-desc">\n                نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف\n                أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف\n                التخصصات.\n              </p>',
  '<p className="about-desc" data-i18n="about-desc">Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C\'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.</p>'
);
html = html.replace(
  '<p class="about-desc">\n                نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف\n                أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف\n                التخصصات.\n            </p>',
  '<p class="about-desc" data-i18n="about-desc">Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C\'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.</p>'
);

// Values
page = page.replace('<h4>الدقة والكفاءة</h4>', '<h4 data-i18n="val1-title">Précision & Efficacité</h4>');
html = html.replace('<h4>الدقة والكفاءة</h4>', '<h4 data-i18n="val1-title">Précision & Efficacité</h4>');
page = page.replace('<p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>', '<p data-i18n="val1-desc">Diagnostic exact et traitement efficace dès la première visite</p>');
html = html.replace('<p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>', '<p data-i18n="val1-desc">Diagnostic exact et traitement efficace dès la première visite</p>');

page = page.replace('<h4>الرعاية الإنسانية</h4>', '<h4 data-i18n="val2-title">Soins Humains</h4>');
html = html.replace('<h4>الرعاية الإنسانية</h4>', '<h4 data-i18n="val2-title">Soins Humains</h4>');
page = page.replace('<p>نعامل كل مريض بالاحترام والتعاطف</p>', '<p data-i18n="val2-desc">Nous traitons chaque patient avec respect et compassion</p>');
html = html.replace('<p>نعامل كل مريض بالاحترام والتعاطف</p>', '<p data-i18n="val2-desc">Nous traitons chaque patient avec respect et compassion</p>');

page = page.replace('<h4>تقنيات متطورة</h4>', '<h4 data-i18n="val3-title">Technologies Avancées</h4>');
html = html.replace('<h4>تقنيات متطورة</h4>', '<h4 data-i18n="val3-title">Technologies Avancées</h4>');
page = page.replace('<p>أحدث الأجهزة التشخيصية والعلاجية</p>', '<p data-i18n="val3-desc">Équipements de diagnostic et de traitement de pointe</p>');
html = html.replace('<p>أحدث الأجهزة التشخيصية والعلاجية</p>', '<p data-i18n="val3-desc">Équipements de diagnostic et de traitement de pointe</p>');

page = page.replace('<h4>تطوير مستمر</h4>', '<h4 data-i18n="val4-title">Développement Continu</h4>');
html = html.replace('<h4>تطوير مستمر</h4>', '<h4 data-i18n="val4-title">Développement Continu</h4>');
page = page.replace('<p>نستثمر دائماً في التحسين والنمو</p>', '<p data-i18n="val4-desc">Nous investissons constamment dans l\'amélioration de nos services</p>');
html = html.replace('<p>نستثمر دائماً في التحسين والنمو</p>', '<p data-i18n="val4-desc">Nous investissons constamment dans l\'amélioration de nos services</p>');

page = page.replace('<strong>مركز طبي متكامل</strong>', '<strong data-i18n="about-badge-title">Centre Médical Intégré</strong>');
html = html.replace('<strong>مركز طبي متكامل</strong>', '<strong data-i18n="about-badge-title">Centre Médical Intégré</strong>');
page = page.replace('<span>برج منايل</span>', '<span data-i18n="about-badge-sub">Bordj Menaïel</span>');
html = html.replace('<span>برج منايل</span>', '<span data-i18n="about-badge-sub">Bordj Menaïel</span>');

page = page.replace('<span>تقييم Google</span>', '<span data-i18n="about-rating-text">Avis Google</span>');
html = html.replace('<span>تقييم Google</span>', '<span data-i18n="about-rating-text">Avis Google</span>');

page = page.replace(
  '<a href="#services" className="btn btn-primary mt-30">\n                اكتشف خدماتنا\n                <i className="fa-solid fa-arrow-left"></i>\n              </a>',
  '<a href="#services" className="btn btn-primary mt-30" data-i18n="about-btn">Découvrez nos services <i className="fa-solid fa-arrow-right"></i></a>'
);
html = html.replace(
  '<a href="#services" class="btn btn-primary mt-30">\n                    اكتشف خدماتنا\n                    <i class="fa-solid fa-arrow-left"></i>\n                </a>',
  '<a href="#services" class="btn btn-primary mt-30" data-i18n="about-btn">Découvrez nos services <i class="fa-solid fa-arrow-right"></i></a>'
);

// 5. Counters
page = page.replace('<p>مريض خُدم</p>', '<p data-i18n="stat-counter1-label">Patients accompagnés</p>');
html = html.replace('<p>مريض خُدم</p>', '<p data-i18n="stat-counter1-label">Patients accompagnés</p>');

page = page.replace('<p>طبيب متخصص</p>', '<p data-i18n="stat-counter2-label">Médecins spécialistes</p>');
html = html.replace('<p>طبيب متخصص</p>', '<p data-i18n="stat-counter2-label">Médecins spécialistes</p>');

page = page.replace('<p>تخصصات طبية</p>', '<p data-i18n="stat-counter3-label">Spécialités médicales</p>');
html = html.replace('<p>تخصصات طبية</p>', '<p data-i18n="stat-counter3-label">Spécialités médicales</p>');

page = page.replace('<p>تقييم Google Maps</p>', '<p data-i18n="stat-counter4-label">Avis Google Maps</p>');
html = html.replace('<p>تقييم Google Maps</p>', '<p data-i18n="stat-counter4-label">Avis Google Maps</p>');

// 6. Services Header
page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> خدماتنا الطبية\n            </span>',
  '<span className="label-tag" data-i18n="services-tag"><i className="fa-solid fa-circle-dot"></i> Nos Services Médicaux</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية</span>',
  '<span class="label-tag" data-i18n="services-tag"><i class="fa-solid fa-circle-dot"></i> Nos Services Médicaux</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              تخصصات شاملة <span className="text-teal">لرعايتك الكاملة</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="services-title">Spécialités complètes <span className="text-teal">pour vos soins</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">تخصصات شاملة <span class="text-teal">لرعايتك الكاملة</span></h2>',
  '<h2 class="section-title" data-i18n="services-title">Spécialités complètes <span class="text-teal">pour vos soins</span></h2>'
);

page = page.replace(
  '<p className="section-lead">\n              نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا\n              تستحق أقل من ذلك.\n            </p>',
  '<p className="section-lead" data-i18n="services-lead">Nous offrons une gamme complète de services médicaux et diagnostiques au même endroit, car votre santé mérite le meilleur.</p>'
);
html = html.replace(
  '<p class="section-lead">\n              نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا\n              تستحق أقل من ذلك.\n            </p>',
  '<p class="section-lead" data-i18n="services-lead">Nous offrons une gamme complète de services médicaux et diagnostiques au même endroit, car votre santé mérite le meilleur.</p>'
);

// Services Cards (1 to 6)
page = page.replace('<h3>الطب العام والطوارئ</h3>', '<h3 data-i18n="s1-title">Médecine Générale & Urgences</h3>');
html = html.replace('<h3>الطب العام والطوارئ</h3>', '<h3 data-i18n="s1-title">Médecine Générale & Urgences</h3>');
page = page.replace(
  '<p>\n                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع\n                  لاستقبال جميع الحالات المستعجلة.\n                </p>',
  '<p data-i18n="s1-desc">Un service d\'urgence entièrement équipé, ouvert 24h/24 et 7j/7 pour accueillir tous les cas urgents.</p>'
);
html = html.replace(
  '<p>\n                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع\n                  لاستقبال جميع الحالات المستعجلة.\n                </p>',
  '<p data-i18n="s1-desc">Un service d\'urgence entièrement équipé, ouvert 24h/24 et 7j/7 pour accueillir tous les cas urgents.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> استقبال فوري للحالات\n                    الطارئة\n                  </li>',
  '<li data-i18n="s1-f1"><i className="fa-solid fa-check"></i> Prise en charge immédiate des urgences</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> استقبال فوري للحالات\n                    الطارئة\n                </li>',
  '<li data-i18n="s1-f1"><i class="fa-solid fa-check"></i> Prise en charge immédiate des urgences</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> تشخيص وعلاج سريع\n                  </li>',
  '<li data-i18n="s1-f2"><i className="fa-solid fa-check"></i> Diagnostic et traitement rapides</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> تشخيص وعلاج سريع\n                </li>',
  '<li data-i18n="s1-f2"><i class="fa-solid fa-check"></i> Diagnostic et traitement rapides</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> إشراف طبي مستمر\n                  </li>',
  '<li data-i18n="s1-f3"><i className="fa-solid fa-check"></i> Surveillance médicale continue</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> إشراف طبي مستمر\n                </li>',
  '<li data-i18n="s1-f3"><i class="fa-solid fa-check"></i> Surveillance médicale continue</li>'
);

// Service 2: Dentiste
page = page.replace('<h3>طب وجراحة الأسنان</h3>', '<h3 data-i18n="s2-title">Médecine Dentaire & Chirurgie</h3>');
html = html.replace('<h3>طب وجراحة الأسنان</h3>', '<h3 data-i18n="s2-title">Médecine Dentaire & Chirurgie</h3>');

page = page.replace(
  '<p>\n                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء\n                  متخصصين ذوي خبرة.\n                </p>',
  '<p data-i18n="s2-desc">Services d\'orthodontie, de soin et d\'esthétique dentaire avec des technologies récentes et des spécialistes expérimentés.</p>'
);
html = html.replace(
  '<p>\n                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء\n                  متخصصين ذوي خبرة.\n                </p>',
  '<p data-i18n="s2-desc">Services d\'orthodontie, de soin et d\'esthétique dentaire avec des technologies récentes et des spécialistes expérimentés.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> علاج وحشوات بدون ألم\n                  </li>',
  '<li data-i18n="s2-f1"><i className="fa-solid fa-check"></i> Soins et obturations sans douleur</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> علاج وحشوات بدون ألم\n                </li>',
  '<li data-i18n="s2-f1"><i class="fa-solid fa-check"></i> Soins et obturations sans douleur</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> تجميل الأسنان\n                    والابتسامة\n                  </li>',
  '<li data-i18n="s2-f2"><i className="fa-solid fa-check"></i> Esthétique dentaire et du sourire</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> تجميل الأسنان\n                    والابتسامة\n                </li>',
  '<li data-i18n="s2-f2"><i class="fa-solid fa-check"></i> Esthétique dentaire et du sourire</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> زراعة الأسنان الفورية\n                  </li>',
  '<li data-i18n="s2-f3"><i className="fa-solid fa-check"></i> Implantologie dentaire</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> زراعة الأسنان الفورية\n                </li>',
  '<li data-i18n="s2-f3"><i class="fa-solid fa-check"></i> Implantologie dentaire</li>'
);

// Service 3: Gynécologie
page = page.replace('<h3>النساء والتوليد</h3>', '<h3 data-i18n="s3-title">Gynécologie & Obstétrique</h3>');
html = html.replace('<h3>النساء والتوليد</h3>', '<h3 data-i18n="s3-title">Gynécologie & Obstétrique</h3>');

page = page.replace(
  '<p>\n                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة\n                  مريحة وآمنة.\n                </p>',
  '<p data-i18n="s3-desc">Suivi complet de la grossesse, accouchement sécurisé et soins post-partum dans un environnement confortable.</p>'
);
html = html.replace(
  '<p>\n                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة\n                  مريحة وآمنة.\n                </p>',
  '<p data-i18n="s3-desc">Suivi complet de la grossesse, accouchement sécurisé et soins post-partum dans un environnement confortable.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> متابعة دورية للحامل\n                  </li>',
  '<li data-i18n="s3-f1"><i className="fa-solid fa-check"></i> Suivi prénatal régulier</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> متابعة دورية للحامل\n                </li>',
  '<li data-i18n="s3-f1"><i class="fa-solid fa-check"></i> Suivi prénatal régulier</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> ولادة طبيعية وقيصرية\n                  </li>',
  '<li data-i18n="s3-f2"><i className="fa-solid fa-check"></i> Accouchement naturel et césarienne</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> ولادة طبيعية وقيصرية\n                </li>',
  '<li data-i18n="s3-f2"><i class="fa-solid fa-check"></i> Accouchement naturel et césarienne</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> رعاية ما بعد الوضع\n                  </li>',
  '<li data-i18n="s3-f3"><i className="fa-solid fa-check"></i> Soins gynécologiques post-partum</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> رعاية ما بعد الوضع\n                </li>',
  '<li data-i18n="s3-f3"><i class="fa-solid fa-check"></i> Soins gynécologiques post-partum</li>'
);

// Service 4: Pédiatrie
page = page.replace('<h3>طب الأطفال</h3>', '<h3 data-i18n="s4-title">Pédiatrie</h3>');
html = html.replace('<h3>طب الأطفال</h3>', '<h3 data-i18n="s4-title">Pédiatrie</h3>');

page = page.replace(
  '<p>\n                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،\n                  بأيدي أطباء متفانين.\n                </p>',
  '<p data-i18n="s4-desc">Soins complets pour la santé de vos enfants, de la naissance à l\'adolescence, dispensés par des pédiatres dévoués.</p>'
);
html = html.replace(
  '<p>\n                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،\n                  بأيدي أطباء متفانين.\n                </p>',
  '<p data-i18n="s4-desc">Soins complets pour la santé de vos enfants, de la naissance à l\'adolescence, dispensés par des pédiatres dévoués.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> متابعة النمو والتطور\n                  </li>',
  '<li data-i18n="s4-f1"><i className="fa-solid fa-check"></i> Suivi de la croissance et du développement</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> متابعة النمو والتطور\n                </li>',
  '<li data-i18n="s4-f1"><i class="fa-solid fa-check"></i> Suivi de la croissance et du développement</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> التطعيمات والوقاية\n                  </li>',
  '<li data-i18n="s4-f2"><i className="fa-solid fa-check"></i> Vaccination et prévention</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> التطعيمات والوقاية\n                </li>',
  '<li data-i18n="s4-f2"><i class="fa-solid fa-check"></i> Vaccination et prévention</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> علاج أمراض الأطفال\n                  </li>',
  '<li data-i18n="s4-f3"><i className="fa-solid fa-check"></i> Traitement des maladies infantiles</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> علاج أمراض الأطفال\n                </li>',
  '<li data-i18n="s4-f3"><i class="fa-solid fa-check"></i> Traitement des maladies infantiles</li>'
);

// Service 5: Laboratoire
page = page.replace('<h3>المخبر والتحاليل الطبية</h3>', '<h3 data-i18n="s5-title">Laboratoire d\'Analyses Médicales</h3>');
html = html.replace('<h3>المخبر والتحاليل الطبية</h3>', '<h3 data-i18n="s5-title">Laboratoire d\'Analyses Médicales</h3>');

page = page.replace(
  '<p>\n                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع\n                  أنواع التحاليل.\n                </p>',
  '<p data-i18n="s5-desc">Laboratoire moderne équipé d\'appareils de pointe offrant des résultats rapides et précis pour toutes les analyses.</p>'
);
html = html.replace(
  '<p>\n                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع\n                  أنواع التحاليل.\n                </p>',
  '<p data-i18n="s5-desc">Laboratoire moderne équipé d\'appareils de pointe offrant des résultats rapides et précis pour toutes les analyses.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> تحاليل دم وبول شاملة\n                  </li>',
  '<li data-i18n="s5-f1"><i className="fa-solid fa-check"></i> Bilan sanguin et urinaire complet</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> تحاليل دم وبول شاملة\n                </li>',
  '<li data-i18n="s5-f1"><i class="fa-solid fa-check"></i> Bilan sanguin et urinaire complet</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> تحاليل البكتيريولوجيا\n                    (Anapath)\n                  </li>',
  '<li data-i18n="s5-f2"><i className="fa-solid fa-check"></i> Analyses bactériologiques et d\'anapath</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> تحاليل البكتيريولوجيا\n                    (Anapath)\n                </li>',
  '<li data-i18n="s5-f2"><i class="fa-solid fa-check"></i> Analyses bactériologiques et d\'anapath</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> نتائج سريعة ودقيقة\n                  </li>',
  '<li data-i18n="s5-f3"><i className="fa-solid fa-check"></i> Résultats fiables et rapides</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> نتائج سريعة ودقيقة\n                </li>',
  '<li data-i18n="s5-f3"><i class="fa-solid fa-check"></i> Résultats fiables et rapides</li>'
);

// Service 6: Radiologie
page = page.replace('<h3>الأشعة والتصوير الطبي</h3>', '<h3 data-i18n="s6-title">Imagerie Médicale & Radiologie</h3>');
html = html.replace('<h3>الأشعة والتصوير الطبي</h3>', '<h3 data-i18n="s6-title">Imagerie Médicale & Radiologie</h3>');

page = page.replace(
  '<p>\n                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة\n                  للتشخيص الدقيق.\n                </p>',
  '<p data-i18n="s6-desc">Service d\'imagerie entièrement équipé proposant tous les examens nécessaires à un diagnostic précis.</p>'
);
html = html.replace(
  '<p>\n                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة\n                  للتشخيص الدقيق.\n                </p>',
  '<p data-i18n="s6-desc">Service d\'imagerie entièrement équipé proposant tous les examens nécessaires à un diagnostic précis.</p>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> أشعة سينية (Radio)\n                  </li>',
  '<li data-i18n="s6-f1"><i className="fa-solid fa-check"></i> Radiographie numérique (Radio)</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> أشعة سينية (Radio)\n                </li>',
  '<li data-i18n="s6-f1"><i class="fa-solid fa-check"></i> Radiographie numérique (Radio)</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> الموجات فوق الصوتية\n                    (Echo)\n                  </li>',
  '<li data-i18n="s6-f2"><i className="fa-solid fa-check"></i> Échographie (Echo 3D/4D)</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> الموجات فوق الصوتية\n                    (Echo)\n                </li>',
  '<li data-i18n="s6-f2"><i class="fa-solid fa-check"></i> Échographie (Echo 3D/4D)</li>'
);

page = page.replace(
  '<li>\n                    <i className="fa-solid fa-check"></i> تصوير متخصص\n                  </li>',
  '<li data-i18n="s6-f3"><i className="fa-solid fa-check"></i> Examens spécialisés</li>'
);
html = html.replace(
  '<li>\n                    <i class="fa-solid fa-check"></i> تصوير متخصص\n                </li>',
  '<li data-i18n="s6-f3"><i class="fa-solid fa-check"></i> Examens spécialisés</li>'
);

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully tagged all sections up to Services!');
