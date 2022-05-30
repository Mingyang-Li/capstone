import React from 'react';
import { Navigate } from "react-router-dom";
import { RequireAuth } from '../components/auth/RequireAuth';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

interface IRoute {
    path: string;
    component: React.ReactNode;
}

export const routes: IRoute[] = [
    {
        path: '/login',
        component: <Login />,
    },
    {
        path: '/dashboard',
        component: (<RequireAuth props={<Dashboard />} />),
    },
    {
        path: '*',
        component: <Navigate to="/login" replace />,
    },
]
