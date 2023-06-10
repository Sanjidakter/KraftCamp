import { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  // const [classes, setClasses] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  // console.log(classes);

  const handleApprove = async (classId) => {
    Swal.fire({
      title: "Want to approve this class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d13",
      confirmButtonText: "Yes!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`classes/change-status/${classId}`, { status: "approved" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("status has been changed.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  
  const handleDeny = async (classId) => {
    Swal.fire({
      title: "Want to deny this class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d13",
      confirmButtonText: "Yes!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`classes/change-status/${classId}`, { status: "denied" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("status has been changed.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  
  const handleSendFeedback = async (classId, feedback) => {
    try {
      const response = await fetch(` https://kraftcamp-server.vercel.app/classes/${classId}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send feedback');
      }
  
      // Update the classes array with the updated class
      const updatedClasses = classes.map((c) =>
        c._id === classId ? { ...c, feedback } : c
      );
      setClasses(updatedClasses);
    } catch (error) {
      console.error(error);
    }
  };
  
 

  return (
    <div className="container mx-auto py-8 bg-gray-700">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Manage Classes
      </h1>
      <table className="table-auto mt-8 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Image</th>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Instructor Name</th>
            <th className="px-4 py-2">Instructor Email</th>
            <th className="px-4 py-2">Available Seats</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((c) => (
            <tr key={c._id}>
              <td className="px-4 py-2">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{c.title}</td>
              <td className="px-4 py-2">{c.instructorName}</td>
              <td className="px-4 py-2">{c.mail}</td>
              <td className="px-4 py-2">{c.availableSeats}</td>
              <td className="px-4 py-2">{c.price}</td>
              <td className="px-4 py-2">{c.status}</td>

              <td className="px-4 py-2">
              <button
                    onClick={() => handleApprove(c._id)}
                    disabled={c?.status=== "approved"}
                    className="btn btn-xs text-orange-400"
                  >
                   Approve
                  </button>
                  <button
                    onClick={() => handleDeny(c._id)}
                    disabled={c?.status === "denied"}
                    className="btn btn-xs text-orange-400"
                  >
                   Deny
                  </button>
               
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    handleSendFeedback(c._id, "Your feedback message")
                  }
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Feedback modal */}
     

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white w-1/3 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feedback</h2>
            <textarea
              className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your feedback here"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                className="btn btn-primary mr-2"
                onClick={handleSubmitFeedback}
              >
                Send
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setFeedbackModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
