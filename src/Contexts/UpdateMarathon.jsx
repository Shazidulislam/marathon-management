import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const UpdateMarathon = ({marathon}) => {
  const [ startRegistionDate , setStartRegistionDate ] = useState(new Date());
    const [ endRegistionDate , setEndRegistionDate ] = useState(new Date());
    const [ startMarathonData , setStartMarathonData ] = useState(new Date());
    
    const {image ,description,  marathon_title ,startRegistion ,endRegistion  ,distence,  location  ,_id , startMarathon} = marathon || {}
    return (
        <form action="">
             <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Marathon Title</label>
                                   <input type="text" defaultValue={marathon_title} required name='marathon_title' className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                                </fieldset>
                                <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Start Registration Date </label>
                                   <DatePicker required defaultValue={startRegistion} selected={startRegistionDate} dateFormat="yyyy-MM-dd" name='startRegistion' className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setStartRegistionDate(date)} /> 
                                      
                                </fieldset>
            
                                <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">End Registration Date </label>
                                    <DatePicker required defaultValue={endRegistion} name='endRegistion' selected={endRegistionDate} dateFormat="yyyy-MM-dd" className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setEndRegistionDate(date)} /> 
                                </fieldset>
                                <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Start Marathon Date </label>
                                    <DatePicker required name='startMarathon' defaultValue={startMarathon} selected={startMarathonData} dateFormat="yyyy-MM-dd" className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setStartMarathonData(date)} /> 
                                </fieldset>
            
                                <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Location</label>
                                   <input type="text" required defaultValue={location} name='location' className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                                </fieldset>
            
                                 <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Distence</label>
                                   <select required defaultValue={distence} name='distence' className="py-3 px-6 bg-white rounded  outline-none border-none shadow w-full">
                                    <option disabled={false}>select marathon distence</option>
                                    <option>5km</option>
                                    <option>10km</option>
                                    <option>15km</option>
                                    <option>20km</option>
                                    <option>30km</option>
                                    <option>35km</option>
                                    <option>40km</option>
                                    <option>50km</option>
                                    <option>60km</option>
                                </select>
                                </fieldset>
                                 <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Description</label>
            
                                   <textarea className='bg-white outline-none rounded shadow' rows="6" required  name="description" defaultValue={description} id=""></textarea>
                                </fieldset>
                                 <fieldset className="fieldset  rounded-box   p-4">
                                   <label className="label font-medium text-xm text-gray-500">Marathon Image</label>
                                   <input type="url" required name='image' defaultValue={image} className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                                </fieldset>
                                 <fieldset className="fieldset  rounded-box   p-4">
                                   <button type='submit' className='w-full py-3 text-lg text-white rounded font-bold bg-indigo-900'>Update  Marathon</button>
                               </fieldset>
            
        </form>
    );
};

export default UpdateMarathon;




// {
//     "_id": "6870ef1764a96f2c2b571239",
//     "marathon_title": "Berlin Marathon",
//     "startRegistion": "2025-08-16",
//     "endRegistion": "2025-08-30",
//     "startMarathon": "2025-09-22",
//     "location": "Berlin, Germany",
//     "distence": "50km",
//     "description": "  Explore the rugged beauty of South Africa as you race past Table Mountain, coastal cliffs, and the vibrant streets of Cape Town. This ultra-marathon pushes your endurance while treating you to jaw-dropping views and passionate local supporters. Perfect for runners looking for a wild, breathtaking challenge.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT214wJwMzSE_leLf6kF4TQ226xxEWi5fFUUg&s",
//     "marathonCreateor": "shazidulislam591@gmail.com",
//     "createdAt": "2025-07-11T11:01:43.125Z",
//     "totalRegistrationCount": 1
// }