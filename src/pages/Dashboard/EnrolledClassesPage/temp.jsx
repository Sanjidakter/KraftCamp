import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClassesPage = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  const fetchPayments = () => {
   
      axiosSecure.get('/payments')
      .then((res) => {
        setPayments(res.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  fetchPayments();

  return (
    <div>
      <h2>Payments:</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment._id}>
            <p>Email: {payment.email}</p>
            <p>Transaction ID: {payment.transactionId}</p>
            {/* Render other payment details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledClassesPage;
