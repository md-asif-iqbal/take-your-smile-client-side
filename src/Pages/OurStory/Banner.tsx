import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  const banner = [
    {
      id: 2,
      img: "https://static.showit.co/3200/9cWMqFNpTTmKdxEYyw6mGA/101638/laura_mike_hero_image.jpg",
    },
    {
      id: 3,
      img: "https://static.showit.co/3200/7rBxPrszQQKV9Si_Z9xVUg/101638/lizmichaelpreviews52.jpg",
    },
    {
      id: 4,
      img: "https://static.showit.co/1600/nE-9gJCZTVaCtiEp96GuqA/101638/a_and_m-2021previews-0104.jpg",
    },
  ];
  return (
    <div>
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
        <>
          {banner.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="banner-img">
                <img className="h-screen w-full" src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Banner;
