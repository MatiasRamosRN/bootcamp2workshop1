const express = require("express");
const cart = require("./cart.route");
const product = require("./product.route");
const user = require("./user.route");
const auth = require("./auth.route");
const router = express.Router();
const version = "v1";

// Authorization - Pasarlo a un middleware



router.use(`/${version}/carts`, cart);
router.use(`/${version}/products`, product);
router.use(`/${version}/users`, user);
router.use(`/${version}/login`, auth);

module.exports = { router };
