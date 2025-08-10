import React, { use, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import marathonlogo2 from "../assets/marathon-img/logo-2.jpeg";
import AuthContexts from "../Contexts/AuthContexts";
import { toast } from "react-toastify";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContexts);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Log out successfully!");
      navigate("/signin");
    });
  };

  // if( loading) return <span>Loading....</span>

  const links = (
    <div className=" md:flex justify-center items-center gap-2">
      <li >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li >
        <NavLink
          to="/marathon"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Marathons
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="fixed top-0 left-0 w-full  z-50">
      <div className="py-4 hidden md:flex   bg_primary text-black justify-center items-center">
        {/* site 1  */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-3 ">
            <span>
              <MdEmail size={24} />
            </span>
            <p className="text-sm">shazidulislam910@gmail.com</p>
          </div>
          {/* divider */}
          <div className="divider divider-horizontal before:bg-black after:bg-black"></div>
          <div className="flex justify-center items-center gap-3 ">
            <span>
              <MdLocationPin size={24} />
            </span>
            <p className="text-sm">Ml. Raya Renon No. 151 Denpasar</p>
          </div>
        </div>
        {/* site-2 */}
        <div></div>
      </div>
      {/* navbar */}
      <div>
        <div className="flex w-full justify-between items-center   bg-black/90  py-2 px-2 md:px-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="dropdown">
              <div className="flex justify-between ">
                <div className="">
                  <div className=" flex  md:hidden justify-center items-center">
                    <img
                      className="w-16  rounded-2xl"
                      src={marathonlogo2}
                      alt=""
                    />
                    <h1 className="text-2xl  font-bold text-[#fff]">
                      Marathon Hub
                    </h1>
                  </div>
                  {/*  */}
                </div>
                {/* end small nav */}
              </div>
            </div>
            <div>
              {/* */}
              {/* avater */}
              <div className="hidden md:flex justify-center  items-center gap-2">
                < img className="w-16  rounded-2xl" src={marathonlogo2} alt="" />
                <h1 className="text-2xl  font-bold text-[#fff]">
                  Marathon Hub
                </h1>
              </div>
            </div>
          </div>
          {/* large nav bar */}
          <div className=" hidden md:flex ">
            <ul className="menu menu-horizontal px-1 font-medium">
              {links}
              {/* large dropdown */}
              <div className=" hidden md:flex gap-2">
                {user ? (
                  <>
                    <div className="relative inline-block" ref={dropdownRef}>
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer"
                      >
                        <img
                          className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500"
                          src={
                            user?.photoURL ||
                            "https://i.ibb.co/2d9Hf0S/default-user.png"
                          }
                          alt="User Avatar"
                        />
                      </div>
                      {/* drop dwon menu */}

                      {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                          <ul className="py-2 text-sm text-gray-700">
                            <li>
                              <Link
                                to="/board"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                              >
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={handleSignOut}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center gap-6 ">
                      <Link to={"/signin"}>
                        <button className="px-6 py-2 bg-black/30 rounded shadow cursor-pointer">
                          Sign In
                        </button>
                      </Link>
                      <Link to={"/register"}>
                        <button className="px-6 py-2 border border-black/30 rounded shadow ">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </ul>
          </div>
          {/* small nav bar */}
          <div className="relative inline-block  md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer relative"
            >
              <IoMenu size={24} />
            </button>
            {isOpen && (
              <>
                <div className="absolute right-0 mt-2 w-40 bg-white  rounded-md shadow-lg z-50">
                  <ul
                    tabIndex={0}
                    className="menu menu-sm  text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 "
                  >
                               <span className="pl-1">
                                {links}
                                </span>  
                              <Link
                                to="/board"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                               >
                                Dashboard
                              </Link>
                               <button
                                onClick={handleSignOut}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              >
                                Logout
                              </button>
                  </ul>
                </div>
              </>
            )}
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
