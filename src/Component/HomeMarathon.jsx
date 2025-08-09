import React, { useEffect, useState } from "react";
import useAxiousSecure from "./useAxiousSecure";
import MarathonCard from "./MarathonCard";
import DataNotfound from "./DataNotfound/DataNotfound";
import marathonbg from "../assets/marathon-img/bg-3.jpeg";
import marathonbg2 from "../assets/marathon-img/bg-43.jpeg";
import Skeleton from "./Skeleton/Skeleton";

const HomeMarathon = () => {
  const [limiteMarathon, setLimiteMarathon] = useState(null);
  const [loading , setLoading] = useState(true)
  const axiosInstance = useAxiousSecure();

  useEffect(() => {
    axiosInstance?.get("/limiteMarathon").then((res) => {
      setLimiteMarathon(res?.data);
      if(res?.data){
        setLoading(false)
      }
    });
  }, [axiosInstance]);
  if(loading) return <Skeleton></Skeleton>
  return (
    <div
      className="py-10 px-2 md:px-12 bg-cover bg-center "
      style={{ backgroundImage: `url(${marathonbg})` }}
    >
      {/* bg-gradient-to-bl from-[#827cf4] to-[#feeaea] */}
      <div className=" px-10 mx-auto py-5 opacity-100 rounded-lg shadow-xl" style={{backgroundImage:`url(${marathonbg2})`}} >
        {limiteMarathon?.length == 0 ? (
          <>
            <DataNotfound />
          </>
        ) : (
          <>
            <div>
              <div>
                <p className="text-xl xl:text-2xl text-[#403f3f] font-semibold">
                  Our Features
                </p>
                <h2 className="text-2xl text-[#403f3f] font-semibold   md:text-4xl 2xl:text-5xl ">
                 Program & Services
                </h2>
                <div className="grid grid-cols-6">
                  <p className="border-t-8 border-[#B6F500] my-2"></p>
                </div>
              </div>
              <div className="grid   py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {limiteMarathon?.map((marathon) => (
                  <MarathonCard
                    key={marathon._id}
                    marathon={marathon}
                  ></MarathonCard>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMarathon;
