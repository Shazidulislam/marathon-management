import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContexts from '../Contexts/AuthContexts';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const AddMarathon = () => {
    const [ startRegistionDate , setStartRegistionDate ] = useState(new Date());
    const [ endRegistionDate , setEndRegistionDate ] = useState(new Date());
    const [ startMarathon , setStartMarathon ] = useState(new Date());

    const {user } = use(AuthContexts)
    
    const handleAddMarathon=(e)=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const marathonData = Object.fromEntries(formData.entries())
        marathonData.marathonCreateor = user?.email;
        
       
        
        const subMissionMarathon = {...marathonData , createdAt:new Date() , totalRegistrationCount:0 }

        axios.post(`${import.meta.env.VITE_MARATHON_url}/addMarathon` , subMissionMarathon )
        .then((res)=>{
            if(res?.data){
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
        .catch(err=>{
            toast.error(err)
        })

    }
    // if(!user ||loading) return <span>Loading...</span>
    return (
        <div className = "min-h-screen  py-12  px-3 md:px-0 mx-auto ">
            {/* addmarathon container */}
            <div className='max-w-sm md:max-w-lg lg:max-w-3xl py-2  md:py-10 text-center md:border-b-6 md:border-r-6 md:rounded-br-3xl md:border-b-indigo-700 md:border-r-indigo-700 rounded-md mx-auto '> 
               <h1 className='text-xl md:text-3xl lg:text-5xl font-bold '>Create New Marathon</h1>

               <form onSubmit={handleAddMarathon} >
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Marathon Title</label>
                       <input type="text" required name='marathon_title' className="px-6 py-3 bg-white/20  outline-none shadow rounded  w-full " placeholder="Enter a marathon titles" />
                    </fieldset>
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Start Registration Date </label>
                       <DatePicker required  selected={startRegistionDate} dateFormat="yyyy-MM-dd" name='startRegistion' className='px-6 py-3 bg-white/20  outline-none shadow rounded  w-full' onChange={(date)=>setStartRegistionDate(date)} /> 
                    </fieldset>

                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">End Registration Date </label>
                        <DatePicker required name='endRegistion' selected={endRegistionDate} dateFormat="yyyy-MM-dd" className='px-6 py-3 bg-white/20  outline-none shadow rounded  w-full' onChange={(date)=>setEndRegistionDate(date)} /> 
                    </fieldset>
                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Start Marathon Date </label>
                        <DatePicker required name='startMarathon' selected={startMarathon} dateFormat="yyyy-MM-dd" className='px-6 py-3 bg-white/20  outline-none shadow rounded  w-full' onChange={(date)=>setStartMarathon(date)} /> 
                    </fieldset>

                    <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Location</label>
                       <input type="text" required name='location' className="px-6 py-3 bg-white/20  outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                    </fieldset>

                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Distence</label>
                       <select required defaultValue="Pick a text editor" name='distence' className="py-3 bg-white/20 px-6 rounded  outline-none border-none shadow w-full">
                        <option  className='text-white bg-black/55' disabled={false}>select marathon distence</option>
                        <option  className='text-white bg-black/55'>5km</option>
                        <option  className='text-white bg-black/55'>10km</option>
                        <option  className='text-white bg-black/55'>15km</option>
                        <option  className='text-white bg-black/55'>20km</option>
                        <option  className='text-white bg-black/55'>30km</option>
                        <option  className='text-white bg-black/55'>35km</option>
                        <option  className='text-white bg-black/55'>40km</option>
                        <option  className='text-white bg-black/55'>50km</option>
                        <option  className='text-white bg-black/55'>60km</option>
                    </select>
                    </fieldset>
                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Description</label>

                       <textarea className='bg-white/20  outline-none rounded shadow px-4 pt-1' rows="5" required  name="description" id=""></textarea>
                    </fieldset>
                     <fieldset className="fieldset  rounded-box   p-4">
                       <label className="label font-medium text-xm  ">Marathon Image</label>
                       <input type="url" required name='image' className="px-6 py-3 bg-white/20  outline-none shadow rounded  w-full " placeholder="Enter a marathon title" />
                    </fieldset>
                     <fieldset className="fieldset  rounded-box   p-4">
                       <button type='submit' className='w-full py-3 text-lg text-white bg-black/10 shadow shadow-lime-100 g-white/20  rounded font-bold '>Add A Marathon</button>
                    </fieldset>

               </form>
            </div>
        </div>
    );
};

export default AddMarathon;