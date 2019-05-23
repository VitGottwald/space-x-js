import React, { useState, useEffect } from "react";

const countDownInterval = 5;

const CountDown = ({ command, onLaunch }) => {
  const [timeToLaunch, setTimeToLaunch] = useState(countDownInterval);
  useEffect(() => {
    if (command === "COUNTING") {
      if (timeToLaunch > 0) {
        const timerId = setTimeout(() => {
          setTimeToLaunch(remaining => remaining - 1);
        }, 1000);
        return () => clearInterval(timerId);
      } else {
        onLaunch();
      }
    }
    if (command === "READY") {
      setTimeToLaunch(countDownInterval);
      return;
    }
    if (command === "STOP") {
      // do nothing
      return;
    }
  }, [command, timeToLaunch, onLaunch]);

  return <div>{timeToLaunch}</div>;
};

export default CountDown;
