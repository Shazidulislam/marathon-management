import axios from 'axios';
import React, {  } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';


const UpdateRegistion = ({singleMarathonData }) => {

    const {marathon_title  ,firstName ,startDate, lastName ,contactNumber ,additionamInfo ,_id  } = singleMarathonData || {}

    const handleMarathonRegistion=(e)=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updateMarathonData = Object.fromEntries(formData.entries())


        // update the marathon
        axios.patch(`${import.meta.env.VITE_MARATHON_url}/myApplyList/${_id}`, updateMarathonData)
        .then((res)=>{
            if(res?.date){
                 Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Marathon Create successfully!",
                    showConfirmButton: false,
                    timer: 1500
                    });
              }
            console.log(res?.date)

        })
        .catch(err=>console.log(err))

    }

    return (
         <div>
                      <form onSubmit={handleMarathonRegistion} className=''>
                       
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Marathon Title</label>
                                <input required type="text" defaultValue={marathon_title}  name='marathon_title' className="pl-3 py-3 outline-none  bg-gray-50  rounded shadow-md w-full" placeholder="" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Marathon Start Date</label>
                                <input required type="text" defaultValue={startDate} name='startDate' className="pl-3 py-3 outline-none  bg-gray-50 rounded shadow-md w-full" placeholder="" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">First Name</label>
                                <input required type="text" defaultValue={firstName} name='firstName' className="pl-3 py-3 outline-none  bg-gray-50 rounded shadow-md w-full" placeholder="Frist Name" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Last Name</label>
                                <input required type="text" name='lastName' defaultValue={lastName} className="pl-3 py-3 outline-none  bg-gray-50 rounded shadow-md w-full" placeholder="Last Name" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Contact Number</label>
                                <input required type="text" name='contactNumber' defaultValue={contactNumber} className="pl-3 py-3 outline-none  bg-gray-50 rounded shadow-md w-full" placeholder="Csontact Number" />
                        </fieldset>
                        <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold">Additional Info</label>
                                {/* <input required type="text" name='lastName'  placeholder="Csontact Number" /> */}
                                <textarea name='additionamInfo' defaultValue={additionamInfo} className="pl-3 py-3 outline-none  bg-gray-50 rounded shadow-md w-full " rows="5" ></textarea>' 
                        </fieldset>
                         <button  type='submit'  className={` px-6 py-3 bg-gradient-to-bl  from-blue-500 via-purple-500 to-pink-500 text-white rounded font-medium  `}>Update Registion</button>
                      </form>

         </div>
    );
};




export default UpdateRegistion;