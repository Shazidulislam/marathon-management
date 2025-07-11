import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContexts from '../Contexts/AuthContexts';


const AddMarathon = () => {
    const [ startRegistionDate , setStartRegistionDate ] = useState(new Date());
    const [ endRegistionDate , setEndRegistionDate ] = useState(new Date());
    const [ startMarathon , setStartMarathon ] = useState(new Date());
    const [totalRegistion , setTotalRegistion] = useState(0)

    const {user} = use(AuthContexts)

    const handleAddMarathon=(e)=>{
        e.preventDefault()
        const form = e.target;
        console.log(form)
        const formData = new FormData(form)
        const marathonData = Object.fromEntries(formData.entries())
        marathonData.marathonCreateor = user?.email;
        const lengthMarathon = []
        lengthMarathon.push(marathonData)
         setTotalRegistion((prev)=> prev + lengthMarathon.length )
        const subMissionMarathon = {...marathonData , createdAt:new Date() , totalRegistrationCount:totalRegistion }
        console.log(subMissionMarathon , )

    }

    return (
        <div className = "min-h-screen  py-12 bg-gradient-to-b  md:pl-10 pl-2 from-indigo-50 px-3 md:px-0 mx-auto to-gray-200">
            {/* addmarathon container */}
            <div className='max-w-sm md:max-w-lg lg:max-w-3xl bg-slate-50 py-2  md:py-10 text-center md:border-b-6 md:border-r-6 md:rounded-br-3xl md:border-b-indigo-700 md:border-r-indigo-700 rounded-md mx-auto '> 
               <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-indigo-950'>Create New Marathon</h1>

               <form onSubmit={handleAddMarathon} >
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Marathon Title</label>
                       <input type="text" required name='marathon_title' className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                    </fieldset>
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Start Registration Date </label>
                       <DatePicker required  selected={startRegistionDate} dateFormat="yyyy-MM-dd" name='startRegistion' className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setStartRegistionDate(date)} /> 
                    </fieldset>

                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">End Registration Date </label>
                        <DatePicker required name='endRegistion' selected={endRegistionDate} ateFormat="yyyy-MM-dd" className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setEndRegistionDate(date)} /> 
                    </fieldset>
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Start Marathon Date </label>
                        <DatePicker required name='startMarathon' selected={startMarathon} ateFormat="yyyy-MM-dd" className='px-6 py-3 bg-base-100 outline-none shadow rounded  w-full' onChange={(date)=>setStartMarathon(date)} /> 
                    </fieldset>

                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Location</label>
                       <input type="text" required name='location' className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                    </fieldset>

                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Distence</label>
                       <select required defaultValue="Pick a text editor" name='distence' className="py-3 px-6 bg-white rounded  outline-none border-none shadow w-full">
                        <option disabled={false}>select marathon distence</option>
                        <option>5km</option>
                        <option>10km</option>
                        <option>15km</option>
                        <option>20km</option>
                        <option>30km</option>
                        <option>35km</option>
                        <option>40km</option>
                    </select>
                    </fieldset>
                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Description</label>

                       <textarea className='bg-white outline-none rounded shadow' rows="5" required  name="description" id=""></textarea>
                    </fieldset>
                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm text-gray-500">Marathon Image</label>
                       <input type="url" required name='image' className="px-6 py-3 bg-base-100 outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                    </fieldset>

                     <fieldset className="fieldset  rounded-box   p-4">
                       <button className='w-full py-3 text-lg text-white rounded font-bold bg-indigo-900'>Add A Marathon</button>
                    </fieldset>


               </form>
            </div>
        </div>
    );
};

export default AddMarathon;