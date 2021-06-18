
const acl = require("express-acl")

acl.config({
    baseUrl: version,
    path: '../../src'
})
exports.authorizeRole = function (req, res, next) {
    acl.authorize()
    next()
}