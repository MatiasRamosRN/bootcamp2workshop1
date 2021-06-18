const express = require("express");
const router = express.Router();
const userMiddlewares = require("../utils/bodyParser");
const userController = require("../controllers/users.controller");
const authMiddleware = require("../controllers/middlewares/auth.middleware");
const aclMiddleware = require("../controllers/middlewares/acl.middleware");
router.post("/", userMiddlewares.bodyCheck, userController.create);
router.get("/:id", userMiddlewares.idCheck, userController.get);
router.delete(
  "/:id",
  authMiddleware.validateAuth,
  userMiddlewares.idCheck,
  userController.delete
);
router.put(
  "/:id",
  authMiddleware.validateAuth,
  aclMiddleware.authorizeRole,
  userMiddlewares.idCheck,
  userMiddlewares.bodyCheck,
  userController.update
);

module.exports = router;
