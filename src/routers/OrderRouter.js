const express = require('express');
const orderController = require('../controllers/OrderController');
const auth = require("../controllers/Auth");
const router = express.Router();

router.route('/').post(auth.isTokenValidated, auth.isAdminValidated, orderController.createOrder);
router.route('/').get(auth.isTokenValidated, orderController.getOrders);
router.route('/:id').get(auth.isTokenValidated, orderController.getOrder);
router.route('/:id').put(auth.isTokenValidated, auth.isAdminValidated, orderController.updateOrder);
router.route('/:id').delete(auth.isTokenValidated, auth.isAdminValidated, orderController.deleteOrder);

module.exports = router;