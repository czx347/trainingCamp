const fs = require('fs');
const http = require('http')

http.createServer((request, response) => {
  fs.readFile('src/day1/index.html',(err, data) => {
    if(err) {
      console.log(err);
    }
    response.end(data);
  } )
}).listen(3000, () => {
  console.log("server is running on http://localhost:3000")
})

