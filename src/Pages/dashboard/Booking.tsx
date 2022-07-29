import React from "react";
import PageTitle from "../shared/PageTitle/PageTitle";

const Booking = () => {
  return (
    
    <div className="p-1 mt-4 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
      <PageTitle title="Booking" />

      <div className="block p-6  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 bg-white sm:p-8 rounded-xl">
        <div className="grid items-center my-16">
          <div>
            <h2 className="text-3xl font-bold">Take Your Smile</h2>
            <small className="text-gray-700 text-justify">
              Smiling is definitely one of the best beauty remedies. If you have
              a good sense of humor and a good approach to life, that’s
              beautiful.
            </small>
          </div>
        </div>

        <section className=" mx-auto p-4 bg-gradient-to-r from-red-300  to-red-400 rounded-md  dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Booking
          </h2>

          <form>
            <div className="grid grid-cols-1 mt-4 ">
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Phone
                </label>
                <input
                  id="phone"
                  type="phone"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Cancel
              </button>
              <button className="px-6 ml-2 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Booking
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

  );
};

export default Booking;
