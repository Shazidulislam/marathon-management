import React, {  useEffect, useState } from 'react';
import useAuth from '../useAuth/useauth';
import useAxiousSecure from '../Component/useAxiousSecure';
import MarathonCard from '../Component/MarathonCard';

const Marathon = () => {
    const [maraThonData , setMaraThonData] = useState([]);
const {user} = useAuth();
const axiosInstance = useAxiousSecure();

    useEffect(()=>{
        axiosInstance.get(`marathonData/${user?.email}`)
        .then((res)=>{
            setMaraThonData(res?.data)
            console.log(res)
        })
        .catch((err)=>console.log(err))
    },[axiosInstance , user])

    
    console.log(maraThonData)

    return (
        <div className='bg-gradient-to-tl from-[#827cf4] to-[#fff] min-h-screen py-10'>
            <h2 className='text-3xl md:text-5xl  font-bold text-indigo-900 text-center'>Your Added Marathon</h2>
            <div className='px-2 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20'>
                {
                    maraThonData?.map((marathon)=><MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>
            {
               
            }
        </div>
    );
};

export default Marathon;