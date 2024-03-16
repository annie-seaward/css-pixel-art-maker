import React, { useRef, useState } from "react";
import { Pixel } from "./Pixel";
import { exportComponentAsPNG } from "react-component-export-image";
import { cssGenerator } from "@/lib/helpers";

export default function DrawingGrid({
  gridSize,
  selectedColor,
}: DrawingGridProps) {
  const gridRef = useRef<HTMLInputElement>(null);
  const [exportGrid, setExportGrid] = useState([...Array(gridSize.height)].map(e => Array(gridSize.width).fill(null)));

    const handleColorChange = (i: number, j: number) => {
        const newGrid = [...exportGrid];
        newGrid[i][j] = selectedColor;
        setExportGrid(newGrid);
    };

  return (
    <div className="flex flex-col items-center">
      <div ref={gridRef}>
        {exportGrid.map((row, i) => (
          <div key={i} className="flex flex-row">
            {row.map((_: string, j: number) => (
              <React.Fragment key={j}>
                <Pixel selectedColor={selectedColor} handleColorChange={() => handleColorChange(i, j)} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8">
        <button
          onClick={() => exportComponentAsPNG(gridRef)}
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
        >
          Export as PNG
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(cssGenerator(exportGrid))}
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
        >
          Copy CSS to Clipboard
        </button>
      </div>
    </div>
  );
}
