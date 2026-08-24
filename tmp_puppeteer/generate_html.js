const fs = require('fs');
const urls = require('./urls.json');
const regex = /6s(https.*?%3D)/;
let html = '';
urls.forEach((u, i) => {
    const match = u.match(regex);
    if(match) {
        let imgUrl = decodeURIComponent(match[1]).replace(/=w\d+-h\d+-k-no/, '=s800');
        html += `            <div class="gallery-item ${i===0 ? 'gallery-item-wide ' : ''}animate" data-animation="fade-up" data-delay="${(i%4)*50}">
                <img src="${imgUrl}" alt="صورة من العيادة ${i+1}">
                <div class="gallery-caption">تحليل الصورة ${i+1}: مرفق طبي معتمد 🩺</div>
            </div>\n`;
    }
});
fs.writeFileSync('gallery_html.txt', html);
