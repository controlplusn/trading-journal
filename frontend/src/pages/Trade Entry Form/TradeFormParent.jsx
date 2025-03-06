import React, { useState } from 'react'
import TradeEntryButton from './TradeEntryButton'
import TradeEntryForm from './TradeEntryForm';
import '../../styles/Trade Entry Form/tradeForm.css';

const TradeFormParent = ({ onTradeAdded }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="trade-form-parent">
            <TradeEntryButton onOpen={() => setIsModalOpen(true)} />
            <TradeEntryForm 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              onTradeAdded={onTradeAdded}  
            />
      </div>
    )
}

export default TradeFormParent