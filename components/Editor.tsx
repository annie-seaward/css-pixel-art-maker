"use client";
import React, { useState } from "react";
import { CirclePicker } from "react-color";
import DrawingGrid from "@/components/DrawingGrid";

const Editor = () => {
  const [gridSize, setGridSize] = useState<GridSize>({
    width: 16,
    height: 16,
  });
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [selectedColor, setColor] = useState<string>("#f44336");

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl mb-4">CSSPixelify</h1>
      <h2 className="text-2xl mb-4">
        Draw pixel art and generate single div CSS art!
      </h2>
      {showGrid ? (
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => setShowGrid(false)}
            className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
          >
            Reset Grid
          </button>
          <CirclePicker
            color={selectedColor}
            onChangeComplete={(newColor: { hex: string }) =>
              setColor(newColor.hex)
            }
            className=""
          />
          <DrawingGrid gridSize={gridSize} selectedColor={selectedColor} />
          <div className="flex justify-center gap-8">
            <button
              onClick={() => console.log("Generate CSS Art")}
              className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
            >
              Copy CSS to Clipboard
            </button>
            <button
              onClick={() => console.log("Generate CSS Art")}
              className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
            >
              Download index.html
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-2">Enter Panel Dimensions:</h2>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <span>Width</span>
              <input
                type="number"
                defaultValue={gridSize.width}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setGridSize({ ...gridSize, width: +e.target.value });
                }}
                className="h-20 w-20 text-3xl text-center bg-slate-950 border-2 border-rose-500 rounded-xl pl-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-center">
              <span>Height</span>
              <input
                type="number"
                defaultValue={gridSize.height}
                onChange={(e) => {
                  setGridSize({ ...gridSize, height: +e.target.value });
                }}
                className="h-20 w-20 text-3xl text-center bg-slate-950 border-2 border-rose-500 rounded-xl pl-3 focus:outline-none"
              />
            </div>
          </div>
          <button
            onClick={() => setShowGrid(true)}
            className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md"
          >
            Start Drawing
          </button>
        </div>
      )}
    </div>
  );
};

export default Editor;
