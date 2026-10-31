const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const footerBranding = `<small id="closingDetails"></small>
<div class="footer-branding">
<div class="footer-divider"><span>✧</span></div>
<a class="create-yours-btn" href="https://www.instagram.com/noor.invites.nagpur/" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" class="instagram-icon" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="15">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span>Create Yours</span>
</a>
<p class="designed-by">
<span>Designed by</span>
<a href="https://www.instagram.com/noor.invites.nagpur/" rel="noopener noreferrer" target="_blank">@noor.invites.nagpur</a>
</p>
</div>`;

if (!html.includes('create-yours-btn')) {
  html = html.replace('<small id="closingDetails"></small>', footerBranding);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with footer branding');
