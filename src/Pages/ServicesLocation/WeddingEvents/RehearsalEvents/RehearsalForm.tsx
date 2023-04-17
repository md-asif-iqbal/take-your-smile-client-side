import { useAuthState } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import UseLocation from "../../../../hooks/UseLocation";
import UsePackage from "../../../../hooks/UsePackage";
import { toast } from "react-toastify";
import NavBar from "../../../shared/NavBar/NavBar";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import UseWedding from "../../../../hooks/OurEvents/UseWedding";
import UseRehearsalDec from "../../../../hooks/Decration/Wedding/UseRehearsalDec";
const RehearsalForm = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { pack } = useParams();
  const [packag]: any[] = UsePackage(pack);

  const { reh } = useParams();
  const [reharsal]: any = UseRehearsalDec(reh);
  console.log(packag);
  const { id } = useParams();
  const [address]: any[] = UseLocation(id);
  const [wedding] = UseWedding();
  type Inputs = {
    name: string;
    email: string;
    phone: string;
    time: number;
    details: string;
    service: string;
    package: string;
    location: string;
    address: string;
  };
  let status = "pending";
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const booking = {
      name: user?.displayName,
      email: user?.email,
      decrImg1: reharsal.decImg,
      decrImg2: reharsal.decImg1,
      decrImg3: reharsal.decImg2,
      package: packag.title,
      location: address.Location,
      phone: data.phone,
      service: data.service,
      details: data.details,
      time: data.time,
      date: formattedDate,
      price: packag.price,
      status: status,
    };

    fetch("https://take-your-smile-server-side.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(
            `Your Booking is set, ${formattedDate} at ${booking?.location}`
          );
        } else {
          toast.error(
            `Already have and Booked in This Time ${data.booking?.date} at ${data.booking?.location} service ${data.booking?.service}`
          );
        }
      });
    reset();
  };
  const [date, setDate] = useState(new Date());
  const formattedDate: any = format(date, "PP");
  const css = `.my-selected:not([disabled]) { 
        background: #FB4051;
        color: white;
      }.my-selected:hover:not([disabled]) { 
            background: #FB4051;
            color: white;
          }`;
  return (
    <div>
      <NavBar />
      <div className="mt-40">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ backgroundColor: "white" }}
        >
          <div>
            <div className="hero mt-28">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <style>{css}</style>
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    modifiersClassNames={{
                      selected: "my-selected",
                      today: "my-today",
                    }}
                  />
                </div>
              </div>
            </div>
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
                      <option className="font-mono text-lg text-black">
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
                  {wedding.map((item) => (
                    <input
                      key={item._id}
                      type="text"
                      {...register("service", { required: true })}
                      value={item.name2}
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

export default RehearsalForm;
