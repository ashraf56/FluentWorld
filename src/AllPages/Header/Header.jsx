import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link>Home</Link> </li>
      <li><Link>Instructors</Link> </li>
      <li><Link>Classes</Link> </li>
      <li><Link>Dashboard </Link> </li>

      </ul>
    </div>
    <a className="btn btn-ghost  text-xl uppercase">FluentWorld</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link> </li>
      <li><Link>Instructors</Link> </li>
      <li><Link>Classes</Link> </li>
      <li><Link>Dashboard </Link> </li>

      
    </ul>
  </div>
  <div className="navbar-end">
   <div className="w-10 rounded-full">
          <img src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-full' />
        </div>
  </div>
</div>
        </div>
    );
};

export default Header;