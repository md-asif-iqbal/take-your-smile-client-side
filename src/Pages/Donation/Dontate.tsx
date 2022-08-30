import React from "react";
import { FiGift } from "react-icons/fi";
import Payment from "./Payment";

const Dontate = () => {
  return (
    <div className="backgr py-10 relative">
      <div className="banner"> </div>
      <div className="flex items-center justify-around don-title">
        <h1 
        data-aos="fade-right"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="2200"
        className="text-2xl flex items-center gap-4 font-mono text-white font-bold">
          <FiGift className="text-6xl" /> Donate now to change life forever
        </h1>

        <button 
        data-aos="fade-left"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="2200"
        className="donateBtn">Donate Now</button>
      </div>
    </div>
  );
};

export default Dontate;
