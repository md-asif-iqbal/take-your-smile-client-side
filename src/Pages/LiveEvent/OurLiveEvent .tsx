import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./LiveEvent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import Time from "./Time";
const OurLiveEvent = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 216000);
  const [liveEvent, setLiveEvent]: any = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLiveEvent(data));
  }, []);
  console.log(liveEvent);
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {liveEvent.map((item: any) => (
          <SwiperSlide>
            <section
              className="mb-10"
              style={{
                backgroundImage:
                  "url(" +
                  "https://jthemes.net/themes/html/harmony-event/assets/images/special-offer-bg.png" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "30px 0px",
              }}
            >
              <div className=" grid sm:grid-cols-1 items-center  md:grid-cols-3 w-10/12 mx-auto ">
                <img
                  data-aos="fade-right" data-aos-duration="2500"
                  src={item.decrImg1}
                  className="w-80 h-60 rounded-md"
                  alt=""
                />
                <div className="live-detail mt-4 md:mx-0 mx-auto">
                  <span data-aos="zoom-out-left" data-aos-duration="2200" className=" flex items-center gap-2">
                    <i className="bg-white p-1 rounded-3xl mb-2 text-orange-500">
                      <FiBookmark className=" bookmark-icon text-orange-500" />
                    </i>
                    <span className="mb-2 text-white font-semibold font-mono text-lg">
                      {item.service}
                    </span>
                  </span>
                  <h2 data-aos="zoom-out-left" data-aos-duration="2000" className="live-linek-name font-mono">
                    {item.date},{" "}
                    <span className="text-md mr-2">{item.time}</span>
                  </h2>
                  <hr data-aos="zoom-out-left" data-aos-duration="1800" className="mb-3 mt-3" />
                  <div>
                    <ul>
                      <li data-aos="zoom-out-left" data-aos-duration="1600">
                        <span className=" flex items-center gap-2">
                          <p className="bg-white p-1 rounded-3xl mb-2 text-orange-500">
                            <AiOutlineClockCircle />
                          </p>
                          <span className="mb-2 ml-1 text-white">
                            Start 5.00pm- 08.00pm
                          </span>
                        </span>
                      </li>
                      <li data-aos="zoom-out-left" data-aos-duration="1400">
                        <span className=" flex items-center gap-2">
                          <p className="bg-white p-1 rounded-3xl text-orange-500">
                            <GoLocation />
                          </p>
                          <span className="text-white ml-1">
                            Hotel Sheraton
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mx-auto mt-5 md:mb-3">
                  <div
                    data-aos="fade-down"
                    data-aos-duration="1400"
                  >
                    <Time expiryTimestamp={time} />
                  </div>
                  <div className="mx-auto">
                    <a

                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1400"
                      href="#_"
                      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                    >
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-6 py-3 transition-all ease-out bg-[#ffffff] rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-[#ffbe30]">
                          Event Details
                        </span>
                      </span>
                    </a>
                    <a

                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1000"
                      href="#_"
                      className="relative ml-4 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                    >
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-6 py-3 transition-all ease-out bg-[#ffffff] rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-[#ffbe30]">
                          Upcoming Event
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurLiveEvent;
