const express = require('express');
const app = express();

app.get("",(request,response)=>{
    const name = request.query.name;
    response.send("WELCOME "+name)
});

app.get("/about",(request,response)=>{
    response.send("Welcome to the about page")
});

app.get("/help",(request,response)=>{
    response.send("welcome to the help page")
});

app.listen(5000);