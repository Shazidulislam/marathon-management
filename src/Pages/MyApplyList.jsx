import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import useAuth from '../useAuth/useauth';
import Swal from 'sweetalert2';
import axios from 'axios';
import UpdateRegistion from '../Component/UpdateRegistion';
import { IoSearchSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const MyApplyList = () => {
        const [maraThonData , setMaraThonData] = useState(null)
        const [filterData , setFilterData] = useState([])
        const [searchText , setSearchText] = useState("")
       
        const axiosInstance = useAxiousSecure()
        const {user} = useAuth()
        useEffect(()=>{
           axiosInstance.get(`/applyedList/${user?.email}`)
           .then((res)=>{
            console.log(res.data)
            setMaraThonData(res?.data);
            setFilterData(res?.data)
           })
        },[axiosInstance ,user])

        useEffect(()=>{
             const  filtered =  maraThonData?.filter((marathon)=>marathon?.marathon_title?.toLowerCase()?.includes(searchText?.toLocaleLowerCase())  )  
             setFilterData(filtered)
        },[maraThonData , searchText])

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
                       <div className=''>
                             <h2 className='text-3xl md:text-4xl font-bold text-indigo-900 text-center pt-6'>My  Applyed Marathon List</h2>
                            <fieldset className="fieldset pt-3 relative rounded-box w-md mx-auto ">
                                 <input type="text" required value={searchText} onChange={(e)=>setSearchText(e.target.value) } className="px-6 py-4 border outline-none" placeholder="Search By Title" />
                               <IoSearchSharp className='absolute top-7 font-bold  right-4' size={24} />
                            </fieldset>
                           
                       </div>
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
                                    filterData?.map((marathon)=>  

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
                                                   <Link to={`/board/myapplylist/${marathon?._id}`}> Update</Link>
                                                </span>
                                            {/* <span>
                                            
                                                <button className="py-3" onClick={()=>{
                                                    handleSingleData(`${marathon?._id}`);
                                                    document.getElementById('my_modal_1').showModal();

                                                }}>Update </button>
                                                <dialog id="my_modal_1" className="modal">
                                                <div className="modal-box">
                                                       
                                                      <UpdateRegistion singleMarathonData={singleMarathonData}></UpdateRegistion>
                                                    <div className="modal-action">
                                                    <form method="dialog">
                                                    <button className='px-6 py-3 bg-red-500 rounded text-white'>Cancel</button>
                                                    </form>
                                                    </div>
                                                </div>
                                                </dialog>
                                            </span> */}
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





