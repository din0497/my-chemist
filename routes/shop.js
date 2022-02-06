const path = require("path");

const express = require("express");

const productsController = require('../controllers/shop')

const router = express.Router();

router.get("/", productsController.getProduct);

router.get('/products' )

router.get('/cart' )

router.get('/checkout' )

module.exports = router;
