import React from "react";
import ReactDOM from "react-dom";
import CheckList from "./CheckList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CheckList onComplete={complete => console.log(complete)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
