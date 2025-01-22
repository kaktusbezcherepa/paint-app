import { useEffect } from 'react';
import { useState } from "react";
import handleInput from '../../helpers/handleInput';
import "./GridControlSize.css"

interface GridControlsSizeProps {
    rows: number;
    columns: number;
    onRowsChange: (rows: number) => void;
    onColumnsChange: (columns : number) => void;
}


const GridControlSize: React.FC<GridControlsSizeProps> = ({ rows, columns, onRowsChange, onColumnsChange }) => {

  const [inputRows, setInputRows] = useState(rows.toString())
  const [inputColumns, setInputColumns] = useState(columns.toString())



  useEffect(() => {
    setInputRows(rows.toString())
  }, [rows])

  useEffect(() => {
    setInputColumns(columns.toString())
  }, [columns])

  return (
    <div className='controls'>
        <label>
            Размер Сетки
            <input type='text'
            value={inputRows}
            onChange={(e) => handleInput(e.target.value, setInputRows, onRowsChange)}
            />
        </label>
        <label>
            Количество Колонок
            <input type="text" 
            value={inputColumns}
            onChange={(e) => handleInput(e.target.value, setInputColumns, onColumnsChange)}

            />
        </label>
    </div>
  )
}

export default GridControlSize
