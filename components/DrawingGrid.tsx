import React from "react";

const DrawingGrid = ({ gridSize, selectedColor }: DrawingGridProps) => {
  return (
    <div>
      DrawingGrid
      <div>{gridSize.width}</div>
      <div>{gridSize.height}</div>
      <div>{selectedColor}</div>
    </div>
  );
};

export default DrawingGrid;
