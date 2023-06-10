import { NavLink, Outlet } from "react-router-dom";

import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaUser,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { Feather } from "react-feather";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useRole from "../hooks/useRole";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const {loading} = useContext(AuthContext);
  const [cart] = useCart();
  const [role, isRoleLoading] = useRole();
  const [dashboardLoaded, setDashboardLoaded] = useState(false);
  // const isAdmin = true;
  
  // // console.log(isAdmin);
  // if(role === "loading" || isRoleLoading || loading){
  //   return <div>Loading...</div>;
  // }


// for fixing reload
  useEffect(() => {
    if (role !== "loading" && !isRoleLoading && !loading) {
      setDashboardLoaded(true);
    }
  }, [role, isRoleLoading, loading]);

  useEffect(() => {
    if (dashboardLoaded) {
      // Save the dashboard state to local storage
      localStorage.setItem("dashboardState", JSON.stringify({ role }));
    }
  }, [dashboardLoaded, role]);

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
          {
          role === "admin" ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser> Manage Users
                </NavLink>
              </li>

             
            </>
          )  : role === "instructor" ?
            <>
             {/* for instructor */}
             <li>
                <NavLink to="/dashboard/addclass">
                  <FaUser></FaUser> AddClass
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <FaUser></FaUser> MyClass
                </NavLink>
              </li>
            </> : <>
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
          
        }

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
