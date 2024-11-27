const express = require('express');
const { getSubjects, getTest, submitTest, getReports } = require('../controllers/portalController');
const router = express.Router();

router.get('/subjects', getSubjects);
router.get('/test/:subject', getTest);
router.post('/test/:subject/submit', submitTest);
router.get('/reports/:studentId', getReports);

module.exports = router;
