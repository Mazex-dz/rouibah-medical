const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const ar = JSON.parse(fs.readFileSync('scratch/ar_clean.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

Object.keys(fr).forEach(key => {
  const frText = fr[key];

  if (!frText) return;

  const targetFr = '>' + frText + '<';
  const tagFr = ` data-i18n="${key}">${frText}<`;

  if (page.includes(targetFr) && !page.includes(`data-i18n="${key}"`)) {
    page = page.split(targetFr).join(tagFr);
  }
  if (html.includes(targetFr) && !html.includes(`data-i18n="${key}"`)) {
    html = html.split(targetFr).join(tagFr);
  }
});

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Finished simple tag injection');
