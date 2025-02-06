import React from 'react'

const OpenModal = ({ onClick, className, text }) => {
  return (
    <button 
        onClick={onClick}
        className={className}    
    >
        {text}
    </button>
  )
}

export default OpenModal