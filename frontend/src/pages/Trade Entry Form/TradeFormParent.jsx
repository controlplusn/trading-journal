import React, { useState } from 'react'
import TradeEntryButton from './TradeEntryButton'
import TradeEntryForm from './TradeEntryForm';
import '../../styles/Trade Entry Form/tradeForm.css';

const TradeFormParent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="trade-form-parent">
            <TradeEntryButton onOpen={() => setIsModalOpen(true)} />
            <TradeEntryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    )
}

export default TradeFormParent