import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
  answer: { type: String, required: true }
});

const StudentAnswerSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  answers: [AnswerSchema],
  score: { type: Number, default: 0 }
});

// Export the model correctly
export const StudentAnswer = mongoose.model('StudentAnswer', StudentAnswerSchema);

