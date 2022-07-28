import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "./Reviews.css";
import { useEffect, useState } from "react";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="background img">
      <h1 className="text-center text-xl text-secondary mt-36 font-semibold font-mono">
        Customers Reviews
      </h1>
      <h1 className="text-center text-3xl capitalize text-primary font-semibold font-mono">
        What Our Customers Says
      </h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-8/12"
      >
        <>
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center">
                <img className="w-72 h-80 mx-auto" src={item.img} alt="" />
                <div className="items-center font-mono">
                  <p>{item.status}</p>
                  <h2 className="text-secondary text-3xl font-semibold">
                    {item.name}, <span>{item.address}</span>
                  </h2>
                  <p className="text-secondary text-[18px] mt-4">
                    {item.description}...
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

export default Reviews;
