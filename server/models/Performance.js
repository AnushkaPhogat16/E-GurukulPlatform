import mongoose from 'mongoose';

const PerformanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  totalTests: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0 },
});

export const Performance = mongoose.model('Performance', PerformanceSchema);  // Named export
