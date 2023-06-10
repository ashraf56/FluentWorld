import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageClasses from "../Dashboard/Admin/ManageClasses";

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


      ]
    },

{
  path:'dashboard',
  element:<Dashboard></Dashboard>,
  children:[
    {
      path:'users',
      element:<ManageUsers></ManageUsers>
    },
    {
      path:'manageClass',
      element:<ManageClasses/>
    }
  ]
}

  ]);

  export default router;