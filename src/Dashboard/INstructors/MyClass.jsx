import React, { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const MyClass = () => {
  let { user } = useContext(AuthService)
  let { data: myClass = [], refetch } = useQuery(
    ['classes'],
    async () => {
      let res = await axios.get(`https://fluent-world-server.vercel.app/classes/${user.email}`)
      return res.data
    })
  return (
    <div>
      <h1 className='text-5xl font-bold text-center uppercase py-5' >all my created class</h1>
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
                  <button className='btn btn-xs'>Update</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyClass;