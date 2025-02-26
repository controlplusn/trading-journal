import express from 'express';
import { createTrade, fetchTrade } from '../controllers/trade.controller.js';

const router = express.Router();

router.post('/createTrade', createTrade);
router.get('/fetchTrades', fetchTrade);

export default router;