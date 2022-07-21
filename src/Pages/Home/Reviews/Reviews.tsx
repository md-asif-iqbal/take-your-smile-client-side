import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "./Reviews.css";
const Reviews = () => {
  const review = [
    {
      name: "Nelson Grii",
      id: 1,
      description:
        " I have truly enjoyed using Planning Pod to keep my event details in one central location, which definitely makes it easier for me to stay on track while planning events",
      address: "Bhola",
      img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Zara Alex",
      id: 2,
      description:
        "I have truly enjoyed using Planning Pod to keep my event details in one central location, which definitely makes it easier for me to stay on track while planning events",
      address: "Barisal",
      img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Travis Head",
      id: 3,
      description:
        " Planning Pod has completely streamlined our process of fielding reservation inquiries, booking events and invoicing customers. The website has everything we need with tremendous ease of access and excellent customer service.",
      address: "Khulna",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Kate Pretty",
      id: 4,
      description:
        "We love how the system makes it an easy transition from proposal to invoice, and we really like the added features",
      address: "Rajsahi",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
  ];
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
          {review.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center">
                <img className="w-72 h-80 mx-auto" src={item.img} alt="" />
                <div className="items-center font-mono">
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
