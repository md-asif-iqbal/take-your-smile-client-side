import React from 'react';
const Fade = require("react-reveal/Fade")
const Gallery = () => {
  return (
    <div>
      <section className="overflow-hidden font-mono relative">
        <Fade left duration={6500}>
          <h1 className="text-2xl font-bold text-center mt-36 text-secondary">
            A Story Behind a Pictures
          </h1>
        </Fade>
        <Fade right duration={6500}>
          <p className="text-[16px] text-center w-7/12 mx-auto text-secondary">
            As the premier event planning company in the area. Each event and client
            is unique and we believe our services should be as well.
          </p>
        </Fade>
        <Fade left duration={8500}>
          <h1 className="md:text-[110px] text-4xl absolute left-1/4 top-36 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Events Gallery</h1>
        </Fade>
        <div className="w-11/12 px-5 mx-auto lg:pt-10 lg:px-20">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <Fade left duration={5500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-001-720x604.jpg" />
                </Fade>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Fade top duration={6500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-005-720x604.jpg" />
                </Fade>
              </div>
              <div className="w-full p-1 md:p-2">
                <Fade right duration={5500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/399610/pexels-photo-399610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </Fade>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <Fade right duration={5500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </Fade>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Fade bottom duration={5500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://presentup.themetechmount.com/presentup-elegant/wp-content/uploads/sites/4/2018/10/gallery-image-004-720x604.jpg" />
                </Fade>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Fade left duration={5500}>
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.pexels.com/photos/5415710/pexels-photo-5415710.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;