const Test = require('../models/Test');
const User = require('../models/User');

// Fetch available subjects
exports.getSubjects = async (req, res) => {
    const subjects = await Test.find().select('subject');
    res.json(subjects);
};

// Fetch a test by subject
exports.getTest = async (req, res) => {
    const test = await Test.findOne({ subject: req.params.subject });
    if (!test) return res.status(404).json({ message: 'Test not found' });
    res.json(test);
};

// Submit test and calculate score
exports.submitTest = async (req, res) => {
    const { answers } = req.body;
    const test = await Test.findOne({ subject: req.params.subject });
    if (!test) return res.status(404).json({ message: 'Test not found' });

    let score = 0;
    test.questions.forEach((q, index) => {
        if (answers[index] === q.correctOption) score++;
    });

    const student = await User.findById(req.user.id);
    student.performance.push({
        subject: test.subject,
        score,
        totalQuestions: test.questions.length,
    });
    await student.save();

    res.json({ score, totalQuestions: test.questions.length });
};

// Fetch reports
exports.getReports = async (req, res) => {
    const student = await User.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ attendance: student.attendance, performance: student.performance });
};
