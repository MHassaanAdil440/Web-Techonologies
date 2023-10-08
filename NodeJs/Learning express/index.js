const express = require('express');
const app = express();

app.get("",(request,response)=>{
    const name = request.query.name;
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Hello World Example</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    </head>
    <body>
        <h1 class="display-4 text-primary">`+name+`</h1>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    
    `
    response.send(html)
});


app.listen(5000);