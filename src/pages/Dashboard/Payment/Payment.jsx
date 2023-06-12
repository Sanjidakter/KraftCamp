// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import useCart from "../../../hooks/useCart";

// // TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
// const Payment = () => {
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const price = parseFloat(total.toFixed(2))
//     return (
//         <div className="w-full p-5">
           
//             <h2 className="text-3xl text-center"> PAYMENT</h2>
//             <Elements stripe={stripePromise}>
//             <CheckoutForm cart={cart} price={price}></CheckoutForm>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;




import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = ({ refetch }) => {
    const location = useLocation();
    const item = location.state.item;
    const price = {item};

    console.log(item._id,item.name)

  return (
    <div className="w-full p-5">
      <h2 className="text-3xl text-center">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm item={item} price={price} refetch={ refetch } />
      </Elements>
    </div>
  );
};

export default Payment;



