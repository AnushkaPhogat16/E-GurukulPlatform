import Test from '../models/Test.js';
import { StudentAnswer } from '../models/StudentAnswer.js';
import {updatePerformance} from './performanceController.js';  // Import performanceController if needed

// Create Test
export const createTest = async (req, res) => {
  try {
    const { courseId, testName, questions } = req.body;

    const newTest = new Test({ courseId, testName, questions });
    await newTest.save();

    res.status(201).json({ success: true, testId: newTest._id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch Tests for a Course
export const getTestsByCourse = async (req, res) => {
  try {
    const { courseId } = req.query;

    const tests = await Test.find({ courseId });
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Submit Test
export const submitTest = async (req, res) => {
  try {
    const { testId, studentId, answers } = req.body;

    const test = await Test.findById(testId);
    if (!test) return res.status(404).json({ success: false, message: 'Test not found' });

    let score = 0;
    test.questions.forEach((q) => {
      const studentAnswer = answers.find(ans => ans.questionId == q._id);
      if (studentAnswer && studentAnswer.answer === q.correctAnswer) {
        score += 1;
      }
    });

    const studentAnswerRecord = new StudentAnswer({
      testId,
      studentId,
      answers,
      score
    });

    await studentAnswerRecord.save();

    // Update Performance
    await updatePerformance(studentId, test.courseId, score, test.questions.length);

    res.status(200).json({ success: true, score, outOf: test.questions.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
