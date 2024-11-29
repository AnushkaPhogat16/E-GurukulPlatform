import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  questions: [{
    question: String,
    options: [String],
    correctAnswer: String
  }],
  grade: {
    type: String,
    default: null  // Initially, no grade is set
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Test = mongoose.model('Test', testSchema);

export { Test };
