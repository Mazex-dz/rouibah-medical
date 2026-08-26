const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const ar = JSON.parse(fs.readFileSync('scratch/ar_clean.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

// Normalize line endings to \n for both file and search strings
function normalize(str) {
  return str.replace(/\r\n/g, '\n');
}

page = normalize(page);
html = normalize(html);

let pageTagCount = 0;
let htmlTagCount = 0;

Object.keys(fr).forEach(k => {
  const arVal = ar[k];
  const frVal = fr[k];

  if (!arVal || !frVal) return;

  const cleanAr = arVal.replace(/<[^>]+>/g, '').trim();
  const cleanFr = frVal.replace(/<[^>]+>/g, '').trim();

  // Try replacing Arabic or untagged French text with French text + data-i18n attribute
  [arVal, cleanAr].forEach(searchStr => {
    if (searchStr.length > 2 && page.includes(searchStr)) {
      // Look for enclosing HTML tag
      const idx = page.indexOf(searchStr);
      const openTagStart = page.lastIndexOf('<', idx);
      const openTagEnd = page.indexOf('>', openTagStart);
      const tagContent = page.substring(openTagStart, openTagEnd + 1);

      if (!tagContent.includes('data-i18n=')) {
        const newTag = tagContent.replace('>', ` data-i18n="${k}">`);
        page = page.substring(0, openTagStart) + newTag + page.substring(openTagEnd + 1);
        page = page.split(searchStr).join(frVal);
        pageTagCount++;
      }
    }

    if (searchStr.length > 2 && html.includes(searchStr)) {
      const idx = html.indexOf(searchStr);
      const openTagStart = html.lastIndexOf('<', idx);
      const openTagEnd = html.indexOf('>', openTagStart);
      const tagContent = html.substring(openTagStart, openTagEnd + 1);

      if (!tagContent.includes('data-i18n=')) {
        const newTag = tagContent.replace('>', ` data-i18n="${k}">`);
        html = html.substring(0, openTagStart) + newTag + html.substring(openTagEnd + 1);
        html = html.split(searchStr).join(frVal);
        htmlTagCount++;
      }
    }
  });
});

// Set main language default html attribute to fr and ltr
page = page.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');
html = html.replace('lang="ar"', 'lang="fr"').replace('dir="rtl"', 'dir="ltr"');

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log('CRLF-normalized tagger completed!');
console.log('Tagged elements in page.tsx:', pageTagCount);
console.log('Tagged elements in index.html:', htmlTagCount);
