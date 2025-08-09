import React from "react";
import { Link } from "react-router";
import MenueItem from "../MenueItem/MenueItem";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdAddCard } from "react-icons/md";
import CommonButton from "../../Button/CommonButton";

const Sidebar = () => {
  return (
    <div>
      <ul className="">
        <Link to={"/"}>
        <CommonButton/>
        </Link>
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
          level={"Add Marathon"}
          icon={MdAddCard}
          path={"/board/addmarathon"}
        />

        <li>
          <p className=" py-3 pl-1 md:pl-6 text-xs text-gray-900 border-t  font-medium">
            <Link to={"/board/mymarathon"}>My Marathon</Link>
          </p>
        </li>
        <li>
          <p className=" py-3 pl-1 md:pl-6 text-xs text-gray-900 border-t border-b font-medium">
            <Link to={"/board/myapply"}>My App lyList</Link>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
