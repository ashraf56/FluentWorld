import React from 'react';
import useCartClass from '../../Hooks/useCartClass';

const MyenrolledClass = () => {
    let [cartClass,refetch]=useCartClass()


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
          fetch(`https://fluent-world-server.vercel.app/cartClass/${cartclass._id}`,
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
             <h1 className='text-5xl font-bold text-center uppercase py-5' > My Enrolled Classes</h1>

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
      </tr>
    </thead>
    <tbody>
   { 
    cartClass.map((cart,index)=>   <tr key={cart._id}>
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
    
    
   
  </tr>)
   }
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyenrolledClass;