// import { useState } from 'react'
import Card from "./components/Card.jsx";
import UserGreeting from "./components/UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bry" />
      <Card />
    </>
  );
}

export default App;
