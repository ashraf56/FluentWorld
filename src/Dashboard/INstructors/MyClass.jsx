import React, { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyClass = () => {
  let { user } = useContext(AuthService)

  let { data: myClass = [], refetch, isLoading } = useQuery(
    ['classes'],
    async () => {
      let res = await axios.get(`https://fluent-world-server.vercel.app/classes/${user.email}`)
      return res.data
    })

  let deleteClass = (Dclass) => {
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
        fetch(`https://fluent-world-server.vercel.app/classes/${Dclass._id}`,
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
      <h1 className='text-5xl font-bold text-center uppercase py-5' >all my created class</h1>
      {isLoading && myClass.length === 0 ? <div className='w-full  text-center mx-auto justify-center hero-content items-center'>
        <span className="loading loading-ring loading-lg mx-auto justify-center items-center  "></span>
      </div>
        : !isLoading && myClass.length > 0 ? <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#
                </th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Instructor email</th>
                <th>Class Name</th>
                <th>Enrolled student</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                myClass.map((allclass, index) => <tr key={allclass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={allclass.image} />
                      </div>
                    </div>
                  </td>
                  <td>{allclass.name}</td>
                  <td>{allclass.email}</td>
                  <td>{allclass.cname}</td>
                  <td>{allclass.enrolledstudent}</td>
                  <td>{allclass.status}</td>
                  <td>
                    <button className='btn btn-xs' onClick={() => deleteClass(allclass)}>Delete</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div> :
          <div className='text-center py-5'>
            <h2 className='font-bold '>No class added</h2>
          </div>
      }
    </div>
  );
};
export default MyClass;