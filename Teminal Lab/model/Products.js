const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

module.exports = mongoose.model("products",productSchema);

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;