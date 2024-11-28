import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import cors from 'cors';

// Routes
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import testRoutes from './routes/testRoutes.js'; // Corrected: Use import here
import attendanceRoutes from './routes/attendanceRoutes.js';
import performanceRoutes from './routes/performanceRoutes.js';

// Initialize express app
dotenv.config(); // Load environment variables
const app = express();
connectDb(); // Connect to DB

// Middleware
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes); 
app.use('/test', testRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/performance', performanceRoutes);

// Static files
app.use('/uploads', express.static('uploads'));

// Default route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
