import React, { useState, useEffect } from "react";
import "./PixelGrid.css";

interface PixelGridProps {
    rows: number;  
    columns: number;
    currentColor: string;
    resetTrigger: number;
}



const PixelGrid: React.FC<PixelGridProps> = ({ rows, columns, currentColor, resetTrigger}) => {

    const totalPixels = rows * columns


  const [pixels, setPixels] = useState(Array(totalPixels).fill("#fff"));

  const handlePaint = (index: number, color: string) => {
    const newPixels = [...pixels];
    newPixels[index] = color;
    setPixels(newPixels);
  };

  

  useEffect(() => {
    setPixels(Array(totalPixels).fill("#fff"));
  }, [rows, columns, totalPixels, resetTrigger]);


  return (
    <>
      <div className="grid" style={{
        gridTemplateColumns: `repeat(${columns}, 30px)`,
        gridTemplateRows: `repeat(${rows}, 30px)`
      }}>
        {pixels.map((color, index) => (
          <div
            key={index}
            className="pixel"
            style={{ backgroundColor: color }}
            onClick={() => handlePaint(index, currentColor)}
          />
        ))}
      </div>
    </>
  );
};

export default PixelGrid;
