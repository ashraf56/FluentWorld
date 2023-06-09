import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

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
  ]);

  export default router;