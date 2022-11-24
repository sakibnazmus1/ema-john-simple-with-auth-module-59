import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user && user.id) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;