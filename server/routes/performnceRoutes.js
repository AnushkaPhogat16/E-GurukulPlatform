const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');

router.get('/fetch', performanceController.getPerformance);

module.exports = router;
