// server/controllers/admin.js
import { Test } from '../models/Test.js';  // Assuming a Test model exists

export const getGradeTests = async (req, res) => {
  try {
    // Example: Fetching grade test data from the database
    const tests = await Test.find({});  // You might want to filter or modify this query

    if (!tests) {
      return res.status(404).json({ message: "No tests found" });
    }

    res.status(200).json({ testsToGrade: tests });  // Sending the test data to the frontend
  } catch (error) {
    res.status(500).json({
      message: "Error fetching grade tests",
      error: error.message
    });
  }
};
