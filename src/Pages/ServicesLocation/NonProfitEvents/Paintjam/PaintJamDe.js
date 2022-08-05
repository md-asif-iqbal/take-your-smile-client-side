import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillHome } from "react-icons/ai";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { Autoplay } from "swiper";
import { useNavigate, useParams } from "react-router-dom";
import UseLocation from "../../../../hooks/UseLocation";
import UsePackage from "../../../../hooks/UsePackage";
const Fade = require("react-reveal/Fade");

const PaintJamDe = () => {
  const [decoration, setDecoration] = useState([]);
  const { id } = useParams();
  const [address] = UseLocation(id);
  const { pack } = useParams();
  const [packag] = UsePackage(pack);
  const navigate = useNavigate();
  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/PaintJam";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDecoration(data));
  }, []);

  const handleClick = (item, id, pack) => {
    navigate(`/paintFrom/${pack}/${id}/${item}`);
  };
  return (
    <>
      <div className="z-10">
        <div className="mb-[-30px] relative">
          <div>
            <img
              src="https://weddingdir.net/wp-content/uploads/2022/07/counter-image-1500x500.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-16 left-40 text-white">
            <h1 className="font-mono text-3xl flex">
              <span
                onClick={() => navigate(-1)}
                className=" cursor-pointer flex items-center gap-2 font-mono text-yellow-400 mr-2"
              >
                <AiFillHome /> Back
              </span>
              /Set Your Decoration
            </h1>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg relative overflow-hidden w-6/12 mx-auto py-6 pl-14">
          <h1 className="font-mono font-lg">
            Home /{" "}
            <span className="text-yellow-500 font-mono">
              {address.Location}
            </span>
          </h1>
        </div>
      </div>
      <div className="grid mt-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
        {decoration.map((item) => (
          <div key={item._id}>
            <Fade bottom>
              <div>
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
                  className="mySwiper w-11/12"
                >
                  <div>
                    <SwiperSlide>
                      <img
                        onClick={() =>
                          handleClick(item._id, address._id, packag._id)
                        }
                        className="w-96 h-64 mx-auto cursor-pointer"
                        src={item.decImg}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        onClick={() =>
                          handleClick(item._id, address._id, packag._id)
                        }
                        className="w-96 h-64 mx-auto cursor-pointer"
                        src={item.decImg1}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        onClick={() =>
                          handleClick(item._id, address._id, packag._id)
                        }
                        className="w-96 h-64 mx-auto cursor-pointer"
                        src={item.decImg2}
                        alt=""
                      />
                    </SwiperSlide>
                  </div>
                  <div className="mt-4 mb-10">
                    <div className="flex gap-2 items-center justify-center">
                      <h1 className="text-center text-orange-400 ">
                        <BsStarFill />
                      </h1>
                      <h1 className="text-center text-orange-400 ">
                        <BsStarFill />
                      </h1>
                      <h1 className="text-center text-orange-400 ">
                        <BsStarFill />
                      </h1>
                      <h1 className="text-center text-orange-400 ">
                        <BsStarFill />
                      </h1>
                      <h1 className="text-center text-orange-400 ">
                        <BsStarHalf />
                      </h1>
                    </div>
                  </div>
                </Swiper>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
};
export default PaintJamDe;
