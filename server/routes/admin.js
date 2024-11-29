// server/routes/admin.js
import express from 'express';
import { isAuth, isAdmin } from '../middlewares/isAuth.js';
import { getGradeTests } from '../controllers/admin.js';  // Import the controller

const router = express.Router();

// Admin Dashboard route (already present)
router.get('/admin-dashboard', isAuth, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard!' });
});

// New route for Grade Tests
router.get('/grade-tests', isAuth, isAdmin, getGradeTests);  // Ensure this is correct

export default router;
