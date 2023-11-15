import {  FaBandcamp, FaHome, FaPlusCircle, FaSave, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useADmin from '../Hooks/useADmin';
import useInstructor from '../Hooks/useInstructor';
import img from '../../public/world.png'

const Dashboard = () => {

  let [isadmin]=useADmin();
  let [isInstructor]=useInstructor()


    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center mt-4">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  min-h-full lg:min-h-0 ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
  
    <ul className="menu p-4 w-30 h-full bg-gray-950 text-white">
      <div className='avatar w-16 justify-center items-center mx-auto'>
<img src={img} alt="" srcset="" /> 
    
      
 
  </div>
  <h1 className='text-lg uppercase text-center font-bold pb-5'>Dashboard</h1>
{
isInstructor ?

<>
<li><Link to='/dashboard/addclass'> <FaUser/> Add class</Link></li>
     <li><Link to='/dashboard/myclass'> <FaBandcamp/> My  Classes</Link></li> 
</> : isadmin ? 

<><li><Link to='/dashboard/users'> <FaUser/> All user</Link></li>
      <li><Link to='/dashboard/manageClass'> <FaBandcamp/>MAnage Classes</Link></li></>
:  <>
       <li><Link to='/dashboard/mySclass'> <FaPlusCircle/> My Selected Classes</Link></li>
<li><Link to='/dashboard/myEclass'> <FaSave/> My Enrolled Classes</Link></li>
</>
}
  
       <ul className=" h-1/6 bg-gray-950 text-white mt-10 bottom-0">
     
     <li><Link to='/' >  <FaHome/> Go to home</Link></li>
   </ul>
    </ul>
   
  </div>
</div>
        </div>
    );
};

export default Dashboard;