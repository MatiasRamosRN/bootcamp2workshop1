const express = require("express");
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get(`/:id`, productsController.get);
router.get(`/`, productsController.getAll);
router.post(`/`, productsController.post);
router.put(`/:id`, productsController.put);
router.delete(`/:id`, productsController.delete);

module.exports = router;
 