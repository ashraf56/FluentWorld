import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  let{user,Signout}=useContext(AuthService)
  const [themes, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
let handleout=()=>{
  Signout()
  .then(() => {

  }).catch((error) => {
  });
}
 
let sun='https://cdn-icons-png.flaticon.com/512/869/869869.png';
let moon='https://cdn-icons-png.flaticon.com/512/547/547433.png'
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};
useEffect(() => {
  localStorage.setItem("theme", themes);
  const Theme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", Theme);
}, [themes]);

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
      <li><Link >Dashboard </Link> </li>

      </ul>
    </div>
    <a className="btn btn-ghost  text-xl uppercase">FluentWorld</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link> </li>
      <li><Link>Instructors</Link> </li>
      <li><Link>Classes</Link> </li>
      {user && <li><Link to='dashboard'>Dashboard </Link> </li>}
      {user  ?  <li><Link onClick={handleout}>Logout</Link> </li>:  <li><Link to='/login'>Login </Link> </li>}

      
    </ul>
  </div>
  <div className="navbar-end">
  
   {user?.photoURL && <div className="avatar">
  <div className="w-8 rounded-full ring ring-slate-950 ring-offset-base-100 ring-offset-2">
     <img src={user.photoURL} className='rounded-full' />
  </div>
</div>
         
        
        }

<button className="btn btn-square btn-ghost mx-6">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={themes === "light" ? false : true}
            />
            <img src={sun} className="w-8 h-8 swap-on" />
            <img src={moon} className="w-8 h-8 swap-off"/>
          </label>
        </button>

  </div>
</div>
        </div>
    );
};

export default Header;