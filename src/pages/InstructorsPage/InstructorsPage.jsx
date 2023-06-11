import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(' https://kraftcamp-server.vercel.app/instructors')
      .then(response => response.json())
      .then(data => setInstructors(data))
      .catch(error => console.error('Error fetching instructors:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Helmet>
      <title>KraftCamp | Instructors</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">All Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <div key={index} className="card bg-white rounded-lg shadow-md">
            <img src={instructor.image} alt={instructor.name} className=" sm:w-auto mb-4 max-w-sm mx-auto rounded-full h-40 w-40" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{instructor.name}</h2>
              <p className="text-gray-500 mb-2">Email: {instructor.email}</p>
              {instructor.classesTaken && (
                <p className="text-gray-500 mb-2">Number of Classes Taken: {instructor.classesTaken}</p>
              )}
              {instructor.classes && instructor.classes.length > 0 && (
                <div>
                  <p className="text-gray-500 mb-2">Classes Taken:</p>
                  <ul className="list-disc list-inside">
                    {instructor.classes.map((className, idx) => (
                      <li key={idx}>{className}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
