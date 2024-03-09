import PropTypes from "prop-types";

import { useState } from "react";

//Functional Components
import UserGreeting from "./components/UserGreeting.jsx";
import Form from "./components/Form.jsx";
import ObjectUpdate from "./components/ObjectUpdate.jsx";
import ArrayUpdate from "./components/ArrayUpdate.jsx";

//Hook Components
import Hooks from "./hooks/Hooks.jsx";
import ColorPicker from "./hooks/ColorPicker.jsx";
import Effect from "./hooks/Effect.jsx";
import Ref from "./hooks/Ref.jsx";

//UseContext Demo
import ContextA from "./hooks/ContextA.jsx";

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
      <ObjectUpdate />
      <ArrayUpdate />
      <Effect />
      <ContextA />
      <Ref />
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
