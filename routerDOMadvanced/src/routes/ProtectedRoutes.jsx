import React from 'react'
import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

const ProtectedRoutes = ({children}) => {
    const isLoggedin = false;

    if(!isLoggedin){
       return <Navigate to='/' />
    }

  return children;
}

export default ProtectedRoutes