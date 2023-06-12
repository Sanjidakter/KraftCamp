import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function UpdateClasses() {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);


  const handleUpdate = () => {
    console.log(updatedClassInfo)
    // Send a PATCH request to update the class information
    fetch(`https://kraftcamp-server.vercel.app/classes/${classId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedClassInfo),
    })
      .then((response) => {
        // Handle successful response
        console.log("Class updated successfully!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating class:", error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto text-orange-500 w-full">
      <h2>Update Class</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Class Name</th>
            <th>Price</th>
             <th>Total Enrolled Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <input
                type="text"
                name="title"
                value={updatedClassInfo.title}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="price"
                value={updatedClassInfo.price}
                onChange={handleChange}
              />
            </td>
            
            <td>
              <input
                type="number"
                name="availableSeats"
                value={updatedClassInfo.availableSeats}
                onChange={handleChange}
              />
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpdateClasses;
