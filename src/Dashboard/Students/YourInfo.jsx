import React from 'react';
import useUserInfo from '../../Hooks/useUser';
import { FaMailBulk, FaUser } from 'react-icons/fa';
import useCartClass from '../../Hooks/useCartClass';

const YourInfo = () => {
    let [Userinfo,refetch]= useUserInfo()
   let [cartClass] = useCartClass()


    return (
        <div className=' '>
            <div className='max-w-full hero-content  grid grid-cols-1 '>
                {
                    Userinfo.map ( ({_id,name,role,email,photoURL}) => (
                    <>
                    <div className="alert w-full shadow-lg" key={_id}>
<div>
    <FaUser></FaUser>
</div>
  <div>
    <h3 className="font-bold">Welcome to Dashboard</h3>
    <div className="text-xs">You are  a  <span className='text-green-600 font-bold'>{role}</span></div>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    
<div className="card card-side max-w-full bg-base-300 mt-3 shadow-xl">
<div className="avatar ">
  <div className="w-24 justify-center lg:justify-start ">
    <img src={photoURL} />
  </div>
</div>
 
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p> {email}</p>
    
    
  </div>
</div> 

<div className="card max-w-full bg-base-300 mt-3 shadow-xl">

  <div className="card-body items-center justify-center  text-center">
    <h2 className="card-title text-6xl">{cartClass.length}</h2>
    <p>Total Selected Class</p>
   
    
  </div>
  
</div> 


    </div>  
    <div className="card  w-full   mx-auto  bg-base-300 mt-3 shadow-xl">


<div className="card-body text-center justify-center items-center">
    <h2 className="card-title text-6xl">{cartClass.length}</h2>
<p>Total Enrolled  Class</p>
  
</div>

</div> 
                    </>    
                    ))
                }
            </div>
        </div>
    );
};

export default YourInfo;