import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import set from "date-fns/esm/set/index.js";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CheckoutForm = () => {
    const [cancle, setCancle] = useState(false);
    // const [total, setTotal] = useState('')


    const cancleHandle = () => {
        setCancle(true)
    }
    const crossHandle = () => {
        setCancle(false)
    }
    console.log(cancle);

    const [booking, setBooking] = useState([]);
    console.log(booking)
    const [user] = useAuthState(auth);
    const orderNumber = Math.round(Math.random() * 100000)
    useEffect(() => {
        const email = user?.email
        const url = `https://secure-escarpment-79738.herokuapp.com/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => filterItems(data))
    }, [user])

    const filterItems = (bookings) => {
        const updatedItems = bookings.filter((item) => {
            return item.status === 'pending' || item.status === 'complete';
        });
        setBooking(updatedItems);


    };

    const [data, setData] = useState({});
    console.log(data);





    const total = booking.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    // console.log(email, amount)

    // const price = '156';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    useEffect(() => {
        if (amount) {
            fetch(
                "https://secure-escarpment-79738.herokuapp.com/create-payment-intent",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({ amount }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }
    }, [amount]);

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
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        if (error) {
            console.log("[error]", error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
        }

        // confrim card payment
        setProcessing(true);
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setSuccess("");
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            toast(`Congrats! Your Payment is completed`);
            setSuccess(`Congrats! Your Payment is completed`);
            setProcessing(false);
            event.target.reset();
        }
    };

    return (
        <>
            <form
                className="p-0"
                style={{ display: "inline" }}
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-2 gap-5 ">
                    <div>
                        <label style={{ fontSize: "20px" }} className="text-white ">
                            Email
                        </label>
                        <input
                            onChange={handleEmail}
                            type="email" defaultValue={user?.email} readOnly
                            placeholder="Your Email Address"
                            className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block "
                        />
                    </div>
                    <div>
                        <div>
                            <label style={{ fontSize: "20px" }} className="text-white ">
                                Amount
                            </label>
                            <input
                                onChange={handleAmount}
                                type="number"
                                defaultValue={total}
                                placeholder="Amount"
                                className="border-rounded border-2 border-primary rounded-lg   my-3 input-md  w-full max-w-2xl block "
                            />
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
                    <button className="btn glass btn-neutral btn-circle" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>

            {processing && (

                <Loading></Loading>

            )}
            {cardError && <p style={{ color: "yellow" }}>{cardError}</p>}
            {success && (
                <div style={{ color: "white" }}>
                    <p> {success}</p>
                    <p>
                        Your TransactionId:{" "}
                        <span className="text-black font-bold">{transactionId}</span>
                    </p>
                </div>
            )}

        </>
    );
};

export default CheckoutForm;
