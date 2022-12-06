// src/App.js
import React from "react";

function Child({ grandmaName }) {
  return <div>{grandmaName}</div>;
}

function Mother(props) {
  return <Child grandmaName={props.grandmaName} />;
}

function Grandma() {
  const name = "황사장";
  return <Mother grandmaName={name} />;
}

function App() {
  return <Grandma />;
}

export default App;
