import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
      setUserName(user.displayName);
    }
  }, []);

  console.log(userEmail, userEmail);

  const onSubmit = (data) => {
    const { title, price, availableSeats, image } = data;
    const newItem = {
      title,
      instructorName: user.displayName,
      mail: user.email,
      price: parseFloat(price),
      availableSeats,
      image,
      status: 'pending',
    };
    console.log(newItem);
    // Replace axiosSecure.post with your preferred method for making HTTP requests
    // For example, you can use fetch or another HTTP client library
    fetch(" https://kraftcamp-server.vercel.app/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("after posting new menu item", data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full px-10 text-orange-600">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class name*</span>
          </label>
          <input
            type="text"
            placeholder="class Name"
            {...register("title", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              value={userName}
              readOnly
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>

            <input
              type="email"
              value={userEmail}
              readOnly
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.availableSeats && (
              <span className="error-message">This field is required</span>
            )}
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available Seat*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="available seat"
              className="input input-bordered w-full "
            />
            {errors.availableSeats && (
              <span className="error-message">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="text"
            {...register("image", { required: true })}
            className="input input-bordered"
            placeholder="add image url"
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddClass;
