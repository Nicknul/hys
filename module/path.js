/**
 * @param {*} path : 파일 이름
 *
 * *2024.06.13
 * * 자주 사용되는 파일 경로
 */

const path = {
  none: (path) => {
    return `./${path}.html`;
  },
  module: (path) => {
    return `./module/${path}.js`;
  },
  list: (path) => {
    return `./list/${path}.html`;
  },
};

module.exports = path;
