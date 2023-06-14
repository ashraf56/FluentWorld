import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useClasses = () => {
    let {data:approveclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`https://b7a12-summer-camp-server-side-one.vercel.app/approve`)
            
            return res.data
            
                })

            return [approveclass,refetch];
      
};

export default useClasses;