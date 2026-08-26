const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// Appointment section
page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> حجز موعد\n            </span>',
  '<span className="label-tag" data-i18n="apt-tag"><i className="fa-solid fa-circle-dot"></i> Prise de Rendez-vous</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> حجز موعد</span>',
  '<span class="label-tag" data-i18n="apt-tag"><i class="fa-solid fa-circle-dot"></i> Prise de Rendez-vous</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              احجز موعدك الآن <span className="text-teal">بسهولة عبر الإنترنت</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="apt-title">Prenez votre rendez-vous <span className="text-teal">facilement en ligne</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">احجز موعدك الآن <span class="text-teal">بسهولة عبر الإنترنت</span></h2>',
  '<h2 class="section-title" data-i18n="apt-title">Prenez votre rendez-vous <span class="text-teal">facilement en ligne</span></h2>'
);

page = page.replace(
  '<p className="section-lead">\n              قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد\n              موعدك.\n            </p>',
  '<p className="section-lead" data-i18n="apt-lead">Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement pour confirmer votre rendez-vous.</p>'
);
html = html.replace(
  '<p class="section-lead">\n              قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد\n              موعدك.\n            </p>',
  '<p class="section-lead" data-i18n="apt-lead">Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement pour confirmer votre rendez-vous.</p>'
);

page = page.replace('<h3>نموذج طلب موعد</h3>', '<h3 data-i18n="form-title">Formulaire de demande de rendez-vous</h3>');
html = html.replace('<h3>نموذج طلب موعد</h3>', '<h3 data-i18n="form-title">Formulaire de demande de rendez-vous</h3>');

page = page.replace(
  '<p className="form-subtitle">\n                  يرجى إدخال البيانات التالية لحجز استشارتك الطبية\n                </p>',
  '<p className="form-subtitle" data-i18n="form-sub">Remplissez les informations suivantes pour réserver votre consultation</p>'
);
html = html.replace(
  '<p class="form-subtitle">\n                    يرجى إدخال البيانات التالية لحجز استشارتك الطبية\n                </p>',
  '<p class="form-subtitle" data-i18n="form-sub">Remplissez les informations suivantes pour réserver votre consultation</p>'
);

page = page.replace('<label htmlFor="f-name">الاسم الكامل *</label>', '<label htmlFor="f-name" data-i18n="lbl-name">Nom et Prénom *</label>');
html = html.replace('<label for="f-name">الاسم الكامل *</label>', '<label for="f-name" data-i18n="lbl-name">Nom et Prénom *</label>');

page = page.replace('<label htmlFor="f-phone">رقم الهاتف *</label>', '<label htmlFor="f-phone" data-i18n="lbl-phone">Numéro de téléphone *</label>');
html = html.replace('<label for="f-phone">رقم الهاتف *</label>', '<label for="f-phone" data-i18n="lbl-phone">Numéro de téléphone *</label>');

page = page.replace('<label htmlFor="f-service">التخصص المطلوب *</label>', '<label htmlFor="f-service" data-i18n="lbl-service">Spécialité souhaitée *</label>');
html = html.replace('<label for="f-service">التخصص المطلوب *</label>', '<label for="f-service" data-i18n="lbl-service">Spécialité souhaitée *</label>');

page = page.replace('<option value="">-- اختر الخدمة --</option>', '<option value="" data-i18n="opt-select">-- Choisissez un service --</option>');
html = html.replace('<option value="">-- اختر الخدمة --</option>', '<option value="" data-i18n="opt-select">-- Choisissez un service --</option>');

page = page.replace('<option value="الطب العام والطوارئ">الطب العام والطوارئ</option>', '<option value="Médecine Générale" data-i18n="opt-s1">Médecine Générale / Urgences</option>');
html = html.replace('<option value="الطب العام والطوارئ">الطب العام والطوارئ</option>', '<option value="Médecine Générale" data-i18n="opt-s1">Médecine Générale / Urgences</option>');

page = page.replace('<option value="طب الأسنان">طب الأسنان</option>', '<option value="Médecine Dentaire" data-i18n="opt-s2">Dentiste / Chirurgie dentaire</option>');
html = html.replace('<option value="طب الأسنان">طب الأسنان</option>', '<option value="Médecine Dentaire" data-i18n="opt-s2">Dentiste / Chirurgie dentaire</option>');

page = page.replace('<option value="النساء والتوليد">النساء والتوليد</option>', '<option value="Gynécologie" data-i18n="opt-s3">Gynécologie & Obstétrique</option>');
html = html.replace('<option value="النساء والتوليد">النساء والتوليد</option>', '<option value="Gynécologie" data-i18n="opt-s3">Gynécologie & Obstétrique</option>');

page = page.replace('<option value="طب الأطفال">طب الأطفال</option>', '<option value="Pédiatrie" data-i18n="opt-s4">Pédiatrie</option>');
html = html.replace('<option value="طب الأطفال">طب الأطفال</option>', '<option value="Pédiatrie" data-i18n="opt-s4">Pédiatrie</option>');

page = page.replace('<option value="التحاليل الطبية">التحاليل الطبية</option>', '<option value="Laboratoire" data-i18n="opt-s5">Laboratoire d\'analyses</option>');
html = html.replace('<option value="التحاليل الطبية">التحاليل الطبية</option>', '<option value="Laboratoire" data-i18n="opt-s5">Laboratoire d\'analyses</option>');

page = page.replace('<option value="الأشعة والتصوير">الأشعة والتصوير</option>', '<option value="Radiologie" data-i18n="opt-s6">Radiologie / Échographie</option>');
html = html.replace('<option value="الأشعة والتصوير">الأشعة والتصوير</option>', '<option value="Radiologie" data-i18n="opt-s6">Radiologie / Échographie</option>');

page = page.replace('<label htmlFor="f-date">التاريخ المطلوب *</label>', '<label htmlFor="f-date" data-i18n="lbl-date">Date souhaitée *</label>');
html = html.replace('<label for="f-date">التاريخ المطلوب *</label>', '<label for="f-date" data-i18n="lbl-date">Date souhaitée *</label>');

page = page.replace('<label htmlFor="f-time">الفترة المفضلة</label>', '<label htmlFor="f-time" data-i18n="lbl-time">Période préférée</label>');
html = html.replace('<label for="f-time">الفترة المفضلة</label>', '<label for="f-time" data-i18n="lbl-time">Période préférée</label>');

page = page.replace('<option value="صباحاً">صباحاً (08:00 - 12:00)</option>', '<option value="Matin" data-i18n="opt-t1">Matin (08:00 - 12:00)</option>');
html = html.replace('<option value="صباحاً">صباحاً (08:00 - 12:00)</option>', '<option value="Matin" data-i18n="opt-t1">Matin (08:00 - 12:00)</option>');

page = page.replace('<option value="مساءً">مساءً (13:00 - 17:00)</option>', '<option value="Après-midi" data-i18n="opt-t2">Après-midi (13:00 - 17:00)</option>');
html = html.replace('<option value="مساءً">مساءً (13:00 - 17:00)</option>', '<option value="Après-midi" data-i18n="opt-t2">Après-midi (13:00 - 17:00)</option>');

page = page.replace('<option value="ليلاً">ليلاً (17:00 - 20:00)</option>', '<option value="Soir" data-i18n="opt-t3">Soir (17:00 - 20:00)</option>');
html = html.replace('<option value="ليلاً">ليلاً (17:00 - 20:00)</option>', '<option value="Soir" data-i18n="opt-t3">Soir (17:00 - 20:00)</option>');

page = page.replace('<label htmlFor="f-notes">ملاحظات أو أعراض (اختياري)</label>', '<label htmlFor="f-notes" data-i18n="lbl-notes">Remarques ou symptômes (Optionnel)</label>');
html = html.replace('<label for="f-notes">ملاحظات أو أعراض (اختياري)</label>', '<label for="f-notes" data-i18n="lbl-notes">Remarques ou symptômes (Optionnel)</label>');

page = page.replace(
  '<button type="submit" className="btn btn-primary btn-submit-appt">\n                  <i className="fa-solid fa-paper-plane"></i>\n                  تأكيد طلب الحجز\n                </button>',
  '<button type="submit" className="btn btn-primary btn-submit-appt" data-i18n="btn-submit-apt"><i className="fa-solid fa-paper-plane"></i> Confirmer la demande de rendez-vous</button>'
);
html = html.replace(
  '<button type="submit" class="btn btn-primary btn-submit-appt">\n                    <i class="fa-solid fa-paper-plane"></i>\n                    تأكيد طلب الحجز\n                </button>',
  '<button type="submit" class="btn btn-primary btn-submit-appt" data-i18n="btn-submit-apt"><i class="fa-solid fa-paper-plane"></i> Confirmer la demande de rendez-vous</button>'
);

// Gallery & Testimonials & Contact & Footer
page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> معرض الصور\n            </span>',
  '<span className="label-tag" data-i18n="gallery-tag"><i className="fa-solid fa-circle-dot"></i> Galerie de la Clinique</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> معرض الصور</span>',
  '<span class="label-tag" data-i18n="gallery-tag"><i class="fa-solid fa-circle-dot"></i> Galerie de la Clinique</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              جولة مصورة <span className="text-teal">داخل العيادة</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="gallery-title">Découvrez notre clinique <span className="text-teal">en images</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">جولة مصورة <span class="text-teal">داخل العيادة</span></h2>',
  '<h2 class="section-title" data-i18n="gallery-title">Découvrez notre clinique <span class="text-teal">en images</span></h2>'
);

page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> آراء المرضى\n            </span>',
  '<span className="label-tag" data-i18n="testi-tag"><i className="fa-solid fa-circle-dot"></i> Avis Patients</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> آراء المرضى</span>',
  '<span class="label-tag" data-i18n="testi-tag"><i class="fa-solid fa-circle-dot"></i> Avis Patients</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              ماذا يقول مرضانا <span className="text-teal">عن خدماتنا</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="testi-title">Ce que disent nos patients <span className="text-teal">sur la clinique</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span></h2>',
  '<h2 class="section-title" data-i18n="testi-title">Ce que disent nos patients <span class="text-teal">sur la clinique</span></h2>'
);

page = page.replace(
  '<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> تواصل معنا\n            </span>',
  '<span className="label-tag" data-i18n="contact-tag"><i className="fa-solid fa-circle-dot"></i> Contactez-nous</span>'
);
html = html.replace(
  '<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> تواصل معنا</span>',
  '<span class="label-tag" data-i18n="contact-tag"><i class="fa-solid fa-circle-dot"></i> Contactez-nous</span>'
);

page = page.replace(
  '<h2 className="section-title">\n              نحن هنا للمساعدة <span className="text-teal">والإجابة على استفساراتك</span>\n            </h2>',
  '<h2 className="section-title" data-i18n="contact-title">Nous sommes là pour vous aider <span className="text-teal">et répondre à vos questions</span></h2>'
);
html = html.replace(
  '<h2 class="section-title">نحن هنا للمساعدة <span class="text-teal">والإجابة على استفساراتك</span></h2>',
  '<h2 class="section-title" data-i18n="contact-title">Nous sommes là pour vous aider <span class="text-teal">et répondre à vos questions</span></h2>'
);

page = page.replace('<h4>عنوان العيادة</h4>', '<h4 data-i18n="c-addr-title">Adresse de la Clinique</h4>');
html = html.replace('<h4>عنوان العيادة</h4>', '<h4 data-i18n="c-addr-title">Adresse de la Clinique</h4>');

page = page.replace(
  '<p className="info-val">\n                  برج منايل، ولاية بومرداس، الجزائر\n                </p>',
  '<p className="info-val" data-i18n="c-addr-val">Bordj Menaïel, Wilaya de Boumerdès, Algérie</p>'
);
html = html.replace(
  '<p class="info-val">برج منايل، ولاية بومرداس، الجزائر</p>',
  '<p class="info-val" data-i18n="c-addr-val">Bordj Menaïel, Wilaya de Boumerdès, Algérie</p>'
);

page = page.replace('<h4>الهاتف والاستعجالات</h4>', '<h4 data-i18n="c-phone-title">Téléphone & Urgences</h4>');
html = html.replace('<h4>الهاتف والاستعجالات</h4>', '<h4 data-i18n="c-phone-title">Téléphone & Urgences</h4>');

page = page.replace('<h4>أوقات العمل</h4>', '<h4 data-i18n="c-hours-title">Heures de travail</h4>');
html = html.replace('<h4>أوقات العمل</h4>', '<h4 data-i18n="c-hours-title">Heures de travail</h4>');

page = page.replace(
  '<p className="info-val">\n                  7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)\n                </p>',
  '<p className="info-val" data-i18n="c-hours-val">7j/7 - 24h/24 (Service d\'urgences continu)</p>'
);
html = html.replace(
  '<p class="info-val">\n                  7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)\n                </p>',
  '<p class="info-val" data-i18n="c-hours-val">7j/7 - 24h/24 (Service d\'urgences continu)</p>'
);

page = page.replace(
  '<p className="footer-desc">\n              عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7،\n              رعاية طبية عالية الجودة ومتابعة مخصصة.\n            </p>',
  '<p className="footer-desc" data-i18n="footer-desc">Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.</p>'
);
html = html.replace(
  '<p class="footer-desc">\n              عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7،\n              رعاية طبية عالية الجودة ومتابعة مخصصة.\n            </p>',
  '<p class="footer-desc" data-i18n="footer-desc">Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.</p>'
);

page = page.replace('<h4>روابط سريعة</h4>', '<h4 data-i18n="footer-quick">Liens Rapides</h4>');
html = html.replace('<h4>روابط سريعة</h4>', '<h4 data-i18n="footer-quick">Liens Rapides</h4>');

page = page.replace('<h4>خدماتنا الطبية</h4>', '<h4 data-i18n="footer-services">Nos Services</h4>');
html = html.replace('<h4>خدماتنا الطبية</h4>', '<h4 data-i18n="footer-services">Nos Services</h4>');

page = page.replace('<h4>معلومات الاتصال</h4>', '<h4 data-i18n="footer-contact">Informations de Contact</h4>');
html = html.replace('<h4>معلومات الاتصال</h4>', '<h4 data-i18n="footer-contact">Informations de Contact</h4>');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully completed full site tagging and French translation!');
