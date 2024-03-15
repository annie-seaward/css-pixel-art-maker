type Dimension = "width" | "height";

type GridSize = Record<Dimension, number>;

interface DrawingGridProps {
    gridSize: GridSize;
    selectedColor: string;
  }