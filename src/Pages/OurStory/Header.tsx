import React from "react";
import headImg from "../../Assets/our-story/header.jpg";
const Header = () => {
  return (
    <div className="overflow-x-hidden sm:overflow-x-hidden">
      <h1 data-aos="fade-up "
        data-aos-easing="gradient(0,0,1000)"
        data-aos-duration="1700" className="background-set mt-24 text-primary text-2xl font-semibold text-center italic mb-20">
        Love Story
      </h1>
      <div className="w-11/12 font-mono md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <img data-aos="fade-down-right" data-aos-duration="3000" data-aos-easing="ease-in-sine" src={headImg} className="mx-auto" alt="" />
        <div className="text-center text-md">
          <p data-aos="fade-down-left" data-aos-duration="1300" data-aos-easing="ease-in-sine"  className="mb-2">
            From the very beginning of working with Andrea and the LK team it
            was incredible. We keep staring at pictures because it was just so
            flawless of a weekend from start to finish.
          </p>
          <p data-aos="fade-down-left" data-aos-duration="1500" data-aos-easing="ease-in-sine" className="my-2">
            We moved to London mid wedding planning and had zero hesitation
            knowing that Andrea was taking care of it all from afar. She even
            got a shout out in the FOG speech (and he is a man of few words).{" "}
          </p>
          <p data-aos="fade-down-left" data-aos-duration="1700" data-aos-easing="ease-in-sine" className="my-2">
            Andrea was patient, thoughtful, creative, real, resourceful, kind
            and SO FUN to work with. I’m sad it’s over in part because I
            thoroughly enjoyed chatting and working with Andrea. She knew what
            we needed without us even having to. She’s truly THE BEST.
          </p>
          <h1 data-aos="fade-down-left" data-aos-duration="1900" data-aos-easing="ease-in-sine" className="mt-2 text-lg italic font-bold text-primary">
            Amelia & Tim
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
