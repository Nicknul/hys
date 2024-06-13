const fs = require('fs');

/**
 * *2024.06.12
 * *2024.06.13 수정
 * * readFileSync
 * * writeFileSync
 * * readdir
 */

const fileSystem = {
  /**
   *
   * @param {*} path path.js 안에 있는 객체의 항목 값이 들어감
   * @returns
   */
  read: (path) => {
    return fs.readFileSync(path, 'utf-8');
  },
  /**
   *
   * @param {*} path path.js 안에 있는 객체의 항목 값
   * @param {*} data string.js 안에 있는 객체의 항목 값
   * @returns
   */
  write: (path, data) => {
    return fs.writeFileSync(path, data, 'utf-8');
  },
  /**
   *
   * @param {*} path path.js 안에 있는 객체의 항목 값이 들어감
   * @returns
   */
  dir: (path) => {
    return fs.readdirSync(path, 'utf-8');
  },
};

module.exports = fileSystem;
