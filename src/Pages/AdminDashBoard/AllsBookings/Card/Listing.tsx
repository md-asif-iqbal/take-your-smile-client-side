import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
    const { decImg,title,text,date } = data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={decImg}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">All Bookings</div>
          <div className="listing__row">
            <span className="listing__price">{title}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{date}</span>
          </div>
        
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;