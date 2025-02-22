const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const Course = require('../models/Course');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
 // Assuming you have a Course model


// Route to get a course by its ID
router.get('/courses/:id', async (req, res) => {
  try {
    const courseTitle = req.params.id;
    const course = await Course.findOne({ title: courseTitle }); // Find the course by ID in the database

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course); // Return the course data
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
