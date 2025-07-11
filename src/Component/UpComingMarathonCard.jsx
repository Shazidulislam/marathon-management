import React from 'react';

const UpComingMarathonCard = ({marathon}) => {

    const {image , title ,startRegistrationDate ,endRegistrationDate , marathonStartDate , distance ,  description , location  } = marathon || {}

    return (
    <div className="max-w-xs md:max-w-sm  rounded-md shadow-md bg-base-100   ">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72  bg-gray-500" />
        <div className="flex flex-col justify-between py-6 px-3 space-y-8">
            <div className="space-y-2 flex-1">
                <h2 className="text-2xl   text-indigo-900 font-bold">{title}</h2>
                <p className=" text-gray-600 text-sm font-semibold">{description}</p>
                <p>
                    <span className='font-bold text-gray-800 '>Date : </span>
                    <span className = "text-gray-500 font-semibold">{marathonStartDate}</span>
                </p>
                <p>
                    <span className='font-bold text-gray-800'>Location : </span>
                    <span  className = "text-gray-500 font-semibold" >{location}</span>
                </p>
                <p>
                    <span className='font-bold text-gray-800'>Distance : </span>
                    <span  className = "text-gray-500 font-semibold" >{distance}</span>
                </p>
                <p>
                    <span className='font-bold text-gray-800'>Registration : </span>
                    <span  className = "text-gray-500 font-semibold" >{startRegistrationDate} - {endRegistrationDate}</span>
                </p>
            </div>
        <button type="button" className="w-full  p-3 font-semibold tracking-wide rounded  bg-violet-600  text-gray-50">See Deatils</button>
        </div>
    </div>
    );
};

export default UpComingMarathonCard;



