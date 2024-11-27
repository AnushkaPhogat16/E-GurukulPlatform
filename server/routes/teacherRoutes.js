const express = require('express');
const { addMeetingLink } = require('../controllers/teacherController');

const router = express.Router();

router.post('/meetings', addMeetingLink);

module.exports = router;
