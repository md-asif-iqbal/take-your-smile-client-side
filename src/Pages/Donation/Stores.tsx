import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
const Stores = () => {
  const stores = [
    {
      id: 1,
      img: "http://tanshcreative.com/heartness-lp-preview/assets/images/slide-img2.jpg",
      name: "Stories of hope",
      dis: "Identifying The Damage: The Wounds They Can't See",
    },
    {
      id: 2,
      img: "http://tanshcreative.com/heartness-lp-preview/assets/images/slide-img1.jpg",
      name: "Stories of hope",
      dis: "Teach children about water conservation",
    },
  ];
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-8/12"
      >
        <>
          {stores.map((item) => (
            <SwiperSlide key={item.id}>
              <div data-aos="fade-right" data-aos-duration="2400" className="card card-side overflow-x-hidden sm:overflow-x-hidden grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center">
                <img  className="h-96" src={item.img} alt="" />
                <div className="items-center font-mono">
                  <h2 data-aos="zoom-out-left" data-aos-duration="1800" className="text-primary text-2xl mb-4 font-semibold">
                    {item.name}
                  </h2>
                  <h2 data-aos="zoom-out-left" data-aos-duration="1600" className="text-secondary text-xl font-semibold">
                    {item.dis}
                  </h2>
                  <p data-aos="zoom-out-left" data-aos-duration="1400" className="text-secondary text-[18px] mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    dolores eius labore odio optio consequuntur laboriosam
                    facere consectetur accusantium debitis. Lorem, ipsum dolor...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Stores;
