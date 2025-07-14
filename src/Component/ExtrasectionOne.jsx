import React from 'react';
import runingImg from "../assets/marathon-img/extraSection.jpg"

const ExtrasectionOne = () => {
    return (
        <div className='px-2 md:px-10 lg:px-16 py-10 grid gap-6 grid-cols-12'>
            <div className= ' col-span-12 md:col-span-5  space-y-8'>
                <div>
                   <p className='font-bold text-[#403f3f]'>Overcome new distances</p>
                    <h1 className='text-5xl font-bold text-[#403f3f] text_Oswald'>Elevate Your Run, Triumph <span className='text-[#F9A51A]'>Awaits You</span></h1>
                </div>
                <div>
                    <p className='font-medium w-10/12'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div>
                    <button className=' px-6 md:px-8 py-3 border-2 font-medium hover:bg-black hover:text-white'>Book Now</button>
                </div>
            </div>

            <div className='relative col-span-12 md:col-span-7'>
                 <figure>
                   < img className='w-xs h-[550px] object-cover bg-cover ' src={runingImg} alt="" />
                </figure> 
                <div className='flex gap-5 absolute right-20 top-52'>
                    <div className='p-10 space-y-3 hidden md:block bg-[#F9A51A] text-white font-bold'>
                            <h1 className='text-xl text_Oswald'>Prizes for runners</h1>
                            <p className='text-5xl'>400+</p>
                            <p className='font-medium'>Sed eiusmod tempor.</p>
                    </div>
                    <div className='p-10 space-y-3  bg-black text-white font-bold'>
                            <h1 className='text-xl '>Prizes for runners</h1>
                            <p className='text-5xl'>100+</p>
                            <p className='font-medium'>Adipiscing elit, do eiusm.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExtrasectionOne;
