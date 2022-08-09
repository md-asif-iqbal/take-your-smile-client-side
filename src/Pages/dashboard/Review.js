import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Review = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [currentValue, setCurrentValue] = useState(1);
  const stars = Array(5).fill(1);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  console.log(user);
  const onSubmit = (data) => {
    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      rating: currentValue,
      discription: data.review,
      address: data.address,
      status: data.status,
      img: user?.photoUrl,
    };

    fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added");
      });
    reset();
  };
  return (
    <div className="my-24 md:w-4/12 w-8/12 mx-auto bg-gradient-to-b rounded-3xl to-[#001510] from-[#00bf8f]">
      <h2 className="text-center font-mono font-semibold pt-10 pb-6 text-white text-2xl">
        Your opinion matters!
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <div>
            <input
              type="text"
              placeholder="Your Address"
              className="bg-transparent w-full input font-mono text-xl border-2 border-white text-white"
              {...register("address")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-mono text-md text-white">
                What Type Of Event Are You Attend ?
              </span>
            </label>
            <select
              className="select select-primary w-full bg-transparent border-2 border-white text-white"
              {...register("status", {
                required: {
                  value: true,
                  message: "Event Select is required*",
                },
              })}
            >
              <option className="text-lg text-black">Corporate Events</option>
              <option className="text-lg text-black">Non-Profit Events</option>
              <option className="text-lg text-black">Social Events</option>
              <option className="text-lg text-black">Weddings</option>
            </select>
          </div>
          <div className="flex justify-start py-3 items-center space-x-2">
            <h1 className="text-base font-medium font-mono text-white">
              Rating:
            </h1>
            {stars.map((e, i) => {
              return (
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  alt=""
                  key={i}
                  className={`cursor-pointer ${
                    currentValue > i ? "text-orange-400" : "text-gray-200"
                  }`}
                  onClick={() => handleClick(i + 1)}
                />
              );
            })}
          </div>
          <textarea
            type="text"
            name="message"
            className="p-4 mb-4 text-white bg-transparent rounded-md resize-none border-2 border-white text-area"
            placeholder="Message..."
            {...register("review", {
              required: true,
            })}
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="relative mb-8 w-7/12 mx-auto inline-flex mt-3  items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-2 border-white rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default Review;
