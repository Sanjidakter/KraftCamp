import React from 'react';


const PopularClassesSection = () => {
  const classes = [
    {
      id: 1,
      title: 'Drawing and Sketching',
      image: 'yoga.jpg',
      students: 120,
    },
    {
      id: 2,
      title: 'Painting',
      image: 'zumba.jpg',
      students: 90,
    },
    {
      id: 3,
      title: 'Sculpture',
      image: 'pilates.jpg',
      students: 80,
    },
    {
      id: 4,
      title: 'jewelery making',
      image: 'crossfit.jpg',
      students: 75,
    },
    {
      id: 5,
      title: 'Craft Workshop',
      image: 'kickboxing.jpg',
      students: 70,
    },
    {
      id: 6,
      title: 'Potery and Ceramic',
      image: 'spinning.jpg',
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
                <button className="mt-4 btn btn-primary">More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClassesSection;
