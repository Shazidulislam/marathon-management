import React, {  useEffect, useState } from 'react';
import useAuth from '../useAuth/useauth';
import useAxiousSecure from '../Component/useAxiousSecure';
import MarathonCard from '../Component/MarathonCard';
import DataNotfound from '../Component/DataNotfound/DataNotfound';
import bgOne from "../assets/marathon-img/bg-black-2.jpeg"

const Marathon = () => {
    const [maraThonData , setMaraThonData] = useState([]);
const {user , loading } = useAuth();
const axiosInstance = useAxiousSecure();

    useEffect(()=>{
        axiosInstance.get(`marathonData/${user?.email}`)
        .then((res)=>{
            setMaraThonData(res?.data)
        })
    },[axiosInstance , user])

    if(maraThonData.length ==0)return <div className='pt-52 min-h-[600px] py-10'><DataNotfound/></div>

    
   if(!user || loading) return <span>Loading...</span>
    return (
        <div className=' mt-[136px]  min-h-screen py-10 ' style={{backgroundImage:`url(${bgOne})`}} >
            <h2 className='text-3xl md:text-5xl  font-bold  text-center'>Your Added Marathon</h2>
            <div className='px-6 md:px-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-20'>
                {
                    maraThonData?.map((marathon)=><MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>
        </div>
    );
};

export default Marathon;