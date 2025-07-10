import React, { use } from 'react';
import AuthContexts from '../Contexts/AuthContexts';

const useAuth = () => {
    const userInforMation = use(AuthContexts)
    return()=> userInforMation;
};

export default useAuth;