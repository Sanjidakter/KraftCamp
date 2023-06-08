import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const {user} = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(' https://kraftcamp-server.vercel.app/classes')
      .then(response => response.json())
      .then(data => setClasses(data))
      .catch(error => console.log(error));
  }, []);

  const handleAddToCart = (classItem) => {
    console.log(classItem);
    if (user && user.email) {
      const cartItem = {
        menuItemId: classItem._id,
        name: classItem.title,
        image: classItem.image,
        price: classItem.price,
        email: user.email
      };

      fetch(' https://kraftcamp-server.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch(); //refetch to update cart num
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'class added to the cart.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to add cass',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Classes</h1>
      <div className="grid grid-cols-2 gap-4">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`p-4 ${classItem.availableSeats === 0 ? 'bg-red-200' : 'bg-green-200'}`}
          >
            <img src={classItem.image} alt="Class" className="w-full mb-4" />
            <h2 className="text-xl font-bold">{classItem.title}</h2>
            <p className="text-lg">Instructor: {classItem.instructorName}</p>
            <p className="text-lg">Available Seats: {classItem.availableSeats}</p>
            <p className="text-lg">Price: {classItem.price}</p>
            <button
              onClick={() =>handleAddToCart(classItem)}
              disabled={classItem.availableSeats === 0 || classItem.isAdmin}
              className={`mt-4 py-2 px-4 rounded ${
                classItem.availableSeats === 0 || classItem.isAdmin ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {classItem.isAdmin ? 'Admin' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassesPage;
