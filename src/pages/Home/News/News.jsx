import React from "react";

const News = () => {
  return (
    <div className="text-center mt-12 mb-6">
      <i className="font-fancy text-yellow-200 text-2xl mt-9 mb-6 font-bold" style={{ fontFamily: "Grand Hotel, cursive" }}>From the blog</i>
      <h2 className="font-fancy text-yellow-200 text-4xl mt-4 mb-6 font-bold">EXCITING NEWS</h2>
      <div className="flex justify-center w-full gap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/src/assets/staff.png"
              alt="News 1"
            />
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800">News Title 1</h3>
              <p className="text-gray-600 text-sm mb-4">June 1, 2023</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sed aliquet turpis. Vivamus eleifend nibh vel nulla scelerisque
                convallis. Proin elementum, mi eget vulputate commodo, justo odio
                ultricies metus, ac congue est ligula eu arcu.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/src/assets/students.png"
              alt="News 2"
            />
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800">News Title 2</h3>
              <p className="text-gray-600 text-sm mb-4">June 5, 2023</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sed aliquet turpis. Vivamus eleifend nibh vel nulla scelerisque
                convallis. Proin elementum, mi eget vulputate commodo, justo odio
                ultricies metus, ac congue est ligula eu arcu.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
