// import React, {useState, useMemo, useCallback} from 'react'
import React from "react";
import "./ColorSelector.css"

interface ColorSelectorProps {
    currentColor: string;
    onColorChange: (currentColor: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({currentColor, onColorChange}) => {

  // const [color, setColor] = useState(currentColor)

  // const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setColor(e.target.value)
  // }

  return (
    <div className='color__selector'>
        <label>
          Цвет: 
          <input className='color__selector__input' type="color" value={currentColor} onChange={(e) => onColorChange(e.target.value)}/>
        </label>
    </div>
    // <div className="color__selector__container">

    // </div>
  )
}

export default ColorSelector;
