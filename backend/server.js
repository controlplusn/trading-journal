import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`)
});