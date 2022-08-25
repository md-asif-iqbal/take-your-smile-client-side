import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LXS98B5Y3AeAE8iNY0Hgf4QUbKwQQVuUk1NqhUhbNZ1UhjYvdE5UJw3DnEJBLmlWBgFqKIjfXEnVZujomnNCAyo00kHESTAcf"
);
const Payment = () => {
  return (
    <div className="w-full lg:-mt-96 mb-60 lg:w-2/5 px-8 py-12 ml-auto bg-primary  rounded-2xl">
      <div className="flex flex-col ">
        <h1 className="font-bold capitalize text-3xl my-4 text-secondary">Make a Payment</h1>
      </div>
      <div className="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
