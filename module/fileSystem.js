/**
 * *2024.06.12
 * *2024.06.13 수정
 * * readFileSync
 * * writeFileSync
 * * readdir
 */
const fs = require('fs');

const fileSystem = {
  read: (path) => {
    return fs.readFileSync(path, 'utf-8');
  },
  write: (path, data) => {
    return fs.writeFileSync(path, data, 'utf-8');
  },
  dir: (path) => {
    fs.readdirSync(path, 'utf-8');
  },
};

module.exports = fileSystem;
