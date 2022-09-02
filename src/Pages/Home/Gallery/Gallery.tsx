
import React from "react";
import { motion } from "framer-motion"

const Gallery = () => {
  const imageGallery = [
    {
      id: 1,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-001-720x604.jpg",
    },
    {
      id: 2,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-005-720x604.jpg",
    },
    {
      id: 3,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-004-720x604.jpg",
    },
    {
      id: 4,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/galler-image-001-720x604.jpg",
    },
    {
      id: 5,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-002-720x604.jpg",
    },
    {
      id: 6,
      img: "https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/post-image-005-720x604.jpg",
    },
  ];
  return (
    <div className="w-8/12 mx-auto font-mono mt-20">
      <h1 data-aos="zoom-out-right" data-aos-duration="2400"
        className="text-2xl font-bold text-center text-secondary">
        A Story Behind a Pictures
      </h1>
      <p data-aos="zoom-out-left" data-aos-duration="2400" className="text-[16px] text-center w-7/12 mx-auto text-secondary">
        As the premier event planning company in the area. Each event and client
        is unique and we believe our services should be as well.
      </p>
      {/* {imageGallery.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: .03, delay: i + .05 }}
          >
            <img className="hover:bg-primary" src={item.img} alt="" />
          </motion.div>
        ))} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 overflow-x-hidden sm:overflow-x-hidden">
        <div data-aos="fade-down-right" data-aos-duration="2000" data-aos-easing="ease-in-sine" className=""> <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-001-720x604.jpg" alt="" /></div>

        <div data-aos="fade-down" data-aos-duration="1900" data-aos-easing="ease-in-sine" > <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-005-720x604.jpg" alt="" /></div>

        <div data-aos="zoom-out-right" data-aos-duration="1800" data-aos-easing="ease-in-sine" > <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-004-720x604.jpg" alt="" /></div>

        <div data-aos="fade-down-left" data-aos-duration="1700" data-aos-easing="ease-in-sine" > <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/galler-image-001-720x604.jpg" alt="" /></div>

        <div data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-in-sine" > <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-002-720x604.jpg" alt="" /></div>

        <div data-aos="fade-up-left" data-aos-duration="1500" data-aos-easing="ease-in-sine" > <img src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/post-image-005-720x604.jpg" alt="" /></div>
      </div>
    </div>
  );
};

export default Gallery;
