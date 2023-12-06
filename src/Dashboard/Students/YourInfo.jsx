import React from 'react';
import useUserInfo from '../../Hooks/useUser';
import useCartClass from '../../Hooks/useCartClass';

const YourInfo = () => {
    let [Userinfo]= useUserInfo()
   let [cartClass] = useCartClass()


    return (
        <div className=' '>
            <div className='max-w-full hero-content  grid grid-cols-1 '>
                {
                    Userinfo.map ( ({_id,name,role,email,photoURL}) => (
                    <>
                    <div className="alert w-full  shadow-lg" key={_id}>
<div>
<div className="avatar ">
  <div className="w-16 justify-center lg:justify-start ">
    <img src={photoURL} className='rounded-full'/>
  </div>
</div>
</div>
  <div>
    <h3 className="font-bold">Welcome to Dashboard</h3>
    <div className="text-xs"> <span className='text-green-600 font-bold'>{role}</span></div>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    
<div className="card card-side max-w-full bg-base-300 mt-3 shadow-xl">

 
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p> {email}</p>
    <p>Total Selected Class : <span className='ps-2 font-bold text-amber-800'>{cartClass.length}</span></p>
    <p>Your ID: <span className='ps-2 font-bold text-amber-800'>{_id}</span></p>
  </div>
</div> 

<div className="card max-w-full bg-base-300 mt-3 shadow-xl">

  <div className="card-body items-center justify-center  text-center">
    <h2 className="card-title text-6xl">{cartClass.length}</h2>
    <p>Total Enrolled Classes</p>
   
    
  </div>
  
</div> 


    </div>  
   


                    </>    
                    ))
                }
 <h1 className='uppercase font-bold'>On going CLasses</h1>
<div className='grid grid-cols-1 gap-2 '>
 
  {
cartClass.map(ct => (
<div className="alert " >
<div className="avatar ">
  <div className="w-8 justify-center lg:justify-start " key={ct._id}>
    <img src={ct.image} className='rounded-full'/>
  </div>
</div>
  <div>
   
    <p className='text-md font-semibold text-red-800'>{ct.cname}</p> 
    <p>{ct.name}</p>
  </div>
  <button className='text-green-600'>running ...</button>
</div>
))
  }
</div>


            </div>
        </div>
    );
};

export default YourInfo;