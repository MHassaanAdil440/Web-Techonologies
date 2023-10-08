const express = require('express');
const path = require('path');
const app = express();

const dir = path.join(__dirname,'public');
console.log(dir);
app.use(express.static(dir));

app.listen(8000);
