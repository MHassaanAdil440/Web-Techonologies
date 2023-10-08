// const http = require("http");
// function onRequest(request, response) {
//   response.writeHead(200, { "Content-type": "text/plain" });
//   response.write("Hello World using nodemon");
//   response.end();
// }
// http.createServer(onRequest).listen(8000);

// const http = require("http");
// const module1 = require("./module1");

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write(module1.myString);
//     module1.myFunction();
//     response.end();
//   })
//   .listen(8000);

const http = require("http");
const module2 = require("./module2");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    module2.myFunction();
    response.write(module2.myString);
  })
  .listen(8000);
