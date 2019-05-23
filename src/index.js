import React, { useReducer, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CheckList from "./CheckList";
import CountDown from "./CountDown";
import Rocket from "./Rocket";

const reduce = (state, action) => {
  const { status } = state;
  console.log("Action: ", action);
  switch (action) {
    case "STOP":
      switch (status) {
        case "LAUNCHED":
          return state;
        case "READY":
          return state;
        default:
          return { status: "STOPPED" };
      }
    case "COMPLETE_CHECK":
      return { status: "COUNTING" };
    case "LAUNCH": {
      return { status: "LAUNCHED" };
    }
    default:
      return state;
  }
};

const initialState = {
  status: "READY"
};

const App = () => {
  const [{ status }, dispatch] = useReducer(reduce, initialState);
  console.log("Status: ", status);
  const onCheckListChange = useCallback(
    complete => dispatch(complete ? "COMPLETE_CHECK" : "STOP"),
    []
  );
  return (
    <div className="App">
      <CheckList onChange={onCheckListChange} />
      <CountDown command={status} onLaunch={() => dispatch("LAUNCH")} />
      <Rocket name="Falcon 9" launched={status === "LAUNCHED"} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
