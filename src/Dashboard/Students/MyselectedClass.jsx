import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const MyselectedClass = () => {

    let {data:cartclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/cartClass`)
            return res.data
            
                })

let deleteCArt=(cartclass)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/cartClass/${cartclass._id}`,
          {
            method:"DELETE"
          }
          )
.then(rs=>rs.json())
.then(data=>{
    if (data.deletedCount > 0) {
        Swal.fire(
            'Deleted!',
            'Your Class has been deleted.',
            'success'
          )
          refetch()
    }
})
        }
      })

}


    return (
        <div>
             <h1 className='text-5xl font-bold text-center uppercase py-5' > my Selected  
             classes</h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
   
    <thead>
      <tr>
        <th>#
        </th>
        <th>Image</th>
        <th> Instructor Name</th>
        <th>Instructor Email</th>
        <th>Class Name</th>
        <th>Action</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
   {
    cartclass.map((cart,index)=>   <tr key={cart._id}>
    <th>{index+1}</th>
    <td>
    <div className="avatar">
  <div className="w-10 rounded-full">
     <img src={cart.image}  />
  </div>
</div>
      
     </td>
    <td>{cart.name}</td>
    <td>{cart.email}</td>
    <td>{cart.cname}</td>
    <td>
      <button className='btn btn-xs' onClick={()=> deleteCArt(cart)} >Delete</button>
    </td>
    <td>
      <button className='btn btn-xs btn-success text-white' >Pay</button>
    </td>
    
   
  </tr>)
   }
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyselectedClass;