import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import social1 from "../../Images/Social1.avif";
import social2 from "../../Images/Social2.avif";
import social3 from "../../Images/Social3.avif";
import { AiOutlineHeart } from "react-icons/ai";
import RecentEvents from "../RecentEvents/RecentEvents";
import { Link, useNavigate } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import PageTitle from "../shared/PageTitle/PageTitle";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const NonProfit = () => {
  const [nonPropit, setnonPropit] = useState([]);

  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/nonprofit";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnonPropit(data));
  }, []);
  const navigate = useNavigate();
  const ConcertEvents = (item) => {
    navigate(`/concert/${item}`);
  };

  const ExposEvents = (item) => {
    navigate(`/fairs/${item}`);
  };

  const Fundrasing = (item) => {
    navigate(`/Fundrasing/${item}`);
  };

  const WelcomeHomeEvents = (item) => {
    navigate(`/homeEvent/${item}`);
  };

  const PaintJam = (item) => {
    navigate(`/paintJam/${item}`);
  };
  return (
    <div className="bg-primary-content overflow-x-hidden sm:overflow-x-hidden">
      <NavBar></NavBar>
      <PageTitle title="Non-profit Event" />
      {/* <img className='w-full' src={banner} alt="" /> */}
      <div className="banner-nonprofit pt-8">
        <h1 data-aos="zoom-in"
          data-aos-easing="gradient(0,0,1200)"
          data-aos-duration="2000"
          className="text-3xl lg:text-6xl align-middle  text-center font-semibold "
          style={{
            marginTop: "200px",
            paddingBottom: "200px",
            color: "white",
          }}
        >
          NON-PROFIT EVENTS
        </h1>
      </div>
      <div className=" w-3/5 mx-auto my-20">
        <h3 data-aos="fade-up"
          data-aos-easing="gradient(0,0,1000)"
          data-aos-duration="1700"
          style={{ lineHeight: "44px", wordSpacing: "4px" }}
          className="text-2xl lg:text-2xl align-middle  text-center  font-semibold text-secondary"
        >
          Non-profit events are one of our biggest passions and we have a
          variety of experience in the non-profit sector.
        </h3>
        <p data-aos="fade-up"
          data-aos-easing="gradient(0,0,1000)"
          data-aos-duration="1900"
          style={{ color: "#676767", lineHeight: "30px", wordSpacing: "3px" }}
          className="text-center pt-11 text-base"
        >
          We understand the important of raising funds and awareness for your
          organization through your special events. We pride ourselves on
          creating unique event experiences that highlight all of the amazing
          resources your organization has to offer.From your next gala, to your
          annual awareness walk, Take Heart! We have you covered!
        </p>
      </div>

      <p data-aos="fade-down"
        data-aos-easing="gradient(0,0,1000)"
        data-aos-duration="1500"
        style={{ color: "#c62127" }} className="text-center text-2xl mb-12">
        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
        <div className="pb-9">
          <div className="w-3/4 mx-auto">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full"
            >
              <div>
                <SwiperSlide>
                  <img className="mx-auto" src={social1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img cclassName="mx-auto" src={social2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="mx-auto" src={social3} alt="" />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="w-3/4 pl-4 ">
          <h1 data-aos="zoom-out-left" data-aos-duration="2800"
            className="text-2xl lg:text-4xl mb-5 text-secondary"
            style={{ fontWeight: "600" }}
          >
            SERVICES INCLUDE
          </h1>
          {nonPropit.map((item) => (
            <div key={item._id}>
              <h1 data-aos="zoom-out-left" data-aos-duration="2400"
                onClick={() => ConcertEvents(item._id)}
                className="mb-2 font-mono cursor-pointer"
              >
                <span>
                  <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                </span>
                <span className="text-secondary hover:underline hover:text-primary">{item.name}</span>
              </h1>
              <h1 data-aos="zoom-out-left" data-aos-duration="2200"
                onClick={() => WelcomeHomeEvents(item._id)}
                className="mb-2 font-mono cursor-pointer"
              >
                <span>
                  <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                </span>
                <span className="text-secondary hover:underline hover:text-primary">{item.name1}</span>
              </h1>
              <h1 data-aos="zoom-out-left" data-aos-duration="2000"
                onClick={() => Fundrasing(item._id)}
                className="mb-2 font-mono cursor-pointer"
              >
                <span>
                  <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                </span>
                <span className="text-secondary hover:underline hover:text-primary">{item.name2}</span>
              </h1>
              <h1 data-aos="zoom-out-left" data-aos-duration="1800"
                onClick={() => ExposEvents(item._id)}
                className="mb-2 font-mono cursor-pointer"
              >
                <span>
                  <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                </span>
                <span className="text-secondary hover:underline hover:text-primary">{item.name3}</span>
              </h1>
              <h1 data-aos="zoom-out-left" data-aos-duration="1600"
                onClick={() => PaintJam(item._id)}
                className="mb-2 font-mono cursor-pointer"
              >
                <span>
                  <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                </span>
                <span className="text-secondary hover:underline hover:text-primary">{item.name4}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary" style={{ height: "10px" }}></div>
      <div className="py-16" style={{ backgroundColor: "#333333" }}>
        <h1 data-aos="fade-down"
          data-aos-easing="gradient"
          data-aos-duration="2100"
          className="text-neutral text-2xl pt-10 text-center pb-12">
          <strong>
            Rates are determined on a case by case basis. Contact us for more
            information.
          </strong>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
          <div className="mx-auto w-full">
            <div className="w-full text-neutral">
              <form action="">
                <div data-aos="fade-down-right"
                  data-aos-easing="gradient"
                  data-aos-duration="1600"
                  className="lg:flex w-full">
                  <input
                    style={{ backgroundColor: "#3b3b3b" }}
                    type="text"
                    placeholder="Your Name"
                    className="input-lg w-full max-w-xs block mx-4 my-3"
                    required={true}
                  />
                  <input
                    style={{ backgroundColor: "#3b3b3b" }}
                    type="text"
                    placeholder="Your Email Address"
                    className=" my-3 input-lg  w-full max-w-xs block "
                    required={true}
                  />
                </div>
                <div data-aos="fade-down-right"
                  data-aos-easing="gradient"
                  data-aos-duration="1400"
                  className="lg:flex w-full ">
                  <input
                    style={{ backgroundColor: "#3b3b3b" }}
                    type="text"
                    placeholder="Your Phone Number"
                    className="input-lg mx-4 my-3  w-full max-w-xs block "
                    required={true}
                  />
                  <input
                    style={{ backgroundColor: "#3b3b3b" }}
                    type="text"
                    placeholder="Your Company Name"
                    className="input-lg  my-3  w-full max-w-xs block "
                    required={true}
                  />
                </div>
                <div data-aos="fade-down-right"
                  data-aos-easing="gradient"
                  data-aos-duration="1200"
                  className="w-full">
                  <input
                    style={{ backgroundColor: "#3b3b3b" }}
                    type="text "
                    placeholder="Date/Time of year preference Name"
                    className="mx-3 my-3  input-lg  w-full max-w-2xl block "
                    required={true}
                  />
                </div>
                <div data-aos="fade-down-right"
                  data-aos-easing="gradient"
                  data-aos-duration="1000"
                  className="w-full">
                  <textarea
                    style={{ height: "200px", backgroundColor: "#3b3b3b" }}
                    className=" input-lg mx-3 my-3 pt-4 w-full "
                    placeholder="Tell us more about your event - don't hold back"
                    required={true}
                  ></textarea>
                </div>
                <button data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="1200"
                  typeof="submit" className="send-button mx-3">
                  SEND
                </button>
              </form>
            </div>
          </div>
          <div className="pl-4">
            <h1 data-aos="fade-down-left"
              data-aos-easing="gradient"
              data-aos-duration="2000"
              className="text-3xl text-neutral mb-7">
              ADDITIONAL EVENTS WE PLAN INCLUDE:
            </h1>
            <div className="text-xl text-neutral">
              <p data-aos="fade-down-left"
                data-aos-easing="gradient"
                data-aos-duration="1800"
                className="pb-3">
                <FontAwesomeIcon
                  className="text-primary pr-3"
                  icon={faAngleRight}
                ></FontAwesomeIcon>{" "}
                Luncheons
              </p>
              <p data-aos="fade-down-left"
                data-aos-easing="gradient"
                data-aos-duration="1600"
                className="pb-3">
                <FontAwesomeIcon
                  className="text-primary pr-3"
                  icon={faAngleRight}
                ></FontAwesomeIcon>{" "}
                Galas
              </p>
              <p data-aos="fade-down-left"
                data-aos-easing="gradient"
                data-aos-duration="1400"
                className="pb-3">
                <FontAwesomeIcon
                  className="text-primary pr-3"
                  icon={faAngleRight}
                ></FontAwesomeIcon>{" "}
                Fairs / Expos
              </p>
              <p data-aos="fade-down-left"
                data-aos-easing="gradient"
                data-aos-duration="1200"
                className="pb-3">
                <FontAwesomeIcon
                  className="text-primary pr-3"
                  icon={faAngleRight}
                ></FontAwesomeIcon>{" "}
                Auctions
              </p>
              <p data-aos="fade-down-left"
                data-aos-easing="gradient"
                data-aos-duration="1000"
                className="pb-3">
                <FontAwesomeIcon
                  className="text-primary pr-3"
                  icon={faAngleRight}
                ></FontAwesomeIcon>{" "}
                Unique Fundraisers
              </p>
            </div>
            <p data-aos="fade-down-left"
              data-aos-easing="gradient"
              data-aos-duration="800"
              className="text-neutral text-xl mt-7">
              Can’t find the answers you need? Get in touch!
            </p>
            <Link to="/contactus">
              <button data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
                className="contact-button flex align-middle">
                <span className="contact">CONTACT US </span>
                <p className="pl-3 text-2xl ">
                  {" "}
                  <BsChatDots className="chat-icon" />
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <RecentEvents></RecentEvents>
    </div>
  );
};

export default NonProfit;
