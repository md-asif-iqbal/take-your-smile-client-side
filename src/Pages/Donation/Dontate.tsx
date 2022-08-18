import React from "react";
import { FiGift } from "react-icons/fi";
import Payment from "./Payment";

const Dontate = () => {
  return (
    <div className="backgr py-10 relative">
      <div className="banner"> </div>
      <div className="flex items-center justify-around don-title">
        <h1 className="text-2xl flex items-center gap-4 font-mono text-white font-bold">
          <FiGift className="text-6xl" /> Donate now to change life forever
        </h1>

        <button className="donateBtn">Donate Now</button>
      </div>
    </div>
  );
};

export default Dontate;
