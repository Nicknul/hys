const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const data = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const data = fs.readFileSync('./index.html', 'utf-8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(data);
      res.end();
    }
    if (req.url === '/data.html') {
      const data = fs.readFileSync('./data.html', 'utf-8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(data);
      res.end();
    }
  } else if (req.method === 'POST') {
    if (req.url === '/submit') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        let a = qs.parse(body);
        let title = a.title;
        let content = a.content;

        // let b = {
        //   title: title,
        //   content: content,
        // };

        // let c = JSON.stringify(b, null, 2);

        fs.writeFile(`${title}`, data, (err) => {
          if (err) {
            console.log('Error');
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(title);
        });
      });
    }
  }
});

const PORT = 3000;

server.listen(PORT, (err) => {
  if (err) {
    console.log('Error');
  }
  console.log('서버돌아감');
  console.log(`http://localhost:${PORT}`);
});
