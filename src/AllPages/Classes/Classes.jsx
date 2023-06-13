import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Classes = () => {
    let {data:approveclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/approve`)
            return res.data
            
                })
    return (
        <div>
            <h1 className='text-5xl font-bold text-center uppercase pt-8' >All Classes</h1>
<div className='grid md:grid-cols-3 mx-12 gap-3 '>
{
    approveclass.map(instructor => 
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 rounded-full">
          <img src={instructor?.image}  className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{instructor?.name}</h2> 
          <h2 className="card-title">{instructor?.cname}</h2> 
          <p>{instructor?.email}</p>
          <button className='btn '>Select now</button>
        </div>
      </div>
    
    )
}</div>
        </div>
    );
};

export default Classes;