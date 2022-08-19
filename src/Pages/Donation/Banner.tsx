import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Style.css";
import NavBar from "../shared/NavBar/NavBar";
const Banner = () => {
  const banner = [
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Prottasha for happly life",
      dis: "We Give A Helping Hand For Happy Life",
    },
    {
      id: 3,
      img: "http://themeatelier.net/site-templates/prottasha/img/hero/homeless.jpg",
      title: "Prottasha for homeless peoples",
      dis: "We Give A Helping Hand For Happy Life",
    },
    {
      id: 4,
      img: "http://themeatelier.net/site-templates/prottasha/img/hero/women.jpg",
      title: "Prottasha for hopeless people",
      dis: "We Give A Helping Hand For Happy Life",
    },
  ];
  return (
    <div>
      <NavBar />
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
              <div className="banner-img relative ">
                <div className="title">
                  <h1 className="font-mono font-bold text-2xl">{item.title}</h1>
                  <div className="borderLine"> </div>
                </div>
                <img className="h-screen w-full" src={item.img} alt="" />
                <div className="banner"> </div>
                <div className="dis">
                  <h1 className="font-mono text-white text-center font-bold text-4xl">{item.dis}</h1>
                  <div className="ml-40 mt-4">
                    <button className="exploreBtn mr-10 font-mono">Explore Now</button>
                    <button className="donateBtn font-mono">Donate Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Banner;
