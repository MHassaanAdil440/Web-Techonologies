const express = require('express');
const app = express();

app.get("",(request,response)=>{
    const name = request.query.name;
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Hello World Example</title>
    </head>
    <body>
        <h1>`+name+`</h1>
    </body>
    </html>
    `
    response.send(html)
});


app.listen(5000);