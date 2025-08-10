import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdAddCard } from "react-icons/md";
import CommonButton from "../../Button/CommonButton";
import { GrLogout } from "react-icons/gr";
import { toast } from "react-toastify";
import AuthContexts from "../../../Contexts/AuthContexts";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import MenueItem from "../MenueItem/MenueItem";

const Sidebar = () => {
  const { signOutUser, loading } = use(AuthContexts);
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const handleLogOUt = () => {
    signOutUser().then(() => {
      toast.success("Logout successfully!");
      navigate("/signin");
    });
  };
  const handleToggle = () => {
    setActive(!isActive);
  };
  if (loading) return <span>Loading</span>;

  return (

 
    <>
      <div className=" bg-black/40 text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer px-4 py-1 font-bold">
            <Link to="/">
              <CommonButton></CommonButton>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none text-white "
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden   space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-1  rounded justify-start items-start  ">
              <Link to={"/"}>
                <CommonButton></CommonButton>
              </Link>
            </div>
            <div className="divider"></div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-2">
            <nav>
              <ul className=" space-y-3">
                <MenueItem
                  level={"Home"}
                  icon={SiHomeassistantcommunitystore}
                  path={"/board"}
                />
                <MenueItem
                  level={"Add Marathon"}
                  icon={MdAddCard}
                  path={"/board/addmarathon"}
                />
                <MenueItem
                  level={"My Marathon"}
                  icon={MdAddCard}
                  path={"/board/mymarathon"}
                />
                <MenueItem
                  level={"My App lyList"}
                  icon={MdAddCard}
                  path={"/board/myapply"}
                />
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div className="divider "></div>
            <MenueItem level={"Profile"} icon={FcSettings} path={"/board/myprofile"} ></MenueItem>  
            {/* <div>
                <FcSettings/>
                <Link to={"/board/myprofile"} >Profile</Link>
            </div> */}
          <button
            onClick={handleLogOUt}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-black/40  transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium ">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
