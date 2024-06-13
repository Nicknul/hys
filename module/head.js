/**
 * *24.06.13
 * * 응답 헤더 및 Content-Type
 * @param {*} type 파일 type ex)hmlt, css 등
 */

const head = {
  200: (type) => {
    return `200, { 'Contetn-Type': text/${type}; charset=utf-8 }`;
  },
};

module.exports = head;
