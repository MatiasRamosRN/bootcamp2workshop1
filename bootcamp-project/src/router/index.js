const express = require("express");
const acl = require("express-acl")
const cart = require("./cart.route");
const product = require("./product.route");
const user = require("./user.route");
const auth = require("./auth.route");
const router = express.Router();
const version = "v1";

// Authorization - Padarlo a un middleware

acl.config({
    baseUrl: version,
    path: 'src'
})

router.use(`/${version}/carts`, cart);
router.use(`/${version}/products`, product);
router.use(`/${version}/users`, acl.authorize, user);
router.use(`/${version}/login`, auth);

module.exports = { router };
