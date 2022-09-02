import React from "react";
import Payment from "./Payment";
const PayDesing = () => {
  return (
    <div>
      <div className="mt-40 flex justify-center items-center w-screen h-screen overflow-x-hidden sm:overflow-x-hidden">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div data-aos="fade-down-right" data-aos-duration="1300" className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold capitalize text-5xl text-secondary">
                Make a Donation Now
              </h1>
            </div>
            <div className="mt-5 w-full">
              <p className="text-lg font-mono text-secondary">
                Had strictly mrs handsome mistaken cheerful. We it so if
                resolution invitation remarkably unpleasant conviction. As into
                ye then form.
              </p>
              <img
                className="mt-4 rounded-md"
                src="https://images.pexels.com/photos/8938735/pexels-photo-8938735.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default PayDesing;
