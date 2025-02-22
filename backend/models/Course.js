// models/Course.js

const mongoose = require('mongoose');

// Define the course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true }
    }
  ],
  pdfs: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true }
    }
  ]
});

// Create and export the Course model
module.exports = mongoose.model('Course', courseSchema);
