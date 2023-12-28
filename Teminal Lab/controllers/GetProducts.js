const Products = require("../model/Products");
const GetProducts = async (req, resp) => {
    const products = await Product.find();
    if (products.length > 0) {
        //for checking data is comming from db
        // resp.send(products)
        resp.render('Products', {products})
    } else {
        resp.send({ result: "No Product found" })
    }
}

module.exports = GetProducts;