import React, { use } from 'react';
import AuthContexts from '../../Contexts/AuthContexts';
import { FaUserTie } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdBloodtype, MdOutlineEmojiEvents } from 'react-icons/md';
import { PiToteSimpleFill } from 'react-icons/pi';

const DashboardHome = () => {
    const {user , loading} = use(AuthContexts)
    if(loading) return <span className='text-white'>Loading.....</span>
    return (
   <div>
                    {/* welcome user */}
                    <div className='px-4 md:px-10 py-4 md:py-8  min-h-screen rounded-lg shadow-lg' >
                        <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold  '>Welcome, {user?.displayName}!</h2>
                        <p className=' font-medium pt-4 md:w-5/12 text-gray-400'>Easily manage events, monitor registrations, track participants, and oversee every detail to ensure smooth and successful marathons.</p>
                         {/* main content */}
                    <div className='  mt-5 py-3 '>
                       <div className='divider'></div>
                        <div className='lg:flex justify-around space-y-4 items-center'>
                           {/* 1 */}
                            <div className='py-4 px-12 border-2 border-blue-600 shadow-lg shadow-blue-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                               <span className='text-blue-500 bg-blue-100 p-4 rounded-full'>
                                 <FaUserTie size={36}/>
                               </span>
                                <p className='' >1000</p>
                                <h2 className='text-xl text-gray-500  '>Total User</h2>
                                <p className='text-xs text-gray-500'>Updated: July 2025</p>
                            </div>
                            {/* 2 */}
                            <div className='py-4 px-12 border-2 border-lime-600  shadow-lg shadow-lime-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                               <span className='text-lime-600 bg-lime-100 p-4 rounded-full'>
                                 <PiToteSimpleFill    size={36}/>
                               </span>
                                <p className='' >200</p>
                                <h2 className='text-xl text-gray-500  '>Total Marathon</h2>
                                <p className='text-xs text-gray-500'>Updated: July 2025</p>
                            </div>
                            {/* 3 */}
                            <div className='py-4 px-12 border-2 border-red-600 shadow-lg shadow-red-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                               <span className='text-red-500 bg-red-100 p-4 rounded-full'>
                                 <MdOutlineEmojiEvents  size={36}/>
                               </span>
                                <p className='' >300</p>
                                <h2 className='text-xl text-gray-500  '>Total Events</h2>
                                <p className='text-xs text-gray-500'>Updated: July 2025</p>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                   
                </div>
    );
};

export default DashboardHome;