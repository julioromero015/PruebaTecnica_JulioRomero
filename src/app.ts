import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './rutas/usersRuta';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default app;
