import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpComingMarathonCard from './UpComingMarathonCard';

const UpComingMarathon = () => {
const [marathonData , setMarathonData] = useState([]) 

    useEffect(()=>{
        axios(`${import.meta.env.VITE_MARATHON_url}/upComingMarathon`)
        .then((res)=>{
            setMarathonData(res.data)
        })
    })

    return (
        <div className='py-10  bg-gradient-to-tl from-[#827cf4] to-[#feeaea]   '>
            <h1 className=' text-2xl md:text-4xl lg:text-5xl pb-5 font-bold text-center text-indigo-900'>Upcoming Marathons</h1>
           <div className='px-4 md:px-12 mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                marathonData?.map((marathon)=><UpComingMarathonCard key={marathon._id} marathon={marathon} ></UpComingMarathonCard>)
            }
            
           </div>
        </div>
    );
};

export default UpComingMarathon;