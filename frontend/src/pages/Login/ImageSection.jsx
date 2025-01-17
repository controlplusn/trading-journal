import React from 'react';
import '../../styles/Login/login.css';

const ImageSection = ({ backgroundImage }) => {
  return (
    // right side
    <div className="card-container">
        <div 
            className="image-section"
            style={{
                backgroundImage: `url(${ backgroundImage })`
            }}    
        >
        </div>
    </div>
  )
}

export default ImageSection