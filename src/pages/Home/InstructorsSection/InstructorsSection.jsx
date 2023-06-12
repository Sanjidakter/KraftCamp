import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InstructorsSection() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get(' https://kraftcamp-server.vercel.app/instructors')
      .then(response => {
        setInstructors(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const popularInstructors = instructors.slice(0, 6);

  return (
    <div className="container mx-auto text-center text-orange-500">
    <h1 className="text-3xl font-bold my-8">Popular Instructors</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {popularInstructors.map((instructor) => (
        <div key={instructor._id} className="p-4 bg-gray-100">
          <img src={instructor.image} alt={instructor.name} className="sm:w-auto mb-4 max-w-sm mx-auto rounded-full h-40 w-40" />
          <h2 className="text-xl font-bold">{instructor.name}</h2>
          <p className="text-lg">Email: {instructor.email}</p>
          {instructor.classesTaken && (
            <p className="text-lg">Number of Classes Taken: {instructor.classesTaken}</p>
          )}
          {instructor.classes.length > 0 && (
            <div>
              <p className="text-lg">Classes Taken:</p>
              <ul>
                {instructor.classes.map((className, idx) => (
                  <li key={idx}>{className}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default InstructorsSection;
