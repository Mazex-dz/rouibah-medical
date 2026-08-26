const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

function tag(search, attr, val) {
  // Replace in page.tsx and index.html
  page = page.split(search).join(search.replace('>', ` ${attr}="${val}">`));
  html = html.split(search).join(search.replace('>', ` ${attr}="${val}">`));
}

// Why Us items
tag('<h4>استعجالات 24/7 بلا انقطاع</h4>', 'data-i18n', 'w1-title');
tag('<h4>تجهيزات وتقنيات حديثة</h4>', 'data-i18n', 'w2-title');
tag('<h4>أطباء متخصصون وذوو خبرة</h4>', 'data-i18n', 'w3-title');
tag('<h4>بيئة نظيفة ومريحة</h4>', 'data-i18n', 'w4-title');

// Form
tag('<h3>نموذج طلب موعد</h3>', 'data-i18n', 'form-title');
tag('<label htmlFor="f-name">الاسم الكامل *</label>', 'data-i18n', 'lbl-name');
tag('<label for="f-name">الاسم الكامل *</label>', 'data-i18n', 'lbl-name');
tag('<label htmlFor="f-phone">رقم الهاتف *</label>', 'data-i18n', 'lbl-phone');
tag('<label for="f-phone">رقم الهاتف *</label>', 'data-i18n', 'lbl-phone');
tag('<label htmlFor="f-service">التخصص المطلوب *</label>', 'data-i18n', 'lbl-service');
tag('<label for="f-service">التخصص المطلوب *</label>', 'data-i18n', 'lbl-service');
tag('<label htmlFor="f-date">التاريخ المطلوب *</label>', 'data-i18n', 'lbl-date');
tag('<label for="f-date">التاريخ المطلوب *</label>', 'data-i18n', 'lbl-date');
tag('<label htmlFor="f-time">الفترة المفضلة</label>', 'data-i18n', 'lbl-time');
tag('<label for="f-time">الفترة المفضلة</label>', 'data-i18n', 'lbl-time');
tag('<label htmlFor="f-notes">ملاحظات أو أعراض (اختياري)</label>', 'data-i18n', 'lbl-notes');
tag('<label for="f-notes">ملاحظات أو أعراض (اختياري)</label>', 'data-i18n', 'lbl-notes');

// Form select options
tag('<option value="">-- اختر الخدمة --</option>', 'data-i18n', 'opt-select');
tag('<option value="الطب العام والطوارئ">الطب العام / الاستعجالات</option>', 'data-i18n', 'opt-s1');
tag('<option value="الطب العام والطوارئ">الطب العام والطوارئ</option>', 'data-i18n', 'opt-s1');
tag('<option value="طب الأسنان">طب وجراحة الأسنان</option>', 'data-i18n', 'opt-s2');
tag('<option value="النساء والتوليد">أمراض النساء والتوليد</option>', 'data-i18n', 'opt-s3');
tag('<option value="النساء والتوليد">النساء والتوليد</option>', 'data-i18n', 'opt-s3');
tag('<option value="طب الأطفال">طب الأطفال</option>', 'data-i18n', 'opt-s4');
tag('<option value="التحاليل الطبية">مخبر التحاليل الطبية</option>', 'data-i18n', 'opt-s5');
tag('<option value="التحاليل الطبية">المخبر والتحاليل الطبية</option>', 'data-i18n', 'opt-s5');
tag('<option value="الأشعة والتصوير">الأشعة والتصوير الطبي</option>', 'data-i18n', 'opt-s6');

tag('<option value="صباحاً">صباحاً (08:00 - 12:00)</option>', 'data-i18n', 'opt-t1');
tag('<option value="مساءً">مساءً (13:00 - 17:00)</option>', 'data-i18n', 'opt-t2');
tag('<option value="ليلاً">ليلاً (17:00 - 20:00)</option>', 'data-i18n', 'opt-t3');

// Doctors items
tag('<h3>د. الرويبح</h3>', 'data-i18n', 'd1-name');
tag('<h3>د. أخصائي الأطفال</h3>', 'data-i18n', 'd2-name');
tag('<h3>د. أخصائية النساء</h3>', 'data-i18n', 'd3-name');
tag('<h3>فريق الاستعجالات</h3>', 'data-i18n', 'd4-name');

tag('<p className="doc-role">طبيب مدير وطبيب عام</p>', 'data-i18n', 'd1-role');
tag('<p class="doc-role">طبيب مدير وطبيب عام</p>', 'data-i18n', 'd1-role');
tag('<p className="doc-role">أخصائي في طب الأطفال</p>', 'data-i18n', 'd2-role');
tag('<p class="doc-role">أخصائي في طب الأطفال</p>', 'data-i18n', 'd2-role');
tag('<p className="doc-role">أخصائية في أمراض النساء والتوليد</p>', 'data-i18n', 'd3-role');
tag('<p class="doc-role">أخصائية في أمراض النساء والتوليد</p>', 'data-i18n', 'd3-role');
tag('<p className="doc-role">أطباء وممرضون مستعدون 24/7</p>', 'data-i18n', 'd4-role');
tag('<p class="doc-role">أطباء وممرضون مستعدون 24/7</p>', 'data-i18n', 'd4-role');

tag('<span className="doc-exp">خبرة تزيد عن 15 سنة</span>', 'data-i18n', 'd1-exp');
tag('<span class="doc-exp">خبرة تزيد عن 15 سنة</span>', 'data-i18n', 'd1-exp');
tag('<span className="doc-exp">خبرة تزيد عن 10 سنوات</span>', 'data-i18n', 'd2-exp');
tag('<span class="doc-exp">خبرة تزيد عن 10 سنوات</span>', 'data-i18n', 'd2-exp');
tag('<span className="doc-exp">خبرة تزيد عن 12 سنة</span>', 'data-i18n', 'd3-exp');
tag('<span class="doc-exp">خبرة تزيد عن 12 سنة</span>', 'data-i18n', 'd3-exp');
tag('<span className="doc-exp">خدمة مستمرة طوال اليوم</span>', 'data-i18n', 'd4-exp');
tag('<span class="doc-exp">خدمة مستمرة طوال اليوم</span>', 'data-i18n', 'd4-exp');

// Contact titles
tag('<h4>عنوان العيادة</h4>', 'data-i18n', 'c-addr-title');
tag('<h4>الهاتف والاستعجالات</h4>', 'data-i18n', 'c-phone-title');
tag('<h4>أوقات العمل</h4>', 'data-i18n', 'c-hours-title');

// Footer
tag('<h4>روابط سريعة</h4>', 'data-i18n', 'footer-quick');
tag('<h4>خدماتنا الطبية</h4>', 'data-i18n', 'footer-services');
tag('<h4>معلومات الاتصال</h4>', 'data-i18n', 'footer-contact');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Tagged form, doctors, contact, footer elements');
