import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
const useADmin = () => {
  let { user } = useContext(AuthService)
  let [axiosguard] = useAxiosSecure()
  const { data: isAdmin, isLoading: adminloading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !!user?.email && !!localStorage.getItem("summer-token"),
    queryFn: async () => {
      const res = await axiosguard.get(`alluser/admin/${user?.email}`)
      return res.data.admin;
    },
  })
  return [isAdmin, adminloading]
};
export default useADmin;