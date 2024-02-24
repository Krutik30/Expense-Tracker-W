import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Page404 } from '../Pages/Page404';
import { Role } from '../../config';

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
    const userLogged = {
        auth: true,
        role: Role.admin 
    };

    return userLogged.auth || openRoutes.includes(pathname)
        ? (pathname === '/auth/login') && userLogged.auth
            ? <Navigate to='/dashboard' replace />
            : (roleRequire === false || roleRequire === userLogged?.role)
                ? children
                : <Page404 />
        : <Navigate to='/auth/login' replace />;
};

export default ProtectedRoute;
