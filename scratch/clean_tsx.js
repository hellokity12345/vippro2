const fs = require('fs');
let content = fs.readFileSync('src/components/AccountsCentre.tsx', 'utf8');

// 1. Add CSS import
if (!content.includes('import "./AccountsCentre.css";')) {
    content = content.replace('import React from "react";', 'import React from "react";\nimport "./AccountsCentre.css";');
}

// 2. Remove style tags with dangerouslySetInnerHTML
content = content.replace(/<style[\s\S]*?dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}\s+\/>/g, '');

// 3. Remove data-savepage attributes
content = content.replace(/\s+data-savepage-\w+="[^"]*"/g, '');
content = content.replace(/\s+data-savepage-\w+=\{\w+\}/g, '');
content = content.replace(/\s+data-css-hash="[^"]*"/g, '');
content = content.replace(/\s+data-token-hash="[^"]*"/g, '');
content = content.replace(/\s+data-rc-order="[^"]*"/g, '');
content = content.replace(/\s+data-rc-priority=\{[^}]*\}/g, '');

// 4. Remove broken link tags (preload ones pointing to undefined or next static chunks)
content = content.replace(/<link\s+rel="preload"[\s\S]*?\/>/g, '');

// 5. Clean up extra newlines and metadata meta tags
content = content.replace(/<meta name="savepage-[^>]*\/>/g, '');

fs.writeFileSync('src/components/AccountsCentre.tsx', content);
console.log('Cleaned up AccountsCentre.tsx successfully.');
