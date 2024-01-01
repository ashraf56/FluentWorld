import React from 'react';
import { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateSecure = ({ children }) => {
    let { user, Loading } = useContext(AuthService)

    if (Loading) {
        return <div className='text-center mx-auto justify-center '><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateSecure;