/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const Ref = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component has been Rendered");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "green";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "green";
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 bg-gray-800 rounded-lg shadow-md">
      <button
        className="bg-blue-400 rounded-md p-1 hover:bg-yellow-300 xl:duration-125 "
        onClick={handleClick1}
      >
        Click Me 1!
      </button>
      <input ref={inputRef1} />

      <button
        className="bg-blue-400 rounded-md p-1 hover:bg-yellow-300 xl:duration-125 "
        onClick={handleClick2}
      >
        Click Me 2!
      </button>
      <input ref={inputRef2} />

      <button
        className="bg-blue-400 rounded-md p-1 hover:bg-yellow-300 xl:duration-125 "
        onClick={handleClick3}
      >
        Click Me 3!
      </button>
      <input ref={inputRef3} />
    </div>
  );
};

export default Ref;
