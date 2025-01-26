import React, { useEffect, useRef, useState } from "react";
import "./PixelGridCanvas.css";

interface PixelGridCanvasProps {
  rows: number;
  columns: number;
  currentColor: string;
  resetTrigger: number;
  pixelSize: number
}

const PixelGridCanvas: React.FC<PixelGridCanvasProps> = ({
  rows,
  columns,
  currentColor,
  resetTrigger,
  pixelSize
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  

  const drawPixel = (x: number, y: number, color: string) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  };

  const handleCanvasInteraction = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((clientX - rect.left) / pixelSize);
      const y = Math.floor((clientY - rect.top) / pixelSize);

      if (x >= 0 && x < columns && y >= 0 && y < rows) {
        drawPixel(x, y, currentColor);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    handleCanvasInteraction(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing) {
      handleCanvasInteraction(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDrawing(true);
    const touch = e.touches[0];
    handleCanvasInteraction(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDrawing) {
      const touch = e.touches[0];
      handleCanvasInteraction(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };



  useEffect(() => {
    clearCanvas();
  }, [rows, columns, resetTrigger]);

  return (
    <canvas
      ref={canvasRef}
      width={columns * pixelSize}
      height={rows * pixelSize}
      onMouseLeave={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="pixel-grid-canvas"
    />
  );
};

export default PixelGridCanvas;
