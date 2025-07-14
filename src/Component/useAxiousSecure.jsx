import axios from 'axios';
import React, { use } from 'react';
import AuthContexts from '../Contexts/AuthContexts';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MARATHON_url
})

const useAxiousSecure = () => {
    const {user , signOutUser} = use(AuthContexts)
    const  navigate = useNavigate()

   axiosInstance?.interceptors?.request?.use(config=>{
    if(user?.accessToken){
         config.headers.Authorization = `Bearer ${user?.accessToken}`
    }
    return config
   })

    //response
    axiosInstance?.interceptors?.response?.use(response=>{
        return response
    } , error=>{
        if(error.status === 401 || error.status === 403){
              signOutUser()
              .then(()=>{
              toast.error("Sign Out User for 401 Status Code!")
               navigate("/signin")

          })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiousSecure;