import React from "react";
import CountUp from "react-countup";
const Summery = () => {
  return (
    <div className="business-bg font-mono md:h-40">
      <div className="grid gap-10 md:gap-10 lg:grid-cols-4 md:grid-cols-2 md:px-4 mx-auto md:w-10/12 mt-20 items-center">
        <div className="mt-8 hidden md:block">
          <p className="text-white text-2xl font-bold pt-2 text-center">
            Happy Couples
          </p>
          <div className="mx-auto w-7/12" style={{ height: 100 }}>
            <CountUp
              className="text-[35px] font-bold text-white ml-8"
              end={332}
            />
            <span className="text-5xl text-white font-semibold">+</span>
          </div>
        </div>
        <div className="mt-8 hidden md:block">
          <p className="text-white text-2xl font-bold pt-2 text-center">
            Customers Review
          </p>
          <div className="mx-auto w-7/12" style={{ height: 100 }}>
            <CountUp
              className="text-[35px] font-bold text-white ml-8"
              end={522}
            />
            <span className="text-5xl text-white font-semibold">+</span>
          </div>
        </div>
        <div className="mt-8 hidden md:block">
          <p className="text-white text-2xl font-bold pt-2 text-center">
            Wedding
          </p>
          <div className="mx-auto w-7/12" style={{ height: 100 }}>
            <CountUp
              className="text-[35px] font-bold text-white ml-8"
              end={452}
            />
            <span className="text-5xl text-white font-semibold">+</span>
          </div>
        </div>
        <div className="mt-8 hidden md:block">
          <p className="text-white text-2xl font-bold pt-2 text-center">
            Event Organized
          </p>
          <div className="mx-auto w-7/12" style={{ height: 100 }}>
            <CountUp
              className="text-[35px] font-bold text-white ml-8"
              end={822}
            />
            <span className="text-5xl text-white font-semibold">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
