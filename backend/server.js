const express = require('express');
const connectDB = require('./config');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/auth', authRoutes);
// This should log your secret key, not undefined


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(process.env.JWT_SECRET); 
    console.log(`Server running on port ${PORT}`);
});