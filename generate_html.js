const fs = require('fs');
const data = JSON.parse(fs.readFileSync('imagekit_response.json', 'utf8'));
let html = '<html><body><h1>Image Review</h1><div style="display:flex; flex-wrap:wrap;">';
data.forEach((file, index) => {
  html += '<div style="margin:10px; border:1px solid #ccc; padding:5px;">';
  html += '<p><strong>' + index + '</strong>: ' + file.name + '</p>';
  // use the actual url for better vision if needed, but thumbnail is faster. Using thumbnail.
  html += '<img src="' + file.thumbnail + '" style="max-width:300px; max-height:300px;" />';
  html += '</div>';
});
html += '</div></body></html>';
fs.writeFileSync('image_review.html', html);
console.log('Created image_review.html with ' + data.length + ' images.');
