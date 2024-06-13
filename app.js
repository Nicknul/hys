const fileSystem = require('./module/fileSystem.js');
const path = require('./module/path.js');
const string = require('./module/string.js');

/**
 * *2024.06.12
 * ? 서버 열기_완료
 * *2024.06.13
 * ? GET 요청이면 main.html 생성_완료
 * ? POST, /submit 요청 받기_완료
 * * /submit이면 list 폴더 안에 파일 생성_진행 중
 */

const http = require('http');
const qs = require('node:querystring');

const server = http.createServer((req, res) => {
  req.url = decodeURI(req.url);
  console.log('유효성 검사:', req.url);
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;

      fileSystem.write(path.list(title), string.create(title, content, '댓글이 들어갈 자리'));
    });
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
