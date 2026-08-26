const fs = require('fs');

let js = fs.readFileSync('public/lang-switcher.js', 'utf8');

// Match keys and French text from fr: { ... }
const frBlock = js.match(/fr:\s*\{([\s\S]*?)\},\s*ar:/)[1];
const entryRegex = /'([^']+)'\s*:\s*([\s\S]*?)(?:,\s*\n\s*'|\n\s*})/g;

const frMap = {};
let match;
const lines = frBlock.split('\n');
let currentKey = null;
let currentValue = [];

for (let line of lines) {
  const kMatch = line.match(/^\s*'([^']+)'\s*:\s*['`](.*)/);
  if (kMatch) {
    if (currentKey) {
      frMap[currentKey] = currentValue.join('\n').replace(/['`],?$/, '');
    }
    currentKey = kMatch[1];
    currentValue = [kMatch[2]];
  } else if (currentKey) {
    currentValue.push(line);
  }
}
if (currentKey) {
  frMap[currentKey] = currentValue.join('\n').replace(/['`],?$/, '');
}

console.log('Parsed keys count:', Object.keys(frMap).length);

// Also extract arMap
const arBlock = js.match(/ar:\s*\{([\s\S]*?)\}\s*;/)[1];
const arMap = {};
currentKey = null;
currentValue = [];

for (let line of arBlock.split('\n')) {
  const kMatch = line.match(/^\s*'([^']+)'\s*:\s*['`](.*)/);
  if (kMatch) {
    if (currentKey) {
      arMap[currentKey] = currentValue.join('\n').replace(/['`],?$/, '');
    }
    currentKey = kMatch[1];
    currentValue = [kMatch[2]];
  } else if (currentKey) {
    currentValue.push(line);
  }
}
if (currentKey) {
  arMap[currentKey] = currentValue.join('\n').replace(/['`],?$/, '');
}

fs.writeFileSync('scratch/frMap.json', JSON.stringify(frMap, null, 2));
fs.writeFileSync('scratch/arMap.json', JSON.stringify(arMap, null, 2));
console.log('Saved frMap.json and arMap.json');
