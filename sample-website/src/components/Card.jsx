/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Card = ({ name }) => {
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
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
