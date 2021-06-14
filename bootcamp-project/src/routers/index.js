const express = require("express");
const cart = require("./cart.route");
const product = require("./product.route");
const user = require("./user.route");
const router = express.Router();
const version = "v1";

router.use(`/${version}/carts`, cart);
router.use(`/${version}/products`, product);
router.use(`/${version}/users`, user);

module.exports = { router };
