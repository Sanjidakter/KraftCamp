import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { AuthContext } from "../../providers/AuthProvider";
import { ShoppingCart } from 'react-feather';
import useCart from "../../hooks/useCart";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <Link to="/dashboard/mycart">
            <button className="btn gap-2">
              <ShoppingCart />
              <div className="badge badge-secondary">
                +{carts?.length || 0}
              </div>
            </button>
          </Link>
          <button
            className="btn btn-outline btn-warning"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <li>
          <Link className="btn btn-outline btn-warning" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
// for theme
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);

// update state on toggle
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

// set theme state in localstorage on mount & also update localstorage on state change
useEffect(() => {
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  // add custom data-theme attribute to html tag required to update theme using DaisyUI
  document.querySelector("html").setAttribute("data-theme", localTheme);
}, [theme]);



  return (
    <div className="navbar bg-base-100 text-blue-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" className="logo-image" />
          <i>KraftCamp</i>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
         

        {user ? (
          <img
            width="40"
            height="40"
            className="mr-6 rounded-lg"
            src={user?.photoURL}
            alt=""
            title={user?.displayName}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Navbar;
