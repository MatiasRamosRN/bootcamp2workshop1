const acl = require("express-acl");
const version = "v1";
acl.config({
  baseUrl: version,
  path: "src",
});
exports.authorizeRole = function (req, res, next) {
  acl.authorize(req, res, next);
  next();
};
