const express = require("express");
const router = express.Router();
const userMiddlewares = require("../utils/bodyParser");
const userController = require("../controllers/users.controller");

router.post("/", userMiddlewares.bodyCheck, userController.create);
router.get("/:id", userMiddlewares.idCheck, userController.get);
router.delete("/:id", userMiddlewares.idCheck, userController.delete);
router.put(
  "/:id",
  userMiddlewares.idCheck,
  userMiddlewares.bodyCheck,
  userController.update
);

module.exports = router;
