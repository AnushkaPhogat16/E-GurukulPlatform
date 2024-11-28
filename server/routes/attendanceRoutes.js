import express from 'express';
import { markAttendance, getAttendance } from '../controllers/attendanceController.js';

const router = express.Router();

router.post('/mark', markAttendance);
router.get('/fetch', getAttendance);

export default router;  // This ensures that `attendanceRoutes` is the default export
