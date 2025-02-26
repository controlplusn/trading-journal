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
    dateTime: {
        type: Date,
        default: Date.now
    },
    tradeOutcome: String
});

export const TradeEntry = mongoose.model('TradeEntry', tradeSchema);