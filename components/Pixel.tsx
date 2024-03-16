import React, { useState } from "react";

export const Pixel = ({
  selectedColor,
  handleColorChange,
}: {
  selectedColor: string;
  handleColorChange: () => void;
}) => {
  const [color, setColor] = useState<string>("#fff");
  return (
    <div
      onClick={() => {
        setColor(selectedColor);
        handleColorChange();
      }}
      style={{
        backgroundColor: color,
      }}
      className="h-5 w-5 border-black"
    />
  );
};
