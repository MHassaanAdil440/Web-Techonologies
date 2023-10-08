const fs = require("fs");
const url = require("url");

function filHandling(path, response) {
  fs.readFile(path, (err, data) => {
    if (err) {
      response.write("index.html file not found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

function onRequest(request, response) {
  const path = url.parse(request.url, true).path;

  response.writeHead(200, { "Content-Type": "text/html" });
  switch (path) {
    case "/":
      filHandling("./index.html", response);
      break;
    case "/about":
      filHandling("./index2.html", response);
      break;
    default:
      response.writeHead(404);
      response.end();
  }
}

module.exports.onRequest = onRequest;