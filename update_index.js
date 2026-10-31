const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const metaTags = `<title>Sumaiya with Wahid — Nikah Invitation</title>
<meta content="You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel." name="description"/>
<meta content="Sumaiya with Wahid — Nikah Invitation" property="og:title"/>
<meta content="You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel." property="og:description"/>
<meta content="website" property="og:type"/>
<meta property="og:image" content="./og-image.jpg"/>
<meta property="og:image:secure_url" content="./og-image.jpg"/>
<meta property="og:image:type" content="image/jpeg"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Sumaiya with Wahid — Nikah Invitation"/>
<meta name="twitter:description" content="You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel."/>
<meta name="twitter:image" content="./og-image.jpg"/>`;

html = html.replace(
  /<title>Sumaiya with Wahid — Nikah Invitation<\/title>[\s\S]*?<meta content="website" property="og:type"\/>/,
  metaTags
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully added og:image meta tags to index.html');
