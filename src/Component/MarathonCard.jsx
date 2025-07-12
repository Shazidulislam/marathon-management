import React from 'react';

const MarathonCard = ({marathon}) => {

    const {image , marathon_title ,startRegistion ,endRegistion  ,  location  } = marathon || {}

    return (
    <div className="max-w-xs md:max-w-sm  rounded-md shadow-md bg-base-100   ">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72  bg-gray-500" />
        <div className="flex flex-col justify-between py-6 px-3 space-y-8">
            <div className="space-y-2 flex-1">
                <h2 className="text-2xl   text-indigo-900 font-bold">{marathon_title}</h2>
              
                <p>
                    <span className='font-bold text-gray-800'>Location : </span>
                    <span  className = "text-gray-500 font-semibold" >{location}</span>
                </p>
               
                <p>
                    <span className='font-bold text-gray-800'>Registration : </span>
                    <span  className = "text-gray-500 font-semibold" >{startRegistion} - {endRegistion}</span>
                </p>
            </div>
        <button type="button" className="w-full  p-3 font-semibold tracking-wide rounded  bg-violet-600  text-gray-50">See Deatils</button>
        </div>
    </div>
    );
};

export default MarathonCard;








// // {
//     "_id": "6870eb2d64a96f2c2b571236",
//     "marathon_title": "New York City Marathon",
//     "startRegistion": "2025-07-11",
//     "endRegistion": "2025-08-08",
//     "startMarathon": "2025-09-04",
//     "location": "New York, USA",
//     "distence": "20km",
//     "description": "Run through the heart of Paris past world-famous landmarks like the Eiffel Tower, Notre Dame, and the Champs-Élysées. The Paris Marathon is one of Europe’s most scenic and romantic races. Whether you're chasing a personal best or soaking up the sights, this event delivers beauty, culture, and adrenaline in equal measure.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfgqluTWlu3vS-VmadV_uHGTOOebRYT4VSg&s",
//     "marathonCreateor": "shazidulislam910@gmail.com",
//     "createdAt": "2025-07-11T10:45:00.870Z",
//     "totalRegistrationCount": 3
// }



