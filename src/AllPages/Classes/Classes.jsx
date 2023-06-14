import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useADmin from '../../Hooks/useADmin';
import { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useInstructor from '../../Hooks/useInstructor';
import Swal from 'sweetalert2';
import CardClasses from './CardClasses';
import useClasses from '../../Hooks/useClasses';

const Classes = () => {
 
   let[approveclass]=useClasses()



    return (
        <div >
            <h1 className='text-5xl font-bold text-center uppercase pt-8' >All Classes</h1>
<div className='grid md:grid-cols-3 mx-12 gap-3  my-24'>
{
    approveclass.map(ac => 


<CardClasses ac={ac} key={ac._id} ></CardClasses>


       
    
    )
}</div>
        </div>
    );
};

export default Classes;