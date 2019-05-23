import React from "react";

const Rocket = ({ name, launch }) => {
  return (
    <div>
      {name} {launch ? "🚀" : "🛳️"}
    </div>
  );
};

export default Rocket;
