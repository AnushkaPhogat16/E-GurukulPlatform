// server/routes/attendance.js
import express from "express";
import { isAuth, isAdmin } from "../middlewares/isAuth.js";  // Use the existing auth middleware
import  Attendance  from "../models/Attendance.js";  // Assuming you have an Attendance model

const router = express.Router();

// Fetch attendance for all students
router.get("/admin/check-attendance", isAuth, isAdmin, async (req, res) => {
  try {
    const attendanceData = await Attendance.find(); // Fetch all attendance records
    res.status(200).json({ attendanceData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
