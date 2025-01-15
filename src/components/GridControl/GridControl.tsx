import React from 'react'


interface GridControlsProps {
    rows: number;
    columns: number;
    onRowsChange: (rows: number) => void;
    onColumnsChange: (columns : number) => void;
}


const GridControl: React.FC<GridControlsProps> = ({ rows, columns, onRowsChange, onColumnsChange }) => {
  return (
    <div className='controls'>
        <label>
            Размер Сетки
            <input type='number'
            value={rows}
            onChange={(e) => onRowsChange(Number(e.target.value))}
            min={4}
            max={30}
            />
        </label>
        <label>
            Количество Колонок
            <input type="number" 
            value={columns}
            onChange={(e) => onColumnsChange(Number(e.target.value))}
            min={4}
            max={30}
            />
        </label>
    </div>
  )
}

export default GridControl
