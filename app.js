/**
 * *2024.06.12
 * * 서버 열기_완료
 * * POST, /submit 요청 받기 _ 진행 중
 */

const http = require('http');
const path = require('path');
const string = require('./module/string.js');

const server = http.createServer((req, res) => {
  req.url = decodeURI(req.url);
  console.log('유효성 검사:', req.url);
  if (req.method === 'POST' && req.url === '/submit') {
  }
  if (req.method === 'GET' && req.url === '/') {
  }
});

const port = 3000;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
