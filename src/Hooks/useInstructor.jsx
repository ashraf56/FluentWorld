import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
    let {user}=useContext(AuthService)
 let [axiosguard]=useAxiosSecure()
    let { data:isInstructor , isLoading: Insloading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("summer-token"),
        queryFn: async () => {
          const res = await axiosguard.get(`alluser/instructor/${user?.email}`)
    
          return res.data.instructor;
        },
        
      })
      
      
      return[isInstructor,Insloading]

};

export default useInstructor;