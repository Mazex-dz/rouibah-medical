const fs = require('fs');
let c = fs.readFileSync('components/ClientScripts.tsx', 'utf8');
c = c.replace(/Besoin d\\\\'une consultation d\\\\'urgence \?/, "Besoin d\\'une consultation d\\'urgence ?");
fs.writeFileSync('components/ClientScripts.tsx', c, 'utf8');
