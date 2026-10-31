const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<title>.*?<\/title>/, '<title>Sumaiya with Wahid — Nikah Invitation</title>');
html = html.replace(/<meta content="[^"]*?" name="description"\/>/, '<meta content="You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel." name="description"/>');
html = html.replace(/<meta content="[^"]*?" property="og:title"\/>/, '<meta content="Sumaiya with Wahid — Nikah Invitation" property="og:title"/>');
html = html.replace(/<meta content="[^"]*?" property="og:description"\/>/, '<meta content="You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel." property="og:description"/>');

html = html.replace('<span class="name-ampersand">&amp;</span>', '<span class="name-ampersand">with</span>');
html = html.replace(/âœ¦/g, '✧');
html = html.replace('Youâ€™re Invited!', 'You’re Invited!');
html = html.replace('â¬©', '•');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html');
