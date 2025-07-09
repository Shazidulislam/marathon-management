import React from 'react';
import { NavLink } from 'react-router';
import marathonlogo2 from "../assets/marathon-img/marathon-logo.jpg"

const Navbar = () => {
    const links = <>
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
                to="/rr"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Marathons
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/rrr"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/rr"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                }
                >
                Register
            </NavLink>
        </li>
     </>
    return (
        <div>
            <div className="navbar bg-base-300  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                    {/* avater */}
                      <div className='flex justify-center items-center gap-2'>
                        <img className='w-20 rounded-full' src={marathonlogo2} alt="" />
                        <h1 className='text-3xl text_rancho font-bold text-[#403f3f]'>Marathon Hub</h1>
                      </div>
                      
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
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