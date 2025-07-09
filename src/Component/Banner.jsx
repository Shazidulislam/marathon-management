import React, {  useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import bannerOne from "../assets/marathon-img/banner-1.jpg"
import bannerTwo from "../assets/marathon-img/banner-2.jpg"
import bannerThree from "../assets/marathon-img/banner-3.jpg"
const Banner = () => {
// const [data , setData ] = useState([]);
const [currentSlide , setCurrentSlide] = useState(0)


const slides = [
  {
    "id": 1,
    "title": "Run Your Best Marathon Yet!",
    "description": "Join our marathon management platform to plan, train, and succeed!",
    "buttonText": "Sign Up Now",
    "bgImage": `${bannerOne}`
  },
  {
    "id": 2,
    "title": "Train Smarter, Run Stronger",
    "description": "Get personalized training plans with our premium marathon app!",
    "buttonText": "Start Training",
    "bgImage": `${bannerTwo}`
  },
  {
    "id": 3,
    "title": "Track Every Step to the Finish Line",
    "description": "Monitor your progress with our advanced marathon tracking tools!",
    "buttonText": "Explore Features",
    "bgImage": `${bannerThree}` 
  }
]
 

useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentSlide((prev)=>(prev + 1 ) % slides.length)
    },5000)
    return()=>{
        clearInterval(interval)
    }
},[slides.length])

const goToSlides =(index)=>{
    setCurrentSlide(index)
}

    return (
        <div className='relative w-full mx-w-6xl mx-auto overflow-hidden rounded-md'>
           <div className='flex transition-transform duration-500 ease-in-out'
        style= {{ transform: `translateX(-${currentSlide * 100}%)` }}
           >
            {
                slides.map(slide=>
                    <div key={slide.id} 
                    style={{backgroundImage:`url(${slide.bgImage})` }}
                    className="min-w-full h-[650px] bg-cover bg-center relative flex justify-center items-center text-white px-3"
                    >

                      <div className='relative z-20'>
                        <p className='  text-5xl font-bold mb-4 drop-shadow-lg w-7/12'>{slide.title}</p>
                        <p className='text-lg mb-6'>{slide.description}</p>
                      
                        <div className='grid grid-cols-12 gap-4 mt-3 items-center'>
                            <p className='px-3 col-span-4 lg:col-span-3 border-2 flex justify-start items-center gap-2 border-white py-2 bg-[#ffffff40] font-semibold text-md rounded-md text-white'>Training and Preparation <FaArrowRightLong /></p>
                            <p className='px-3 border-2 col-span-5 lg:col-span-3 flex justify-start items-center gap-2 border-white py-2 bg-[#ffffff40] font-semibold text-md rounded-md text-white'>Marathon Events and Culture<FaArrowRightLong /></p>

                           
                            <p className='px-3 border-2 col-span-4 lg:col-span-3 flex justify-start items-center gap-2 border-white py-2 bg-[#ffffff40] font-semibold text-md rounded-md text-white'>Physical and Mental Benefits<FaArrowRightLong /></p>
                        </div>
                      </div>
                    </div>
                )
            }
           </div>
           {/* change  */}
           <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-30'>
            {
                slides.map((_ , index)=>(
                    <button onClick={()=>goToSlides(index)}
                     key={index} className={`w-3 h-3 bg-white rounded-full ${currentSlide== index ? "bg-white" : "bg-white/50"} hover:bg-white transition-colors`}>

                    </button>
                ))
            }
           </div>
        </div>
    );
};

export default Banner;
