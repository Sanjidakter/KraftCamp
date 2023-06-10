import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClassesPage = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth(); 

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

  const getItemNames = (payment) => {
    return payment.itemNames.map((itemName, index) => (
      <li key={index}>{itemName}</li>
    ));
  };

  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-2 text-center">Enrolled Classes</h2>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="border-b border-gray-200 px-4 py-2">Email</th>
          <th className="border-b border-gray-200 px-4 py-2">Transaction ID</th>
          <th className="border-b border-gray-200 px-4 py-2">Enrolled Classes</th>
          {/* Add more table headers for additional payment details */}
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => {
          if (payment.email === user.email) {
            return (
              <tr key={payment._id}>
                <td className="border-b border-gray-200 px-4 py-2">{payment.email}</td>
                <td className="border-b border-gray-200 px-4 py-2">{payment.transactionId}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <ul>{getItemNames(payment)}</ul>
                </td>
                {/* Add more table cells for additional payment details */}
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

export default EnrolledClassesPage;
