const https = require('https');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const regex = /<img src="(https:\/\/lh3\.googleusercontent\.com\/gps-cs-s\/[^"]+)"/g;
let match;
let list = [];
while ((match = regex.exec(html)) !== null) {
  if (!list.includes(match[1])) list.push(match[1]);
}

console.log('Found ' + list.length + ' unique images');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Referer': 'https://www.google.com/'
};

if (!fs.existsSync('downloaded_images')) fs.mkdirSync('downloaded_images');

list.forEach((url, i) => {
  https.get(url, { headers }, (res) => {
    const filePath = 'downloaded_images/img_' + (i + 1) + '.jpg';
    const file = fs.createWriteStream(filePath);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Saved ' + filePath + ' size: ' + fs.statSync(filePath).size);
    });
  });
});
