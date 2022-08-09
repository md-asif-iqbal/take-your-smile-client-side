import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import UseSales from "../../../../hooks/Decration/Corporate/UseSales";
import UseCorporate from "../../../../hooks/OurEvents/UseCorporate";
import UseLocation from "../../../../hooks/UseLocation";
import UsePackage from "../../../../hooks/UsePackage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { toast } from "react-toastify";
const SalesFrom = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [corporate] = UseCorporate();
  const { pack } = useParams();
  const [packag] = UsePackage(pack);
  console.log(packag);
  const { sale } = useParams();
  const [sales] = UseSales(sale);
  console.log(sales);
  const { id } = useParams();
  const [address] = UseLocation(id);
  console.log(address);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const bookingData = {
      name: user?.displayName,
      email: user?.email,
      decrImg1: sales.decImg,
      decrImg2: sales.decImg,
      decrImg3: sales.decImg,
      package: packag.title,
      location: address.Location,
      phone: data.phone,
      service: data.service,
      details: data.details,
      time: data.time
    };
    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Order is Complete");
        if (data) {
          navigate("/home");
        }
      });
    reset();
  };
  return (
    <div>
      <div className="mt-20">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ backgroundColor: "white" }}
        >
          <div>
            <h1 className="text-center text-xl font-mono font-semibold mb-10">
              You Have Selected This Decoration
            </h1>

            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3000,
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
                    className="md:w-[500px] md:h-[400px] mx-auto cursor-pointer"
                    src={sales.decImg}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="md:w-[500px] md:h-[400px] mx-auto cursor-pointer"
                    src={sales.decImg1}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="md:w-[500px] md:h-[400px] mx-auto cursor-pointer"
                    src={sales.decImg2}
                    alt=""
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>

          <div className=" pt-3 mb-8" style={{ backgroundColor: "white" }}>
            <h1 className="text-3xl text-center pb-5">
              <span className="text-primary">Booking</span> Details
            </h1>
            <div
              style={{ backgroundColor: "#ecf0f3" }}
              className="w-full lg:w-4/5 drop-shadow-xl shadow-xl border-x-4 rounded-lg border-red-500 mx-auto"
            >
              <form className="p-7" onSubmit={handleSubmit(onSubmit)}>
                <div className=" w-full">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    value={user?.displayName}
                    placeholder="Enter Your Name"
                    className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block "
                  />

                  {/* <input defaultValue="test" {...register("example")} /> */}

                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                    value={user?.email}
                    className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block "
                  />
                </div>
                <div className="lg:flex w-full">
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Your Phone Number"
                    className="border-rounded border-2 border-primary rounded-lg  lg:mr-2 my-3 input-md  w-full max-w-xs block "
                  />

                  <div className="form-control">
                    <select
                      className="border-rounded border-2 border-primary rounded-lg  lg:mr-2 my-3 input-md font-mono text-black w-full max-w-xs block"
                      {...register("time", {
                        required: {
                          value: true,
                          message: "Event Select is required*",
                        },
                      })}
                    >
                      <option index className="font-mono text-lg text-black">
                        Morning
                      </option>
                      <option className="font-mono text-lg text-black">
                        AfterNoon
                      </option>
                      <option className="font-mono text-lg text-black">
                        Night
                      </option>
                    </select>
                  </div>
                </div>
                <div className="lg:flex w-full">
                  <input
                    value={packag.title}
                    {...register("package", { required: true })}
                    className="border-rounded border-2 border-primary rounded-lg  lg:mr-2 my-3 input-md  w-full max-w-xs block "
                  />

                  <input
                    type="text"
                    value={address.Location}
                    {...register("location", { required: true })}
                    placeholder="Your Address"
                    className="border-rounded border-2 border-primary rounded-lg  lg:ml-2 my-3 input-md  w-full max-w-xs block "
                  />
                </div>
                <div className="lg:flex w-full">
                  {corporate.map((item) => (
                    <input
                      key={item._id}
                      type="text"
                      {...register("service", { required: true })}
                      value={item.name3}
                      className="border-rounded border-2 border-primary rounded-lg  lg:mr-2 my-3 input-md  w-full max-w-xs block "
                    />
                  ))}
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="Your Address"
                    className="border-rounded border-2 border-primary rounded-lg  lg:ml-2 my-3 input-md  w-full max-w-xs block "
                  />
                </div>

                <div className="w-full">
                  <textarea
                    {...register("details", { required: true })}
                    style={{ height: "100px" }}
                    className="border-rounded border-2 border-primary rounded-lg input-md  my-3 pt-2 w-full "
                    placeholder="Tell us more about your event - don't hold back"
                  ></textarea>
                </div>
                <div className="mx-auto">
                  <button type="submit" className="send-button mx-3 ">
                    CONFIRM BOOKING
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFrom;
