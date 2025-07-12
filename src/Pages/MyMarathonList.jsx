import React, { useEffect, useState } from 'react';
import useAxiousSecure from '../Component/useAxiousSecure';
import useAuth from '../useAuth/useauth';

const MyMarathonList = () => {
    const [maraThonData , setMaraThonData] = useState(null)
    const axiosInstance = useAxiousSecure()
    const {user} = useAuth()

    useEffect(()=>{
        axiosInstance.get(`/marathonData/${user?.email}`)
        .then((res)=>setMaraThonData(res.data))
    },[axiosInstance , user])

    return (
        <div>
            <h2 className='text-3xl md:text-4xl font-bold text-indigo-900 text-center pt-6'>My Marathon Journey</h2>


            <div>
                    <div className="container p-2 py-10 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                                {/* <colgroup>
                                    <col className="w-5" />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-5" />
                                </colgroup> */}
                                <thead>
                                    <tr className=" bg-gray-300">
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Location</th>
                                        <th className="p-3">Registion </th>
                                        <th className="p-3">Distence</th>
                                        <th className="p-3">Email</th>
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
                                            <p>{marathon?.marathonCreateor}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                           <span>
                                            <button className='px-6 py-3'>Update</button>
                                           </span>
                                        </td>
                                        <td className="px-3 py-2">
                                           <button>Delete</button>
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