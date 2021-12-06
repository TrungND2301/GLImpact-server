const express = require('express');
const searchController = require('../controllers/SearchController');
const auth = require("../controllers/Auth");
const router = express.Router();

router.route('/').post(auth.isTokenValidated, auth.isAdminValidated, searchController.createSearch);
router.route('/').get(auth.isTokenValidated, searchController.getSearchs);
router.route('/:id').get(auth.isTokenValidated, searchController.getSearch);
router.route('/:id').put(auth.isTokenValidated, auth.isAdminValidated, searchController.updateSearch);
router.route('/:id').delete(auth.isTokenValidated, auth.isAdminValidated, searchController.deleteSearch);

module.exports = router;