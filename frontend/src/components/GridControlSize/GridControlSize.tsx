import React from "react";
import useControlledInput from "../../hooks/useControlledInput";
import "./GridControlSize.css";

interface GridControlsSizeProps {
  rows: number;
  columns: number;
  onRowsChange: (rows: number) => void;
  onColumnsChange: (columns: number) => void;
}

const GridControlSize: React.FC<GridControlsSizeProps> = ({
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
}) => {
  const { value: inputRows, onChange: handleRowsChange } = useControlledInput<number>({
    initialValue: rows.toString(),
    onValueChange: onRowsChange,
    validationType: "number", 
    min: 1,
    max: 30,
  });

  const { value: inputColumns, onChange: handleColumnsChange } = useControlledInput<number>({
    initialValue: columns.toString(),
    onValueChange: onColumnsChange,
    validationType: "number",
    min: 1,
    max: 30,
  });

  return (
    <div className="controls">
      <label>
        Размер Сетки
        <input type="number" value={inputRows} onChange={handleRowsChange} />
      </label>
      <label>
        Количество Колонок
        <input type="number" value={inputColumns} onChange={handleColumnsChange} />
      </label>
    </div>
  );
};

export default GridControlSize;