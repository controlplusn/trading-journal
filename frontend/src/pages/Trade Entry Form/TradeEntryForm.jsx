import React, { useState } from 'react'

const TradeEntryForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    // form data
    const [formData, setFormData] = useState({
        assetPair: '',
        orderType: '',
        tradeType: '',
        leverage: '',
        entryPrice: '',
        slPrice: '',
        tpPrice: '',
        exitPrice: '',
        tradeSize: '',
        dateTime: '',
        tradeOutcome: '',
    });

    // Error handling
    const [error, setError] = useState('');

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // Handle form submissions
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error if form is valid
        setError('');
        alert('Form submitted successfully');
    }

    return (
      <div className="trade-entry-form">
          <h2>Trade Entry Form</h2>

            <form onSubmit={handleSubmit}>
                {/* Asset/Pair */}
                <div className="asset">
                    <label>Asset/Pair</label>
                    <input 
                        type="text"
                        name="assetPair"
                        value={formData.assetPair}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Order type */}
                <div className="order-type">
                    <label>Order Type</label>
                    <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Order Type</option>
                        <option value="Market">Market</option>
                        <option value="Limit">Limit</option>
                        <option value="Stop Limit">Stop Limit</option>
                    </select>
                </div>

                {/* Trade type */}
                <div className="trade-type">
                    <label>Trade Type</label>
                    <select
                        name="tradeType"
                        value={formData.tradeType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Trade Type</option>
                        <option value="Long">Long</option>
                        <option value="Short">Short</option>
                    </select>
                </div>

                {/* Leverage */}
                <div className="leverage">
                    <label>Leverage</label>
                        <input
                            type="number"
                            name="leverage"
                            value={formData.leverage}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                </div>

                {/* Entry price */}
                <div className="entry-price">
                    <label>Entry Price</label>
                    <input
                        type="number"
                        name="entryPrice"
                        value={formData.entryPrice}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Stop-loss price */}
                <div className="sl-price">
                    <label>Stop-Loss Price</label>
                    <input
                        type="number"
                        name="slPrice"
                        value={formData.slPrice}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Take profit price */}
                <div className="take-profit">
                    <label>Take Profit Price</label>
                    <input
                        type="number"
                        name="tpPrice"
                        value={formData.tpPrice}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Exit price */}
                <div className="exit-price">
                    <label>Exit Price</label>
                    <input
                        type="number"
                        name="exitPrice"
                        value={formData.exitPrice}
                        onChange={handleChange}
                    />
                </div>

                {/* Trade size */}
                <div className="trade-size">
                    <label>Trade Size</label>
                    <input
                        type="number"
                        name="tradeSize"
                        value={formData.tradeSize}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Datetime picker */}
                <div className="date-time-picker">
                    <label>Date & Time</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit button -> test */}
                <button>Submit</button>
            </form>
      </div>
    )
}

export default TradeEntryForm