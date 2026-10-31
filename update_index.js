const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix date-kicker to clean standard ASCII (You Are Invited!)
html = html.replace(/<span class="date-kicker">.*?<\/span>/, '<span class="date-kicker">You Are Invited!</span>');

// 2. Fix hero-divider, venue-divider, and footer-divider spans so CSS renders pure geometric diamond
html = html.replace(/<div class="hero-divider">\s*<span>.*?<\/span>\s*<\/div>/, '<div class="hero-divider"><span></span></div>');
html = html.replace(/<div aria-hidden="true" class="venue-divider">\s*<span>.*?<\/span>\s*<\/div>/, '<div aria-hidden="true" class="venue-divider">\n<span></span>\n</div>');
html = html.replace(/<div class="footer-divider">\s*<span>.*?<\/span>\s*<\/div>/, '<div class="footer-divider"><span></span></div>');

// 3. Remove Dress code section and adjacent floral divider
html = html.replace(
  /<!-- Dress code -->\s*<section class="dress-section[\s\S]*?<\/section>\s*<div aria-hidden="true" class="floral-divider">\s*<img alt="" src="assets\/images\/floral-divider\.webp"\/>\s*<\/div>/,
  ''
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html');
