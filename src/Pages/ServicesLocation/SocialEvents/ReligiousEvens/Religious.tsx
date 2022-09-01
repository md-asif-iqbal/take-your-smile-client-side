import React from "react";
import UsePack from "../../../../hooks/UsePack";
import UseSocial from "../../../../hooks/Events/UseSocial";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import NavBar from "../../../shared/NavBar/NavBar";
const Religious = () => {
  const [packages] = UsePack();
  const { id } = useParams();
  const [social]: any = UseSocial(id);
  const navigate = useNavigate();
  const handleClick = (item: any) => {
    if (item) {
      navigate(`/religLoc/${item}`);
    }
    console.log(item);
  };
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl text-center font-mono mt-40 font-bold text-secondary">
        You  Have Selected
        <span className="text-primary font-mono"> {social.name4}</span>
      </h1>
      <div className="mt-20 grid w-9/12 mb-10 mx-auto grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => (
          <div className="mx-auto even:bg-gradient-to-r from-[#001510] to-[#00bf8f] even:text-white odd:text-primary  text-center font-mono rounded-xl pt-8">
            <h1 className="text-2xl font-bold font-mono">{item.title}</h1>
            <h1 className="text-sm w-10/12 mx-auto font-mono py-3">
              {item.dis}
            </h1>
            <h1 className="text-5xl font-mono  pb-4">${item.price} </h1>
            <div className="ml-10 pff">
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3 ">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.eventTiming}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack4}
              </p>
              <p className="text-md font-mono  text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack1}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack2}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack3}
              </p>
              <p className="text-md font-mono text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food}
              </p>
              <p className="text-md font-mono text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food2}
              </p>
            </div>
            <div className="w-9/12 mx-auto py-8">
              <button
                onClick={() => handleClick(item._id)}
                className="btn  w-full "
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Religious;
