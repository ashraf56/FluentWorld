import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';

const useADmins = () => {
    let {user}=useContext(AuthService)
 
    const { data:isAdmin , isLoading: loading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("summer-token"),
        queryFn: async () => {
          const res = await axios.get(`http://localhost:3000/alluser/admin/${user?.email}`)
    
          return res.data.admin;
        },
        
      })
      
      
      return[isAdmin,loading]

};

export default useADmins;