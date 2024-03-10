import React, { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Instructors = () => {
  let { user } = useContext(AuthService)
  let { data: instructors = [], refetch } = useQuery(
    ['instructor'],
    async () => {
      let res = await axios.get(`https://fluent-world-server.vercel.app/user/instructor`)
      return res.data
    })
  console.log(instructors);
  return (
    <div className='mb-11 min-h-screen'>
      <h1 className='text-5xl font-bold text-center uppercase pt-8 pb-5' >All Instructor</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-12 gap-3 2xl:grid-cols-4 '>
        {instructors.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-full p-10">
            <div className="w-max">
              <span className="loading loading-spinner text-error loading-lg"></span>
            </div>
          </div>
        )
          : (instructors.map(instructor =>
            <div className="card max-w-full lg:max-w-lg 2xl:max-w-full bg-base-100 shadow-2xl">

              <div className="card-body justify-start ">



                <div className="avatar pb-3">
                  <div className="w-24 rounded-full">
                    <img src={instructor?.photoURL} className=" rounded-full   " />
                  </div>
                </div>
                <div>
                  <h2 className="card-title ">{instructor?.name}</h2>
                  <p>{instructor?.email} <br />
                    <span className='font-bold text-xs uppercase'>Top Instructor</span>
                  </p>
                </div>

                <div className='flex gap-4 text-2xl mt-5 '>
                  <FaFacebook />
                  <FaLinkedin />
                  <FaInstagram />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Instructors;