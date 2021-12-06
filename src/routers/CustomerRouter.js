const express = require('express');
const customerController = require('../controllers/CustomerController');
const auth = require("../controllers/Auth");
const router = express.Router();

router.route('/').post(auth.isTokenValidated, auth.isAdminValidated, customerController.createCustomer);
router.route('/').get(auth.isTokenValidated, customerController.getCustomers);
router.route('/:id').get(auth.isTokenValidated, customerController.getCustomer);
router.route('/:id').put(auth.isTokenValidated, auth.isAdminValidated, customerController.updateCustomer);
router.route('/:id').delete(auth.isTokenValidated, auth.isAdminValidated, customerController.deleteCustomer);

module.exports = router;