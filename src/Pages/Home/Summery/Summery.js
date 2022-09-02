import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Summery = () => {
  const [summery, setSummery] = useState([]);
  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/summery";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSummery(data));
  }, []);
  return (
    <div className="business-bg font-mono md:h-40 overflow-x-hidden sm:overflow-x-hidden">
      <div
        data-aos="zoom-in"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="2200"
        className="grid gap-2 grid-cols-1 md:gap-10 lg:grid-cols-4 md:grid-cols-2 md:px-4 mx-auto  md:w-10/12 mt-20 items-center"
      >
        {summery.map((item) => (
          <div className="mt-8">
            <p className="text-white text-xl font-bold pt-2 text-center">
              {item.name}
            </p>
            <div className="mx-auto w-7/12" style={{ height: 100 }}>
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div className="mx-auto w-7/12" style={{ height: 100 }}>
                    {isVisible ? (
                      <CountUp
                        className="font-mono text-4xl mx-auto md:ml-2 ml-10 text-white font-semibold"
                        end={item.count}
                      />
                    ) : null}
                    <span className="text-4xl text-white">+</span>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summery;
