const express = require("express");
const products = require("../controllers/product-controller");
const router = express.Router();

router.route("/product").get(products)

module.exports = router;