const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
  fs.writeFile("hello.txt", "Hello world!", (error) => {
    fs.readFile("hello.txt", "utf-8", (error, data) => {
      response.write(data);
      response.end();
    })
  });
}).listen(3000);
