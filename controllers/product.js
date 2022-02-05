const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Admin",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    layoutCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    layoutCSS: true,
  });
};
