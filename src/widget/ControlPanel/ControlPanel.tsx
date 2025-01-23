import React, { useEffect } from 'react'
import GridControlSize from '../../components/GridControlSize/GridControlSize'
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import UniversalButton from '../../ui/UniversalButton';

interface ControlPanelProps {
    currentColor: string;
    rows: number;
    columns: number;
    onRowsChange: (rows: number) => void;
    onColumnsChange: (columns: number) => void;
    onColorChange: (currentColor: string) => void;
    onReset: () => void;
    closeModal: (value: boolean) => void;
  }

const ControlPanel: React.FC<ControlPanelProps> = ({ 
    rows, 
    columns, 
    onColumnsChange, 
    onRowsChange,
    currentColor,
    onColorChange,
    onReset,
    closeModal
}) => {

useEffect(() => {
  console.log(rows)
}, [rows])

  return (
    <div>
      <UniversalButton onClose={() => closeModal(false)} buttonText='закрыть модалку'/> 
      <GridControlSize 
      rows={rows}
      columns={columns}
      onRowsChange={onRowsChange}
      onColumnsChange={onColumnsChange}
      />
      <ColorSelector  currentColor={currentColor} onColorChange={onColorChange}/>
      <UniversalButton onReset={onReset} buttonText='Сбросить рисунок'/> 
    </div>
  )
}

export default ControlPanel
