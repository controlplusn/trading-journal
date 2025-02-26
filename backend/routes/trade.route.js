import express from 'express';
import { createTrade, fetchTrade } from '../controllers/trade.controller';

const router = express.Router();

router.post('/getTrades', createTrade);
router.get('/fetchTrades', fetchTrade);

export default router;