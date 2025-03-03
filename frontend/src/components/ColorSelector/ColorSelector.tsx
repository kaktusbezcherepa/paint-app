import React from "react";
import "./ColorSelector.css";
import useControlledInput from "../../hooks/useControlledInput";

interface ColorSelectorProps {
  currentColor: string;
  onColorChange: (currentColor: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ currentColor, onColorChange }) => {
  const { value: inputColor, onChange: handleInputChange } = useControlledInput<string>({
    initialValue: currentColor,
    onValueChange: onColorChange,
    validationType: "hexColor",
  });

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    onColorChange(newColor); 
  };

  return (
    <div className="color__selector">
      <label>
        Цвет:
        <div className="color__selector__container">
          <input
            className="color__selector__input color__selector__text-input"
            type="text"
            value={inputColor}
            onChange={handleInputChange}
            placeholder="#FFFFFF"
          />
          <input
            className="color__selector__input color__selector__color-input"
            type="color"
            value={inputColor}
            onChange={handleColorPickerChange}
          />
        </div>
      </label>
    </div>
  );
};

export default ColorSelector;