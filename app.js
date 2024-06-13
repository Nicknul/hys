const { sign } = require('crypto');
const fileSystem = require('./module/fileSystem.js');
const path = require('./module/path.js');
const string = require('./module/string.js');

/**
 * *2024.06.12
 * ? 서버 열기_완료
 * *2024.06.13
 * ? GET 요청이면 main.html 생성_완료
 * ? POST, /submit 요청 받기_완료
 * ? /submit이면 list 폴더 안에 파일 생성_완료
 * ? list 폴더 안에 있는 파일 목록 읽어오기_완료
 * ? 읽어온 값을 빈 배열에 push_완료
 * ? main.html 내용 안에 listArr 넣은 파일 생성하고 읽기_완료
 * * for..in문을 통해 list폴더 안에 있는 html파일 읽기_진행 중
 */

const http = require('http');
const qs = require('node:querystring');

const server = http.createServer((req, res) => {
  // 한글로 된 주소의 암호를 풀어줌
  req.url = decodeURI(req.url);
  console.log('유효성 검사:', req.url);

  let listArr = [];

  // 요청 메서드가 POST이고, 주소 뒤에가 /submit이면 실행
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    // 데이터 받아오기
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    // 데이터 받아오기가 끝나면 실행
    req.on('end', () => {
      let data = qs.parse(body);
      let title = data.title;
      let content = data.content;
      // 받아온 데이터를 토대로 파일 생성
      fileSystem.write(path.list(title), string.create(title, content, '댓글이 들어갈 자리'));
      // list폴더 안에 있는 파일 목록의 값을 배열로 나타남
      let list = fileSystem.dir('./list');
      // listArr에 list[fileName] 값 넣음
      for (let fileName in list) {
        // push 전 li, a tag 달기
        let tag = `<li><a href="${list[fileName]}">${list[fileName].split('.html').join('')}</a></li>`;
        listArr.push(tag);
      }
      //listArr의 값이 들어간 main.html 생성하고 읽음
      fileSystem.write(path.none('main'), string.main(`<ul>${listArr.join('')}</ul>`));
      let frist = fileSystem.read(path.none('main'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(frist);
    });
  }
  // 요청 메서드가 GET이고 주소 뒤에가 /이라면 실행
  if (req.method === 'GET' && req.url === '/') {
    let data = fileSystem.read(path.none('main'));

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
  let list = fileSystem.dir('./list');
  for (let fileName in list) {
    if (req.method === 'GET' && req.url === `/${list[fileName]}`) {
      let a = list[fileName].split('.html').join('');
      let data = fileSystem.read(path.list(a));

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  }
  if (req.method === 'POST' && req.url === '/comment') {
    let body = '';
    req.on('data');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log('서버 돌아가는 중');
  console.log(`http://localhost:${port}`);
});
