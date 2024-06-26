import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useCartClass from '../../Hooks/useCartClass';
import { AuthService } from '../../AuthProvider/AuthProvider';
const MyselectedClass = () => {
  let [cartClass, refetch, isLoading] = useCartClass()


  let deleteCArt = (cartclass) => {
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
            method: "DELETE"
          }
        )
          .then(rs => rs.json())
          .then(data => {
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
      {isLoading && cartClass.length === 0 ? <div className='w-full  text-center mx-auto justify-center hero-content items-center'>
        <span className="loading loading-ring loading-lg mx-auto justify-center items-center  "></span>
      </div>
        : cartClass.length > 0 ?
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
                {cartClass.map((cart, index) => <tr key={cart._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={cart.image} />
                      </div>
                    </div>
                  </td>
                  <td>{cart.name}</td>
                  <td>{cart.email}</td>
                  <td>{cart.cname}</td>
                  <td>
                    <button className='btn btn-xs' onClick={() => deleteCArt(cart)} >Delete</button>
                  </td>
                  <td>
                    <button className='btn btn-xs btn-success text-white' >Pay</button>
                  </td>
                </tr>)
                }
              </tbody>
            </table>
          </div>
          :
          <div className="col-span-3 flex justify-center items-center h-full">
            <div className="w-max">
              <h2 className='uppercase font-bold text-red-700 '>Buy A class</h2>
            </div>
          </div>
      }
    </div>
  );
};
export default MyselectedClass;