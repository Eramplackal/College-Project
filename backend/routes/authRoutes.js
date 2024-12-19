const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Define routes for authentication
router.get('/login', AuthController.getLoginPage);
router.post('/login', AuthController.login);

module.exports = router;