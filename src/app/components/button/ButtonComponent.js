import React from 'react'
import './ButtonComponent.css'

function CustomButton({ width, height, color, backgroundColor, text, onClick }) {
    const buttonStyle = {
        width: width || 'auto', 
        height: height || 'auto', 
        color: color || '#fff', 
        backgroundColor: backgroundColor || 'black',
        border: '1px solid #000',
        borderRadius: '5px', 
        cursor: 'pointer',
        padding: '8px 20px', 
        fontSize: '15px' 
      };
    return (
        <button style={buttonStyle} onClick={onClick}>
          {text}
        </button>
      );
    }

  

export default CustomButton