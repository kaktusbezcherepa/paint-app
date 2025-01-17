import React from 'react'
import GridControl from '../components/GridControlSize/GridControlSize'
import ColorSelector from '../components/ColorSelector/ColorSelector';

interface ControlPanelProps {
    currentColor: string;
    rows: number;
    columns: number;
    onRowsChange: (rows: number) => void;
    onColumnsChange: (columns: number) => void;
    onColorChange: (currentColor: string) => void;
  }

const ControlPanel: React.FC<ControlPanelProps> = ({ 
    rows, 
    columns, 
    onColumnsChange, 
    onRowsChange,
    currentColor,
    onColorChange
}) => {

  return (
    <div>
      <GridControl 
      rows={rows}
      columns={columns}
      onRowsChange={onRowsChange}
      onColumnsChange={onColumnsChange}
      />
      <ColorSelector  currentColor={currentColor} onColorChange={onColorChange}/>
    </div>
  )
}

export default ControlPanel
