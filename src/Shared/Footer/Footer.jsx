import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logo} // Replace with your website logo
              alt="Website Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-xl font-bold">Kraft <span className='text-pink-500'><i>&</i></span> Camp</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-black hover:text-gray-600">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mt-8 text-black">
          <p className="mb-2">Contact: info@learnwithtoys.com</p>
          <p className="mb-2">123 Main Street, City, State, ZIP</p>
        </div>
        <hr className="my-8 border-gray-500" />
        <div className="text-center text-black">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
