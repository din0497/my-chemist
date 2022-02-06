const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      docTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      layoutCSS: true,
      activeAddProduct: true,
    });
  };

  exports.postAddProduct = (req, res, next) => {
    const products = new Product(req.body.title);
    products.save();
  
    res.redirect("/");
  };