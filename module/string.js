/**
 * *2024.06.12
 * * HTML 내용을 문자열로 변환
 * * 문자열로 변환한 것을 객체 안에 담아주기
 *
 */

const string = {
  main: (fileList) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAIN</title>
  </head>
  <body>
  <div id="root">
    <div>Menu</div>
    <div>${fileList}</div>
  </div>

  <form action="/submit" method="post">
    <label for="title">제목</label><br />
    <input type="text" name="title" id="title" /><br /><br />
    <label for="content">내용</label><br />
    <textarea name="content" id="content"></textarea><br /><br />
    <input type="submit" value="포스팅 하기" />
  </form>
    
  </body>
  </html>`;
  },

  create: (title, content, comment) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      <div><a href="/">돌아가기</a></div>
      <div id="root">
        <h2>${title}</h2>
        <div>${content}</div>
      </div>
      <div>${comment}</div><br />
      <form action="/comment" method="post">
        <label for="comment">댓글</label><br />
        <textarea name="comment" id="comment"></textarea><br /><br />
        <input type="submit" value="댓글 달기">
      </form>
    </body>
    </html>`;
  },
};
