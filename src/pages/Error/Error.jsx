import React from "react";
import { Link } from 'react-router-dom';
import "./Error.css";


const Error = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-message">Oops! Page not found.</p>
      <div className="not-found-animation"></div>
      <Link to="/" className="not-found-button">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
