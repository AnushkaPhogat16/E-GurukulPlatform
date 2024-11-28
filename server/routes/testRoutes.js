import express from 'express';
import { createTest, getTestsByCourse, submitTest } from '../controllers/testController.js'; // Named imports

const router = express.Router();

router.post('/create', createTest);
router.get('/fetch', getTestsByCourse);
router.post('/submit', submitTest);

export default router;  // Default export
