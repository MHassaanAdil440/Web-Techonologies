const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/profileyo',(req,res)=>{
    user = {
        name:'Hassaan',
        email:'Hassaanadil488@gmail',
        country:'Pakistan'
    }
    res.render('profile123',{user})
})
app.listen(8000);


// const express = require('express');
// const path = require('path');

// const app = express();

// app.set('view engine','ejs');


// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'Peter',
//         email:'peter@test.com',
//         country:'USA'
//     }
//    resp.render('profile',{user})
// });



// app.listen(8000);