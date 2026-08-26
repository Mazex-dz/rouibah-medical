const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

const ar = JSON.parse(fs.readFileSync('scratch/ar_clean.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('scratch/fr_clean.json', 'utf8'));

function tagFile(content, isJsx) {
  Object.keys(fr).forEach(k => {
    const arVal = ar[k];
    const frVal = fr[k];
    if (!arVal || !frVal) return;

    // Remove HTML tags to extract clean text snippet
    const cleanAr = arVal.replace(/<[^>]+>/g, '').trim();

    if (cleanAr.length > 2) {
      let idx = content.indexOf(cleanAr);
      while (idx !== -1) {
        // Find enclosing tag start
        const tagStart = content.lastIndexOf('<', idx);
        const tagEnd = content.indexOf('>', tagStart);
        const tagHeader = content.substring(tagStart, tagEnd + 1);

        if (!tagHeader.includes('data-i18n=')) {
          const newTagHeader = tagHeader.replace('>', ` data-i18n="${k}">`);
          content = content.substring(0, tagStart) + newTagHeader + content.substring(tagEnd + 1);
        }

        idx = content.indexOf(cleanAr, idx + cleanAr.length + 20);
      }
    }
  });

  return content;
}

page = tagFile(page, true);
html = tagFile(html, false);

fs.writeFileSync('app/page.tsx', page, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Smart tag injection completed!');
