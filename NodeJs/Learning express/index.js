// const express = require("express");
// const app = express();


// const html =
//   `<!DOCTYPE html>
// <html>
// <head>
// <title>Hello World Example</title>
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
//       </head>
//       <body>
//       <h1 class="display-4 text-primary">` +
//   name +
//   `</h1>
//       <br>
//       <a href="/about" class="btn btn-success">About us</a>
//       <a href="/home" class="btn btn-info">Home</a>
      
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//       </body>
//       </html>
      
//       `;
// // app.get("/", (req, res) => {
// //     const name = request.query.name;
// //   res.send(name);
// // });
// app.get("/home", (request, response) => {
//   response.send(html);
// });
// app.get("/about", (request, response) => {
//   response.send(html);
// });

// app.listen(5000);
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  // Get the "name" query parameter from the request
  const name = request.query.name || "Guest"; // Default to "Guest" if the name parameter is not provided

  // HTML content with Bootstrap styling
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello World Example</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    </head>
    <body>
        <h1 class="display-4 text-primary">Hello, ${name}!</h1>
        <br>
        <a href="/about" class="btn btn-success">About us</a>
        <a href="/home" class="btn btn-info">Home</a>
        <a href="/hassaan" class="btn btn-primary">Hassaan</a>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `;

  response.send(html);
});

app.get("/home", (request, response) => {
  response.redirect("/?name=Home");
});

app.get("/about", (request, response) => {
  response.redirect("/?name=About");
});

app.get("/hassaan",(request, response)=>{
    response.redirect("/?name=hassaan");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
