import { useEffect } from "react";
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
  
  
  const { value: inputRows, onChange: handleRowsChange } = useControlledInput(
    rows.toString(),
    onRowsChange, 
    1,
    30
  );
  const { value: inputColumns, onChange: handleColumnsChange } =
    useControlledInput(columns.toString(), onColumnsChange, 1, 30);
  
  
    useEffect(() => {
    console.log(inputRows);
  });

  return (
    <div className="controls">
      <label>
        Размер Сетки
        <input type="text" value={inputRows} onChange={handleRowsChange} />
      </label>
      <label>
        Количество Колонок
        <input
          type="text"
          value={inputColumns}
          onChange={handleColumnsChange}
        />
      </label>
    </div>
  );
};

export default GridControlSize;
