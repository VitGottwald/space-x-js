import React, { useReducer, useCallback } from "react";

import CheckList from "./CheckList";
import CountDown from "./CountDown";
import Rocket from "./Rocket";

const reduce = (state, action) => {
  switch (action) {
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

const LaunchPad = () => {
  const [{ status }, dispatch] = useReducer(reduce, initialState);
  console.log("Status: ", status);
  const onCheckListChange = useCallback(
    complete => complete && dispatch("COMPLETE_CHECK"),
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

export default LaunchPad;
