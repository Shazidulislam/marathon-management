import React from 'react';
import metaimg from "../../assets/marathon-img/winner1.jpeg"
import mancrossing from "../../assets/marathon-img/Man crossing finish line at 2024 Steamboat….jpeg"
import mancrosing2 from "../../assets/marathon-img/mancrossing2.jpeg"
import bg from "../../assets/marathon-img/bg-43.jpeg"
const TrainerSection = () => {
    return (
        <div className='p-4 bg-white text-black' style={{backgroundImage:`url(${bg})`}} > 
           <div className='flex flex-col justify-center items-center'>
             <p className='text-xl '>Our Success</p>
            <h3 className='text-3xl font-semibold'>Latest Blog & Articles</h3>
            <div className='border-t-4 rounded my-6 border-lime-400 w-32' ></div>
           </div>
           <div className='grid grid-cols-12 '>
            {/* left */}
              <div className=' relative col-span-12 md:col-span-7 px-16 py-4'>
               <figure>
                 <img src={metaimg} alt="" className='rounded-2xl not-only: opacity-70' />
               </figure>
               <div className='absolute bottom-8 pl-2'>
                <p className='text-3xl font-semibold hover:text-lime-400'>Winer</p>
                <p className='text-xl py-2 font-medium hover:text-lime-400 '>The 6 Surprising Reasons Your Long Run Is So Good.</p>
                <p className='text-sm pt-1 text-black hover:text-gray-600 lg:w-9/12 ' >What separates a strong finish from a painful one? It's all <span className='font-bold '> about strategic pacing and mental resilience.</span> The best runners don't just run the first 20 miles; they conserve energy to race the last 6.2. They train their minds to push through discomfort, using visualization and positive self-talk to overcome the physical "wall." Their secret isn't just about training the legs, it's about training the mind to be tougher than the body.</p>
                <button className='px-6 py-2 bg-black/45 rounded mt-2 cursor-pointer transition-all transform duration-200 hover:text-white'> Learn More</button>
               </div>
              </div>
              {/* right */}
              <div className=' col-span-12 md:col-span-5 flex flex-col justify-baseline'>
                <div className='flex gap-2 mt-5 ' >
                    <figure>
                        <img src={mancrossing} className='rounded-2xl' alt="" />
                    </figure>
                   <div>
                     <p className='font-thin text-gray-600 text-sm pb-4' >News</p>
                    <h2 className=' text-xl lg:text-2xl font-bold hover:text-lime-400 transition-colors transform duration-300' >The Untold Story of How Elite Runners Stay Injury-Free</h2>
                    <p className='text-gray-600 text-sm pt-2 ' >Why the Best Runners Rarely Train the Way You Think They Do</p>
                    <button className='px-6 py-2 bg-black/45 mt-4 rounded  cursor-pointer transition-all transform duration-200 hover:text-white'> Learn More</button>
                   </div>
                </div>
                <div className='flex gap-2  justify-end mt-32' >
                    <figure>
                        <img src={mancrosing2} className='rounded-2xl' alt="" />
                    </figure>
                   <div>
                     <p className='font-thin text-gray-600 text-sm pb-4' >News</p>
                    <h2 className=' text-xl lg:text-2xl font-bold hover:text-lime-400 transition-colors transform duration-300' >What Happens to Your Body When You Run Every Day for a Month</h2>
                    <p className='text-gray-600 text-sm pt-2 ' >How One Simple Habit Made Me a Faster Runner in Just 3 Weeks</p>
                    <button className='px-6 py-2 bg-black/45 mt-4 rounded  cursor-pointer transition-all transform duration-200 hover:text-white'> Learn More</button>
                   </div>
                </div>
              </div>
           </div>
        </div>
    );
};

export default TrainerSection;