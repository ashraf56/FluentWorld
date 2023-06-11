import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import useAxios from './useAxios';

const useADmins = () => {
    let {user}=useContext(AuthService)
 let [useaxios]=useAxios()
    const { data:isAdmin , isLoading: adloading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("summer-token"),
        queryFn: async () => {
          const res = await useaxios.get(`alluser/admin/${user?.email}`)
    
          return res.data.admin;
        },
        
      })
      
      
      return[isAdmin,adloading]

};

export default useADmins;