const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
const js = fs.readFileSync('public/lang-switcher.js', 'utf8');

const frBlock = js.match(/fr:\s*\{([\s\S]*?)\},\s*ar:/)[1];
const frKeys = Array.from(frBlock.matchAll(/'([^']+)'\s*:/g)).map(m => m[1]);

const matches = Array.from(page.matchAll(/data-i18n="([^"]+)"/g)).map(m => m[1]);
const uniquePageKeys = Array.from(new Set(matches));

console.log('Keys tagged in page.tsx count:', uniquePageKeys.length);
console.log('Keys in dictionary count:', frKeys.length);

const missingInPage = frKeys.filter(k => !uniquePageKeys.includes(k));
console.log('Keys in dictionary but missing data-i18n tag in page.tsx:', missingInPage);
