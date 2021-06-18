const express = require("express");
const cart = require("./cart.route");
const product = require("./product.route");
const user = require("./user.route");
const router = express.Router();
const version = "v1";

router.use(`/${version}/carros`, cart);
router.use(`/${version}/productos`, product);
router.use(`/${version}/usuarios`, user);

module.exports = { router, version };
