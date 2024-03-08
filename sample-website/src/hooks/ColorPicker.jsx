/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="flex flex-col items-center fonts-sans">
        <h1 className="font-xl m-5">Color Picker</h1>
        <div
          className="flex w-52 h-52 justify-top items-top border-black rounded-3xl mb-6 duration-25 ease-in"
          style={{ backgroundColor: color }}
        >
          <p className="text-black font-extrabold">Selected Color: {color}</p>
        </div>
        <label className="mt-10 mb-10 text-2xl"> Please select a color: </label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-16 h-16 p-2"
        />
      </div>
    </>
  );
};

export default ColorPicker;
