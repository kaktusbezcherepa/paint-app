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
    <div className='app__container'>   
      <PixelGrid
      resetTrigger={resetTrigger} 
      currentColor={currentColor} 
      rows={rows} 
      columns={columns}
      
      />
      <div className="control__panel__container">
      <ControlPanel
      onReset={handleReset}
      currentColor={currentColor}
      onColorChange={setCurrentColor} 
      rows={rows}
      columns={columns}
      onColumnsChange={setColumns}
      onRowsChange={setRows}
      />
      </div>
    </div>
  )
}

export default App
