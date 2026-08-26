const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const updateMap = [
  // Doctors section
  ['<p className="section-lead">\n              يضم فريق الرويبح الطبي نخبة من الأطباء المتخصصين ذوي الخبرة\n              والكفاءة العالية.\n            </p>', '<p className="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>'],
  ['<p class="section-lead">\n              يضم فريق الرويبح الطبي نخبة من الأطباء المتخصصين ذوي الخبرة\n              والكفاءة العالية.\n            </p>', '<p class="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>'],

  ['<h4>د. مختص في الطب الداخلي</h4>', '<h4 data-i18n="d1-name">Dr. Rouibah</h4>'],
  ['<p>طب داخلي — تجربة 10+ سنوات</p>', '<p data-i18n="d1-role">Médecin Directeur & Généraliste</p>'],
  
  ['<h4>د. أخصائية في النساء والتوليد</h4>', '<h4 data-i18n="d3-name">Dr. Gynécologue Spécialiste</h4>'],
  ['<p>نساء وتوليد — خبرة ومتابعة متميزة</p>', '<p data-i18n="d3-role">Spécialiste en Gynécologie-Obstétrique</p>'],

  ['<h4>د. أخصائي في طب الأطفال</h4>', '<h4 data-i18n="d2-name">Dr. Pédiatre Spécialiste</h4>'],
  ['<p>طب الأطفال — رعاية ودافئة</p>', '<p data-i18n="d2-role">Spécialiste en Pédiatrie</p>'],

  ['<h4>د. جراح أسنان متخصص</h4>', '<h4 data-i18n="d4-name">Équipe d\'Urgences</h4>'],
  ['<p>جراحة وتجميل الأسنان</p>', '<p data-i18n="d4-role">Médecins Urgentistes & Infirmiers</p>'],

  // Gallery
  ['<h2 className="section-title">\n              داخل <span className="text-teal">عيادة الرويبح</span>\n            </h2>', '<h2 className="section-title" data-i18n="gallery-title">Découvrez notre clinique <span className="text-teal">en images</span></h2>'],
  ['<h2 class="section-title">\n              داخل <span class="text-teal">عيادة الرويبح</span>\n            </h2>', '<h2 class="section-title" data-i18n="gallery-title">Découvrez notre clinique <span class="text-teal">en images</span></h2>'],

  // Testimonials
  ['<h2 className="section-title">\n              آراء المرضى <span className="text-teal">في عيادتنا</span>\n            </h2>', '<h2 className="section-title" data-i18n="testi-title">Ce que disent nos patients <span className="text-teal">sur la clinique</span></h2>'],
  ['<h2 class="section-title">\n              آراء المرضى <span class="text-teal">في عيادتنا</span>\n            </h2>', '<h2 class="section-title" data-i18n="testi-title">Ce que disent nos patients <span class="text-teal">sur la clinique</span></h2>'],

  // Footer copyright & tagline
  ['<p>تصميم موقع احترافي لـ عيادة الرويبح، برج منايل، الجزائر.</p>', '<p data-i18n="footer-rights">Tous droits réservés © Groupe Médical Rouibah.</p>'],
  ['<p>&copy; <span id="current-year"></span> Rouibah Medical Group. جميع الحقوق محفوظة.</p>', '<p data-i18n="footer-rights">Tous droits réservés © Groupe Médical Rouibah.</p>']
];

updateMap.forEach(([search, replace]) => {
  page = page.split(search).join(replace);
  html = html.split(search).join(replace);
});

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log('Finished updating remaining elements to French with data-i18n tags!');
