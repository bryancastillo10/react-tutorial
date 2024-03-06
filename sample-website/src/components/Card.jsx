import { useState } from "react";

const Card = () => {
  const [name, setName] = useState();

  const updateName = () => {
    setName("SpongeBob");
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border border-solid border-gray-500 rounded-[15px] shadow-2xl-gray p-[20px] m-[10px] text-center max-w-lg inline-block">
        <img
          className="h-auto mx-auto my-auto rounded-full mb-5"
          alt="profile picture"
          src="https://via.placeholder.com/150"
        />
        <h2 className="font-sans m-0 font-semibold">Name: {name}</h2>
        <p className="font-mono">I am an engineer and a chemist!</p>
      </div>
      <div className="ml-5">
        <button
          className="bg-blue-400 rounded-md p-2 hover:bg-yellow-300 xl:duration-125 "
          onClick={updateName}
        >
          Set Name
        </button>
      </div>
    </div>
  );
};

export default Card;
