const fileSystem = require('./fileSystem.js');
/**
 * *24.06.13
 * * list폴더 안에 있는 파일을 읽고 for문을 통해 모든 값이 나타남
 * @param {*} array 빈 배열 (listArr)
 */
const forIn = (array) => {
  let list = fileSystem.dir('./list');
  // listArr에 list[fileName] 값 넣음
  for (let fileName in list) {
    array.push(list[fileName]);
  }
};

module.exports = forIn;
