import PropTypes from "prop-types";

import { useState } from "react";
import Hooks from "./hooks/Hooks.jsx";
import UserGreeting from "./components/UserGreeting.jsx";
import Form from "./components/Form.jsx";
import ColorPicker from "./hooks/ColorPicker.jsx";

function App() {
  const [username, setUserName] = useState("Guest");

  return (
    <>
      <UserGreeting
        isLoggedIn={true}
        username={username}
        setUserName={setUserName}
      />
      <Hooks username={username} setUserName={setUserName} />
      <Form />

      <ColorPicker />
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
