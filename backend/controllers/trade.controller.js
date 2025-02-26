import { TradeEntry } from "../models/trade.model.js";

export const createTrade = async (req, res) => {
    try {
        // Destructuring approach in getting the user input for more control on validation
        const { asset, orderType, tradeType, leverage, entryPrice, slPrice, tpPrice, exitPrice, tradeSize, dateTime, tradeOutcome } = req.body;

        const trade = new TradeEntry({
            asset, 
            orderType, 
            tradeType, 
            leverage, 
            entryPrice, 
            slPrice, 
            tpPrice, 
            exitPrice, 
            tradeSize, 
            dateTime, 
            tradeOutcome
        })

        await trade.save();

        res.status(201).json({
            success: true,
            message: trade
        })
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}

export const fetchTrade = async (req, res) => {
    try {
        const trades = await TradeEntry.find(); // fetching all the trade records from the database
        res.json(trades);
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}