import React from "react";
import story1 from "../../Assets/our-story/story.jpg";
import story2 from "../../Assets/our-story/story-1.jpg";
import story3 from "../../Assets/our-story/story-2.jpg";
import story5 from "../../Assets/our-story/story-4.jpg";
import story6 from "../../Assets/our-story/story-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "./OurStory.css";
const OurStory = () => {
  const ourStory = [
    {
      id: 1,
      img: story1,
      name: "Anisha and Tanvir",
      date: "12/04/2022",
    },
    {
      id: 2,
      img: story2,
      name: "Jihad and Nuha Akhter",
      date: "12/04/2022",
    },
    {
      id: 3,
      img: story3,
      name: "Faria and Imran Hosain",
      date: "12/04/2022",
    },
    {
      id: 5,
      img: story5,
      name: "Farjana and Taslim Mahmud",
      date: "12/04/2022",
    },
    {
      id: 6,
      img: story6,
      name: "Muslima and Ismail",
      date: "12/04/2022",
    },
  ];
  return (
    <div className="background img">
      <h1 className="text-center text-xl text-secondary mt-36 font-semibold font-mono">
        Our Story
      </h1>
      <h1 className="text-center text-3xl text-secondary font-semibold font-mono">Our Cusmoter Story</h1>
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
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-10/12"
      >
        <>
          {ourStory.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-11/12 mb-16 mt-20 md:h-64 shadow-primary banner1">
                <img className="image1 h-64 w-96" src={item.img} alt="" />
                <div className="story h-64 w-96">
                  <p className="text-xl font-mono ">{item.name}</p>
                  <button className="btn btn-primary mt-4">Details</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default OurStory;
