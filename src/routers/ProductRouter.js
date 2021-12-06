const express = require('express');
const productController = require('../controllers/ProductController');
const auth = require("../controllers/Auth");
const router = express.Router();

router.route('/').post(auth.isTokenValidated, auth.isAdminValidated, productController.createProduct);
router.route('/').get(auth.isTokenValidated, productController.getProducts);
router.route('/:id').get(auth.isTokenValidated, productController.getProduct);
router.route('/:id').put(auth.isTokenValidated, auth.isAdminValidated, productController.updateProduct);
router.route('/:id').delete(auth.isTokenValidated, auth.isAdminValidated, productController.deleteProduct);

module.exports = router;