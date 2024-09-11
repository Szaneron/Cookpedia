import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const RequireAuth: React.FC = () => {
    const {isAuthenticated} = useAuth();

    // If user is not authenticated, redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    // If authenticated, render the requested content (Outlet)
    return <Outlet/>;
};

export default RequireAuth;
