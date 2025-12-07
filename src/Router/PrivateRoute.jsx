import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
      console.log(location);

    if(loading){
        return <div className="h-screen flex justify-center items-center"><HashLoader  color="#049347" /></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/Login"}></Navigate>
};

export default PrivateRoute;