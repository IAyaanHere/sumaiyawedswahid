const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Clean up scratch card date-day to show only the day (removing bullet and wedding.time)
html = html.replace(
  /<div class="date-day">\s*<span data-bind="wedding\.day"><\/span>\s*<a aria-hidden="true">.*?<\/a>\s*<span data-bind="wedding\.time"><\/span>\s*<\/div>/,
  '<div class="date-day">\n<span data-bind="wedding.day"></span>\n</div>'
);

// Clean any remaining encoding artifacts
html = html.replace(/Youâ€™re Invited!/g, 'You’re Invited!');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html to remove scratch date time');
