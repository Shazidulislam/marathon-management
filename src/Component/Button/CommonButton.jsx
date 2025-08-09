import React from "react";
import marathonlogo2 from "../../assets/marathon-img/logo-2.jpeg"

const CommonButton = () => {
  return (
    <div className=" flex  justify-start pl-4 py-2 gap-1 items-end">
      <img className="w-12  rounded-2xl" src={marathonlogo2} alt="" />
      <h1 className="text-xl  font-bold text-[#fff]">Marathon Hub</h1>
    </div>
  );
};

export default CommonButton;
