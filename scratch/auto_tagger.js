const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

function addI18nTag(fileStr, searchPhrase, key) {
  // Regex to match an HTML/JSX opening tag that contains searchPhrase or wraps searchPhrase
  // E.g. <h3>الطب العام والطوارئ</h3> -> <h3 data-i18n="key">الطب العام والطوارئ</h3>
  // E.g. <div className="stat-label">تقييم على Google</div> -> <div className="stat-label" data-i18n="key">تقييم على Google</div>
  
  let count = 0;
  
  // Strategy 1: Look for exact tag wrapping searchPhrase
  const tagRegex = new RegExp(`(<([a-z1-6]+)([^>]*)>)([^<]*${escapeRegExp(searchPhrase)}[^<]*)(</\\2>)`, 'gi');
  
  fileStr = fileStr.replace(tagRegex, (match, openTag, tagName, attrs, content, closeTag) => {
    if (attrs.includes('data-i18n=')) return match;
    count++;
    return `<${tagName}${attrs} data-i18n="${key}">${content}${closeTag}`;
  });

  return fileStr;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const tagRules = [
  { key: 'topbar-address', search: 'برج منايل، ولاية بومرداس، الجزائر' },
  { key: 'topbar-hours', search: 'مفتوح 24 ساعة / 7 أيام' },
  { key: 'stat-google-label', search: 'تقييم على Google' },
  { key: 'stat-spec-label', search: 'تخصصات طبية' },
  { key: 'stat-emerg-label', search: 'استعجالات على مدار الساعة' },
  { key: 'hero-scroll', search: 'اكتشف المزيد' },

  { key: 'about-badge-title', search: 'مركز طبي متكامل' },
  { key: 'about-badge-sub', search: 'برج منايل' },
  { key: 'about-rating-text', search: 'تقييم Google' },
  { key: 'about-btn', search: 'اكتشف خدماتنا' },

  { key: 'stat-counter1-label', search: 'مريض خُدم' },
  { key: 'stat-counter2-label', search: 'طبيب متخصص' },
  { key: 'stat-counter4-label', search: 'تقييم Google Maps' },

  { key: 's1-title', search: 'الطب العام والطوارئ' },
  { key: 's1-desc', search: 'قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.' },
  { key: 's1-f1', search: 'استقبال فوري للحالات الطارئة' },
  { key: 's1-f2', search: 'تشخيص وعلاج سريع' },
  { key: 's1-f3', search: 'إشراف طبي مستمر' },

  { key: 's2-title', search: 'طب وجراحة الأسنان' },
  { key: 's2-desc', search: 'خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.' },
  { key: 's2-f1', search: 'علاج وحشوات بدون ألم' },
  { key: 's2-f2', search: 'تجميل الأسنان والابتسامة' },
  { key: 's2-f3', search: 'زراعة الأسنان الفورية' },

  { key: 's3-title', search: 'النساء والتوليد' },
  { key: 's3-desc', search: 'متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.' },
  { key: 's3-f1', search: 'متابعة دورية للحامل' },
  { key: 's3-f2', search: 'ولادة طبيعية وقيصرية' },
  { key: 's3-f3', search: 'رعاية ما بعد الوضع' },

  { key: 's4-title', search: 'طب الأطفال' },
  { key: 's4-desc', search: 'رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.' },
  { key: 's4-f1', search: 'متابعة النمو والتطور' },
  { key: 's4-f2', search: 'التطعيمات والوقاية' },
  { key: 's4-f3', search: 'علاج أمراض الأطفال' },

  { key: 's5-title', search: 'المخبر والتحاليل الطبية' },
  { key: 's5-desc', search: 'مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.' },
  { key: 's5-f1', search: 'تحاليل دم وبول شاملة' },
  { key: 's5-f2', search: 'تحاليل البكتيريولوجيا (Anapath)' },
  { key: 's5-f3', search: 'نتائج سريعة ودقيقة' },

  { key: 's6-title', search: 'الأشعة والتصوير الطبي' },
  { key: 's6-desc', search: 'قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.' },
  { key: 's6-f1', search: 'أشعة سينية (Radio)' },
  { key: 's6-f2', search: 'الموجات فوق الصوتية (Echo)' },
  { key: 's6-f3', search: 'تصوير متخصص' },

  { key: 'w1-title', search: 'استعجالات 24/7 بلا انقطاع' },
  { key: 'w1-desc', search: 'طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة باحترافية تامة.' },
  { key: 'w2-title', search: 'تجهيزات وتقنيات حديثة' },
  { key: 'w2-desc', search: 'نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج وسلامتك.' },
  { key: 'w3-title', search: 'أطباء متخصصون وذوو خبرة' },
  { key: 'w3-desc', search: 'فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف المجالات الطبية.' },
  { key: 'w4-title', search: 'بيئة نظيفة ومريحة' },
  { key: 'w4-desc', search: 'عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.' },

  { key: 'doctors-lead', search: 'يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل مستوى من الرعاية الطبية.' },
  { key: 'd1-name', search: 'د. الرويبح' },
  { key: 'd1-role', search: 'طبيب مدير وطبيب عام' },
  { key: 'd1-exp', search: 'خبرة تزيد عن 15 سنة' },
  { key: 'd2-name', search: 'د. أخصائي الأطفال' },
  { key: 'd2-role', search: 'أخصائي في طب الأطفال' },
  { key: 'd2-exp', search: 'خبرة تزيد عن 10 سنوات' },
  { key: 'd3-name', search: 'د. أخصائية النساء' },
  { key: 'd3-role', search: 'أخصائية في أمراض النساء والتوليد' },
  { key: 'd3-exp', search: 'خبرة تزيد عن 12 سنة' },
  { key: 'd4-name', search: 'فريق الاستعجالات' },
  { key: 'd4-role', search: 'أطباء وممرضون مستعدون 24/7' },
  { key: 'd4-exp', search: 'خدمة مستمرة طوال اليوم' },

  { key: 'apt-lead', search: 'قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد موعدك.' },
  { key: 'form-title', search: 'نموذج طلب موعد' },
  { key: 'form-sub', search: 'يرجى إدخال البيانات التالية لحجز استشارتك الطبية' },
  { key: 'lbl-name', search: 'الاسم الكامل *' },
  { key: 'lbl-phone', search: 'رقم الهاتف *' },
  { key: 'lbl-service', search: 'التخصص المطلوب *' },
  { key: 'opt-select', search: '-- اختر الخدمة --' },
  { key: 'opt-s1', search: 'الطب العام / الاستعجالات' },
  { key: 'opt-s2', search: 'طب وجراحة الأسنان' },
  { key: 'opt-s3', search: 'أمراض النساء والتوليد' },
  { key: 'opt-s4', search: 'طب الأطفال' },
  { key: 'opt-s5', search: 'مخبر التحاليل الطبية' },
  { key: 'opt-s6', search: 'الأشعة والتصوير الطبي' },
  { key: 'lbl-date', search: 'التاريخ المطلوب *' },
  { key: 'lbl-time', search: 'الفترة المفضلة' },
  { key: 'opt-t1', search: 'صباحاً (08:00 - 12:00)' },
  { key: 'opt-t2', search: 'مساءً (13:00 - 17:00)' },
  { key: 'opt-t3', search: 'ليلاً (17:00 - 20:00)' },
  { key: 'lbl-notes', search: 'ملاحظات أو أعراض (اختياري)' },

  { key: 'c-addr-title', search: 'عنوان العيادة' },
  { key: 'c-phone-title', search: 'الهاتف والاستعجالات' },
  { key: 'c-hours-title', search: 'أوقات العمل' },

  { key: 'footer-quick', search: 'روابط سريعة' },
  { key: 'footer-services', search: 'خدماتنا الطبية' },
  { key: 'footer-contact', search: 'معلومات الاتصال' }
];

tagRules.forEach(rule => {
  page = addI18nTag(page, rule.search, rule.key);
  html = addI18nTag(html, rule.search, rule.key);
});

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Automated tagging finished');
