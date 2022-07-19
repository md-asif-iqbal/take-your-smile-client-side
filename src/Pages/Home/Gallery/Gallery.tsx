import React from "react";

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
      <h1 className="text-2xl font-bold text-center">
        A Story Behind a Pictures
      </h1>
      <p className="text-[16px] text-center w-7/12 mx-auto">
        As the premier event planning company in the area. Each event and client
        is unique and we believe our services should be as well.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {imageGallery.map((item) => (
          <div>
            <img className="hover:bg-primary" src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
