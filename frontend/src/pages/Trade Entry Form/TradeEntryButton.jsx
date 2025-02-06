import React from 'react'
import OpenModal from '../../components/ui/OpenModal'

const TradeEntryButton = ({ onOpen }) => {
  return (
    <OpenModal 
        onClick={onOpen} 
        className={"trade-entry-btn"} 
        text={"Enter Trade Entry"}
    />
  )
}

export default TradeEntryButton