/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { UserContext } from "./ContextA.jsx";

const ContextD = () => {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 border-2 bg-blue-500 shadow-md">
      <h1 className="text-center font-bold text-black">Component D</h1>
      <h2>{`Bye! ${user}`}</h2>
    </div>
  );
};

export default ContextD;
