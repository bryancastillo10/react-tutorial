/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContextC from "./ContextC.jsx";

const ContextB = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 border-2 bg-yellow-500 shadow-md">
      <h2 className="text-center font-bold text-black">Component B</h2>
      <ContextC />
    </div>
  );
};

export default ContextB;
