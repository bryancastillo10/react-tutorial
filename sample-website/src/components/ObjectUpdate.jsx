/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ObjectUpdate = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "HiAce",
  });

  function handleYearChange(e) {
    const newYear = parseInt(e.target.value);
    setCar((prevCar) =>
      newYear >= 2010 && newYear <= 2025
        ? { ...prevCar, year: newYear }
        : prevCar
    );
  }
  function handleMakeChange(e) {
    setCar((prevCar) => ({ ...prevCar, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((prevCar) => ({ ...car, model: e.target.value }));
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 bg-blue-100 rounded-lg shadow-md">
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
};

export default ObjectUpdate;
