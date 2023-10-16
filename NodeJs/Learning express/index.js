const express = require('express');
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);

app.get('/',(req,res)=>{
  res.send("<h1>Welcome to HOME page</h1>")
})
app.get('/user',(req,res)=>{
  res.send("<h1>Welcome to USERs page</h1>")
})
route.get('/about',(req,res)=>{
  res.send("<h1>Welcome to ABOUT page</h1>")
})
route.get('/dashboard',(req,res)=>{
  res.send("<h1>Welcome to DASHBOARD page</h1>")
})

app.use('/',route);

app.listen(5000);
