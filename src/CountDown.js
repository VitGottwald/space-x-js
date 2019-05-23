import React, { useState, useEffect } from "react";

const countDownInterval = 5;

const CountDown = ({ command, onLaunch }) => {
  const [timeToLaunch, setTimeToLaunch] = useState(countDownInterval);

  useEffect(() => {
    switch (command) {
      case "COUNTING":
        if (timeToLaunch > 0) {
          const timerId = setTimeout(() => {
            setTimeToLaunch(timeToLaunch - 1);
          }, 1000);
          return () => clearInterval(timerId);
        } else {
          onLaunch();
          return;
        }
      default:
        return;
    }
  }, [command, timeToLaunch, onLaunch]);

  return <div>{timeToLaunch}</div>;
};

export default CountDown;
