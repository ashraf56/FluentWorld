import React, { useContext } from 'react';
import useADmin from '../Hooks/useADmin';
import { AuthService } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    let { user, Loading } = useContext(AuthService)
    let [isAdmin, adminloading] = useADmin()
    let location = useLocation()
    if (Loading || adminloading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' replace></Navigate>
};
export default AdminRoute;