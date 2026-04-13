const fs = require('fs');
const content = fs.readFileSync('src/components/AccountsCentre.tsx', 'utf8');
const styleMatches = content.match(/__html:\s+([\s\S]*?)\n\s+}}/g);
let allCss = '';
if (styleMatches) {
  styleMatches.forEach(m => {
    const cssMatch = m.match(/__html:\s+([\s\S]*?)\n\s+}/);
    if (cssMatch) {
      let css = cssMatch[1].trim();
      // Handle backticks
      if (css.startsWith('`') && css.endsWith('`')) {
        css = css.slice(1, -1);
      }
      // Handle double quotes
      else if (css.startsWith('"') && css.endsWith('"')) {
        css = css.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"');
      }
      // Handle single quotes (unlikely in this file but for safety)
      else if (css.startsWith("'") && css.endsWith("'")) {
        css = css.slice(1, -1).replace(/\\n/g, '\n').replace(/\\'/g, "'");
      }
      allCss += css + '\n';
    }
  });
}
fs.writeFileSync('src/components/AccountsCentre.css', allCss);
console.log('Extracted ' + (styleMatches ? styleMatches.length : 0) + ' blocks.');
