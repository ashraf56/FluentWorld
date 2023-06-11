import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageClasses from "../Dashboard/Admin/ManageClasses";
import Instructors from "../AllPages/Instructors/Instructors";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
{
path:'/',
element:<Home></Home>

},
{
path:'/login',
element:<Login></Login>

},
{
path:'/signup',
element:<Register></Register>

},
{
path:'/instruc',
element: <Instructors></Instructors>,

},


      ]
    },

{
  path:'dashboard',
  element:<Dashboard></Dashboard>,
  children:[
    {
      path:'users',
      element:<AdminRoute> <ManageUsers/> </AdminRoute>
    },
    {
      path:'manageClass',
      element:<AdminRoute> <ManageClasses/> </AdminRoute>  
    }
  ]
}

  ]);

  export default router;