import React, { useEffect, useState } from 'react';
import { fetchTrades, addTrade } from '../../api/tradeAPI';
import TradeFormParent from '../Trade Entry Form/TradeFormParent';

const Trade = () => {
    return (
        <div className="trades-page">
            <h2>Trade History</h2>
            <TradeFormParent />
        </div>
    )
}

export default Trade;