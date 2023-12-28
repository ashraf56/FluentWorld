import React, { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    let { user, Loading } = useContext(AuthService)
    let [isInstructor, Insloading] = useInstructor();
    let location = useLocation()
    if (Loading || Insloading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isInstructor) {
        return children
    }

    return <Navigate to='/' replace></Navigate>
};

export default InstructorRoute;