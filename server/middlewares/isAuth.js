// server/middlewares/isAuth.js
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const isAuth = async (req, res, next) => {
  // You can skip authentication by allowing access directly for testing
  if (req.headers['x-skip-auth'] === 'true') {
    return next(); // Skip authentication and continue to the next middleware
  }

  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).json({
        message: 'Please Login',
      });
    }

    const decodedData = jwt.verify(token, process.env.Jwt_Sec);
    req.user = await User.findById(decodedData._id);
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Login First',
    });
  }
};

export const isAdmin = (req, res, next) => {
  // Again, skip role check for testing purposes
  if (req.headers['x-skip-auth'] === 'true') {
    return next();
  }

  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        message: 'You are not admin',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
