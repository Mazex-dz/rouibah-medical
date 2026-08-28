const fs = require('fs');
const http = require('http');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const headerEnd = '</header>';
const headerEndIdx = indexHtml.indexOf(headerEnd);
if (headerEndIdx === -1) {
    console.error('Could not find </header>');
    process.exit(1);
}

const headPart = indexHtml.substring(0, headerEndIdx + headerEnd.length);

const footerStartStr = 'FOOTER';
const footerIndex = indexHtml.indexOf(footerStartStr);
const footerSectionStart = indexHtml.lastIndexOf('<!--', footerIndex);

if (footerSectionStart === -1) {
    console.error('Could not find footer start');
    process.exit(1);
}

const footerPart = indexHtml.substring(footerSectionStart);

function generatePage(urlPath, outFile) {
    return new Promise((resolve) => {
        http.get('http://localhost:3000' + urlPath, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                // Next.js output has <main>...</main>
                const mainStart = data.indexOf('<main>');
                const mainEnd = data.indexOf('</main>') + '</main>'.length;
                if (mainStart === -1 || mainEnd === -1) {
                    console.error('Could not find <main> in ' + urlPath);
                    resolve();
                    return;
                }
                const mainHtml = data.substring(mainStart, mainEnd);
                
                // Assemble
                const finalHtml = headPart + '\n\n    ' + mainHtml + '\n\n    ' + footerPart;
                
                // Also we need to fix the switcher active state!
                // Currently index.html has active on Accueil.
                // For Services, active should be on Services.
                let fixedHtml = finalHtml;
                fixedHtml = fixedHtml.replace('class="page-btn active"><i class="fa-solid fa-house"></i> Accueil', 'class="page-btn"><i class="fa-solid fa-house"></i> Accueil');
                
                if (outFile === 'services.html') {
                    fixedHtml = fixedHtml.replace('class="page-btn"><i class="fa-solid fa-stethoscope"></i>\r\n                                Services', 'class="page-btn active"><i class="fa-solid fa-stethoscope"></i>\r\n                                Services');
                } else if (outFile === 'specialistes.html') {
                    fixedHtml = fixedHtml.replace('class="page-btn"><i class="fa-solid fa-user-doctor"></i>\r\n                                Spécialistes', 'class="page-btn active"><i class="fa-solid fa-user-doctor"></i>\r\n                                Spécialistes');
                }
                
                fs.writeFileSync(outFile, fixedHtml);
                console.log('Created ' + outFile);
                resolve();
            });
        });
    });
}

async function main() {
    await generatePage('/services', 'services.html');
    await generatePage('/specialistes', 'specialistes.html');
}

main();
