import React from "react";
import avatar from "../../../Assets/Icons/review-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewCard = ({ item }) => {
  const { name, status, address, img, rating, discription } = item;
  return (
    <div data-aos="fade-right" data-aos-duration="2400" className="card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center">
      {!item.img ? (
        <img className="w-60 mt-10 mx-auto" src={avatar} alt="" />
      ) : (
        <img className="w-72 h-80 mx-auto" src={img} alt="" />
      )}
      <div className="items-center font-mono">
        <p data-aos="zoom-out-left" data-aos-duration="2000">{status}</p>
        <h2 data-aos="zoom-out-left" data-aos-duration="1800" className="text-gray-900 text-3xl font-semibold">
          {name}, <span>{address}</span>
        </h2>
        <p data-aos="zoom-out-left" data-aos-duration="1600" className="text-gray-900 text-[18px] mt-4">{discription}.</p>
        <div data-aos="zoom-out-left" data-aos-duration="1400" className="flex justify-start mt-3">
          {Array.from(Array(parseInt(rating)), (e, i) => (
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              key={i}
              className="w-6 text-yellow-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
