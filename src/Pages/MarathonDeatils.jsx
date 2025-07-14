import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import { useParams } from 'react-router';
import useAuth from '../useAuth/useauth';
import axios from 'axios';
import Swal from 'sweetalert2';
import Timer from '../Contexts/Timer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const MarathonDeatils = () => {
    const {id} = useParams()
    const [deatilsMarathon , setDeatilsMarathon] = useState(null)
    const axiosInstance = useAxiousSecure();
    const {user} = useAuth()
    const [totalRegistion , setTotalRegistion] = useState(1)

    // const todayDate = new Date();
    // const startDate = new Date(startRegistion);
    // const endDate  = new Date(endRegistion);
    
    // const duration = (endDate - startDate )
    // const initialRemainingTime = (endDate -todayDate )
    useEffect(()=>{
        axiosInstance.get(`/deatils/${id}`)
        .then((res)=>{
           setDeatilsMarathon(res.data)
        })
    } , [axiosInstance , id])
    
    const {marathon_title ,image,totalRegistrationCount , location , description,startRegistion , createdAt, endRegistion , startMarathon , distence} = deatilsMarathon ||{}

    const date = new Date(createdAt)
    const narMalDate = date.toLocaleDateString()
    // console.log(narMalDate)
    
    const [isOpen , setIsOpen] = useState(false)
    console.log(isOpen)
    useEffect(()=>{
        const todayDate = new Date();
        const startDate = new Date(startRegistion);
        const endDate  = new Date(endRegistion);

        if(todayDate >= startDate && todayDate <= endDate){
               setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    },[startRegistion ,endRegistion ])

    const handleMarathonRegistion =(e)=>{
        e.preventDefault()
         const form = e.target 
         const formData = new FormData(form)
         const marthonRegistionData = Object.fromEntries(formData.entries())
         const registionArray = []
         registionArray.push(marthonRegistionData)
         setTotalRegistion(prev=> prev + registionArray.length)
         const subMitionRegustionData = {...marthonRegistionData ,totalRegistion }
        
         //send registion data 
         axios.post(`${import.meta.env.VITE_MARATHON_url}/registion` , subMitionRegustionData)
         .then((res)=>{
            if(res?.data?.acknowledged){
                 Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Marathon Create successfully!",
                  showConfirmButton: false,
                  timer: 1500
                  });
                  e.target.reset()
            }
         })

    }

    return (
        <div className='py-14 px-3 md:px-12 lg:px-16   min-h-svh bg-gradient-to-br from-blue-900 via-purple-500 to-pink-500 '>
           
            <div className=' gap-4  max-w-sm transition-transform duration-300 hover:scale-105  md:max-w-full  border-2 border-[#ffffff90]  shadow-white shadow-2xs rounded-2xl bg-[#ffffff20] text-white'>
                <figure>
                    <img className='h-[400px] md:h-[600px] w-full object-cover shadow-2xl   rounded-t-2xl' src={image} alt="" />
                </figure>
                <div className='p-3 space-y-4 md:px-12 mx-auto'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl  font-bold text-center'>{marathon_title}</h2>
                    <div className='space-y-6 grid grid-cols-12 gap-5 '>
                        <div className=' col-span-12 md:col-span-4'>
                            <p>
                                <span className='font-bold '>Location : </span>
                                <span>{location}</span>
                            </p>
                            <p>
                                <span className='font-bold'>Registration Period :</span>
                                <span>{startRegistion} - {endRegistion}</span>
                            </p>
                            <p>
                                <span className='font-bold'>Marathon Date :</span>
                                <span>{startMarathon}</span>
                            </p>
                            <p>
                                <span className='font-bold'>Distance :</span>
                                <span>{distence}</span>
                            </p>
                        </div>
                        <div className=' col-span-12 md:col-span-6'>
                          <p>
                                <span className='font-bold'>Description :</span>
                                <span>{description}</span>
                            </p>
                          <p>
                                <span className='font-bold'>Created At: </span>
                                <span>{narMalDate}</span>
                            </p>
                          <p>
                                <span className='font-bold'>Total Registrations: </span>
                                <span>{totalRegistrationCount}</span>
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-2'>
                          {/* <Timer></Timer>               */}
                          {/* <CountdownCircleTimer
                           isPlaying
                           duration={duration}
                           initialRemainingTime={initialRemainingTime}
                           strokeWidth={12} */}
                          {/* > */}
                                    {/* {({ remainingTime }) => {
                                        const days = Math.floor(remainingTime / 86400);
                                        const hours = Math.floor((remainingTime % 86400) / 3600);
                                        const minutes = Math.floor((remainingTime % 3600) / 60);
                                        const seconds = Math.floor(remainingTime % 60);

                                        return (
                                            <div className="text-center text-xl font-bold">
                                            <p>{days}d {hours}h</p>
                                            <p>{minutes}m {seconds}s</p>
                                            </div>
                                        );
                                        }}

                          </CountdownCircleTimer> */}
                        </div>

                    </div>
                   {/* register form section */}
                   <div className='text-center pr-2 py-5'>
                      <h2 className='text-3xl md:text-4xl  font-bold text-center'>Register for Marathon</h2>
                      <form onSubmit={handleMarathonRegistion} className='text-white'>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Email</label>
                                <input required type="email" value={user?.email} name='email' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Marathon Title</label>
                                <input required type="text" value={marathon_title} name='marathon_title' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Marathon Start Date</label>
                                <input required type="text" value={startMarathon} name='startDate' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">First Name</label>
                                <input required type="text" name='firstName' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="Frist Name" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Last Name</label>
                                <input required type="text" name='lastName' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="Last Name" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Contact Number</label>
                                <input required type="text" name='contactNumber' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full" placeholder="Csontact Number" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Additional Info</label>
                                {/* <input required type="text" name='lastName'  placeholder="Csontact Number" /> */}
                                <textarea name='additionamInfo' className="pl-3 py-3 outline-none  bg-[#ffffff30] rounded shadow-md w-full " rows="5" ></textarea>' 
                        </fieldset>
                         <button disabled={!isOpen} type='submit' onClick={()=>{
                            if(!isOpen)return
                         }} className={` px-6 py-3 bg-gradient-to-bl  from-blue-500 via-purple-500 to-pink-500 text-white rounded font-medium ${isOpen ?"" :"btn-disabled cursor-not-allowed opacity-50"} `}>Submit Registion</button>
                      </form>

                      
                   </div>

                </div>
            </div>
        </div>
    );
};

export default MarathonDeatils;




