const fs = require('fs');
const content = fs.readFileSync('src/components/AccountsCentre.tsx', 'utf8');

// Remove meta tags with savepage
let cleaned = content.replace(/<meta\s+name="savepage-[^"]+"\s+content="[^"]*"\s*\/>/gi, '');

// Remove next-route-announcer
cleaned = cleaned.replace(/<next-route-announcer[\s\S]*?<\/next-route-announcer>/gi, '');

// Remove preact-border-shadow-host div
cleaned = cleaned.replace(/<div\s+id="preact-border-shadow-host"[\s\S]*?<\/div>/gi, '');

// Remove empty lines and fix double returns
cleaned = cleaned.replace(/^\s*[\r\n]/gm, '\n').replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync('src/components/AccountsCentre.tsx', cleaned);
console.log('Cleaned TSX file successfully.');
