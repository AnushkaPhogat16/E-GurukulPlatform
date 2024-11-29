// server/models/Attendance.js
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, enum: ["Present", "Absent"], required: true },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

// Exporting the Attendance model as the default export
export default Attendance;
