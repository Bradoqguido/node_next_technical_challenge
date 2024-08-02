// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes';
import gameRoutes from './routes/gameRoutes';
import teamRoutes from './routes/teamRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/players', playerRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/teams', teamRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/soccer-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

export default app;
