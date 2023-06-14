import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useADmin from '../../Hooks/useADmin';
import { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useInstructor from '../../Hooks/useInstructor';
import Swal from 'sweetalert2';
import { FaDollarSign } from 'react-icons/fa';

const Classes = () => {
  let[isadmin]=useADmin()
  let [isInstructor]=useInstructor()
  let {user}=useContext(AuthService)
  let navigate=useNavigate()
  let  location = useLocation();
    let {data:approveclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/approve`)
            return res.data
            
                })

let selectitem=classes=>{

  if (user && user.email) {
 
} else {
  Swal.fire({
    title: 'Please login to Buy the Classes',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Login now!'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login', {state: {from: location}})
    }
  })
}
}


    return (
        <div >
            <h1 className='text-5xl font-bold text-center uppercase pt-8' >All Classes</h1>
<div className='grid md:grid-cols-3 mx-12 gap-3  my-24'>
{
    approveclass.map(ac => 


<div className="card w-96 bg-base-100 shadow-xl">
  <figure>      
        <img src={ac?.image}  className="rounded-xl h-60" />
</figure>
  <div className="card-body">
    <h2 className="card-title">
     {ac?.cname}
      <div className="badge badge-neutral"><p> Available seat:  {ac?.seat}</p>    </div>
    </h2>
    <p className="card-title"> Instructor Name: {ac?.name}</p> 
          <p> Instructor-Email: {ac?.email}</p>
          
      

    <div className="card-actions justify-start pb-5">
      <div className="badge badge-outline"> <FaDollarSign/>{ac?.price}</div> 
    </div>
{ isadmin || isInstructor ? <button className='btn ' disabled  >Select now</button>: <button className='btn btn-outline ' onClick={()=> selectitem(ac)}  >Select now</button>}

  </div>
</div>


       
    
    )
}</div>
        </div>
    );
};

export default Classes;