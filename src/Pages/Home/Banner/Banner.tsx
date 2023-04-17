import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import banner0 from '../../../Images/Banner/banner.jpeg';
import banner1 from '../../../Images/Banner/banner-2.jpg';
import banner2 from '../../../Images/Banner/banner-1.webp';
import banner3 from '../../../Images/Banner/banner-3.jpeg';
const Fade = require("react-reveal/Fade")
const Banner = () => {
  const banner = [
    {
      id: 1,
      img: banner0,
      title: "Corporate Events",
      dis: "Holiday Parties, Product Launches, Conferences, Team Building Workshops, and more!..",
      url: "/corporate"
    },
    {
      id: 2,
      img: banner2,
      title: "Social Events",
      dis: "From Seasonal Celebrations, Reunions, Parties, and more - Don't fear, Take Heart!",
      url: "/social"
    },
    {
      id: 3,
      img: banner1,
      title: "Wedding Events",
      dis: "Need help planning your wedding? With our event planning and unique event design expertise..",
      url: "/weddings"
    },
    {
      id: 4,
      img: banner3,
      title: "Non Profit Events",
      dis: "Have a non-profit walk or run to plan? Any non-profit event from award dinners to auctions.. ",
      url: "/nonprofit"
    }
  ]
  return (
    <div id='home'>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
      >

        {
          banner.map(item => (<SwiperSlide key={item.id}>
            <div className='relative border-b-8 border-primary'>
              <img src={item.img} alt="" className='w-full h-screen' />
              <div className="banner"> </div>
              <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                <Fade bottom duration={2000}>
                  <div className="">
                    <h1 className="md:text-5xl font-bold font-mono text-white">
                      {item.title}
                    </h1>
                    <br />
                    <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>{item.dis}</h1>
                    <div className='mt-4'>
                      <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                      <button className='donateBtn font-mono uppercase'><Link to={item.url}>Get Planning</Link></button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </SwiperSlide>))
        }
      </Swiper>
    </div>
  );
};

export default Banner;