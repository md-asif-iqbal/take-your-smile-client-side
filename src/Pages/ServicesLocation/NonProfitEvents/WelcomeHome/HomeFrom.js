import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import UseWelcomeDe from "../../../../hooks/Decration/NonProfit/UseWelcomeDe";
import UseNonProfitEvents from "../../../../hooks/OurEvents/UseNonProfitEvents";
import UseLocation from "../../../../hooks/UseLocation";
import UsePackage from "../../../../hooks/UsePackage";

const HomeFrom = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const { weh } = useParams();
  const [WeHome] = UseWelcomeDe(weh);
  const onSubmit = (data) => {};
  const [nonPropit] = UseNonProfitEvents();
  const { pack } = useParams();
  const [packag] = UsePackage(pack);
  console.log(packag);
  const { id } = useParams();
  const [address] = UseLocation(id);
  return (
    <div>
      <div className="mt-20">
        <div
          className="grid lg:grid-cols-2 "
          style={{ backgroundColor: "white" }}
        >
          <div className=" w-4/5 mx-auto flex my-auto">
            <img
              className="w-full lg:h-5/6  "
              src="https://i.ibb.co/0m70Kzx/booking2.gif"
              alt=""
            />
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
                    placeholder="Your Name"
                    className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block "
                  />

                  {/* <input defaultValue="test" {...register("example")} /> */}

                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Your Email Address"
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

                  <input
                    type="text"
                    {...register("time", { required: true })}
                    placeholder="Time Schedule"
                    className="border-rounded border-2 border-primary rounded-lg  lg:ml-2 my-3 input-md  w-full max-w-xs block "
                  />
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
                  {nonPropit.map((item) => (
                    <input
                      key={item._id}
                      type="text"
                      {...register("services", { required: true })}
                      value={item.name1}
                      className="border-rounded border-2 border-primary rounded-lg  lg:mr-2 my-3 input-md  w-full max-w-xs block "
                    />
                  ))}
                  <input
                    type="text"
                    {...register("service", { required: true })}
                    placeholder="Event Service"
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
                  <button typeof="submit" className="send-button mx-3 ">
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

export default HomeFrom;
