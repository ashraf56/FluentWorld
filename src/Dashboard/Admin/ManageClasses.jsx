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
    return (
        <div>
            all classes

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
        <th>Action</th>
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
    <td><button className='btn'>Approve</button></td>
    
   
  </tr>)
   }
     
    </tbody>
  </table>
</div>


        </div>
    );
};

export default ManageClasses;