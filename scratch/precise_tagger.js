const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

function replaceExact(search, replace) {
  page = page.split(search).join(replace);
  html = html.split(search).join(replace);
}

// Direct exact replacements
replaceExact('<span>\n              <i className="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام\n            </span>', '<span data-i18n="topbar-hours"><i className="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام</span>');
replaceExact('<span><i class="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام</span>', '<span data-i18n="topbar-hours"><i class="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام</span>');

replaceExact('<p>\n                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع\n                  لاستقبال جميع الحالات المستعجلة.\n                </p>', '<p data-i18n="s1-desc">قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.</p>');
replaceExact('<p>قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.</p>', '<p data-i18n="s1-desc">قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> استقبال فوري للحالات\n                    الطارئة\n                  </li>', '<li data-i18n="s1-f1"><i className="fa-solid fa-check"></i> استقبال فوري للحالات الطارئة</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> استقبال فوري للحالات الطارئة</li>', '<li data-i18n="s1-f1"><i class="fa-solid fa-check"></i> استقبال فوري للحالات الطارئة</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> تشخيص وعلاج سريع\n                  </li>', '<li data-i18n="s1-f2"><i className="fa-solid fa-check"></i> تشخيص وعلاج سريع</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> تشخيص وعلاج سريع</li>', '<li data-i18n="s1-f2"><i class="fa-solid fa-check"></i> تشخيص وعلاج سريع</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> إشراف طبي مستمر\n                  </li>', '<li data-i18n="s1-f3"><i className="fa-solid fa-check"></i> إشراف طبي مستمر</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> إشراف طبي مستمر</li>', '<li data-i18n="s1-f3"><i class="fa-solid fa-check"></i> إشراف طبي مستمر</li>');

// Dentiste
replaceExact('<p>\n                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء\n                  متخصصين ذوي خبرة.\n                </p>', '<p data-i18n="s2-desc">خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.</p>');
replaceExact('<p>خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.</p>', '<p data-i18n="s2-desc">خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> علاج وحشوات بدون ألم\n                  </li>', '<li data-i18n="s2-f1"><i className="fa-solid fa-check"></i> علاج وحشوات بدون ألم</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> علاج وحشوات بدون ألم</li>', '<li data-i18n="s2-f1"><i class="fa-solid fa-check"></i> علاج وحشوات بدون ألم</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> تجميل الأسنان\n                    والابتسامة\n                  </li>', '<li data-i18n="s2-f2"><i className="fa-solid fa-check"></i> تجميل الأسنان والابتسامة</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> تجميل الأسنان والابتسامة</li>', '<li data-i18n="s2-f2"><i class="fa-solid fa-check"></i> تجميل الأسنان والابتسامة</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> زراعة الأسنان الفورية\n                  </li>', '<li data-i18n="s2-f3"><i className="fa-solid fa-check"></i> زراعة الأسنان الفورية</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> زراعة الأسنان الفورية</li>', '<li data-i18n="s2-f3"><i class="fa-solid fa-check"></i> زراعة الأسنان الفورية</li>');

// Gynécologie
replaceExact('<p>\n                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة\n                  مريحة وآمنة.\n                </p>', '<p data-i18n="s3-desc">متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.</p>');
replaceExact('<p>متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.</p>', '<p data-i18n="s3-desc">متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> متابعة دورية للحامل\n                  </li>', '<li data-i18n="s3-f1"><i className="fa-solid fa-check"></i> متابعة دورية للحامل</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> متابعة دورية للحامل</li>', '<li data-i18n="s3-f1"><i class="fa-solid fa-check"></i> متابعة دورية للحامل</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> ولادة طبيعية وقيصرية\n                  </li>', '<li data-i18n="s3-f2"><i className="fa-solid fa-check"></i> ولادة طبيعية وقيصرية</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> ولادة طبيعية وقيصرية</li>', '<li data-i18n="s3-f2"><i class="fa-solid fa-check"></i> ولادة طبيعية وقيصرية</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> رعاية ما بعد الوضع\n                  </li>', '<li data-i18n="s3-f3"><i className="fa-solid fa-check"></i> رعاية ما بعد الوضع</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> رعاية ما بعد الوضع</li>', '<li data-i18n="s3-f3"><i class="fa-solid fa-check"></i> رعاية ما بعد الوضع</li>');

// Pédiatrie
replaceExact('<p>\n                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،\n                  بأيدي أطباء متفانين.\n                </p>', '<p data-i18n="s4-desc">رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.</p>');
replaceExact('<p>رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.</p>', '<p data-i18n="s4-desc">رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> متابعة النمو والتطور\n                  </li>', '<li data-i18n="s4-f1"><i className="fa-solid fa-check"></i> متابعة النمو والتطور</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> متابعة النمو والتطور</li>', '<li data-i18n="s4-f1"><i class="fa-solid fa-check"></i> متابعة النمو والتطور</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> التطعيمات والوقاية\n                  </li>', '<li data-i18n="s4-f2"><i className="fa-solid fa-check"></i> التطعيمات والوقاية</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> التطعيمات والوقاية</li>', '<li data-i18n="s4-f2"><i class="fa-solid fa-check"></i> التطعيمات والوقاية</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> علاج أمراض الأطفال\n                  </li>', '<li data-i18n="s4-f3"><i className="fa-solid fa-check"></i> علاج أمراض الأطفال</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> علاج أمراض الأطفال</li>', '<li data-i18n="s4-f3"><i class="fa-solid fa-check"></i> علاج أمراض الأطفال</li>');

// Labo & Radio
replaceExact('<p>\n                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع\n                  أنواع التحاليل.\n                </p>', '<p data-i18n="s5-desc">مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.</p>');
replaceExact('<p>مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.</p>', '<p data-i18n="s5-desc">مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> تحاليل دم وبول شاملة\n                  </li>', '<li data-i18n="s5-f1"><i className="fa-solid fa-check"></i> تحاليل دم وبول شاملة</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> تحاليل دم وبول شاملة</li>', '<li data-i18n="s5-f1"><i class="fa-solid fa-check"></i> تحاليل دم وبول شاملة</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> تحاليل البكتيريولوجيا\n                    (Anapath)\n                  </li>', '<li data-i18n="s5-f2"><i className="fa-solid fa-check"></i> تحاليل البكتيريولوجيا (Anapath)</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> تحاليل البكتيريولوجيا (Anapath)</li>', '<li data-i18n="s5-f2"><i class="fa-solid fa-check"></i> تحاليل البكتيريولوجيا (Anapath)</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> نتائج سريعة ودقيقة\n                  </li>', '<li data-i18n="s5-f3"><i className="fa-solid fa-check"></i> نتائج سريعة ودقيقة</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> نتائج سريعة ودقيقة</li>', '<li data-i18n="s5-f3"><i class="fa-solid fa-check"></i> نتائج سريعة ودقيقة</li>');

replaceExact('<p>\n                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة\n                  للتشخيص الدقيق.\n                </p>', '<p data-i18n="s6-desc">قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.</p>');
replaceExact('<p>قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.</p>', '<p data-i18n="s6-desc">قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.</p>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> أشعة سينية (Radio)\n                  </li>', '<li data-i18n="s6-f1"><i className="fa-solid fa-check"></i> أشعة سينية (Radio)</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> أشعة سينية (Radio)</li>', '<li data-i18n="s6-f1"><i class="fa-solid fa-check"></i> أشعة سينية (Radio)</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> الموجات فوق الصوتية\n                    (Echo)\n                  </li>', '<li data-i18n="s6-f2"><i className="fa-solid fa-check"></i> الموجات فوق الصوتية (Echo)</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> الموجات فوق الصوتية (Echo)</li>', '<li data-i18n="s6-f2"><i class="fa-solid fa-check"></i> الموجات فوق الصوتية (Echo)</li>');

replaceExact('<li>\n                    <i className="fa-solid fa-check"></i> تصوير متخصص\n                  </li>', '<li data-i18n="s6-f3"><i className="fa-solid fa-check"></i> تصوير متخصص</li>');
replaceExact('<li><i class="fa-solid fa-check"></i> تصوير متخصص</li>', '<li data-i18n="s6-f3"><i class="fa-solid fa-check"></i> تصوير متخصص</li>');

// Why Us, Doctors, Form, Footer
replaceExact('<h2 className="section-title">\n              ما يجعلنا الخيار\n              <br />\n              <span className="text-teal">الأول في برج منايل</span>\n            </h2>', '<h2 className="section-title" data-i18n="why-title">ما يجعلنا الخيار<br /><span className="text-teal">الأول في برج منايل</span></h2>');
replaceExact('<h2 class="section-title">ما يجعلنا الخيار<br><span class="text-teal">الأول في برج منايل</span></h2>', '<h2 class="section-title" data-i18n="why-title">ما يجعلنا الخيار<br><span class="text-teal">الأول في برج منايل</span></h2>');

replaceExact('<h2 className="section-title">\n              أطباء متخصصون <span className="text-teal">في خدمتك</span>\n            </h2>', '<h2 className="section-title" data-i18n="doctors-title">أطباء متخصصون <span className="text-teal">في خدمتك</span></h2>');
replaceExact('<h2 class="section-title">أطباء متخصصون <span class="text-teal">في خدمتك</span></h2>', '<h2 class="section-title" data-i18n="doctors-title">أطباء متخصصون <span class="text-teal">في خدمتك</span></h2>');

replaceExact('<h2 className="section-title">\n              احجز موعدك الآن <span className="text-teal">بسهولة عبر الإنترنت</span>\n            </h2>', '<h2 className="section-title" data-i18n="apt-title">احجز موعدك الآن <span className="text-teal">بسهولة عبر الإنترنت</span></h2>');
replaceExact('<h2 class="section-title">احجز موعدك الآن <span class="text-teal">بسهولة عبر الإنترنت</span></h2>', '<h2 class="section-title" data-i18n="apt-title">احجز موعدك الآن <span class="text-teal">بسهولة عبر الإنترنت</span></h2>');

replaceExact('<h2 className="section-title">\n              جولة مصورة <span className="text-teal">داخل العيادة</span>\n            </h2>', '<h2 className="section-title" data-i18n="gallery-title">جولة مصورة <span className="text-teal">داخل العيادة</span></h2>');
replaceExact('<h2 class="section-title">جولة مصورة <span class="text-teal">داخل العيادة</span></h2>', '<h2 class="section-title" data-i18n="gallery-title">جولة مصورة <span class="text-teal">داخل العيادة</span></h2>');

replaceExact('<h2 className="section-title">\n              ماذا يقول مرضانا <span className="text-teal">عن خدماتنا</span>\n            </h2>', '<h2 className="section-title" data-i18n="testi-title">ماذا يقول مرضانا <span className="text-teal">عن خدماتنا</span></h2>');
replaceExact('<h2 class="section-title">ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span></h2>', '<h2 class="section-title" data-i18n="testi-title">ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span></h2>');

replaceExact('<h2 className="section-title">\n              نحن هنا للمساعدة <span className="text-teal">والإجابة على استفساراتك</span>\n            </h2>', '<h2 className="section-title" data-i18n="contact-title">نحن هنا للمساعدة <span class="text-teal">والإجابة على استفساراتك</span></h2>');
replaceExact('<h2 class="section-title">نحن هنا للمساعدة <span class="text-teal">والإجابة على استفساراتك</span></h2>', '<h2 class="section-title" data-i18n="contact-title">نحن هنا للمساعدة <span class="text-teal">والإجابة على استفساراتك</span></h2>');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Finished precise multiline replacements');
