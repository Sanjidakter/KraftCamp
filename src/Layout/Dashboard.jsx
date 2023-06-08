import { NavLink, Outlet } from "react-router-dom";

import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUser,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { Feather } from "react-feather";
import useAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const isAdmin = useAdmin();
  const isInstructor = false;

  console.log(isAdmin);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Classes
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled">
                  <Feather></Feather>
                  Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes"> Our Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
