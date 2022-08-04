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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = "https://secure-escarpment-79738.herokuapp.com/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="background img">
      <h1 className="text-center text-xl text-secondary mt-36 font-semibold font-mono">
        Customers Reviews
      </h1>

      <h1 className="text-center text-3xl capitalize text-primary font-semibold font-mono">
        What Our Customers Says
      </h1>
      {loading && (
        <div className="mt-20">
          <Loading></Loading>
        </div>
      )}
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
              <ReviewCard item={item} Loading={Loading}></ReviewCard>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Reviews;
