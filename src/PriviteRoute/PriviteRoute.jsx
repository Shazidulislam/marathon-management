import React, { use } from 'react';
import AuthContexts from '../Contexts/AuthContexts';
import { Navigate, useLocation } from 'react-router';

const PriviteRoute = ({children}) => {

    
    const {user  , loading} = use(AuthContexts) 
    const location = useLocation()
   if(loading){
    return <span>Loading....</span>
   }

    if(!user && !user?.email ){
        return <Navigate to={"/signin"} state={location.pathname} replace ></Navigate>
    }


    return (children);
};

export default PriviteRoute;