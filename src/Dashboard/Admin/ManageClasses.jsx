import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ManageClasses = () => {

    let {data:allClass=[],refetch}=useQuery( 
        ['classes'],
       async()=>{
            let res= await axios.get('http://localhost:3000/classes')
            return res.data
            
                })


                let approve=(allclass)=>{
                  fetch(`http://localhost:3000/classes/approve/${allclass._id}`,{
                    method:"PATCH"
                  })
                  .then(res=> res.json())
                  .then(data=> {
                      console.log(data);
                      refetch()
                  })
                  }
                let deny=(dn)=>{
                  fetch(`http://localhost:3000/classes/deny/${dn._id}`,{
                    method:"PATCH"
                  })
                  .then(res=> res.json())
                  .then(data=> {
                      console.log(data);
                      refetch()
                  })
                  }
    return (
        <div>
                   <h1 className='text-5xl font-bold text-center uppercase py-5' >Manage All Class</h1>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
   
    <thead>
      <tr>
        <th>#
        </th>
        <th>Class Image</th>
        <th>Instructor Name</th>
        <th>Instructor email</th>
        <th>Class Name</th>
        <th>Status</th>
        <th className='col-span-3 text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
   {
    allClass.map((allclass,index)=>   <tr key={allclass._id}>
    <th>{index+1}</th>
    <td>
    <div className="avatar">
  <div className="w-10 rounded-full">
     <img src={allclass.image}  />
  </div>
</div>
      
     </td>
    <td>{allclass.name}</td>
    <td>{allclass.email}</td>
    <td>{allclass.cname}</td>
    <td>{allclass.status}</td>
    <td>
    { allclass?.status === 'approve'   ? <button className='btn btn-xs mx-2' disabled>approve</button>: <button className='btn btn-xs mx-2' onClick={()=> approve(allclass)} > approve</button> }
    { allclass?.status === 'deny'   ? <button className='btn btn-xs mx-2' disabled>Deny</button>: <button className='btn btn-xs mx-2' onClick={()=> deny(allclass)} >Deny</button> }

   <button className='btn btn-xs mx-2' onClick={()=> deny(allclass)} >Send Feedback</button> 
    
    </td>
    
   
  </tr>)
   }
     
    </tbody>
  </table>
</div>


        </div>
    );
};

export default ManageClasses;