import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Package.css";
const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Basic",
      dis: "Take Heart Events partners with local vendors to create fun, unique",
      price: 350,
      name: "Wedding Events Packages",
      name1: "Corporet Events Packages",
      name2: "Social Events Packages",
      name3: "Non-Profit Events Packages",
      weddpack: "Wedding Cake",
      allPack4: "Custom cake",
      allPack2: "Coffee & tea",
      allPack: "Photography",
      allPack1: "8 Items Foods..",
      allPack3: "Secuirty facility",
      eventTiming: "5 Hours reception",
      NonProfit: "Talent Show",
      Corporate: "Grand Sparklers",
      AttenMember: 200,
      food: "2-Entrée Buffet",
      food1: "Vegetable & Cheese",
      food2: "Choice 2 Types Hot/Cold",
      special: "Simple Lighting",
      special1: "No Includes",
    },
    {
      id: 1,
      price: 500,
      dis: "Take Heart Events partners with local vendors to create fun, unique",
      title: "Standard",
      name: "Wedding Events Packages",
      name1: "Corporet Events Packages",
      name2: "Social Events Packages",
      name3: "Non-Profit Events Packages",
      weddpack: "Wedding Cake",
      allPack4: "Custom cake",
      allPack2: "Coffee & tea",
      allPack: "Photography",
      allPack1: "12 Items Foods..",
      allPack3: "Secuirty facility",
      eventTiming: "6 Hours reception",
      NonProfit: "Talent Show",
      Corporate: "Grand Sparklers",
      AttenMember: 300,
      food: "4-Entrée Buffet",
      food1: "Vegetable & Cheese",
      food2: "Choice 4 Types Hot/Cold",
      special: "Specialty Lighting",
      special1: "No Includes",
    },
    {
      id: 1,
      dis: "Take Heart Events partners with local vendors to create fun, unique",
      price: 700,
      title: "Premium",
      name: "Wedding Events Packages",
      name1: "Corporet Events Packages",
      name2: "Social Events Packages",
      name3: "Non-Profit Events Packages",
      weddpack: "Wedding Cake",
      allPack4: "Custom cake",
      allPack2: "Coffee & tea",
      allPack: "Photography",
      allPack1: "15 Items Foods..",
      allPack3: "Secuirty facility",
      eventTiming: "7 Hours reception",
      NonProfit: "Talent Show",
      Corporate: "Grand Sparklers",
      AttenMember: 400,
      food: "6-Entrée Buffet",
      food1: "Vegetable & Cheese",
      food2: "Choice 8 types Hot/Cold",
      special: "Specialty Lighting",
      special1: "DJ & MC Services",
    },
  ];
  return (
    <div>
      <div className="mt-20 grid w-9/12 mb-10 mx-auto grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => (
          <div className="mx-auto even:bg-gradient-to-r from-[#001510] to-[#00bf8f] even:text-white odd:text-primary  text-center font-mono rounded-xl pt-8">
            <h1 className="text-2xl font-bold font-mono">{item.title}</h1>
            <h1 className="text-sm w-10/12 mx-auto font-mono py-3">
              {item.dis}
            </h1>
            <h1 className="text-5xl font-mono  pb-4">${item.price} </h1>
            <div className="ml-10 pff">
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3 ">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.eventTiming}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack4}
              </p>
              <p className="text-md font-mono  text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack1}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack2}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack3}
              </p>
              <p className="text-md font-mono text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food1}
              </p>
              <p className="text-md font-mono text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food2}
              </p>
            </div>
            <div className="w-9/12 mx-auto py-8">
              <button className="btn odd:bg-primary w-full text-white">
                <span> Book Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
