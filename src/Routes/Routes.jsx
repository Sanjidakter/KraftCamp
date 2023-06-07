import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";


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
      path:'myclasses',
      element:<MyClasses></MyClasses>
    }
   ]
  }
]);
