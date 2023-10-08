const express = require("express");
const app = express();

function myHtml(currentRoute){

    const html =
    `<!DOCTYPE html>
    <html>
    <head>
    <title>Hello World Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    </head>
      <body>
      <h1 class="display-4 text-primary">${currentRoute}</h1>
      <br>
      <a href="/" class="btn btn-success">Root</a>
      <a href="/about" class="btn btn-success">About us</a>
      <a href="/home" class="btn btn-info">Home</a>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
      `;
      return html;
}


app.get("/", (req, res) => {
    const currentRoute = req.path;
      res.send(myHtml(currentRoute));
});
app.get("/about", (req, res) => {
    const currentRoute = req.path;
      res.send(myHtml(currentRoute));
});
app.get("/home", (req, res) => {
    const currentRoute = req.path;
      res.send(myHtml(currentRoute));
});
app.listen(5000);
