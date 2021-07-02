const jwt = require("jsonwebtoken");
const { send } = require("../utils/awsSqs");
exports.validateAuth = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Authorization header is missing");
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log("req", req);
  if (!token) {
    return res.status(401).send("Authorization token is missing");
  }
  jwt.verify(token, "SECRET", (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    send();
    req.decoded = decoded;
    next();
  });
};
