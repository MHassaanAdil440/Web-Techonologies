const express = require("express");
const app = express();
const port = 5000;
const Product = require("./model/Products");
const GetProducts = require("./controllers/GetProducts");
require('./model/config');

app.set("view engine", "ejs");
app.use(express.json());

//Just for checking ejs index.ejs file deleted
// app.get('/',(req,res)=>{
//     // res.send("working");
//     res.render('index',{message:"Products"});
// });

//APi getting the data of the products from the products collection mongodb e-commerce database(term project database)
// app.get("/products", GetProducts);

app.get("/products",async (req, resp) => {
    const products = await Product.find();
    if (products.length > 0) {
        //for checking data is comming from db
        // resp.send(products)
        resp.render('Products', {products})
    } else {
        resp.send({ result: "No Product found" })
    }
});


//Middleware for input validation
app.use('/add-product',(req, res, next)=>{
    const { name, price, category, userId, company } = req.body;

    // if (!name || !price || !category || !userId || !company) {
    //     return res.status(400).send("All fields are required");
    // }
    if (!name) {
        return res.status(400).send("All fields are required");
    }
    next();
})

//APi to add  the data of products 
app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

// API to delete a product
app.post("/delete-product/:id", async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.redirect('/products'); 
});

app.listen(port,(err)=>{console.log(err)});