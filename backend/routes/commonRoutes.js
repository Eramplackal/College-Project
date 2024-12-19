const express = require('express');
const router = express.Router();
const CommonController = require('../controllers/CommonController');


router.get('/', CommonController.getHomePage);
router.get('/about', CommonController.getAboutPage);
router.get('/courses', CommonController.getCoursesPage);
router.get('/contact', CommonController.getContactusPage);

module.exports = router;
