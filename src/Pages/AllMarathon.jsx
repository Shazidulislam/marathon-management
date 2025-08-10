import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import DataNotfound from '../Component/DataNotfound/DataNotfound';
import MarathonCard from '../Component/MarathonCard';
import bgBlack from '../assets/marathon-img/bg-black-2.jpeg'

const AllMarathon = () => {
   const [allData , setAllData] = useState([])
   const axiosInstance= useAxiousSecure()
   useEffect(()=>{
    const handleData=async()=>{
      const {data} = await axiosInstance("/all-marathon")
      setAllData(data)

    }
    handleData()
   },[axiosInstance])
   


    return (
        <div className='pt-[136px] px-12 mx-auto' style={{backgroundImage:`url(${bgBlack})`}} >
            <h1 className='text-3xl font-semibold pt-3'>All Events</h1>
             <div>
                {allData.length==0 ? <DataNotfound></DataNotfound>:""}
             </div>
             <div className='grid  grid-cols-1 md:grid-cols-2 gap-6  lg:grid-cols-3 xl:grid-cols-4 py-10' >
                {
                    allData?.map((marathon)=>{return(
                        <MarathonCard marathon={marathon} key={marathon?._id} ></MarathonCard>
                    )})
                }
             </div>
        </div>
    );
};

export default AllMarathon;