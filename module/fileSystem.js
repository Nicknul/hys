const fs = require('fs');

/**
 * *2024.06.12
 * *2024.06.13 수정
 * * 파일 읽기, 쓰기, 폴더 안에 있는 파일 목록 읽기를 실행할 obj
 * @param {*} path : 파일 경로 (path.js)
 * @param {*} data : 생성할 파일에 들어갈 data (string.js)
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
