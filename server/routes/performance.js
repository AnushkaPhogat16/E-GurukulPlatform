// server/routes/performance.js
import express from 'express';
import Performance from '../models/performance.js'; // Import the Performance model

const router = express.Router();

// Route to fetch all performance data
router.get('/', async (req, res) => {
    try {
        const performances = await Performance.find();
        res.json(performances);
    } catch (err) {
        res.status(500).send("Error fetching performance data: " + err.message);
    }
});

// Route to save test score
router.post('/submit', async (req, res) => {
    const { name, score } = req.body;

    try {
        const newPerformance = new Performance({ name, score });
        const savedPerformance = await newPerformance.save();
        res.status(201).json(savedPerformance);
    } catch (err) {
        res.status(500).send("Error saving performance data: " + err.message);
    }
});

export default router; // Use export default to export the router
