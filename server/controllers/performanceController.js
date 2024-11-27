const Performance = require('../models/Performance');
const StudentAnswer = require('../models/StudentAnswer');

// Update Performance after Test Submission
exports.updatePerformance = async (studentId, courseId, score, totalQuestions) => {
  try {
    const performance = await Performance.findOne({ studentId, courseId });

    if (performance) {
      performance.totalTests += 1;
      performance.totalScore += score;
      performance.averageScore = performance.totalScore / performance.totalTests;
      await performance.save();
    } else {
      const newPerformance = new Performance({
        studentId,
        courseId,
        totalTests: 1,
        totalScore: score,
        averageScore: score
      });
      await newPerformance.save();
    }
  } catch (error) {
    console.error('Error updating performance:', error.message);
  }
};

// Fetch Performance Report
exports.getPerformance = async (req, res) => {
  try {
    const { studentId, courseId } = req.query;

    const performance = await Performance.findOne({ studentId, courseId });
    if (!performance) return res.status(404).json({ success: false, message: 'No performance data found' });

    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
