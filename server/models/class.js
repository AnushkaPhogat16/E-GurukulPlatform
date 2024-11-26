// models/class.js

import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  link: { type: String, required: true },
});

const ClassModel = mongoose.model('Class', classSchema);

// Default export
export default ClassModel;
