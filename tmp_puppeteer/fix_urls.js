const fs = require('fs');
let html = fs.readFileSync('../index.html', 'utf8');
html = html.replace(/src="(https:\/\/lh3\.googleusercontent\.com\/[^"]*?=)"/g, 'src="$1s800"');
fs.writeFileSync('../index.html', html);
console.log('Fixed image URLs.');
