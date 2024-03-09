/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ArrayUpdate = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((prevFoods) => [...prevFoods, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 bg-green-100 rounded-lg shadow-md">
      <h2 className="font-bold">Food List</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter some food here" />
      <button
        className="btn bg-blue-500 hover:bg-yellow-300 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:text-black"
        onClick={handleAddFood}
      >
        Add Food
      </button>
    </div>
  );
};

export default ArrayUpdate;
