import mongoose from 'mongoose';
import winston from 'winston';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        winston.info('Connected to MongoDB');
    } catch (err) {
        winston.error('MongoDB connection error:', err);
        process.exit(1);
    }
};
