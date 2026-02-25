const fs = require('fs');
const dir = 'C:/Users/Muhib/Downloads/media-library-export-24-2-2026-5-48-2-552/Guardian Malaysia';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
let html = '<html><body><h1>Local Image Review</h1><div style="display:flex; flex-wrap:wrap;">';
files.forEach((file, index) => {
    const fileUrl = 'file:///' + encodeURI(dir + '/' + file);
    html += '<div style="margin:10px; border:1px solid #ccc; padding:5px; text-align:center;">';
    html += '<p><strong>' + index + '</strong>: ' + file + '</p>';
    html += '<img src="' + fileUrl + '" style="max-width:300px; max-height:300px; object-fit:contain;" />';
    html += '</div>';
});
html += '</div></body></html>';
fs.writeFileSync('C:/Users/Muhib/gmalyasia/guardianmalaysia/local_image_review.html', html);
console.log('Created local_image_review.html with ' + files.length + ' images.');
