import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import axios from 'axios';

const useCartClass = () => {
  let { user } = useContext(AuthService)
  let [axiosguard] = useAxiosSecure();
  const { refetch, data: cartClass = [] } = useQuery({
    queryKey: ['cartClass', user?.email],
    enabled: !!user?.email && !!localStorage.getItem("summer-token"),
    queryFn: async () => {
      const res = await axiosguard.get(`cartClass?email=${user?.email}`)
      return res.data;
    },
  })
  return [cartClass, refetch]
};
export default useCartClass;