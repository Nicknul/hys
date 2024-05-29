const fs = require('fs');
const data = fs.readFileSync('./index.html', 'utf-8');

console.log(data);
