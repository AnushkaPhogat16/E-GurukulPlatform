import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import cors from 'cors';

dotenv.config(); // Load environment variables
const testRoutes = require('./routes/testRoutes');
const app = express(); // Initialize app
connectDB();
// Middleware
app.use(express.json());
app.use(cors());

// Import routes
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js'; // Ensure this file exists


// Application routes
app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes); // Use admin routes here

// Static files
app.use('/uploads', express.static('uploads'));
const attendanceRoutes = require('./routes/attendanceRoutes');
const performanceRoutes = require('./routes/performanceRoutes');

app.use('/api/attendance', attendanceRoutes);
app.use('/api/performance', performanceRoutes);
// Default route
app.get('/', (req, res) => {
    res.send('Server is working');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb(); // Connect to the database
});

