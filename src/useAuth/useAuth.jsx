import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const useAuth = () => {
    const userInformation = use(AuthContext)
    return()=> userInformation;
};

export default useAuth;