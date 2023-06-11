import React from 'react';
import { FaBandcamp, FaHome, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useADmins from '../Hooks/useADmins';

const Dashboard = () => {
  //let isadmin=true;

  let [isAdmin]=useADmins()
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center mt-4">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
  
    <ul className="menu p-4 w-80 h-5/6 bg-gray-950 text-white">
       <h1 className='text-lg uppercase text-center font-bold py-6'>Data Insights Dashboard</h1>
      { isAdmin ? <>
      <li><Link to='/dashboard/users'> <FaUser/> Manage Users</Link></li>
      <li><Link to='/dashboard/manageClass'> <FaBandcamp/> Manage Classes</Link></li> 
      </> :  <>
      <li><Link to='/dashboard/users'> <FaUser/>not Manage Users</Link></li>
      <li><Link to='/dashboard/manageClass'> <FaBandcamp/> not Manage Classes</Link></li> 
      </> }
    </ul>
    <ul className="menu p-4 w-80 h-1/6 bg-gray-950 text-white mx-auto ">
     
     <li><Link to='/' >  <FaHome/> Go to home</Link></li>
   </ul>
  </div>
</div>
        </div>
    );
};

export default Dashboard;