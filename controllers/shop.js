const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      layoutCSS: true,
    });
  });
};

exports.page404 = (req, res, next) => {
  res.status(404).render("404", { docTitle: "404", path: "" });
};
