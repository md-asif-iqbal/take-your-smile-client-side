import React from "react";
import Charts from "./Charts";
import ProgressBar from "react-animated-progress-bar";

const Card = () => {
  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-1 lg:grid-cols-3 w-11/12 items-center mx-auto">
      <div className="mx-auto">
        <div className="text-black font-semibold font-mono -mt-10 p-5 w-56 py-8 bg-[#D0E1E9] rounded-3xl">
          <p className="text-xl font-bold ml-4">New Cilents</p>
          <div className="flex mx-8 gap-4 items-center">
            <h1 className="text-4xl font-bold">51</h1>
            <p>+18.7%</p>
          </div>
        </div>
        <div className="text-black font-semibold font-mono  p-5 w-56 py-8 bg-[#D0E1E9] rounded-3xl mt-5">
          <p className="text-xl font-bold ml-4">Live Events</p>
          <div className="flex mx-8 gap-4 items-center">
            <h1 className="text-4xl">72</h1>
            <p>+40.3%</p>
          </div>
        </div>
      </div>
      <div className="">
        <Charts />
      </div>
      <div className="bg-blue-900   text-white w-72 -mt-8 ml-16 font-mono rounded-3xl">
        <h1 className="text-xl font-bold ml-8 mt-4">Promotion Status</h1>
        <p className="text-md font-bold ml-8 mt-2">In Progress</p>
        <div className="rounded-3xl -mt-6 ml-4">
          <ProgressBar
            width="360px"
            height="20px"
            rect
            fontColor="transparent"
            trackPathColor="transparent"
            percentage="70"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackBorderColor="grey"
            defColor={{
              excellent: "white",
            }}
          />
        </div>
        <p className="text-lg text-center -mt-6">Estimated Proccess</p>
        <p className="text-md text-center">4-5 days Busniess Days</p>
        <div className="w-8/12 mx-auto mt-4 mb-8">
          <button className="process-btn"> Full Status</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
