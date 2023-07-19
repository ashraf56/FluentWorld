import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useClasses = () => {
    let {data:approveclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`https://summer-camp-server-102h.onrender.com/approve`)
            
            return res.data
            
                })

            return [approveclass,refetch];
      
};

export default useClasses;