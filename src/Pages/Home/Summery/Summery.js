import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { FaUserEdit } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
const Busniess = () => {
  const Fade = require("react-reveal/Fade")
  return (
    <div className="relative">
      <Fade right duration={8500}>
        <h1 className="text-center font-mono text-2xl text-secondary mt-32 font-semibold">
          Our Busniess Summery
        </h1>
      </Fade>
      <Fade left duration={8500}>
        <h1 className="md:text-[80px] text-4xl absolute left-1/4 top-6 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Busniess Summery</h1>
      </Fade>
      <Fade left duration={5000}>
        <h1 className="text-center text-xl text-secondary mt-2 font-mono">
          Executive summary should highlight all the key points of Our business
        </h1>
      </Fade>


      <div className="grid gap-10 md:gap-10 lg:grid-cols-4 md:grid-cols-2 md:px-4 mx-auto md:w-10/12 mt-20 font-mono">
        <Fade left duration={4000} >
          <div className="mx-auto shadow-md shadow-primary w-64 md:w-72 h-44 rounded-2xl py-4">
            <h1 className="text-5xl text-primary ml-28">
              <FaUserEdit />
            </h1>
            <p className="text-secondary text-2xl font-bold py-2 text-center">
              Happy Couples
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="mx-auto w-7/12" style={{ height: 100 }}>
                  {isVisible ? (
                    <CountUp
                      className="text-4xl text-secondary font-semibold ml-12"
                      end={36}
                    />
                  ) : null}
                  <span className="text-3xl text-secondary">+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </Fade>
        <Fade top duration={6000} >
          <div className="mx-auto shadow-md shadow-primary w-64 md:w-72 h-44 rounded-2xl py-4">
            <h1 className="text-5xl text-primary ml-28">
              <BiDonateHeart />
            </h1>
            <p className="text-secondary text-2xl font-bold py-2 text-center">
              Customers Review
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="mx-auto w-9/12" style={{ height: 100 }}>
                  {isVisible ? (
                    <CountUp
                      className="text-4xl text-secondary font-semibold ml-20"
                      end={21}
                    />
                  ) : null}
                  <span className="text-3xl text-secondary">+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </Fade>
        <Fade bottom duration={6000} >
          <div className="mx-auto shadow-md shadow-primary w-64 md:w-72 h-44 rounded-2xl py-4">
            <h1 className="text-5xl text-primary ml-28">
              <GiLovers />
            </h1>
            <p className="text-secondary text-2xl font-bold py-2 text-center">
              Complete Wedding
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="mx-auto w-10/12" style={{ height: 100 }}>
                  {isVisible ? (
                    <CountUp
                      className="text-4xl text-secondary font-semibold ml-20"
                      end={28}
                    />
                  ) : null}
                  <span className="text-3xl text-secondary">+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </Fade>
        <Fade right duration={6500} >
          <div className="mx-auto shadow-md shadow-primary w-64 md:w-72 h-44 rounded-2xl py-4">
            <h1 className="text-5xl text-primary ml-28">
              <BsBookmarkHeart />
            </h1>
            <p className="text-secondary text-2xl font-bold py-2 text-center">
              Event Organized
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="ml-4" style={{ height: 100 }}>
                  {isVisible ? (
                    <CountUp
                      className="text-4xl text-secondary font-semibold ml-24"
                      end={90}
                    />
                  ) : null}
                  <span className="text-3xl text-secondary">+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Busniess;
