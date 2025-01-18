import PixelGrid from './components/PixelGrid/PixelGrid'
import ControlPanel from './widget/ControlPanel'
import { useState } from 'react'
import './App.css'


const App : React.FC = () => {
  const [rows, setRows] = useState(16)
  const [columns, setColumns] = useState(16)
  const [currentColor, setCurrentColor] = useState('#000')
  const [resetTrigger, setRestTrigger] = useState(0)

  const handleReset = () => {
    setRestTrigger(prev => prev + 1)
  }


  
  return (
    <>   
      <PixelGrid
      resetTrigger={resetTrigger} 
      currentColor={currentColor} 
      rows={rows} 
      columns={columns}
      
      />

      <ControlPanel
      onReset={handleReset}
      currentColor={currentColor}
      onColorChange={setCurrentColor} 
      rows={rows}
      columns={columns}
      onColumnsChange={setColumns}
      onRowsChange={setRows}
      />
    </>
  )
}

export default App
