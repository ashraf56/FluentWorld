import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import axios from 'axios';

const useUserInfo = () => {
    let {user}=useContext(AuthService)
    let [axiosguard]=useAxiosSecure();

    const { refetch, data: Userinfo=[] } = useQuery({
        queryKey: ['Userinfo', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("summer-token"),
        queryFn: async () => {
          const res = await axiosguard.get(`alluser/${user?.email}`)
    
          return res.data;
        },
        
      })
      
      
      return[Userinfo,refetch]
};

export default useUserInfo;