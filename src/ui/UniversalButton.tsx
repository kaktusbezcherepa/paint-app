import React from 'react'
import "./UniversalButton.css"

interface UniversalButtonProps{
  buttonText : string;
  onReset ?: () => void;
  onClose ?: () => void
}

const UniversalButton: React.FC<UniversalButtonProps> = ({ onReset, buttonText, onClose }) => {
  return (
    <button className='reset__button' onClick={onReset || onClose}>
      {buttonText}
    </button>
  )
}


export default UniversalButton
