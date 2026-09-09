const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'whatssap images');
const files = fs.readdirSync(dir);
const jpegs = files.filter(f => /\.(jpeg|jpg|png)$/i.test(f));
const txts = files.filter(f => f.endsWith('.txt'));

console.log('Total images:', jpegs.length);
console.log('Total txt files:', txts.length);

const pairs = [];
const imageOnly = [];

jpegs.forEach(img => {
  const base = img.replace(/\.(jpeg|jpg|png)$/i, '');
  const txtFile = base + '.txt';
  if (fs.existsSync(path.join(dir, txtFile))) {
    const content = fs.readFileSync(path.join(dir, txtFile), 'utf8');
    pairs.push({ img, txtFile, content: content.trim() });
  } else {
    imageOnly.push(img);
  }
});

console.log('Matched pairs (image + txt):', pairs.length);
console.log('Images without txt:', imageOnly.length);

console.log('\n=================== ALL MATCHED PAIRS ===================');
pairs.forEach((p, i) => {
  console.log(`\n[${i+1}] Image: "${p.img}"`);
  console.log(`TXT: "${p.txtFile}"`);
  console.log(`Content:\n${p.content}`);
  console.log('---------------------------------------------------------');
});

console.log('\n=================== IMAGES WITHOUT TXT ===================');
imageOnly.forEach((img, i) => {
  console.log(`[${i+1}] ${img}`);
});
