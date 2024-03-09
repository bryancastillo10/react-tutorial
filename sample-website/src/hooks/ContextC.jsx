/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { UserContext } from "./ContextA.jsx";
import ContextD from "./ContextD.jsx";

const ContextC = () => {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 border-2 bg-green-500 shadow-md">
      <h1 className="text-center font-bold text-white">Component C</h1>
      <h2>{`Hello again, ${user}`}</h2>
      <ContextD />
    </div>
  );
};

export default ContextC;
