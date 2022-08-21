import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaMoneyCheck, FaDonate } from "react-icons/fa";
import { BsCalendar4Event } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import "./style.css";
import {
  MdEventAvailable,
  MdOutlineRateReview,
  MdAttachMoney,
  MdOutlineWork,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Card from "./Card";
const Admin = () => {
  const [user] = useAuthState(auth);
  const busniess = [
    {
      id: 1,
      name: "Total Revenue",
      number: "$3138390",
      icons: <FaMoneyCheck />,
    },
    {
      id: 1,
      name: "Monthly Revenue ",
      number: "$13390",
      icons: <MdAttachMoney />,
    },
    {
      id: 2,
      name: "Event Organized",
      number: "7223",
      icons: <MdEventAvailable />,
    },
    {
      id: 3,
      name: "Up Coming Events",
      number: "53",
      icons: <BsCalendar4Event />,
    },
    {
      id: 4,
      name: "Customer Review",
      number: "134990",
      icons: <MdOutlineRateReview />,
    },
    {
      id: 5,
      name: "Complete Wedding",
      number: "990",
      icons: <RiHeartsLine />,
    },
    {
      id: 6,
      name: "Donation",
      number: "$888423",
      icons: <FaDonate />,
    },
    {
      id: 7,
      name: "Total Employee ",
      number: "1221",
      icons: <MdOutlineWork />,
    },
  ];
  return (
    <div className="mt-36">
      <div>
        <h1 className="text-secondary font-mono text-2xl w-full text-center font-bold">
          Hello Mr, {user?.displayName} !
        </h1>
        <div className="busniess">
          <div className="mb-4 w-10/12 mx-auto">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <>
                {busniess.map((item) => (
                  <SwiperSlide>
                    <div className="text-black font-semibold font-mono mt-8 p-5 w-48 py-8 bg-[#D0E1E9] rounded-3xl mb-10 mx-auto">
                      <h1 className="text-3xl mb-2">{item.icons}</h1>
                      <p className="text-3xl">{item.number}</p>
                      <p>{item.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            </Swiper>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Admin;
