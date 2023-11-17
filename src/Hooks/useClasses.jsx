import axios from 'axios';
import { useQuery } from 'react-query';

const useClasses = () => {
    let {data:approveclass=[],refetch}=useQuery( 
        ['approve'],
       async()=>{
            let res= await axios.get(`https://fluent-world-server.vercel.app/approve`)
            
            return res.data
            
                })

            return [approveclass,refetch];
      
};

export default useClasses;