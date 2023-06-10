import React from "react";
import student from "../../../assets/students.png"
import b6 from "../../../assets/b6.png"
import staff from "../../../assets/staff.png"

const Info = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={student}
            alt="Image 1"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2 text-center">Photos</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              commodo mauris eget ultrices iaculis.
            </p>
          </div>
          <div className="px-4 py-2 bg-gray-200">
            <button className="text-blue-500 font-semibold">More</button>
          </div>
        </div>

        <div className="max-w-xs mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={b6}
            alt="Image 2"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2 text-center">Alumni</h3>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
          </div>
          <div className="px-4 py-2 bg-gray-200">
            <button className="text-blue-500 font-semibold">More</button>
          </div>
        </div>

        <div className="max-w-xs mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={staff}
            alt="img 3"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2 text-center">Staff Positions </h3>
            <p className="text-gray-700">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur.
            </p>
          </div>
          <div className="px-4 py-2 bg-gray-200">
            <button className="text-blue-500 font-semibold">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
