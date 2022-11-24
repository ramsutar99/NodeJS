const http = require("http");

// creating a basic server here with server code
// create server method takes a funtion as a parameter = 1 param is request and 2nd param is a response
http
  .createServer((req, res) => {
    res.write("<h1>Hello, this is a response</h1>");
    res.end();
  })
  .listen(4500);
