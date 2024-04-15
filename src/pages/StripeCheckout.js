// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useSelector } from "react-redux";

// import CheckoutForm from "./CheckoutForm";
// import "../Stripe.css";
// import { selectCurrentOrder } from "../features/order/orderSlice";

// const stripePromise = loadStripe("pk_test_51OjwphCNpBFDWD7Hq05dMd3V0DYLBCkIQwuHZZuBHJnXvEGNFBrNDXHbx0QooApAVUozUFQQkcdAD4tiZ6Gp7s3S004p2ckAsx");

// export default function StripeCheckout() {
//   const [clientSecret, setClientSecret] = useState("");
//   const currentOrder = useSelector(selectCurrentOrder);

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("http://localhost:3005/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         totalAmount: currentOrder.totalAmount,
//         orderId: currentOrder.id,
//       }),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Create Payment Intent Response:", data);
//       setClientSecret(data.clientSecret);
//     })
//     .catch((error) => {
//       console.error("Error creating payment intent:", error);
//     });
    
//   }, []);

//   const appearance = {
//     theme: "stripe",
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="Stripe">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { selectCurrentOrder } from "../features/order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OjwphCNpBFDWD7Hq05dMd3V0DYLBCkIQwuHZZuBHJnXvEGNFBrNDXHbx0QooApAVUozUFQQkcdAD4tiZ6Gp7s3S004p2ckAsx");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentOrder = useSelector(selectCurrentOrder)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3005/create-payment-intent", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: currentOrder.totalAmount, orderId:currentOrder.id }),
    
    })
      .then((res) => res.json())
          .then((data) => {
      console.log("Create Payment Intent Response:", data);
      setClientSecret(data.clientSecret);
    })
  }, []);
  console.log("stripePromise",stripePromise)

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log("clientSecret",clientSecret)
  console.log("clientSecret",clientSecret)


  return (
    <div className="Stripe">
      {clientSecret && (
      <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}