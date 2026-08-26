const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');
let htmlContent = fs.readFileSync('index.html', 'utf8');

// Nav links replacement
const navMap = [
  ['href="#home">الرئيسية</a>', 'href="#home" data-i18n="nav-home">الرئيسية</a>'],
  ['href="#about">من نحن</a>', 'href="#about" data-i18n="nav-about">من نحن</a>'],
  ['href="#services">خدماتنا</a>', 'href="#services" data-i18n="nav-services">خدماتنا</a>'],
  ['href="#doctors">فريقنا</a>', 'href="#doctors" data-i18n="nav-doctors">فريقنا</a>'],
  ['href="#gallery">معرض الصور</a>', 'href="#gallery" data-i18n="nav-gallery">معرض الصور</a>'],
  ['href="#testimonials">آراء المرضى</a>', 'href="#testimonials" data-i18n="nav-testimonials">آراء المرضى</a>'],
  ['href="#contact">تواصل معنا</a>', 'href="#contact" data-i18n="nav-contact">تواصل معنا</a>'],
];

navMap.forEach(([search, replace]) => {
  pageContent = pageContent.split(search).join(replace);
  htmlContent = htmlContent.split(search).join(replace);
});

fs.writeFileSync('app/page.tsx', pageContent, 'utf8');
fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Nav links tagged with data-i18n');
