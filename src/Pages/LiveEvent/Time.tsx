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
        <div className="font-mono">
          <div className="text-primary mb-3 font-bold border-2 border-primary w-[80px] h-[80px] mx-1 mt-3 inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-4xl">{days}</span><span className="text-sm font-light text-center font-mono">DAYS</span></div>
          </div>
          <div className="text-primary mb-3 font-bold border-2 border-primary w-[80px] h-[80px] mx-1 mt-3 inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-4xl">{hours}</span><span className="text-sm font-light text-center font-mono">HOURS</span></div>
          </div>
          <div className="text-primary mb-3 font-bold border-2 border-primary w-[80px] h-[80px] mx-1 mt-3 inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-4xl">{minutes}</span><span className="text-sm font-light text-center font-mono">MINS</span></div>
          </div>
          <div className="text-primary mb-3 font-bold border-2 border-primary w-[80px] h-[80px] mx-1 mt-3 inline-block   rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-4xl">{seconds}</span><span className="text-sm font-light text-center font-mono">SECO</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
