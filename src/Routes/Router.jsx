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
      element: <ManageUsers/>
    },
    {
      path:'manageClass',
      element:<ManageClasses/> 
    },
    {
      path:'addclass',
      element:<AddClass/>  
    },
    {
      path:'myclass',
      element: <MyClass/>  
    },
    {
      path:'myEclass',
      element:<MyenrolledClass></MyenrolledClass>  
    },
    {
      path:'mySclass',
      element:<MyselectedClass></MyselectedClass>
    },
  ]
}

  ]);

  export default router;