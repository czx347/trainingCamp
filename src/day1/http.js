const fs = require('fs');
const http = require('http')

http.createServer((request, response) => {
  const {url, method} = request;
  if(url === '/' && method === 'GET') {
    fs.readFile('src/day1/index.html',(err, data) => {
      if(err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        }) = 500;
        response.end("500 Server挂了!");
      }
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    } )
  }else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.end("404 NotFound");
  }
  
}).listen(3000, () => {
  console.log("server is running on http://localhost:3000")
})

