import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import winston from 'winston';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Winston Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

// MongoDB Connection
connectDB();

// Routes
import routes from './routes/index.js';
app.use('/api', routes);

import userRoutes from './routes/userRoutes.js';
// Add user routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
