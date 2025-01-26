import ControlPanel from "./widget/ControlPanel/ControlPanel";
import { useState } from "react";
import PixelGridCanvas from "./widget/PixelGridCanvas/PixelGridCanvas";
import UniversalButton from "./ui/UniversalButton";
import "./App.css";

const App: React.FC = () => {
  const [rows, setRows] = useState(16);
  const [columns, setColumns] = useState(16);
  const [pixelSize, setPixelSize] = useState(25);
  const [currentColor, setCurrentColor] = useState("#000");
  const [resetTrigger, setRestTrigger] = useState(0);
  const [isOpenModalTools, setIsOpenModalTools] = useState(false);

  const handleReset = () => {
    setRestTrigger((prev) => prev + 1);
  };

  return (
    <div className="app__container">
      {/* <PixelGrid
        resetTrigger={resetTrigger}
        currentColor={currentColor}
        rows={rows}
        columns={columns}
      /> */}
      <PixelGridCanvas
        resetTrigger={resetTrigger}
        currentColor={currentColor}
        rows={rows}
        columns={columns}
        pixelSize={pixelSize}
      />
      <div className="control__panel__container">
        {isOpenModalTools ? (
          <div className="">
            <ControlPanel
              gridProps={{
                rows, 
                columns,
                onRowsChange: setRows,
                onColumnsChange: setColumns
              }}
              colorProps={{
                currentColor,
                onColorChange: setCurrentColor
              }}
              actionsProps={{
                onReset: handleReset,
                closeModal: (value) => setIsOpenModalTools(value)
              }}
              pixelProps={{
                pixelSize,
                onPixelChange: setPixelSize
              }}
            />
          </div>
        ) : (
          <div className="modal__tools">
            <UniversalButton
              buttonText="open tools"
              onClose={() => setIsOpenModalTools(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
