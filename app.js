/**
 * *2024.06.12
 * * 서버 열기_완료
 * *2024.06.13
 * * GET 요청이면 main.html 생성 _ 진행 중
 * * POST, /submit 요청 받기 _ 진행 중
 */

const http = require('http');
const fileSystem = require('./module/fileSystem.js');
const path = require('./module/path.js');
const string = require('./module/string.js');

const server = http.createServer((req, res) => {
  req.url = decodeURI(req.url);
  console.log('유효성 검사:', req.url);
  if (req.method === 'POST' && req.url === '/submit') {
  }
  if (req.method === 'GET' && req.url === '/') {
    fileSystem.write(path.none('main'), string.main('파일 목록이 들어갈 자리'));
    let data = fileSystem.read(path.none('main'));

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
