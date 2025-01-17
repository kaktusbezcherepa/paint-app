import React from 'react'

interface ColorSelectorProps {
    currentColor: string;
    onColorChange: (currentColor: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({currentColor, onColorChange}) => {


  return (
    <div>
        <input type="color" value={currentColor} onChange={(e) => onColorChange(e.target.value)}/>
    </div>
  )
}

export default ColorSelector;
