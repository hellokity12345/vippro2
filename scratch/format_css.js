const fs = require('fs');
const path = 'c:/Users/Huyhi/Downloads/new1/src/components/AccountsCentre.css';
let css = fs.readFileSync(path, 'utf8');

// Simple formatting: add newline after each closing brace
css = css.replace(/}/g, '}\n');

fs.writeFileSync(path, css);
console.log('Formatted CSS');
