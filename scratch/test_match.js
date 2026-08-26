const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

const s1 = `            <a href="tel:0559505001">
              <i className="fa-solid fa-phone"></i> اتصل بنا
            </a>`;

console.log('Includes topbar phone link:', page.includes(s1));
