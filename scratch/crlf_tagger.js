const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

// Topbar right with lang switcher
const pagePhone = '<a href="tel:0559505001">\r\n              <i className="fa-solid fa-phone"></i> اتصل بنا\r\n            </a>';
const pagePhoneLinux = '<a href="tel:0559505001">\n              <i className="fa-solid fa-phone"></i> اتصل بنا\n            </a>';

const pagePhoneRep = `<a href="tel:0559505001" data-i18n="topbar-contact">
              <i className="fa-solid fa-phone"></i> Contactez-nous
            </a>
            <div className="lang-switcher">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>`;

page = page.replace(pagePhone, pagePhoneRep).replace(pagePhoneLinux, pagePhoneRep);

const htmlPhone = '<a href="tel:0559505001"><i\r\n                        class="fa-solid fa-phone"></i> اتصل بنا</a>';
const htmlPhoneLinux = '<a href="tel:0559505001"><i\n                        class="fa-solid fa-phone"></i> اتصل بنا</a>';

const htmlPhoneRep = `<a href="tel:0559505001" data-i18n="topbar-contact"><i class="fa-solid fa-phone"></i> Contactez-nous</a>
                <div class="lang-switcher">
                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
                </div>`;

html = html.replace(htmlPhone, htmlPhoneRep).replace(htmlPhoneLinux, htmlPhoneRep);

// Header CTA
const pageCta = `<div className="header-cta">
            <a href="#appointment" className="btn btn-primary" data-i18n="btn-book">
              <i className="fa-solid fa-calendar-plus"></i>
              Prendre Rendez-vous
            </a>
            <div className="lang-switcher lang-switcher-mobile">
              <button className="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
              <button className="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
            </div>`;

page = page.replace('<div className="header-cta">\r\n            <a href="#appointment" className="btn btn-primary">\r\n              <i className="fa-solid fa-calendar-plus"></i>\r\n              احجز موعداً\r\n            </a>', pageCta)
          .replace('<div className="header-cta">\n            <a href="#appointment" className="btn btn-primary">\n              <i className="fa-solid fa-calendar-plus"></i>\n              احجز موعداً\n            </a>', pageCta);

const htmlCta = `<div class="header-cta">
                <a href="#appointment" class="btn btn-primary" data-i18n="btn-book">
                    <i class="fa-solid fa-calendar-plus"></i>
                    Prendre Rendez-vous
                </a>
                <div class="lang-switcher lang-switcher-mobile">
                    <button class="lang-btn active" data-lang="fr" aria-label="Passer au Français">FR</button>
                    <button class="lang-btn" data-lang="ar" aria-label="التحويل إلى العربية">العربية</button>
                </div>`;

html = html.replace('<div class="header-cta">\r\n                <a href="#appointment" class="btn btn-primary">\r\n                    <i class="fa-solid fa-calendar-plus"></i>\r\n                    احجز موعداً\r\n                </a>', htmlCta)
          .replace('<div class="header-cta">\n                <a href="#appointment" class="btn btn-primary">\n                    <i class="fa-solid fa-calendar-plus"></i>\n                    احجز موعداً\n                </a>', htmlCta);

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('CRLF-aware replacements done!');
