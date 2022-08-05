import UsePack from '../../../../hooks/UsePack';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import UseAnniversery from '../../../../hooks/WedEventServices/UseAnniversery';
const WeddingEven = () => {
    const [packages] = UsePack();
  const { id } = useParams();
  const [anniver] = UseAnniversery(id);
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item) {
      navigate(`/weddingLoc/${item}`);
    }
    console.log(item);
  };
    return (
        <div>
        <h1 className="text-3xl text-center font-mono mt-10 font-bold">
          You Are Select <span className="text-primary">{anniver.name3}</span>
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
                  className="btn odd:bg-primary w-full text-white"
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

export default WeddingEven;