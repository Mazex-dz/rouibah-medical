const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'next-temp');
const destDir = __dirname;

const files = fs.readdirSync(srcDir);

for (const file of files) {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  
  // If destination already exists, don't overwrite if it's a directory (we just merge)
  // But actually create-next-app shouldn't have conflicting files other than maybe nothing since this is an HTML project.
  if (fs.existsSync(destFile) && fs.lstatSync(destFile).isDirectory()) {
    console.log(`Directory ${file} already exists, skipping move (will need manual merge if needed).`);
  } else {
    fs.renameSync(srcFile, destFile);
    console.log(`Moved ${file}`);
  }
}
fs.rmdirSync(srcDir, { recursive: true });
console.log('Cleanup complete.');
