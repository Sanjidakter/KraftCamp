import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";

import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClassesPage from "../pages/Dashboard/EnrolledClassesPage/EnrolledClassesPage";
import Error from "../pages/Error/Error";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
         path:'/classes',
         element:<ClassesPage></ClassesPage>
        },
        {
         path:'/instructors',
         element:<InstructorsPage></InstructorsPage>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
   children:[
    {
      path:'allusers',
      element: <AllUsers></AllUsers>
    },
    {
      path:'addclass',
      element: <AddClass></AddClass>
    },
    {
      path:'manageclasses',
      element: <ManageClasses></ManageClasses>
    },
    {
      path:'myclasses',
      element: <MyClasses></MyClasses>
    },
    {
      path:'mycart',
      element: <MyCart></MyCart>
    },
    {
      path:'payment/:id',
      element: <Payment></Payment>
     
    },
    {
      path:'enrolled',
      element: <EnrolledClassesPage></EnrolledClassesPage>
     
    },
    {
      path:'history',
      element: <PaymentHistory></PaymentHistory>
     
    },
   ]
  },
  {
    path:'*',
    element: <Error></Error>
  }
]);
