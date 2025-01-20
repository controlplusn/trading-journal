import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';

const PORT = 8000;

dotenv.config();

const app = express();

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`)
});