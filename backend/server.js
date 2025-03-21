import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import tradeRoutes from './routes/trade.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/trades", tradeRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`)
});