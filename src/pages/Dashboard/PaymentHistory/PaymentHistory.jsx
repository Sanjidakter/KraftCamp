import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const fetchPayments = () => {
    axiosSecure
      .get('/payments')
      .then((res) => {
        // Sort payments in descending order based on the date
        const sortedPayments = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPayments(sortedPayments);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false when the request is completed
      });
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const getItemNames = (payment) => {
    return payment.itemNames.map((itemName, index) => (
      <li key={index}>{itemName}</li>
    ));
  };

  if (!user || !user.email) {
    return <div>Loading user data...</div>;
  }

  if (isLoading) {
    return <progress className="progress w-56"></progress>
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2 text-center">Payment History</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b border-gray-200 px-4 py-2">Date</th>
            <th className="border-b border-gray-200 px-4 py-2">Total Cost</th>
            <th className="border-b border-gray-200 px-4 py-2">Classes</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => {
            if (payment.email === user.email) {
              return (
                <tr key={payment._id}>
                  <td className="border-b border-gray-200 px-4 py-2">{new Date(payment.date).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{payment.price}</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <ul>{payment.itemNames}</ul>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
