import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import CheckoutForm2 from "../Donation/CheckoutForm2";
import NavBar from "../shared/NavBar/NavBar";

const stripePromise = loadStripe(
  "pk_test_51LXS98B5Y3AeAE8iNY0Hgf4QUbKwQQVuUk1NqhUhbNZ1UhjYvdE5UJw3DnEJBLmlWBgFqKIjfXEnVZujomnNCAyo00kHESTAcf"
);

const YourBookings = () => {
  const [cancle, setCancle] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const cancleHandle = () => {
    setCancle(true);
  };
  const crossHandle = () => {
    setCancle(false);
  };
  console.log(cancle);

  const handlePayment = (item) => {
    console.log(item);
    setPaymentData(item);
  };

  const [booking, setBooking] = useState([]);
  console.log(booking);
  const [user] = useAuthState(auth);
  const orderNumber = Math.round(Math.random() * 100000);
  useEffect(() => {
    const email = user?.email;
    const url = `https://take-your-smile-server-side.onrender.com/myitems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => filterItems(data));
  }, [user]);

  const filterItems = (bookings) => {
    const updatedItems = bookings.filter((item) => {
      return item.status === "pending";
    });
    setBooking(updatedItems);
  };

  const [data, setData] = useState({});
  console.log(data);

  const total = booking.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const cancleOrder = (id) => {
    fetch(
      `https://take-your-smile-server-side.onrender.com/orders/cancel/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Status Changes");
      });
  };

  return (
    <div>
      <NavBar />

      <div className="py-14 mt-20 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #{orderNumber}
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full font-mono">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 font-mono mb-4">
                Customer’s Cart
              </p>

              {booking?.map((item) => (
                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full mb-5">
                  <div className="w-full md:w-40">
                    <img
                      className="w-full hidden md:block rounded"
                      src={item.decrImg1}
                      alt="dress"
                    />
                  </div>
                  <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                    <div className="w-full flex flex-col justify-start items-start space-y-2">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800 ">
                        {item.service}
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-500">Package: </span>{" "}
                          {item.package}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-500">Location: </span>{" "}
                          {item.location}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-500">Date: </span>{" "}
                          {item.date}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-500">Time: </span>{" "}
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center space-x-8  w-full">
                      {paymentData?.status !== "paid" ? (
                        <p className="text-base xl:text-lg leading-6 text-gray-800">
                          {" "}
                          <label
                            htmlFor="my-modal-6"
                            className="btn modal-button"
                            onClick={() => handlePayment(item)}
                          >
                            Pay Now
                          </label>
                        </p>
                      ) : (
                        <p className="text-base xl:text-lg leading-6 text-gray-800">
                          {" "}
                          <button className="btn btn-primary">Paid</button>
                        </p>
                      )}

                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        ${item.price}
                      </p>
                      {paymentData?.status !== "paid" && (
                        <button>
                          {" "}
                          <label
                            htmlFor="my-modal-3"
                            onClick={() => setData(item)}
                            className="bg-primary uppercase px-6 py-2 rounded text-white cursor-pointer"
                          >
                            Cancel
                          </label>
                        </button>
                      )}

                      <input
                        type="checkbox"
                        id="my-modal-3"
                        className="modal-toggle"
                      />
                      <div className="modal mt-10">
                        <div className="modal-box relative text-black bg-gray-100">
                          <label
                            htmlFor="my-modal-3"
                            onClick={crossHandle}
                            className=" btn-sm btn-circle absolute right-0 top-3 text-2xl font-bold"
                          >
                            ✕
                          </label>
                          <h3 className="text-lg font-bold">
                            Are you sure to cancle {data.service}
                          </h3>
                          <p className="py-4 ">
                            <textarea
                              className="textarea w-3/4 bg-white text-black"
                              placeholder="Please write on the valid reason"
                              required
                            ></textarea>
                          </p>
                          <button>
                            {" "}
                            <label
                              htmlFor="my-modal-3"
                              className="bg-primary uppercase px-6 py-2 rounded text-white"
                              onClick={() => cancleOrder(data._id)}
                            >
                              Confirm
                            </label>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${total}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6  font-mono">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  You Are Ordering {booking.length} Service
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        DPD Order
                        <br />
                        <span className="font-normal">Total Amount </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    ${total}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  {/* <label htmlFor="my-modal-6" className="btn modal-button">Pay Now</label> */}

                  {/* <label htmlFor="my-modal-6" className="btn modal-button">open modal</label> */}

                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="bg-primary modal-box relative">
                      <label
                        htmlFor="my-modal-6"
                        className="btn-circle  btn-sm  absolute right-2 top-3"
                      >
                        ✕
                      </label>
                      <div className="">
                        <div className="flex flex-col ">
                          <h1 className="font-bold capitalize text-3xl my-4">
                            Make a Payment
                          </h1>
                        </div>
                        <div className="card-body">
                          <Elements stripe={stripePromise}>
                            <CheckoutForm2
                              paymentData={paymentData}
                              total={total}
                            />
                          </Elements>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    className="w-20 rounded-[50%]"
                    src={user?.photoURL}
                    alt="avatar"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {user?.displayName}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBookings;
