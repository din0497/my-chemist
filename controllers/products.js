const Product = require("../models/product");

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
