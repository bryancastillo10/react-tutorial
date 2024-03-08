/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "../components/Card.jsx";
import UserGreeting from "../components/UserGreeting.jsx";

import PropTypes from "prop-types";

const Hooks = ({ username, setUserName }) => {
  const updateName = () => {
    setUserName("SpongeBob");
  };

  return (
    <>
      <Card name={username} />
      <div className="ml-5 flex justify-center">
        <button
          className="bg-blue-400 rounded-md p-2 hover:bg-yellow-300 xl:duration-125 "
          onClick={updateName}
        >
          Change Name
        </button>
      </div>
    </>
  );
};

Hooks.propTypes = {
  username: PropTypes.string,
  setUserName: PropTypes.func,
};
export default Hooks;
