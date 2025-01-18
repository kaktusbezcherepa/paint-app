import React from 'react'
import "./ColorSelector.css"

interface ColorSelectorProps {
    currentColor: string;
    onColorChange: (currentColor: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({currentColor, onColorChange}) => {


  return (
    <div className='color__selector'>
        <label>
          Цвет: 
          <input className='color__selector__input' type="color" value={currentColor} onChange={(e) => onColorChange(e.target.value)}/>
        </label>
    </div>
  )
}

export default ColorSelector;
