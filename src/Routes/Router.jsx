import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageClasses from "../Dashboard/Admin/ManageClasses";
import Instructors from "../AllPages/Instructors/Instructors";
import AddClass from "../Dashboard/INstructors/AddClass";
import MyClass from "../Dashboard/INstructors/MyClass";
import MyenrolledClass from "../Dashboard/Students/MyenrolledClass";
import MyselectedClass from "../Dashboard/Students/MyselectedClass";
import Classes from "../AllPages/Classes/Classes";
import PrivateSecure from "./PrivateSecure";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import YourInfo from "../Dashboard/Students/YourInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/signup',
        element: <Register></Register>

      },
      {
        path: '/instruc',
        element: <Instructors></Instructors>,

      },
      {
        path: '/Classes',
        element: <Classes></Classes>

      },



    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'users',
        element: <AdminRoute> <ManageUsers /></AdminRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute> <ManageClasses /></AdminRoute>
      },

      {
        path: 'addclass',
        element: <InstructorRoute><AddClass />   </InstructorRoute>
      },
      {
        path: 'myclass',
        element: <InstructorRoute> <MyClass /> </InstructorRoute>
      },
      
      {
        path: 'myEclass',
        element: <PrivateSecure> <MyenrolledClass></MyenrolledClass>   </PrivateSecure>
      },
      {
        path: 'mySclass',
        element: <PrivateSecure>   <MyselectedClass></MyselectedClass></PrivateSecure>
      },
      {
        path: 'info',
        element: <PrivateSecure>   <YourInfo /></PrivateSecure>
      },
    ]
  }

]);

export default router;