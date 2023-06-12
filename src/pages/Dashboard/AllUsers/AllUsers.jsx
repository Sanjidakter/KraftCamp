import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("users");
    return res.data;
  });

  // make instructor
  const handleMakeInstructor = (user) => {
    if (users.email === user.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't change your own role!",
      });
      return;
    }
  
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d13",
      confirmButtonText: "Yes!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`users/change-role/${user._id}`, { role: "instructor" })
            .then((data) => {
              if (data.data.modifiedCount > 0) {
                refetch();
                Swal.fire("Role has been changed.", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };


  // make admin
  const handleMakeAdmin= (user) => {
    if (users.email === user.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't change your own role!",
      });
      return;
    }
  
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d13",
      confirmButtonText: "Yes!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`users/change-role/${user._id}`, { role: "admin" })
            .then((data) => {
              if (data.data.modifiedCount > 0) {
                refetch();
                Swal.fire("Role has been changed.", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };
  

  const handleDelete = (user) => {
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
        fetch(` http://localhost:5000/users/admin/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full text-orange-400">
      <Helmet>
        <title>KraftCamp | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th> Select Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role ? user?.role : "student"}</td>
                {/* <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td> */}
                <td className="md:flex md:gap-2 py-4 ">
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user?.role === "instructor"}
                    className="btn btn-xs text-orange-400"
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user?.role === "admin"}
                    className="btn btn-xs text-orange-400"
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;