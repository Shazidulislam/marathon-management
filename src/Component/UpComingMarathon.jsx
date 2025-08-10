import axios from "axios";
import React, { useEffect, useState } from "react";
import UpComingMarathonCard from "./UpComingMarathonCard";
import marathonbg from "../assets/marathon-img/upComingMarathon.jpeg";
import Skeleton from "./Skeleton/CardSkeleton";

const UpComingMarathon = () => {
  const [marathonData, setMarathonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${import.meta.env.VITE_MARATHON_url}/upComingMarathon`).then(
      (res) => {
        setMarathonData(res.data);
        if (res?.data) {
          setLoading(false);
        }
      }
    );
  }, []);

  return (
    <div className="py-10   " style={{ backgroundImage: `url(${marathonbg})` }}>
      <div className="flex flex-col justify-center text-[#403f3f] items-center">
        <p className="text-xl font-semibold">Events</p>
        <h1 className=" text-2xl md:text-4xl lg:text-5xl pb-5 font-bold  ">
          Upcoming Marathons
        </h1>
      </div>
      <div className="px-4 md:px-12 mx-auto pt-10 space-y-4 w-full">
        {marathonData?.map((marathon) => (
          <UpComingMarathonCard
            key={marathon._id}
            marathon={marathon}
            loading={loading}
          ></UpComingMarathonCard>
        ))}
      </div>
    </div>
  );
};

export default UpComingMarathon;
