const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// Why Choose Us
page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> لماذا تختارنا؟\n            </span>',
  '<span className="label-tag" data-i18n="why-tag"><i className="fa-solid fa-circle-dot"></i> Pourquoi nous choisir ?</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> لماذا تختارنا؟</span>',
  '<span class="label-tag" data-i18n="why-tag"><i class="fa-solid fa-circle-dot"></i> Pourquoi nous choisir ?</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              ما يجعلنا الخيار\n              <br />\n              <span className="text-teal">الأول في برج منايل</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="why-title">Ce qui fait de nous le premier choix <br /><span className="text-teal">à Bordj Menaïel</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">ما يجعلنا الخيار<br><span class="text-teal">الأول في برج منايل</span></h2>',
  '<h2 class="section-title" data-i18n="why-title">Ce qui fait de nous le premier choix <br><span class="text-teal">à Bordj Menaïel</span></h2>'
);

page = page.replace(
  '<p className="whyus-desc">\n              نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في\n              الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر، حتى في\n              مواجهة التحديات.\n            </p>',
  '<p className="whyus-desc" data-i18n="why-desc">Nous ne proposons pas uniquement un service médical : nous bâtissons avec vous une relation de confiance et de partenariat pour votre santé. Notre engagement envers la qualité et l\'amélioration continue fait notre force.</p>'
);
html = html.replace(
  '<p class="whyus-desc">\n              نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في\n              الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر، حتى في\n              مواجهة التحديات.\n            </p>',
  '<p class="whyus-desc" data-i18n="why-desc">Nous ne proposons pas uniquement un service médical : nous bâtissons avec vous une relation de confiance et de partenariat pour votre santé. Notre engagement envers la qualité et l\'amélioration continue fait notre force.</p>'
);

page = page.replace('<h4>استعجالات 24/7 بلا انقطاع</h4>', '<h4 data-i18n="w1-title">Urgences 24/7 sans interruption</h4>');
html = html.replace('<h4>استعجالات 24/7 بلا انقطاع</h4>', '<h4 data-i18n="w1-title">Urgences 24/7 sans interruption</h4>');
page = page.replace(
  '<p>\n                    طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة\n                    باحترافية تامة.\n                  </p>',
  '<p data-i18n="w1-desc">Équipe médicale disponible 24h/24 pour prendre en charge toute urgence avec professionnalisme.</p>'
);
html = html.replace(
  '<p>\n                    طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة\n                    باحترافية تامة.\n                </p>',
  '<p data-i18n="w1-desc">Équipe médicale disponible 24h/24 pour prendre en charge toute urgence avec professionnalisme.</p>'
);

page = page.replace('<h4>تجهيزات وتقنيات حديثة</h4>', '<h4 data-i18n="w2-title">Équipements et technologies modernes</h4>');
html = html.replace('<h4>تجهيزات وتقنيات حديثة</h4>', '<h4 data-i18n="w2-title">Équipements et technologies modernes</h4>');
page = page.replace(
  '<p>\n                    نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج\n                    وسلامتك.\n                  </p>',
  '<p data-i18n="w2-desc">Nous investissons dans des appareils de diagnostic de pointe pour garantir des résultats précis.</p>'
);
html = html.replace(
  '<p>\n                    نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج\n                    وسلامتك.\n                </p>',
  '<p data-i18n="w2-desc">Nous investissons dans des appareils de diagnostic de pointe pour garantir des résultats précis.</p>'
);

page = page.replace('<h4>أطباء متخصصون وذوو خبرة</h4>', '<h4 data-i18n="w3-title">Médecins spécialisés et expérimentés</h4>');
html = html.replace('<h4>أطباء متخصصون وذوو خبرة</h4>', '<h4 data-i18n="w3-title">Médecins spécialisés et expérimentés</h4>');
page = page.replace(
  '<p>\n                    فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف\n                    المجالات الطبية.\n                  </p>',
  '<p data-i18n="w3-desc">Une équipe médicale hautement qualifiée dans diverses disciplines à votre service.</p>'
);
html = html.replace(
  '<p>\n                    فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف\n                    المجالات الطبية.\n                </p>',
  '<p data-i18n="w3-desc">Une équipe médicale hautement qualifiée dans diverses disciplines à votre service.</p>'
);

page = page.replace('<h4>بيئة نظيفة ومريحة</h4>', '<h4 data-i18n="w4-title">Environnement propre et confortable</h4>');
html = html.replace('<h4>بيئة نظيفة ومريحة</h4>', '<h4 data-i18n="w4-title">Environnement propre et confortable</h4>');
page = page.replace(
  '<p>\n                    عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.\n                  </p>',
  '<p data-i18n="w4-desc">Une clinique conçue selon les plus hauts standards d\'hygiène pour assurer votre bien-être.</p>'
);
html = html.replace(
  '<p>\n                    عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.\n                </p>',
  '<p data-i18n="w4-desc">Une clinique conçue selon les plus hauts standards d\'hygiène pour assurer votre bien-être.</p>'
);

// Doctors
page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> فريقنا الطبي\n            </span>',
  '<span className="label-tag" data-i18n="doctors-tag"><i className="fa-solid fa-circle-dot"></i> Équipe Médicale</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> فريقنا الطبي</span>',
  '<span class="label-tag" data-i18n="doctors-tag"><i class="fa-solid fa-circle-dot"></i> Équipe Médicale</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              أطباء متخصصون <span className="text-teal">في خدمتك</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="doctors-title">Des médecins spécialisés <span className="text-teal">à votre service</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">أطباء متخصصون <span class="text-teal">في خدمتك</span></h2>',
  '<h2 class="section-title" data-i18n="doctors-title">Des médecins spécialisés <span class="text-teal">à votre service</span></h2>'
);

page = page.replace(
  '<p className="section-lead">\n              يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل\n              مستوى من الرعاية الطبية.\n            </p>',
  '<p className="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>'
);
html = html.replace(
  '<p class="section-lead">\n              يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل\n              مستوى من الرعاية الطبية.\n            </p>',
  '<p class="section-lead" data-i18n="doctors-lead">Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.</p>'
);

page = page.replace('<h3>د. الرويبح</h3>', '<h3 data-i18n="d1-name">Dr. Rouibah</h3>');
html = html.replace('<h3>د. الرويبح</h3>', '<h3 data-i18n="d1-name">Dr. Rouibah</h3>');
page = page.replace('<p className="doc-role">طبيب مدير وطبيب عام</p>', '<p className="doc-role" data-i18n="d1-role">Médecin Directeur & Généraliste</p>');
html = html.replace('<p class="doc-role">طبيب مدير وطبيب عام</p>', '<p class="doc-role" data-i18n="d1-role">Médecin Directeur & Généraliste</p>');
page = page.replace('<span className="doc-exp">خبرة تزيد عن 15 سنة</span>', '<span className="doc-exp" data-i18n="d1-exp">15+ ans d\'expérience</span>');
html = html.replace('<span class="doc-exp">خبرة تزيد عن 15 سنة</span>', '<span class="doc-exp" data-i18n="d1-exp">15+ ans d\'expérience</span>');

page = page.replace('<h3>د. أخصائي الأطفال</h3>', '<h3 data-i18n="d2-name">Dr. Pédiatre Spécialiste</h3>');
html = html.replace('<h3>د. أخصائي الأطفال</h3>', '<h3 data-i18n="d2-name">Dr. Pédiatre Spécialiste</h3>');
page = page.replace('<p className="doc-role">أخصائي في طب الأطفال</p>', '<p className="doc-role" data-i18n="d2-role">Spécialiste en Pédiatrie</p>');
html = html.replace('<p class="doc-role">أخصائي في طب الأطفال</p>', '<p class="doc-role" data-i18n="d2-role">Spécialiste en Pédiatrie</p>');
page = page.replace('<span className="doc-exp">خبرة تزيد عن 10 سنوات</span>', '<span className="doc-exp" data-i18n="d2-exp">10+ ans d\'expérience</span>');
html = html.replace('<span class="doc-exp">خبرة تزيد عن 10 سنوات</span>', '<span class="doc-exp" data-i18n="d2-exp">10+ ans d\'expérience</span>');

page = page.replace('<h3>د. أخصائية النساء</h3>', '<h3 data-i18n="d3-name">Dr. Gynécologue Spécialiste</h3>');
html = html.replace('<h3>د. أخصائية النساء</h3>', '<h3 data-i18n="d3-name">Dr. Gynécologue Spécialiste</h3>');
page = page.replace('<p className="doc-role">أخصائية في أمراض النساء والتوليد</p>', '<p className="doc-role" data-i18n="d3-role">Spécialiste en Gynécologie-Obstétrique</p>');
html = html.replace('<p class="doc-role">أخصائية في أمراض النساء والتوليد</p>', '<p class="doc-role" data-i18n="d3-role">Spécialiste en Gynécologie-Obstétrique</p>');
page = page.replace('<span className="doc-exp">خبرة تزيد عن 12 سنة</span>', '<span className="doc-exp" data-i18n="d3-exp">12+ ans d\'expérience</span>');
html = html.replace('<span class="doc-exp">خبرة تزيد عن 12 سنة</span>', '<span class="doc-exp" data-i18n="d3-exp">12+ ans d\'expérience</span>');

page = page.replace('<h3>فريق الاستعجالات</h3>', '<h3 data-i18n="d4-name">Équipe d\'Urgences</h3>');
html = html.replace('<h3>فريق الاستعجالات</h3>', '<h3 data-i18n="d4-name">Équipe d\'Urgences</h3>');
page = page.replace('<p className="doc-role">أطباء وممرضون مستعدون 24/7</p>', '<p className="doc-role" data-i18n="d4-role">Médecins Urgentistes & Infirmiers</p>');
html = html.replace('<p class="doc-role">أطباء وممرضون مستعدون 24/7</p>', '<p class="doc-role" data-i18n="d4-role">Médecins Urgentistes & Infirmiers</p>');
page = page.replace('<span className="doc-exp">خدمة مستمرة طوال اليوم</span>', '<span className="doc-exp" data-i18n="d4-exp">Service continu 24/7</span>');
html = html.replace('<span class="doc-exp">خدمة مستمرة طوال اليوم</span>', '<span class="doc-exp" data-i18n="d4-exp">Service continu 24/7</span>');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully tagged Why Us and Doctors!');
