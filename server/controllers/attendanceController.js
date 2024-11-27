const Attendance = require('../models/Attendance');

// Mark Attendance
exports.markAttendance = async (req, res) => {
  try {
    const { studentId, courseId, date, status } = req.body;

    const newAttendance = new Attendance({ studentId, courseId, date, status });
    await newAttendance.save();

    res.status(201).json({ success: true, message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch Attendance by Course and Student
exports.getAttendance = async (req, res) => {
  try {
    const { studentId, courseId } = req.query;

    const attendance = await Attendance.find({ studentId, courseId }).sort({ date: -1 });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
