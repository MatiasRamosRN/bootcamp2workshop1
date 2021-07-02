const express = require("express");
const cart = require("./cart.route");
const product = require("./product.route");
const auth = require("./auth.route");
const user = require("./user.route");
const router = express.Router();
const version = "v1";

router.use(`/${version}/carros`, cart);
router.use(`/${version}/productos`, product);
router.use(`/${version}/usuarios`, user);
router.use(`/${version}/carts`, cart);
router.use(`/${version}/products`, product);
router.use(`/${version}/users`, user);
router.use(`/${version}/login`, auth);

module.exports = { router, version };
