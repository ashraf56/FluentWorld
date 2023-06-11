import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useADmins from '../Hooks/useADmins';
import { AuthService } from '../AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    let {user,Loading}=useContext(AuthService)
    let [isAdmin,adloading]=useADmins();
    let location=useLocation()
    if (Loading || adloading) {
        return <progress className="progress bg-red-100 w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;