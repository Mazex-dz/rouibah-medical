const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');
let htmlContent = fs.readFileSync('index.html', 'utf8');

const tags = [
  // Hero
  ['<div className="hero-badge fade-in" data-delay="100">', '<div className="hero-badge fade-in" data-delay="100" data-i18n="hero-badge">'],
  ['<div class="hero-badge fade-in" data-delay="100">', '<div class="hero-badge fade-in" data-delay="100" data-i18n="hero-badge">'],
  
  ['<h1 className="hero-title fade-in" data-delay="200">', '<h1 className="hero-title fade-in" data-delay="200" data-i18n="hero-title">'],
  ['<h1 class="hero-title fade-in" data-delay="200">', '<h1 class="hero-title fade-in" data-delay="200" data-i18n="hero-title">'],

  ['<p className="hero-subtitle fade-in" data-delay="300">', '<p className="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">'],
  ['<p class="hero-subtitle fade-in" data-delay="300">', '<p class="hero-subtitle fade-in" data-delay="300" data-i18n="hero-subtitle">'],

  ['<a href="#appointment" className="btn btn-hero-primary">', '<a href="#appointment" className="btn btn-hero-primary" data-i18n="hero-btn-book">'],
  ['<a href="#appointment" class="btn btn-hero-primary">', '<a href="#appointment" class="btn btn-hero-primary" data-i18n="hero-btn-book">'],

  ['<a href="#about" className="btn btn-hero-ghost">', '<a href="#about" className="btn btn-hero-ghost" data-i18n="hero-btn-about">'],
  ['<a href="#about" class="btn btn-hero-ghost">', '<a href="#about" class="btn btn-hero-ghost" data-i18n="hero-btn-about">'],

  // Emergency
  ['<strong>قسم الطوارئ مفتوح 24/7</strong>', '<strong data-i18n="emerg-title">قسم الطوارئ مفتوح 24/7</strong>'],
  ['<span>\n              نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل\n            </span>', '<span data-i18n="emerg-desc">نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل</span>'],
  ['<span>نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل</span>', '<span data-i18n="emerg-desc">نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل</span>'],
  ['<a href="tel:0559505001" className="btn btn-emergency">', '<a href="tel:0559505001" className="btn btn-emergency" data-i18n="emerg-btn">'],
  ['<a href="tel:0559505001" class="btn btn-emergency">', '<a href="tel:0559505001" class="btn btn-emergency" data-i18n="emerg-btn">'],

  // About
  ['<span className="label-tag">\n                <i className="fa-solid fa-circle-dot"></i> من نحن\n              </span>', '<span className="label-tag" data-i18n="about-tag"><i className="fa-solid fa-circle-dot"></i> من نحن</span>'],
  ['<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> من نحن</span>', '<span class="label-tag" data-i18n="about-tag"><i class="fa-solid fa-circle-dot"></i> من نحن</span>'],
  ['<h2 className="section-title">\n                رسالتنا: رعاية\n                <br />\n                طبية تستحقها\n              </h2>', '<h2 className="section-title" data-i18n="about-title">رسالتنا: رعاية<br />طبية تستحقها</h2>'],
  ['<h2 class="section-title">رسالتنا: رعاية<br>طبية تستحقها</h2>', '<h2 class="section-title" data-i18n="about-title">رسالتنا: رعاية<br>طبية تستحقها</h2>'],

  ['<p className="about-lead">', '<p className="about-lead" data-i18n="about-lead">'],
  ['<p class="about-lead">', '<p class="about-lead" data-i18n="about-lead">'],
  ['<p className="about-desc">', '<p className="about-desc" data-i18n="about-desc">'],
  ['<p class="about-desc">', '<p class="about-desc" data-i18n="about-desc">'],

  // About Values
  ['<h4>الدقة والكفاءة</h4>', '<h4 data-i18n="val1-title">الدقة والكفاءة</h4>'],
  ['<p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>', '<p data-i18n="val1-desc">تشخيص صحيح وعلاج فعّال من أول زيارة</p>'],
  ['<h4>الرعاية الإنسانية</h4>', '<h4 data-i18n="val2-title">الرعاية الإنسانية</h4>'],
  ['<p>نعامل كل مريض بالاحترام والتعاطف</p>', '<p data-i18n="val2-desc">نعامل كل مريض بالاحترام والتعاطف</p>'],
  ['<h4>تقنيات متطورة</h4>', '<h4 data-i18n="val3-title">تقنيات متطورة</h4>'],
  ['<p>أحدث الأجهزة التشخيصية والعلاجية</p>', '<p data-i18n="val3-desc">أحدث الأجهزة التشخيصية والعلاجية</p>'],
  ['<h4>تطوير مستمر</h4>', '<h4 data-i18n="val4-title">تطوير مستمر</h4>'],
  ['<p>نستثمر دائماً في التحسين والنمو</p>', '<p data-i18n="val4-desc">نستثمر دائماً في التحسين والنمو</p>'],

  // Services tag & title
  ['<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> خدماتنا الطبية\n            </span>', '<span className="label-tag" data-i18n="services-tag"><i className="fa-solid fa-circle-dot"></i> خدماتنا الطبية</span>'],
  ['<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية</span>', '<span class="label-tag" data-i18n="services-tag"><i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية</span>'],
  ['<h2 className="section-title">\n              تخصصات شاملة <span className="text-teal">لرعايتك الكاملة</span>\n            </h2>', '<h2 className="section-title" data-i18n="services-title">تخصصات شاملة <span className="text-teal">لرعايتك الكاملة</span></h2>'],
  ['<h2 class="section-title">تخصصات شاملة <span class="text-teal">لرعايتك الكاملة</span></h2>', '<h2 class="section-title" data-i18n="services-title">تخصصات شاملة <span class="text-teal">لرعايتك الكاملة</span></h2>'],
  ['<p className="section-lead">', '<p className="section-lead" data-i18n="services-lead">'],
  ['<p class="section-lead">', '<p class="section-lead" data-i18n="services-lead">'],

  // Why Us
  ['<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> لماذا تختارنا؟\n            </span>', '<span className="label-tag" data-i18n="why-tag"><i className="fa-solid fa-circle-dot"></i> لماذا تختارنا؟</span>'],
  ['<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> لماذا تختارنا؟</span>', '<span class="label-tag" data-i18n="why-tag"><i class="fa-solid fa-circle-dot"></i> لماذا تختارنا؟</span>'],
  ['<p className="whyus-desc">', '<p className="whyus-desc" data-i18n="why-desc">'],
  ['<p class="whyus-desc">', '<p class="whyus-desc" data-i18n="why-desc">'],

  // Doctors
  ['<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> فريقنا الطبي\n            </span>', '<span className="label-tag" data-i18n="doctors-tag"><i className="fa-solid fa-circle-dot"></i> طاقمنا الطبي</span>'],
  ['<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> فريقنا الطبي</span>', '<span class="label-tag" data-i18n="doctors-tag"><i class="fa-solid fa-circle-dot"></i> طاقمنا الطبي</span>'],

  // Appointment Form
  ['<span className="label-tag">\n              <i className="fa-solid fa-circle-dot"></i> حجز موعد\n            </span>', '<span className="label-tag" data-i18n="apt-tag"><i className="fa-solid fa-circle-dot"></i> حجز موعد</span>'],
  ['<span class="label-tag"><i class="fa-solid fa-circle-dot"></i> حجز موعد</span>', '<span class="label-tag" data-i18n="apt-tag"><i class="fa-solid fa-circle-dot"></i> حجز موعد</span>'],

  // Inputs Placeholders
  ['id="f-name" placeholder="أدخل اسمك الكامل"', 'id="f-name" placeholder="أدخل اسمك الكامل" data-i18n-ph="ph-name"'],
  ['id="f-phone" placeholder="05XX XX XX XX"', 'id="f-phone" placeholder="05XX XX XX XX" data-i18n-ph="ph-phone"'],
  ['id="f-notes" placeholder="اشرح باختصار سبب الحجز أو أي ملاحظات أخرى..."', 'id="f-notes" placeholder="اشرح باختصار سبب الحجز أو أي ملاحظات أخرى..." data-i18n-ph="ph-notes"']
];

tags.forEach(([search, replace]) => {
  pageContent = pageContent.split(search).join(replace);
  htmlContent = htmlContent.split(search).join(replace);
});

fs.writeFileSync('app/page.tsx', pageContent, 'utf8');
fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Finished adding data-i18n and data-i18n-ph tags');
