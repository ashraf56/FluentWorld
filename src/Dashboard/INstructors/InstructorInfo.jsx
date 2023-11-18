import React, { useContext } from 'react';
import instructordata from '../../Hooks/instructordata';
import axios from 'axios';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const InstructorInfo = () => {
    let [instructors]=instructordata()
console.log(instructors);
let {user}=useContext(AuthService)
    let {data:myClass=[],refetch}=useQuery( 
        ['classes'],
       async()=>{
            let res= await axios.get(`https://fluent-world-server.vercel.app/classes/${user.email}`)
            return res.data
            
                })
    return (
        <div>
            <div>
              {
    instructors.map(i=> (<> 
        <div role="alert" className="alert shadow-lg">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>
    <h3 className="font-bold">{i?.name}</h3>
    <div className="text-xs">Welcome to {i?.role} dashboard</div>
  </div>
  <button className="btn btn-sm"></button>
</div>

<h1 className='py-5 text-xl '>
  Overview
</h1>

<div className='grid grid-cols-2 gap-2 my-3'>


<div className='grid  gap-1  mt-2 max-w-full'>
<div className="card bg-primary text-primary-content">
  <div className="card-body">
    <div>
        <img src={i?.photoURL} alt="" srcset="" />
    </div>
    <h2 className="card-title">{i?.name}</h2>
   <div>
     <p> {i?.email}</p>
    <p>id : {i?._id}</p>
    <p>role: {i?.role}</p>
  
   </div>
  </div>
</div>
<div>
  
</div>

<div className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-4xl">{myClass?.length}</h2>
    <p>Your Courses</p>
    
  </div>
</div>
</div>

<div className=' grid grid-cols-1 mt-4 px-2 gap-1 '>
<div className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-4xl">0</h2>
    <p>Your Student</p>
    
  </div>
</div>
  <h1>
          Feedbacks 
        </h1>
    <div className='overflow-x-auto h-96'> 
  
    {
        myClass.map(m => (<>
       
                    <div className="alert h-24 py-3  my-2 shadow-lg ">
  <div>
    <h3 className="font-bold">{m?.cname}</h3>
    <div className="text-xs">status : {m?.status}</div>
    <div className="text-xs">no feedback available</div>
  </div>
  
</div>
        </>

        ))
    }
    </div>
</div>
</div>
  </>
    ))
              }
            </div>
        </div>
    );
};

export default InstructorInfo;