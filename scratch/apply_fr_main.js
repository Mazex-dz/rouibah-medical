const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('scratch/ar_clean.json', 'utf8'));

let pageReplaces = 0;
let htmlReplaces = 0;

Object.keys(ar).forEach(k => {
  const arVal = ar[k];
  const frVal = fr[k];

  if (!arVal || !frVal) return;

  if (page.includes(arVal)) {
    page = page.split(arVal).join(frVal);
    pageReplaces++;
  }
  if (html.includes(arVal)) {
    html = html.split(arVal).join(frVal);
    htmlReplaces++;
  }
});

// Also replace html lang and dir attributes to fr and ltr by default
page = page.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');
html = html.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log('Replaced entries in page.tsx:', pageReplaces);
console.log('Replaced entries in index.html:', htmlReplaces);
