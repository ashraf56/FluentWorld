import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const TopInstructor = () => {
    let {data:topinstructor=[],refetch}=useQuery( 
        ['instructor'],
       async()=>{
            let res= await axios.get(`https://fluent-world-server.vercel.app/user/instructor`)
            return res.data
            
                })
    return (
        <div className='mb-16'>
          <h1 className='text-5xl font-bold text-center uppercase py-10' >Top <span className='bg-black text-white'>Instructor</span></h1>

            <div className='grid md:grid-cols-3 mx-12 gap-3 '>
{
    topinstructor.length === 0 ? (   
<div className="col-span-3 flex justify-center items-center h-full">
      <div className="w-max">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>

    ):(topinstructor.slice(0,6).map(tin=>


        <div key={tin._id} className="card card-side bg-base-100 shadow-xl h-full">
        
            <figure><img src={tin.photoURL}className='h-full' /></figure>
          <div className="card-body">
          <h2 className="card-title">{tin.name}</h2>
          <p>{tin.role}</p>
              <p>{tin.email}</p>
           
          </div>
        </div>
        
        
         
            
            ))
}

</div>
        </div>
    );
};

export default TopInstructor;