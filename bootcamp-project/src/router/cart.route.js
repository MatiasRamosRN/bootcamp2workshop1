const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.post("/", cartController.create);
router.delete("/:idCarro", cartController.delete);
router.put("/:idCarro", cartController.update);
router.get("/:idCarro/productos", cartController.getProducts);
router.post("/:idCarro/productos/:idProducto", cartController.addProduct);
router.delete("/:idCarro/productos/:idProducto", cartController.deleteProduct);

module.exports = router;
