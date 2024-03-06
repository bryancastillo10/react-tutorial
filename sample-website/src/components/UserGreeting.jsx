/* eslint-disable no-unused-vars */
import React from "react";

import PropTypes from "prop-types";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <div className="bg-green-400 flex-auto">
      <h2 className="ml- font-sans text-center">
        Welcome! You are logged in as {props.username}
      </h2>
    </div>
  );
  const notLoggedIn = (
    <div className="bg-red-400 flex-auto">
      <h2 className="ml-1 font-mono text-center text-white">
        Sorry you are not logged in. Please try again.
      </h2>
    </div>
  );

  //Render
  return <div>{props.isLoggedIn ? welcomeMessage : notLoggedIn}</div>;
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

export default UserGreeting;
