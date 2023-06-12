



import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ item, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await axiosSecure.post("/create-payment-intent", {
          price: item.price,
        });
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };

    if (item.price > 0) {
      fetchClientSecret();
    }
  }, [item.price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (confirmError) {
      console.log(confirmError);
      // Handle error
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // Save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: item.price,
        date: new Date(),
        cartId: item._id,
        classId: item.menuItemId,
        status: "service pending",
        itemNames: item.name,
      };
      try {
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        if (res.data.result.insertedId) {
          // Display confirmation
          // Update available seats in classes collection
          updateAvailableSeats(item.menuItemId);
          // Delete the item from the cart
          refetch();
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    }
  };

  // Function to update available seats in classes collection
  const updateAvailableSeats = async (classId) => {
    try {
      await axios.patch(`/classes/update-seats/${classId}`);
      console.log(`Updated available seats for class with ID ${classId}`);
    } catch (error) {
      console.error('Error updating available seats', error);
      // Handle error
    }
  };
  
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
