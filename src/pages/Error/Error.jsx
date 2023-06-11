import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import ops from "../../assets/ops.gif";

const Error = () => {
  return (
    <div className="not-found-container">
      <img className="rounded-lg " src={ops} alt="GIF" />
      <p className="not-found-message">Oops! Page not found.</p>
      <div className="not-found-animation"></div>
      <Link to="/" className="not-found-button">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
