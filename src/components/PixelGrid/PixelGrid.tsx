import React, { useState } from 'react'
import "./PixelGrid.css"

const PixelGrid : React.FC = () => {

    const [pixels, setPixels] = useState(Array(256).fill("#fff"))

    const handlePaint = (index : number, color : string) => {
        const newPixels = [...pixels]
        newPixels[index] = color
        setPixels(newPixels)
    }

    const handleReset = () => {
        setPixels(Array(256).fill("#fff"))
    }
  return (
    <>
    <div className='grid'>
        {pixels.map((color, index) => (
            
            <div
                key={index}
                className="pixel"
                style={{ backgroundColor : color}}
                onClick={() => handlePaint(index, "#000")}
            />
        ))}
    </div>
    <button onClick={() => handleReset()}>test</button>
    </>
  )
}

export default PixelGrid 
