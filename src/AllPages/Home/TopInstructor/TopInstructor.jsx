import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const TopInstructor = () => {
    let {data:topinstructor=[],refetch}=useQuery( 
        ['instructors'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/alluser/instructors`)
            return res.data
            
                })
    return (
        <div className='mb-16'>
          <h1 className='text-5xl font-bold text-center uppercase py-10' >Top Instructor</h1>

            <div className='grid md:grid-cols-3 mx-12 gap-3 '>
{topinstructor.map(tin=>


<div className="card card-side bg-base-100 shadow-xl h-full">

    <figure><img src={tin.photoURL}className='h-full' /></figure>
  <div className="card-body">
  <h2 className="card-title">{tin.name}</h2>
  <p>{tin.role}</p>
      <p>{tin.email}</p>
   
  </div>
</div>


 
    
    )}

</div>
        </div>
    );
};

export default TopInstructor;