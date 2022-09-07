import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Fade = require("react-reveal/Fade")

const Banner = () => {
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/H4D8BLG/img1.jpg" alt=""  className=' '/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                  <h1 className="md:text-4xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize our Corporate Events.
                    <br/>
                    <button className=' btn lg:px-5 btn-rose '> Learn More</button>
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='relative'>
          <img src="https://i.ibb.co/SxNNYMk/img2.jpg" alt=""  className=''/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize our Non-Profit Events.
                    <br/>
                    <button className=' btn lg:px-5 btn-rose '> Learn More</button>
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
            
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/SfJvM8P/img3.jpg" alt=""  className=''/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize our Weddings Events.
                    <br/>
                    <button className=' btn lg:px-5 btn-rose '> Learn More</button>
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/SxNNYMk/img2.jpg" alt=""  className=''/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize our social Events.
                    <br/>
                    <button className=' btn lg:px-5 btn-rose '> Learn More</button>
                  </h1>
                 
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;