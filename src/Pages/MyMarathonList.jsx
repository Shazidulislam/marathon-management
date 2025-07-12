import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import useAuth from '../useAuth/useauth';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyMarathonList = () => {
    const [maraThonData , setMaraThonData] = useState(null)
    const axiosInstance = useAxiousSecure()
    const {user} = useAuth()

    useEffect(()=>{
        axiosInstance.get(`/marathonData/${user?.email}`)
        .then((res)=>setMaraThonData(res.data))
    },[axiosInstance , user])

    const handleDeleteMarathon=(id)=>{

         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                  axios.delete(`${import.meta.env.VITE_MARATHON_url}/myMarathonList/${id}`)
                  .then((res)=>{
                     if(res?.data){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                          const deleteData = maraThonData.filter((marathon)=>marathon?._id !== id)
                            setMaraThonData(deleteData)
                            console.log(res?.data?.deletedCount)
                     }
                  })
            }
            });
    }
        
  
    
       
  
    return (
        <div>
            <h2 className='text-3xl md:text-4xl font-bold text-indigo-900 text-center pt-6'>My Marathon Journey</h2>


            <div>
                    <div className="container p-2 py-10 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                              
                                <thead>
                                    <tr className=" bg-gray-300">
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Location</th>
                                        <th className="p-3">Registion </th>
                                        <th className="p-3">Distence</th>
                                        <th className="p-3">Star Date</th>
                                        <th className="p-3">Action</th>
                                        <th className="p-3">
                                        </th>
                                    </tr>
                                </thead>
                                {
                                  maraThonData?.map((marathon)=>  

                                   <tbody className="border-b  bg-gray-50 dark:border-gray-300">
                                    <tr>
                                        <td className="px-3  font-medium dark:text-gray-600">{marathon?.marathon_title}</td>
                                        <td className="px-3 py-2">
                                            <p>{marathon?.location}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span>{marathon?.startRegistion}-</span>
                                            <p className="dark:text-gray-600">{marathon?.endRegistion}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{marathon?.distence}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{marathon?.startMarathon}</p>
                                        </td>
                                        
                                        <td className="px-6 py-3">
                                           <button onClick={()=>handleDeleteMarathon(`${marathon?._id}`)}>Delete</button>
                                        </td>
                                        <td className="px-3 py-2">
                                           <span>
                                            {/* <button className='px-6 py-3'>Update Marathon</button> */}
                                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="py-3" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update </button>
                                            <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                
                                                    <fieldset className="fieldset w-full">
                                                        <label className="label font-bold">Title</label>
                                                        <input type="text" className="pl-3 py-3 outline-none  bg-slate-50 rounded shadow-md w-full" placeholder="My awesome page" />
                                                    </fieldset>
                                                <div className="modal-action">
                                                <form method="dialog">
                                                   <button className='px-6 py-3 bg-red-500 rounded text-white'>Cancel</button>
                                                </form>
                                                </div>
                                            </div>
                                            </dialog>
                                           </span>
                                        </td>
                                    </tr>
                                </tbody>)  
                                }
                              
                             
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default MyMarathonList;



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