import PixelGrid from './components/PixelGrid/PixelGrid'
import GridControl from './components/GridControl/GridControl'
import './App.css'
import { useState } from 'react'

const App : React.FC = () => {
  const [rows, setRows] = useState(16)
  const [columns, setColumns] = useState(16)
  return (
    <>
      <GridControl 
      rows={rows}
      columns={columns}
      onRowsChange={setRows}
      onColumnsChange={setColumns}
      />
      <PixelGrid rows={rows} columns={columns} />
    </>
  )
}

export default App
