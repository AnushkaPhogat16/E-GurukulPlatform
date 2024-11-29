// server/models/Test.js
import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  students: [String]  // Array of student names or IDs
});

export const Test = mongoose.model('Test', testSchema);
