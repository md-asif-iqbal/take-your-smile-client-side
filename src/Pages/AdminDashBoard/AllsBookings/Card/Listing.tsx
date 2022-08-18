import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  console.log(data);
  
    const { decrImg1,service,time,date ,package:any, location,name ,phone, email,details } = data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={decrImg1}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">All Bookings</div>
          <div className="listing__row">
            <span className="listing__price">{service}</span>
          </div>
          <div className="listing__row">
            <span className="listing__price">User: {name}</span>
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
