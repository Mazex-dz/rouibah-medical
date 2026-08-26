const fs = require('fs');

let js = fs.readFileSync('public/lang-switcher.js', 'utf8');
const frSection = js.match(/fr:\s*\{([\s\S]*?)\},\s*ar:/)[1];
const keys = Array.from(frSection.matchAll(/'([^']+)'\s*:/g)).map(m => m[1]);

let page = fs.readFileSync('app/page.tsx', 'utf8');

console.log('Total keys in dictionary:', keys.length);

const missing = [];
keys.forEach(k => {
  if (!page.includes(`data-i18n="${k}"`)) {
    missing.push(k);
  }
});

console.log('Missing keys count:', missing.length);
console.log('Missing keys:', missing);
