import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthService } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import { FaMailBulk, FaMailchimp } from 'react-icons/fa';

const Instructors = () => {
let {user}=useContext(AuthService)
let {data:instructors=[],refetch}=useQuery( 
    ['instructor'],
   async()=>{
        let res= await axios.get(`https://fluent-world-server.vercel.app/user/instructor`)
        return res.data
        
            })



    return (
        <div className='mb-11'>
<h1 className='text-5xl font-bold text-center uppercase pt-8' >All Instructor</h1>
<div className='grid md:grid-cols-3 mx-12 gap-3 '>
{ instructors.length === 0 ?(
  <div className="col-span-3 flex justify-center items-center h-full p-10">
  <div className="w-max">
    <span className="loading loading-spinner text-error loading-lg"></span>
  </div>
</div>
)
  : ( instructors.map(instructor => 
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 rounded-full">
          <img src={instructor?.photoURL}  className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{instructor?.name}</h2>
          <p>{instructor?.email}</p>
          
        </div>
      </div>
    
    ))
}
</div>

        </div>
    );
};

export default Instructors;