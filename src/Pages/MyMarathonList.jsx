import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import useAuth from '../useAuth/useauth';
import axios from 'axios';
import Swal from 'sweetalert2';
import UpdateMarathon from '../Contexts/UpdateMarathon';
import { Link } from 'react-router';

const MyMarathonList = () => {
    const [maraThonData , setMaraThonData] = useState(null)
    const axiosInstance = useAxiousSecure()
    const {user } = useAuth()

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
                     }
                  })
            }
            });
    }
    
 
  
    
       
    // if(!user || loading) return <span>Loading....</span>
    return (
        <div>
            {
                maraThonData?.length == 0 ? <>
                        <div className='px-4 py-10 max-w-xl bg-indigo-100 mx-auto rounded  border-2 border-indigo-900'>
                            <h2 className='text-2xl font-medium  text-center not-only: md:text-3xl text-indigo-900'>No marathons found. Please add a new one to get started!</h2>
                        </div>
                </> :
             <>
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

                                    <tbody key={marathon._id} className="border-b  bg-gray-50 dark:border-gray-300">
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
                                             <Link to={`/board/mymarathon/${marathon?._id}`}>
                                                 <button className='px-6 py-3 '>
                                                     update
                                                  </button>
                                             </Link>
                                           </span>
                                            </td>
                                        </tr>
                                    </tbody>)  
                                    }
                                
                                </table>
                            </div>
                        </div>
                </div>
              </>
            }
         
        </div>
    );
};

export default MyMarathonList;



