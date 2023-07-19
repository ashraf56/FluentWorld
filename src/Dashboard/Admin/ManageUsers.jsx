import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    let {data:users=[],refetch}=useQuery( 
    ['alluser'],
   async()=>{
        let res= await axios.get('https://summer-camp-server-102h.onrender.com/alluser')
        return res.data
        
            })

let makeAdmin=(alluser)=>{
fetch(`https://summer-camp-server-102h.onrender.com/alluser/admin/${alluser._id}`,{
  method:"PATCH"
})
.then(res=> res.json())
.then(data=> {
    console.log(data);
    refetch()
})
}
let makeInstructor=(alluser)=>{
fetch(`https://summer-camp-server-102h.onrender.com/alluser/instructor/${alluser._id}`,{
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
          <h1 className='text-5xl font-bold text-center uppercase py-5' >Manage Role</h1>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
   
    <thead>
      <tr>
        <th>#
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Current Role</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map((user,index)=>   <tr key={user._id}>
    <th>{index+1}</th>
    <td>
    <div className="avatar">
  <div className="w-10 rounded-full">
     <img src={user.photoURL}  />
  </div>
</div>
      
     </td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td>
      { user?.role === 'admin'   ? <button className='btn btn-xs' disabled>Make Admin</button>: <button className='btn btn-xs' onClick={()=> makeAdmin(user)} >Make Admin</button>}
    </td>
    <td>
      { user?.role === 'instructor'  ? <button className='btn btn-xs' disabled>Make Instructor</button>: <button className='btn btn-xs' onClick={()=> makeInstructor(user)} >Make Instructor</button>}
    </td>
   
  </tr>)
   }
     
    </tbody>
  </table>
</div>


        </div>
    );
};

export default ManageUsers;