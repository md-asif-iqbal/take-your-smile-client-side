// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {  Navigation, Autoplay } from "swiper";

export default function Sponsorship() {
   
  return (
    <div className="p-10 bg-white">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 30,

            }, 
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            }
          }}
      >
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor11.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide> 
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor08.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide> 
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor02.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide>  
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor03.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide>
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor04.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide>
        <SwiperSlide><img src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor05.png" alt="" title="Hi" className="opacity-30 hover:opacity-100 delay-75" /></SwiperSlide>
        
     
      </Swiper>
    </div>
  );
}
