import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import useAuth from '../useAuth/useauth';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyApplyList = () => {
        const [maraThonData , setMaraThonData] = useState(null)
        const axiosInstance = useAxiousSecure()
        const {user} = useAuth()

        useEffect(()=>{
           axiosInstance.get(`/applyedList/${user?.email}`)
           .then((res)=>{
            console.log(res.data)
            setMaraThonData(res?.data);
           })
        },[axiosInstance ,user])

    
  
// {
//     "_id": "687380b563bbb82037cf400e",
//     "email": "shazidulislam910@gmail.com",
//     "marathon_title": "Add Upozila Marathon",
//     "startDate": "2025-07-24",
//     "firstName": "Shazid-UL",
//     "lastName": "01605199098",
//     "additionamInfo": "A fun 5K right on the world's longest beach. Chill vibes, good crowd, and the perfect event for all fitness levels.\n",
//     "totalRegistion": 1
// }

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
                  axios.delete(`${import.meta.env.VITE_MARATHON_url}/dleteApplyedData/${id}`)
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
        <div className='py-10'>
      

             {
                maraThonData?.length == 0 ? <>
                        <div className='px-4 py-10 max-w-xl bg-indigo-100 mx-auto rounded  border-2 border-indigo-900'>
                            <h2 className='text-2xl font-medium  text-center not-only: md:text-3xl text-indigo-900'>No marathons found. Please add a new one to get started!</h2>
                        </div>

                </> : <>
                        <h2 className='text-3xl md:text-4xl font-bold text-indigo-900 text-center pt-6'>My  Applyed Marathon List</h2>
                          <div className="container p-2 py-10 mx-auto sm:p-4 dark:text-gray-800">
                            <div className="overflow-x-auto">
                                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                                
                                    <thead>
                                        <tr className=" bg-gray-300">
                                            <th className="p-3">Title</th>
                                            <th className="p-3">Start Date</th>
                                            <th className="p-3">First Name </th>
                                            <th className="p-3">Last Name</th>
                                            <th className="p-3">Contact Number</th>
                                            <th className="p-3">Action</th>
                                            <th className="p-3">
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                    maraThonData?.map((marathon)=>  

                                    <tbody key={marathon._id} className="border-b  bg-gray-50 dark:border-gray-300">
                                        <tr>
                                            <td className="px-3  font-medium dark:text-gray-600">{marathon?.marathon_title}</td>
                                            <td className="px-3 py-2">
                                                <p>{marathon?.startDate}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <span>{marathon?.firstName}-</span>
                                              
                                            </td>
                                            <td className="px-3 py-2">
                                                <p>{marathon?.lastName}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <p>{marathon?.contactNumber}</p>
                                            </td>
                                            
                                            <td className="px-6 py-3">
                                            <button onClick={()=>handleDeleteMarathon(`${marathon?._id}`)}>Delete</button>
                                            </td>
                                            <td className="px-3 py-2">
                                            <span>
                                            
                                                <button className="py-3" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update </button>
                                                <dialog id="my_modal_1" className="modal">
                                                <div className="modal-box">
                                                        <h2 className='text-3xl text-center font-bold text-indigo-900'>Revise Marathon Entry</h2>
                                                    {/* <UpdateMarathon ></UpdateMarathon> */}
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
                </>
             }

        </div>
    );
};

export default MyApplyList;





