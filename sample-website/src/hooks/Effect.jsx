/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// UseEffect() = is a side code implementation
// useEffect (function,[dependencies])
// if no dependencies added, you can have a return statement to clean up the code.

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `My Counter Program: ${count}`;
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function minusCount() {
    setCount((c) => c - 1);
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 bg-purple-300 rounded-lg shadow-md">
      <p>Count: {count}</p>
      <button
        className="btn bg-green-500 hover:bg-blue-300 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:text-black"
        onClick={addCount}
      >
        Add
      </button>
      <button
        className="btn bg-red-500 hover:bg-yellow-300 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:text-black"
        onClick={minusCount}
      >
        Subtract
      </button>
      <br />
    </div>
  );
};

export default Effect;
