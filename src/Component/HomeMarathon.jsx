import React, { useEffect, useState } from 'react';
import useAxiousSecure from './useAxiousSecure';
import MarathonCard from './MarathonCard';

const HomeMarathon = () => {
    const [limiteMarathon , setLimiteMarathon] = useState(null)
    const axiosInstance = useAxiousSecure()

    useEffect(()=>{
        axiosInstance.get("/limiteMarathon")
        .then((res)=>{
            console.log(res.data)
            setLimiteMarathon(res.data)
        })
    },[axiosInstance])
    
    return (
        <div className='py-10  bg-gradient-to-bl from-[#827cf4] to-[#feeaea]  '>
            <div>
                {
                    limiteMarathon?.length == 0 ? <>
                     <div className='px-4 py-10 max-w-xl bg-indigo-100 mx-auto rounded  border-2 border-indigo-900'>
                            <h2 className='text-2xl font-medium  text-center not-only: md:text-3xl text-indigo-900'>No marathons found. Please add a new one to get started!</h2>
                     </div>
                    </> :<>
                       <div>
                            <h2 className='text-2xl font-bold  text-center not-only: md:text-4xl lg:text-5xl text-indigo-900'> Marathons Below</h2>
                            <div className='grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {
                                     limiteMarathon?.map((marathon)=><MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                                }
                            </div>
                       </div>
                    </>
                }
            </div>
             
        </div>
    );
};

export default HomeMarathon;