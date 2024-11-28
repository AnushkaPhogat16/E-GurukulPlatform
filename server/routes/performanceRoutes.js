import { getPerformance } from '../controllers/performanceController.js';

import express from 'express';
const router = express.Router();

router.get('/fetch', getPerformance);

export default router;  // Default export
