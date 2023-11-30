import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    let {data:users=[],refetch}=useQuery( 
    ['alluser'],
   async()=>{
        let res= await axios.get('https://fluent-world-server.vercel.app/alluser')
        return res.data
        
            })


            let reMoveUSer=(alluser)=>{
              fetch(`https://fluent-world-server.vercel.app/alluser/${alluser._id}`,{
                method:"DELETE"
              })
              .then(res=> res.json())
              .then(data=> {
                  console.log(data);
                  toast.success('user removed')
                  refetch()
              })
              }

let makeAdmin=(alluser)=>{
fetch(`https://fluent-world-server.vercel.app/alluser/admin/${alluser._id}`,{
  method:"PATCH"
})
.then(res=> res.json())
.then(data=> {
    console.log(data);
    refetch()
})
}
let makeInstructor=(alluser)=>{
fetch(`https://fluent-world-server.vercel.app/alluser/instructor/${alluser._id}`,{
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
      { user?.role === 'instructor' || user?.email=='ashrafulfahim07@gmail.com' || user ? <button className='btn btn-xs btn-neutral disabled' >Make Instructor</button>: <button className='btn btn-xs' onClick={()=> makeInstructor(user)} >Make Instructor</button>}
    </td>
    <td>
     {user?.role === 'admin' && user?.email=='ashrafulfahim07@gmail.com'  ? <button className='btn btn-xs disabled btn-neutral'>Remove</button> :<button className='btn btn-xs' onClick={()=> reMoveUSer(user)} >Remove</button>}
    </td>
   
  </tr>)
   }
     
    </tbody>
  </table>
  <Toaster></Toaster>
</div>


        </div>
    );
};

export default ManageUsers;