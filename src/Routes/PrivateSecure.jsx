import React from 'react';
import { useContext } from 'react';
import { AuthService } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateSecure = ({ children }) => {
    let { user, Loading } = useContext(AuthService)

    if (Loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateSecure;