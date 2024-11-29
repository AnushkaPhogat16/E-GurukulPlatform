import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js'; // Assuming you have a database connection helper
import cors from 'cors';
import bodyParser from 'body-parser';
import performanceRoutes from './routes/performance.js'; // Import the performance routes
import userRoutes from './routes/user.js'; // User routes for authentication and registration
import adminRoutes from './routes/admin.js'; // Admin routes for managing the dashboard, grade tests, etc.
import classRoutes from './routes/classRoutes.js'; // Class routes for hosting and joining classes
import attendanceRouter from './routes/attendance.js'; 
dotenv.config(); // Load environment variables

const app = express(); // Initialize the express application

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

// Application routes
app.use('/api', userRoutes); // User-related routes (authentication, registration, etc.)
app.use('/api/admin', adminRoutes); // Admin-related routes (dashboard, grade tests, etc.)
app.use('/api/classes', classRoutes); // Class-related routes (hosting and joining classes)
app.use('/api/performance', performanceRoutes); // Performance-related routes
app.use('/api', attendanceRouter);
// Static files (for uploaded files, images, etc.)
app.use('/uploads', express.static('uploads')); // Make uploaded files accessible via /uploads route

// Default route
app.get('/', (req, res) => {
    res.send('Server is working');
});

// Start server
const port = process.env.PORT || 5000; // Use environment port or default to 5000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb(); // Connect to the database on server start
});
