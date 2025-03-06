import React, { useEffect, useState } from 'react';
import TradeFormParent from '../Trade Entry Form/TradeFormParent';
import '../../styles/Trades Page/tradesPage.css';

const URL = "http://localhost:8000/api/trades/fetchTrades";

const Trade = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        const fetchTrades = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(URL);
                const trades = (await response.json());
                setTrades(trades);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTrades();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching trades: {error.message}</div>
    }

    return (
        <div className="trades-page">
            <h2>Trade History</h2>
            <TradeFormParent />

            <table className="tradesPage-table">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Order Type</th>
                        <th>Trade Type</th>
                        <th>Leverage</th>
                        <th>Entry Price</th>
                        <th>SL Price</th>
                        <th>TP Price</th>
                        <th>Exit Price</th>
                        <th>Trade Size</th>
                        <th>Date & Time</th>
                        <th>Outcome</th>
                    </tr>
                </thead>
                <tbody>
                    {trades.map((trade) => (
                        <tr key={trade._id}>
                            <td>{trade.asset}</td>
                            <td>{trade.orderType}</td>
                            <td>{trade.tradeType}</td>
                            <td>{trade.leverage}</td>
                            <td>{trade.entryPrice}</td>
                            <td>{trade.slPrice}</td>
                            <td>{trade.tpPrice}</td>
                            <td>{trade.exitPrice}</td>
                            <td>{trade.tradeSize}</td>
                            <td>{new Date(trade.dateTime).toLocaleString()}</td>
                            <td>{trade.tradeOutcome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Trade;