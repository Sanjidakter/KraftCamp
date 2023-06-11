import React from 'react';
import paintingImage from '../../../assets/classes/painting.png';
import sketchingImage from '../../../assets/classes/sketching.png';
import sculptureImage from '../../../assets/classes/sculpture.png';
import jewelryImage from '../../../assets/classes/jwelery.png';
import craftsImage from '../../../assets/classes/crafts.png';
import potteryImage from '../../../assets/classes/potery.png';
import { Link } from 'react-router-dom';


const PopularClassesSection = () => {
  
  
  const classes = [
    {
      id: 1,
      title: 'Drawing and Painting',
      image: paintingImage,
      students: 120,
    },
    {
      id: 2,
      title: 'Sketching',
      image: sketchingImage,
      students: 90,
    },
    {
      id: 3,
      title: 'Sculpture',
      image: sculptureImage,
      students: 80,
    },
    {
      id: 4,
      title: 'Jewelry Making',
      image: jewelryImage,
      students: 75,
    },
    {
      id: 5,
      title: 'Craft Workshop',
      image: craftsImage,
      students: 70,
    },
    {
      id: 6,
      title: 'Pottery and Ceramic',
      image: potteryImage,
      students: 65,
    },
  ];
  

  // Sort classes based on the number of students in descending order
  const sortedClasses = classes.sort((a, b) => b.students - a.students);

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Classes</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sortedClasses.slice(0, 6).map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{classItem.title}</h3>
                <p className="text-gray-700">
                  {classItem.students} students enrolled
                </p>
                <Link to="/classes"><button className="mt-4 btn btn-primary">More</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClassesSection;
