import { FaAddressBook, FaBandcamp, FaHome, FaPlusCircle, FaSave, FaUser, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useADmin from '../Hooks/useADmin';
import useInstructor from '../Hooks/useInstructor';
import img from '../../public/world.png'


const Dashboard = () => {
  let [isadmin] = useADmin();
  let [isInstructor] = useInstructor()
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col px-6 mt-4">
          <div>
            <label htmlFor="my-drawer-2" className="btn  btn-md drawer-button bg-gradient-to-tr from-[#3952f5]  to-[#fc4778] text-white lg:hidden">
              <FaHome></FaHome>
            </label>

          </div>
          <Outlet />
        </div>
        <div className="drawer-side   min-h-full lg:min-h-0 ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-56 h-full bg-[#000000] text-white relative  ">
            <div className=' flex  justify-center items-center gap-2 my-5 mx-auto'>
              <img src={img} alt="g" className='w-8' />
              <div><h1 className='text-lg uppercase text-center font-bold '>FluentWorld</h1></div>
            </div>

            <li><Link to='/dashboard/info'> <FaAddressBook /> Overview </Link></li>
            {
              isInstructor ?

                <>
                  <li><Link to='/dashboard/addclass'> <FaUser /> Add class</Link></li>
                  <li><Link to='/dashboard/myclass'> <FaBandcamp /> My  Classes</Link></li>
                </> :
                isadmin ?

                  <>
                    <li><Link to='/dashboard/users'> <FaUser /> All user</Link></li>
                    <li><Link to='/dashboard/manageClass'> <FaBandcamp />MAnage Classes</Link></li>
                  </>
                  :
                  <>
                    <li><Link to='/dashboard/mySclass'> <FaPlusCircle /> My Selected Classes</Link></li>
                    <li><Link to='/dashboard/myEclass'> <FaSave /> My Enrolled Classes</Link></li>
                  </>

            }



            <li className=" items-center text-white   absolute bottom-5">
              <Link to='/' >  <FaHome /> Go to home</Link></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;