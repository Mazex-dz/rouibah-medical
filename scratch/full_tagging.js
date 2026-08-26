const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');
let htmlContent = fs.readFileSync('index.html', 'utf8');

// List of text elements to translate throughout page.tsx and index.html
const elementsToTag = [
  // Topbar & Nav
  { ar: 'برج منايل، ولاية بومرداس، الجزائر', key: 'topbar-address-text' },
  { ar: 'مفتوح 24 ساعة / 7 أيام', key: 'topbar-hours-text' },
  { ar: 'اتصل بنا', key: 'topbar-contact-text' },
  { ar: 'الرئيسية', key: 'nav-home' },
  { ar: 'من نحن', key: 'nav-about' },
  { ar: 'خدماتنا', key: 'nav-services' },
  { ar: 'فريقنا', key: 'nav-doctors' },
  { ar: 'معرض الصور', key: 'nav-gallery' },
  { ar: 'آراء المرضى', key: 'nav-testimonials' },
  { ar: 'تواصل معنا', key: 'nav-contact' },
  { ar: 'احجز موعداً', key: 'btn-book-text' },

  // Hero
  { ar: 'مركز طبي معتمد — برج منايل، الجزائر', key: 'hero-badge-text' },
  { ar: 'احجز موعداً الآن', key: 'hero-btn-book-text' },
  { ar: 'تعرف علينا', key: 'hero-btn-about-text' },
  { ar: 'تقييم على Google', key: 'stat-google-label' },
  { ar: 'تخصصات طبية', key: 'stat-spec-label' },
  { ar: 'استعجالات على مدار الساعة', key: 'stat-emerg-label' },
  { ar: 'اكتشف المزيد', key: 'hero-scroll-text' },

  // Emergency Bar
  { ar: 'قسم الطوارئ مفتوح 24/7', key: 'emerg-title-text' },
  { ar: 'اتصل الآن', key: 'emerg-btn-text' },

  // About Section
  { ar: 'رسالتنا: رعاية', key: 'about-title-part1' },
  { ar: 'طبية تستحقها', key: 'about-title-part2' },
  { ar: 'الدقة والكفاءة', key: 'val1-title' },
  { ar: 'تشخيص صحيح وعلاج فعّال من أول زيارة', key: 'val1-desc' },
  { ar: 'الرعاية الإنسانية', key: 'val2-title' },
  { ar: 'نعامل كل مريض بالاحترام والتعاطف', key: 'val2-desc' },
  { ar: 'تقنيات متطورة', key: 'val3-title' },
  { ar: 'أحدث الأجهزة التشخيصية والعلاجية', key: 'val3-desc' },
  { ar: 'تطوير مستمر', key: 'val4-title' },
  { ar: 'نستثمر دائماً في التحسين والنمو', key: 'val4-desc' },
  { ar: 'مركز طبي متكامل', key: 'about-badge-title' },
  { ar: 'برج منايل', key: 'about-badge-sub' },
  { ar: 'اكتشف خدماتنا', key: 'about-btn-text' },

  // Stats Counters
  { ar: 'مريض خُدم', key: 'stat-counter1-label' },
  { ar: 'طبيب متخصص', key: 'stat-counter2-label' },
  { ar: 'تقييم Google Maps', key: 'stat-counter4-label' },

  // Services
  { ar: 'الطب العام والطوارئ', key: 's1-title' },
  { ar: 'قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.', key: 's1-desc' },
  { ar: 'استقبال فوري للحالات الطارئة', key: 's1-f1-text' },
  { ar: 'تشخيص وعلاج سريع', key: 's1-f2-text' },
  { ar: 'إشراف طبي مستمر', key: 's1-f3-text' },

  { ar: 'طب وجراحة الأسنان', key: 's2-title' },
  { ar: 'خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.', key: 's2-desc' },
  { ar: 'علاج وحشوات بدون ألم', key: 's2-f1-text' },
  { ar: 'تجميل الأسنان والابتسامة', key: 's2-f2-text' },
  { ar: 'زراعة الأسنان الفورية', key: 's2-f3-text' },

  { ar: 'النساء والتوليد', key: 's3-title' },
  { ar: 'متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.', key: 's3-desc' },
  { ar: 'متابعة دورية للحامل', key: 's3-f1-text' },
  { ar: 'ولادة طبيعية وقيصرية', key: 's3-f2-text' },
  { ar: 'رعاية ما بعد الوضع', key: 's3-f3-text' },

  { ar: 'طب الأطفال', key: 's4-title' },
  { ar: 'رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.', key: 's4-desc' },
  { ar: 'متابعة النمو والتطور', key: 's4-f1-text' },
  { ar: 'التطعيمات والوقاية', key: 's4-f2-text' },
  { ar: 'علاج أمراض الأطفال', key: 's4-f3-text' },

  { ar: 'المخبر والتحاليل الطبية', key: 's5-title' },
  { ar: 'مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.', key: 's5-desc' },
  { ar: 'تحاليل دم وبول شاملة', key: 's5-f1-text' },
  { ar: 'تحاليل البكتيريولوجيا (Anapath)', key: 's5-f2-text' },
  { ar: 'نتائج سريعة ودقيقة', key: 's5-f3-text' },

  { ar: 'الأشعة والتصوير الطبي', key: 's6-title' },
  { ar: 'قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.', key: 's6-desc' },
  { ar: 'أشعة سينية (Radio)', key: 's6-f1-text' },
  { ar: 'الموجات فوق الصوتية (Echo)', key: 's6-f2-text' },
  { ar: 'تصوير متخصص', key: 's6-f3-text' },

  // Why Us
  { ar: 'استعجالات 24/7 بلا انقطاع', key: 'w1-title' },
  { ar: 'طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة باحترافية تامة.', key: 'w1-desc' },
  { ar: 'تجهيزات وتقنيات حديثة', key: 'w2-title' },
  { ar: 'أطباء متخصصون وذوو خبرة', key: 'w3-title' },
  { ar: 'بيئة نظيفة ومريحة', key: 'w4-title' },

  // Doctors
  { ar: 'د. الرويبح', key: 'd1-name' },
  { ar: 'طبيب مدير وطبيب عام', key: 'd1-role' },
  { ar: 'خبرة تزيد عن 15 سنة', key: 'd1-exp' },
  { ar: 'د. أخصائي الأطفال', key: 'd2-name' },
  { ar: 'أخصائي في طب الأطفال', key: 'd2-role' },
  { ar: 'خبرة تزيد عن 10 سنوات', key: 'd2-exp' },
  { ar: 'د. أخصائية النساء', key: 'd3-name' },
  { ar: 'أخصائية في أمراض النساء والتوليد', key: 'd3-role' },
  { ar: 'خبرة تزيد عن 12 سنة', key: 'd3-exp' },
  { ar: 'فريق الاستعجالات', key: 'd4-name' },
  { ar: 'أطباء وممرضون مستعدون 24/7', key: 'd4-role' },
  { ar: 'خدمة مستمرة طوال اليوم', key: 'd4-exp' },

  // Appointment Form
  { ar: 'الاسم الكامل *', key: 'lbl-name' },
  { ar: 'رقم الهاتف *', key: 'lbl-phone' },
  { ar: 'التخصص المطلوب *', key: 'lbl-service' },
  { ar: '-- اختر الخدمة --', key: 'opt-select' },
  { ar: 'الطب العام / الاستعجالات', key: 'opt-s1' },
  { ar: 'طب وجراحة الأسنان', key: 'opt-s2' },
  { ar: 'أمراض النساء والتوليد', key: 'opt-s3' },
  { ar: 'مخبر التحاليل الطبية', key: 'opt-s5' },
  { ar: 'الأشعة والتصوير الطبي', key: 'opt-s6' },
  { ar: 'التاريخ المطلوب *', key: 'lbl-date' },
  { ar: 'الفترة المفضلة', key: 'lbl-time' },
  { ar: 'صباحاً (08:00 - 12:00)', key: 'opt-t1' },
  { ar: 'مساءً (13:00 - 17:00)', key: 'opt-t2' },
  { ar: 'ليلاً (17:00 - 20:00)', key: 'opt-t3' },
  { ar: 'ملاحظات أو أعراض (اختياري)', key: 'lbl-notes' },
  { ar: 'تأكيد طلب الحجز', key: 'btn-submit-apt-text' },

  // Contact
  { ar: 'عنوان العيادة', key: 'c-addr-title' },
  { ar: 'الهاتف والاستعجالات', key: 'c-phone-title' },
  { ar: 'أوقات العمل', key: 'c-hours-title' },
  { ar: '7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)', key: 'c-hours-val' },

  // Footer
  { ar: 'روابط سريعة', key: 'footer-quick' },
  { ar: 'خدماتنا الطبية', key: 'footer-services' },
  { ar: 'معلومات الاتصال', key: 'footer-contact' }
];

console.log('Total elements to tag:', elementsToTag.length);
