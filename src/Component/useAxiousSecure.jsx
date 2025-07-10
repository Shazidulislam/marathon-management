import axios from 'axios';
import React, { use } from 'react';
import AuthContexts from '../Contexts/AuthContexts';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MARATHON_url
})

const useAxiousSecure = () => {
    const {user} = use(AuthContexts)

   axiosInstance.interceptors.request.use(config=>{
    config.headers.Authorization = `Bearer ${user?.accessToken}`
    
   })

    return axiosInstance;
};

export default useAxiousSecure;