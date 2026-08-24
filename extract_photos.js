const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const urls = [];
// Match the 12 gallery images exactly
const regex = /<img src="(https:\/\/lh3\.googleusercontent\.com\/gps-cs-s\/[^"]+)"\s*alt="([^"]+)">/g;
let match;
let i = 1;
while ((match = regex.exec(html)) !== null) {
    if (match[2].includes('صورة من العيادة')) { // Only grab the gallery ones
        urls.push({
            src: match[1],
            alt: match[2],
            title: `عيادة الرويبح ${i}`,
            subtitle: `صورة ${i}`,
            meta: [
                { label: "الموقع", value: "برج منايل" }
            ]
        });
        i++;
    }
}

const demoTsxPath = 'src/components/demo.tsx';
let demoTsx = fs.readFileSync(demoTsxPath, 'utf8');

// Replace the SLIDES array
demoTsx = demoTsx.replace(/const SLIDES = \[[\s\S]*?\];/, `const SLIDES = ${JSON.stringify(urls, null, 2)};`);

fs.writeFileSync(demoTsxPath, demoTsx);
console.log('Replaced demo.tsx with ' + urls.length + ' images.');
