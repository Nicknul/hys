const fs = require('fs');

/**
 * *2024.06.12
 * *2024.06.13 수정
 * * readFileSync
 * * writeFileSync
 * * readdir
 *
 * @param {*} path path.js에 있는 모듈
 * @returns
 */
const fileSystem = {
  read: (path) => {
    return fs.readFileSync(path, 'utf-8');
  },
  write: (path, data) => {
    return fs.writeFileSync(path, data, 'utf-8');
  },
  dir: (path) => {
    return fs.readdirSync(path, 'utf-8');
  },
};

module.exports = fileSystem;
