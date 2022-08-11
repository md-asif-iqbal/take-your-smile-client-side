import React from "react";
import { useTimer } from "react-timer-hook";
const Time = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="text-6xl text-white py-6 font-mono">
          <span>{days}</span>:<span>{hours}:</span><span>{minutes}:</span>
          <span>{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Time;
