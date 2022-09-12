import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { FiBookmark } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import Time from "./Time";
const OurLiveEvent = () => {
  const Fade = require("react-reveal/Fade")
  const time = new Date();
  time.setSeconds(time.getSeconds() + 216000);
  const [liveEvent, setLiveEvent]: any = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLiveEvent(data));
  }, []);

  const reverse = [...liveEvent].reverse()
  return (
    <div className="relative">
      <Fade left duration={8500}>
        <h1 className="md:text-[120px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#F7F7F7] text-center font-mono font-bold">latest Events</h1>
      </Fade>
      <Fade left duration={8500}>
        <h1 className="text-xl text-center font-mono text-secondary font-semibold">Upcoming Events</h1>
      </Fade>
      <Fade right duration={8500}>
        <h1 className="text-4xl my-2 text-center font-mono text-secondary font-semibold">Latest Awesome Events</h1>
      </Fade>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          reverse.slice(0, 6).map((item: any) => (
            <SwiperSlide key={item._id}>
              <div>
                <Fade left duration={7500}>
                  <Time expiryTimestamp={time} />
                </Fade>
                <div className="w-6/12 mx-auto mb-28">
                  <div className="mx-auto w-10/12 mt-10">
                    <Fade top duration={7500}>
                      <img className="w-80 md:w-[600px] relative mx-auto" src={item.decrImg2} alt="" />
                    </Fade>
                    <Fade left duration={5500}>
                      <h1 className="md:absolute  md:top-32 left-1/3 bg-primary w-24  py-4 text-3xl px-4 font-bold text-white font-mono text-center rounded-lg"><FiBookmark className=" text-white ml-4" /> {item.date.slice(0, 6)}</h1>
                    </Fade>
                    <Fade right duration={6500}>
                      <div className="font-mono absolute shadow-xl rounded-xl bg-[#00000084] md:top-2/4 top-1/4 md:left-2/4 left-1/2 px-4 py-4 md:w-72 w-auto">
                        <h1 className="text-xl text-white font-semibold">{item.service}</h1>
                        <h1 className="text-xl mt-2 font-semibold text-white flex items-center gap-2"><BiTime /> {item.time}</h1>
                        <h1 className="text-xl my-1 text-white flex items-center gap-2 font-semibold"><AiTwotoneCalendar /> {item.date}</h1>
                        <h1 className="text-xl my-1 text-white flex items-center gap-2 font-semibold"><GoLocation /> {item.location}</h1>
                        <h1 className="text-xl mb-2 mt-1 text-white font-semibold">Package: {item.package}</h1>
                        <button className="btn btn-primary text-lg">Details</button>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default OurLiveEvent;