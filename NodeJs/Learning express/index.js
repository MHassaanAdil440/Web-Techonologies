const express = require('express');
const path = require('path');
const app = express();

const dir = path.join(__dirname,'public');
// console.log(dir);
// app.use(express.static(dir));

app.get('',(req, res)=>{
    res.sendFile(dir+"/index.html")
})
app.get('/about',(req, res)=>{
    res.sendFile(dir+"/about.html")
})
app.get('/home',(req, res)=>{
    res.sendFile(dir+"/home.html")
})

app.get("*",(req,res)=>{
    res.send(404)
})

app.listen(8000);
