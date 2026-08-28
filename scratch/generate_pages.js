const fs = require('fs');
const http = require('http');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find where to split index.html
// We want to keep the <header> and the <footer>.
// The header ends around: </header>
// The footer starts at: <!-- ============================================================
//     FOOTER
const headerEndIndex = indexHtml.indexOf('</header>') + '</header>'.length;
const footerStartIndex = indexHtml.indexOf('<!-- ============================================================\r\n     FOOTER');

if (headerEndIndex === -1 || footerStartIndex === -1) {
    console.error('Could not find header or footer bounds in index.html');
    process.exit(1);
}

const headPart = indexHtml.substring(0, headerEndIndex);
const footerPart = indexHtml.substring(footerStartIndex);

function generatePage(urlPath, outFile) {
    return new Promise((resolve) => {
        http.get('http://localhost:3000' + urlPath, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                // Extract <main>...</main> from the Next.js rendered HTML
                const mainStart = data.indexOf('<main');
                const mainEnd = data.indexOf('</main>') + '</main>'.length;
                if (mainStart === -1 || mainEnd === -1) {
                    console.error('Could not find <main> in ' + urlPath);
                    resolve();
                    return;
                }
                const mainHtml = data.substring(mainStart, mainEnd);
                
                // Assemble the final HTML
                const finalHtml = headPart + '\n\n    ' + mainHtml + '\n\n    ' + footerPart;
                fs.writeFileSync(outFile, finalHtml);
                console.log('Created ' + outFile);
                resolve();
            });
        }).on('error', (e) => {
            console.error('Error fetching ' + urlPath + ':', e.message);
            resolve();
        });
    });
}

async function main() {
    await generatePage('/services', 'services.html');
    await generatePage('/specialistes', 'specialistes.html');
}

main();
