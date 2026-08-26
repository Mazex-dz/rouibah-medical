const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

// Fix class -> className, <br> -> <br />, <img ...> -> <img ... /> in app/page.tsx
page = page.replace(/class=/g, 'className=')
           .replace(/<br>/g, '<br />')
           .replace(/<i className="([^"]+)">/g, (m, c) => `<i className="${c}"></i>`)
           // Remove duplicate trailing </i> if created by simple replacement
           .replace(/<\/i><\/i>/g, '</i>');

fs.writeFileSync('app/page.tsx', page, 'utf8');
console.log('Fixed JSX syntax in app/page.tsx');
