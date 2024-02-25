import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Role } from '../../config';
import { Page404 } from '../pages/Page404';

interface ProtectedRouteProps {
    children: React.ReactElement;
    roleRequire: 'ADMIN' | 'EMPLOYEE' | false;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    roleRequire
}) => {
    const { pathname } = useLocation();
    const openRoutes = ['/auth/login', '/auth/register'];
    let userLogged = {
        auth: false,
        role: Role.emp 
    };
    const userLoggedString = localStorage.getItem('user');

    if (userLoggedString !== null) {
        userLogged = JSON.parse(userLoggedString);
        // Proceed with further processing using userLogged
    } 

    return userLogged.auth || openRoutes.includes(pathname)
        ? (pathname === '/auth/login') && userLogged.auth
            ? <Navigate to='/dashboard' replace />
            : (roleRequire === false || roleRequire === userLogged?.role)
                ? children
                : <Page404 />
        : <Navigate to='/auth/login' replace />;
};

export default ProtectedRoute;
