import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "./Reviews.css";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "../../shared/Loading/Loading";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/reviews";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  if (reviews.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="img overflow-x-hidden sm:overflow-x-hidden">
      <h1
        data-aos="fade-up"
        data-aos-easing="gradient(0,0,1000)"
        data-aos-duration="2000"
        className="text-center text-xl text-secondary mt-36 font-semibold font-mono"
      >
        Customers Reviews
      </h1>

      <h1
        data-aos="fade-up"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="2200"
        className="text-center text-3xl capitalize text-primary font-semibold font-mono"
      >
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
              <ReviewCard item={item}></ReviewCard>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Reviews;
