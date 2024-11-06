const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes')
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cache-control',
    'Expires',
    'Pragma',
  ],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth' , authRouter)


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
