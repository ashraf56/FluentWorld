import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    let {data:users=[],refetch}=useQuery( 
    ['alluser'],
   async()=>{
        let res= await axios.get('http://localhost:3000/alluser')
        return res.data
        
            })
    return (
        <div>
            this is for all user
            {users.length}

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map((user,index)=>   <tr key={user._id}>
    <th>{index+1}</th>
    <td><img src={user.photoURL} className='rounded-full w-8'  /></td>
    <td>{user.name}</td>
    <td>
        <button className='btn btn-xs' >Make Admin</button>
    </td>
    <td>
        <button className='btn btn-xs' >Make Instructor</button>
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