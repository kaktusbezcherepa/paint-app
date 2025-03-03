import React from "react";
import useControlledInput from "../../../hooks/useControlledInput";

interface PixelControlSizeProps {
    pixelSize: number;
    onPixelChangeSize: (size: number) => void
}

const PixelControlSize: React.FC<PixelControlSizeProps> = ({ pixelSize, onPixelChangeSize}) => {

    const { value, onChange } = useControlledInput(pixelSize.toString(), onPixelChangeSize, 10, 50)

  return (
    <div>
    <label>
      Размер пикселя:
      <input type="number" value={value} onChange={onChange} />
    </label>
  </div>
  )
}

export default PixelControlSize
