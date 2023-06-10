import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


function MyClasses() {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (user) {
        const loggedInUser = user.displayName;
  
        fetch(' http://localhost:5000/classes')
          .then((response) => response.json())
          .then((data) => {
            const instructorClasses = data.filter(
              (c) => c.instructorName === loggedInUser
            );
           
            setClasses(instructorClasses);
            setIsLoading(false);
          })
          .catch((error) => console.error('Error fetching classes:', error));
      }
    }, [user]);

  return (
    <div className="overflow-x-auto text-orange-500 w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class Name</th>
        <th>Status</th>
        <th>Total Enrolled Students</th>
        <th>Feedback</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {classes.map((c, index) => (
        <tr key={c._id} className={index % 2 === 0 ? "bg-base-200" : ""}>
          <th>{index + 1}</th>
          <td>{c.title}</td>
          <td>{c.status}</td>
          <td>{c.availableSeats}</td>
          <td>{c.feedback}</td>
          <td>
            <button className="btn btn-primary">Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default MyClasses;
