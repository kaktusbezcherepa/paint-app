import PixelGrid from "./widget/PixelGrid/PixelGrid";
import ControlPanel from "./widget/ControlPanel/ControlPanel";
import { useState } from "react";
import UniversalButton from "./ui/UniversalButton";
import "./App.css";

const App: React.FC = () => {
  const [rows, setRows] = useState(16);
  const [columns, setColumns] = useState(16);
  const [currentColor, setCurrentColor] = useState("#000");
  const [resetTrigger, setRestTrigger] = useState(0);
  const [isOpenModalTools, setIsOpenModalTools] = useState(false);

  const handleReset = () => {
    setRestTrigger((prev) => prev + 1);
  };

  return (
    <div className="app__container">
      <PixelGrid
        resetTrigger={resetTrigger}
        currentColor={currentColor}
        rows={rows}
        columns={columns}
      />
      <div className="control__panel__container">
        {isOpenModalTools ? (
            <div className="">
          <ControlPanel
          closeModal={() => setIsOpenModalTools(false)}
            onReset={handleReset}
            currentColor={currentColor}
            onColorChange={setCurrentColor}
            rows={rows}
            columns={columns}
            onColumnsChange={setColumns}
            onRowsChange={setRows}
          />
          </div>
        ) : (
          <div className="modal__tools">
            <UniversalButton buttonText="open tools" onClose={() => setIsOpenModalTools(true)}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
