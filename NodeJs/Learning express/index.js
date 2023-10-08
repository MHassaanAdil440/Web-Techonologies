const express = require("express");
const app = express();

const ageFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Enter Your age.</h1>");
  } else if (req.query.age > 18) {
    next();
  }else if (req.query.age < 18) {
    res.send("<h1>You are under age.</h1>");
  } else {
    res.send("<h1>Enter Your age.</h1>");
  }
};
app.use(ageFilter);

app.get("", (req, res) => {
  res.send("<h1>Welcome to the Home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcome to the About page</h1>");
});

app.listen(8000);
