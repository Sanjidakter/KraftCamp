import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
    <li>
        <Link>Home</Link>
    </li>
    <li>
    <Link>Instructors</Link>
    </li>
    <li>
        <Link>Classes</Link>
    </li>
      
      {/* {user?.email ? (
        <>
          <li>
            <Link to="/myToys">My Toys</Link>
            <Link to="/addToys">Add a Toy</Link>

            <button
              className="btn btn-outline btn-warning"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link className="btn btn-outline btn-warning" to="/login">
            Login
          </Link>
        </li>
      )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navItems
          }
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl"><i>KraftCamp</i></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navItems}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default Navbar;
