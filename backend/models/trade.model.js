import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
    asset: String,
    orderType: String,
    tradeType: String,
    leverage: Number,
    entryPrice: Number,
    slPrice: Number,
    tpPrice: Number,
    exitPrice: Number,
    tradeSize: Number,
    dateTime: Date,
    tradeOutcome: String
});

export const TradeEntry = mongoose.model('TradeEntry', tradeSchema);