import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
const Sponsher = () => {
  const Fade = require("react-reveal/Fade")
  const sponser = [
    {
      id: 1,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor11.png",
      img1: "https://i.ibb.co/khYMDzp/Jacobs-Engineering-Group-Logo-wine.png"
    },
    {
      id: 2,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor08.png",
      img1: "https://i.ibb.co/3vz7qTb/Kiewit-Corporation-Logo-wine.png"
    },
    {
      id: 3,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor02.png",
      img1: "https://i.ibb.co/M515czp/Nestl-Logo-wine.png"
    },
    {
      id: 4,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor03.png",
      img1: "https://i.ibb.co/72hv3Pz/Pizza-Hut-Logo-wine.png"
    },
    {
      id: 5,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor04.png",
      img1: "https://i.ibb.co/d27gpT9/SNC-Lavalin-Logo-wine.png"
    },
    {
      id: 6,
      img: "https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor05.png",
      img1: "https://i.ibb.co/xs7dmgz/The-Cheesecake-Factory-Logo-wine.png"
    },
    {
      id: 7,
      img: "https://i.ibb.co/7brwm52/Domino-s-Pizza-Logo-wine.png",
      img1: "https://i.ibb.co/L60h1b1/Booking-Holdings-Logo-wine.png"
    },
    {
      id: 8,
      img: "https://i.ibb.co/pRddpsm/Kayak-com-Logo-wine.png",
      img1: "https://i.ibb.co/7v5FYwV/Trainline-Logo-wine.png"
    }
  ]

  return (
    <div className='relative w-full'>
      <Fade left duration={8500}>
        <h1 className="md:text-[90px] text-4xl absolute -z-10 md:left-1/3 top-8 text-[#F7F7F7] text-center font-mono font-bold">Sponsorshif</h1>
      </Fade>
      <div className='w-10/12 mx-auto font-mono mt-36'>
        <h1 className='text-xl text-secondary font-semibold text-center mb-2'>Featured Sponsors</h1>
        <h1 className='text-2xl mb-20 text-secondary text-center'>We Work With the Best Partners</h1>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div>
            {
              sponser?.map(item => (<SwiperSlide>

                <div className='flex flex-col mx-auto pb-20 '>
                  <Fade top duration={6000}>
                    <div className='px-2 py-4 shadow-lg mr-6 border-t-4 border-[#0045F8] rounded-md'>
                      <img className='w-32 h-28 mx-auto' src={item.img} alt="" />
                    </div>
                  </Fade>
                  <Fade bottom duration={6000}>
                    <div className='px-2 py-4 shadow-lg mr-6 mt-10 border-t-4 border-[#0045F8] rounded-md'>
                      <img className='w-32 h-28 mx-auto' src={item.img1} alt="" />
                    </div>
                  </Fade>
                </div>
              </SwiperSlide>))
            }
      </div>
      <div className='md:w-56 w-5/12 mx-auto'>
        <button className='w-full mx-auto bg-primary py-4 text-white px-3 font-mono text-xl rounded-lg'> Become a Sponser</button>
      </div>

    </Swiper>
      </div >

    </div >
  );
};

export default Sponsher;