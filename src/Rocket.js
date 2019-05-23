import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const stateToBlocks = state => {
  switch (state) {
    case "READY":
      return { dragon: true, fire: false };
    case "LAUNCHED":
      return { dragon: true, fire: true };
    case "SEPARATED":
      return { dragon: false, fire: true };
    case "LANDED":
      return { dragon: false, fire: false };
    default:
      throw Error("Invalid State");
  }
};

const from = [0, 0, 0];
const stateToTarget = state => {
  switch (state) {
    case "LAUNCHED":
      return [200, 0, 0];
    default:
      return from;
  }
};

const Rocket = ({ name, launched }) => {
  const [state, setState] = useState("READY");
  const { dragon, fire } = stateToBlocks(state);
  const target = stateToTarget(state);
  const { xyz } = useSpring({
    from,
    xyz: target,
    onRest() {
      setState(state => {
        switch (state) {
          case "LAUNCHED":
            return "SEPARATED";
          case "SEPARATED":
            return "LANDED";
          default:
            return state;
        }
      });
    }
  });

  useEffect(() => {
    if (launched) {
      setState("LAUNCHED");
    }
  }, [launched]);

  return (
    <animated.div
      style={{
        transform: xyz.interpolate(
          (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
        )
      }}
    >
      {fire && "🔥"} {"🚀"} {dragon && "🐉"}
      <div>{name} </div>
    </animated.div>
  );
};

export default Rocket;
