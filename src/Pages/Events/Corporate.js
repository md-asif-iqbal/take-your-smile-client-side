import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar/NavBar";
import "./Events";
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
const Corporate = () => {
  const [corporate, setCorporat] = useState([]);
  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/corporate";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporat(data));
  }, []);

  const navigate = useNavigate();
  const FashionCarnival = (item) => {
    navigate(`/fashionCar/${item}`);
  };

  const NewYearEvent = (item) => {
    navigate(`/newYear/${item}`);
  };

  const EducationalSemi = (item) => {
    navigate(`/educational/${item}`);
  };

  const SalesEvents = (item) => {
    navigate(`/salesEvent/${item}`);
  };
  const handleProduct = (item) => {
    navigate(`/product/${item}`);
  };
  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <NavBar></NavBar>
        <PageTitle title="Corporate Event" />

        {/* <img className='w-full' src={banner} alt="" /> */}
        <div className="banner-corporate pt-8">
          <h1
            className="text-3xl lg:text-6xl align-middle  text-center font-semibold "
            style={{
              marginTop: "200px",
              paddingBottom: "200px",
              color: "white",
            }}
          >
            CORPORATE EVENTS
          </h1>
        </div>
        <div className=" w-3/5 mx-auto my-20">
          <h3
            style={{ color: "#444", lineHeight: "44px", wordSpacing: "4px" }}
            className="text-2xl lg:text-2xl align-middle  text-center  font-semibold ,"
          >
            Let Take Heart Events help wow your employees, clients or potential
            customers at your next event.
          </h3>
          <p
            style={{ color: "#676767", lineHeight: "30px", wordSpacing: "3px" }}
            className="text-center pt-11 text-base"
          >
            Strategic development, measurability of event goals and objectives,
            and accountability, paired with our innovative event designs are the
            driving force behind our corporate event planning techniques. From
            your new product launch, to your next company retreat, Take Heart!
            We have you covered!
          </p>
        </div>

        <p style={{ color: "#c62127" }} className="text-center text-2xl mb-12">
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
            <h1
              className="text-2xl lg:text-4xl mb-5"
              style={{ color: "#444", fontWeight: "600" }}
            >
              SERVICES INCLUDE
            </h1>
            {corporate.map((item) => (
              <div key={item._id}>
                <h1
                  onClick={() => FashionCarnival(item._id)}
                  className="mb-2 font-mono cursor-pointer"
                >
                  <span>
                    <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                  </span>
                  {item.name}
                </h1>
                <h1
                  onClick={() => NewYearEvent(item._id)}
                  className="mb-2 font-mono cursor-pointer"
                >
                  <span>
                    <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                  </span>
                  {item.name1}
                </h1>
                <h1
                  onClick={() => EducationalSemi(item._id)}
                  className="mb-2 font-mono cursor-pointer"
                >
                  <span>
                    <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                  </span>
                  {item.name4}
                </h1>
                <h1
                  onClick={() => SalesEvents(item._id)}
                  className="mb-2 font-mono cursor-pointer"
                >
                  <span>
                    <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                  </span>
                  {item.name3}
                </h1>
                <h1
                  onClick={() => handleProduct(item._id)}
                  className="mb-2 font-mono cursor-pointer"
                >
                  <span>
                    <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" />
                  </span>
                  {item.name2}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary" style={{ height: "10px" }}></div>
        <div className="py-16" style={{ backgroundColor: "#333333" }}>
          <h1 className="text-neutral text-2xl pt-10 text-center pb-12">
            <strong>
              Rates are determined on a case by case basis. Contact us for more
              information.
            </strong>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            <div className="mx-auto w-full">
              <div className="w-full text-neutral">
                <form action="">
                  <div className="lg:flex">
                    <input
                      style={{ backgroundColor: "#3b3b3b" }}
                      type="text"
                      placeholder="Your Name"
                      className="input-lg w-full max-w-xs block mx-3 my-3"
                      required={true}
                    />
                    <input
                      style={{ backgroundColor: "#3b3b3b" }}
                      type="text"
                      placeholder="Your Email Address"
                      className="mx-3 my-3 input-lg  w-full max-w-xs block "
                      required={true}
                    />
                  </div>
                  <div className="lg:flex ">
                    <input
                      style={{ backgroundColor: "#3b3b3b" }}
                      type="text"
                      placeholder="Your Phone Number"
                      className="input-lg mx-3 my-3  w-full max-w-xs block "
                      required={true}
                    />
                    <input
                      style={{ backgroundColor: "#3b3b3b" }}
                      type="text"
                      placeholder="Your Company Name"
                      className="input-lg mx-3 my-3  w-full max-w-xs block "
                      required={true}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      style={{ backgroundColor: "#3b3b3b" }}
                      type="text "
                      placeholder="Date/Time of year preference Name"
                      className="mx-3 my-3  input-lg  w-full max-w-2xl block "
                      required={true}
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      style={{ height: "200px", backgroundColor: "#3b3b3b" }}
                      className=" input-lg mx-3 my-3 pt-4 w-full "
                      placeholder="Tell us more about your event - don't hold back"
                      required={true}
                    ></textarea>
                  </div>
                  <button typeof="submit" className="send-button mx-3">
                    SEND
                  </button>
                </form>
              </div>
            </div>
            <div className="pl-4">
              <h1 className="text-3xl text-neutral mb-7">
                ADDITIONAL EVENTS WE PLAN INCLUDE:
              </h1>
              <div className="text-xl text-neutral">
                <p className="pb-3">
                  <FontAwesomeIcon
                    className="text-primary pr-3"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>{" "}
                  Luncheons
                </p>
                <p className="pb-3">
                  <FontAwesomeIcon
                    className="text-primary pr-3"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>{" "}
                  Galas
                </p>
                <p className="pb-3">
                  <FontAwesomeIcon
                    className="text-primary pr-3"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>{" "}
                  Fairs / Expos
                </p>
                <p className="pb-3">
                  <FontAwesomeIcon
                    className="text-primary pr-3"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>{" "}
                  Auctions
                </p>
                <p className="pb-3">
                  <FontAwesomeIcon
                    className="text-primary pr-3"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>{" "}
                  Unique Fundraisers
                </p>
              </div>
              <p className="text-neutral text-xl mt-7">
                Can’t find the answers you need? Get in touch!
              </p>
              <Link to="/contactus">
                <button className="contact-button flex align-middle">
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
    </div>
  );
};

export default Corporate;
