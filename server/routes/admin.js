import express from 'express';
import { isAuth, isAdmin } from '../middlewares/isAuth.js';

const router = express.Router();

router.get('/admin-dashboard', isAuth, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard!' });
});

export default router;
