

import React from "react";
import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt, FaCreditCard } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import CheckoutForm from "../payment/CheckoutForm";

const MyCart = () => {
  const [cart, refetch] = useCart();
  

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kraftcamp-server.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>KraftCamp | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-between items-center">
        <h3 className="text-3xl">Selected Classes: {cart.length}</h3>
        
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text">${item.price}</td>
                <td>
                  <div className="flex">
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white mr-2"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                    <Link
                      to={`/dashboard/payment/${item._id}`}
                      state={{ item }}
                      refetch={refetch}
                    >
                      <button className="btn btn-ghost bg-blue-600 text-white">
                        <FaCreditCard></FaCreditCard>
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
