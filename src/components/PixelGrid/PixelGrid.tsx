import React, { useState, useEffect } from "react";
import "./PixelGrid.css";

interface PixelGridProps {
    rows: number;  
    columns: number;
    currentColor: string; 
  }



const PixelGrid: React.FC<PixelGridProps> = ({ rows, columns, currentColor}) => {

    const totalPixels = rows * columns


  const [pixels, setPixels] = useState(Array(totalPixels).fill("#fff"));

  const handlePaint = (index: number, color: string) => {
    const newPixels = [...pixels];
    newPixels[index] = color;
    setPixels(newPixels);
  };

  const handleReset = () => {
    setPixels(Array(totalPixels).fill("#fff"));
  };

  useEffect(() => {
    setPixels(Array(totalPixels).fill("#fff"));
  }, [rows, columns, totalPixels]);


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
      <button onClick={() => handleReset()}>test</button>
    </>
  );
};

export default PixelGrid;
