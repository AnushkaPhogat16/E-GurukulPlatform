const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/create', testController.createTest);
router.get('/fetch', testController.getTestsByCourse);
router.post('/submit', testController.submitTest);

module.exports = router;
