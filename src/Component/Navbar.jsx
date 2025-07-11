import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import marathonlogo2 from "../assets/marathon-img/marathon-logo.jpg"
import AuthContexts from '../Contexts/AuthContexts';


const Navbar = () => {
    
    const {user , signOutUser} = use(AuthContexts)

    const handleSignOut =()=>{
        signOutUser()
        
    }

    console.log(user)
    const links = <div className=' md:flex justify-center items-center gap-2'>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/marathon"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Marathons
            </NavLink>
        </li>
       {
        user ? <>                
                                <li>
                                        <NavLink
                                            to="/board"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "underline" : ""
                                            }
                                            >
                                            Dashboard
                                        </NavLink>
                                </li>
                              <li >
                                <figure className='hidden md:block'>
                                    <img className='bg-cover bg-center object-cover w-12 h-12 border-2  border-gray-400 rounded-full' src={user?.photoURL} alt="" />
                                </figure>
                            </li>
                            <li>
                                <button onClick={handleSignOut} className='px-6 py-3 bg-[#F9A51A] text-white'>Logout</button>
                            </li>
                </>   : <>

          <li>
            <NavLink
                to="/signin"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Signin
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Register
            </NavLink>
        </li>
        </>
       }
     </div>
    return (
        <div>
            <div className="flex w-full justify-between items-center bg-base-300 py-1 px-2 md:px-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <div className="dropdown">
                       <div className='grid grid-cols-12 items-center'>
                           <div tabIndex={0} role="button" className="btn mt-4 btn-ghost block md:hidden col-span-4">
                            <svg  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                           <h1 className='block md:hidden col-span-8 text-3xl text_rancho font-bold text-[#403f3f]'>Marathon Hub</h1>
                       </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    {/* avater */}
                      <div className='hidden md:flex justify-center items-center gap-2'>
                        <img className='w-12  rounded-full' src={marathonlogo2} alt="" />
                        <h1 className='text-2xl text_rancho font-bold text-[#403f3f]'>Marathon Hub</h1>
                      </div>
                      
                    </div>
                </div>
                <div className=" hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {
                            links
                        }
                    </ul>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;