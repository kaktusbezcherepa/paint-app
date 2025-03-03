import GridControlSize from "../../components/GridControlSize/GridControlSize";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import UniversalButton from "../../ui/UniversalButton";
import PixelControlSize from "../../components/GridControlSize/PixelControlSize/PixelControlSize";



interface GridProps {
  rows : number;
  columns: number;
  onRowsChange: (rows: number) => void;
  onColumnsChange: (columns : number) => void;
}

interface ColorProps {
  currentColor: string;
  onColorChange: (currentColor: string) => void;
}

interface ActionsProps {
  onReset: () => void;
  closeModal: (value: boolean) => void;
}

interface PixelProps {
  pixelSize: number,
  onPixelChange: (value: number) => void
}

interface ControlPanelProps {
  gridProps: GridProps;
  colorProps: ColorProps;
  actionsProps: ActionsProps;
  pixelProps: PixelProps
}
const ControlPanel: React.FC<ControlPanelProps> = ({
  gridProps,
  colorProps,
  actionsProps,
  pixelProps
}) => {
  return (
    <div>
      <UniversalButton
        onClose={() => actionsProps.closeModal(false)}
        buttonText="закрыть модалку"
      />
      <GridControlSize
        rows={gridProps.rows}
        columns={gridProps.columns}
        onRowsChange={gridProps.onRowsChange}
        onColumnsChange={gridProps.onColumnsChange}
      />
      <ColorSelector
        currentColor={colorProps.currentColor}
        onColorChange={colorProps.onColorChange}
      />
      <UniversalButton onReset={actionsProps.onReset} buttonText="Сбросить рисунок" />
      <PixelControlSize pixelSize={pixelProps.pixelSize} onPixelChangeSize={pixelProps.onPixelChange}/>
    </div>
  );
};

export default ControlPanel;
