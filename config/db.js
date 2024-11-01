// config/db.js
const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose
    .connect(
      'mongodb+srv://jezijazeera:b2NA3tFvP5N4JjFw@flounge.qgcxl.mongodb.net/'
    )
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
};

module.exports = connectDB;
