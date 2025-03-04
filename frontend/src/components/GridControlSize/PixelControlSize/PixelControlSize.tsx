import React from "react";
import useControlledInput from "../../../hooks/useControlledInput";

interface PixelControlSizeProps {
    pixelSize: number;
    onPixelChangeSize: (size: number) => void
}

const PixelControlSize: React.FC<PixelControlSizeProps> = ({ pixelSize, onPixelChangeSize}) => {

    const { value, onChange } = useControlledInput({
      initialValue: pixelSize.toString(),
      onValueChange: onPixelChangeSize,
      validationType: "number",
      min: 1,
      max: 30
    }
    )

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
