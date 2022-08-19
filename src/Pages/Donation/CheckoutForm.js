import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import set from "date-fns/esm/set/index.js";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../shared/Loading/Loading";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  // console.log(email, amount)


  // const price = '156';

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }




  useEffect(() => {
    if (amount) {
      fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ amount })
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if (data?.clientSecret) {

            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [amount])

  // if (setProcessing === false) {
  //   return <Loading></Loading>
  // }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();




    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


    setCardError(error?.message || '')
    setSuccess('')
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);

    }


    // confrim card payment
    setProcessing(true)
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {

            email: email
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message)
      setSuccess('')
      setProcessing(false)
    }
    else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      toast(`Congrats! Your Payment is completed`)
      setSuccess(`Congrats! Your Payment is completed`)
      setProcessing(false)
      event.target.reset();
    }

  };

  return (
    <>
      <form className="p-0" style={{ display: 'inline' }} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <label style={{ fontSize: "20px" }} className="text-white ">
              Email
            </label>
            <input onChange={handleEmail} type="email" placeholder="Your Email Address" className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block " />

          </div>
          <div>
            <div>
              <label style={{ fontSize: "20px" }} className="text-white ">
                Amount
              </label>
              <input onChange={handleAmount} type="number" placeholder="Amount" className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block " />
            </div>
          </div>

        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "white",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "yellow",
              },
            },
          }}
        />

        <div className="mt-10 mb-5">
          <button className='pay-btn' type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>

      {
        processing && <p><Loading></Loading></p>

      }
      {
        cardError && <p style={{ color: 'yellow' }}>{cardError}</p>
      }
      {
        success && <div style={{ color: 'white' }}>

          <p> {success}</p>
          <p>Your TransactionId: <span className="text-black font-bold">{transactionId}</span></p>
        </div>
      }
      <ToastContainer />
    </>
  );
};

export default CheckoutForm;
