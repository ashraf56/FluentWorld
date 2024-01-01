import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    let { user, Loading } = useContext(AuthService)
    let [isInstructor, Insloading] = useInstructor();
    let location = useLocation()
    if (Loading || Insloading) {
        return <div className='text-center mx-auto justify-center '><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user && isInstructor) {
        return children
    }

    return <Navigate to='/' replace></Navigate>
};

export default InstructorRoute;