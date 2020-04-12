const express = require("express");
const router = express.Router(); 
const Product = require('../models/product')


// INDEX - Show all products
router.get("/products", (req, res) => {
  Product.find({}, (err, allProducts) => {
    if (err) {
      console.log(err)
    } else {
      res.render('products/index', { products: allProducts })
    }
  })
});



module.exports = router;