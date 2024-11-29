// server/models/performance.js
import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
    name: String,
    score: Number,
    date: { type: Date, default: Date.now }
});

const Performance = mongoose.model('Performance', performanceSchema);

export default Performance;