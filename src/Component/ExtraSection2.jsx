import React from 'react';
import img1 from "../assets/marathon-img/section2.jpg"
import img2 from "../assets/marathon-img/section11.jpg"

const ExtraSection2 = () => {
    return (
        <div className='grid grid-cols-12 '>
            <div className='md:relative py-10 px-2 md:px-12 lg:16 col-span-12 md:col-span-5  '>
                <h1 className='font-medium '>Schedule Online Appointments</h1>
                <p className='text-2xl md:text-5xl text_Oswald pt-2 font-bold text-[#403f3f] text_Oswald'>Our new running programs for marathon runners</p>
                <p className='font-bold md:absolute pt-4 text-gray-500 md:w-96 top-52 -right-52'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo nemo. </p>
                <div className='md:absolute bottom-0  justify-end'>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className='col-span-12 md:col-span-2 md:pt-10 '>
                <h1 className='font-bold text-xl md:text-2xl text-[#403f3f]'>What we do</h1>
                <p className='font-bold text-gray-500'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad.</p>
            </div>
            <div className='col-span-12 md:col-span-5  relative '>
                    {/* <img src={img2} alt="" className=' pl-20 w-md' /> */}
                     <img src={img1} alt="" className=' md:pl-30 h-full ' />
            </div>
        </div>
    );
};

export default ExtraSection2;