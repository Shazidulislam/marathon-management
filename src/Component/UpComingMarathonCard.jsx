import React from "react";
import { Link } from "react-router";
import CardSkeleton from "./Skeleton/CardSkeleton";
import { toast } from "react-toastify";

const UpComingMarathonCard = ({ marathon , loading}) => {
  const {
    image,
    _id,
    title,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
    distance,
    description,
    location,
  } = marathon || {};
  const handleBtn=()=>{
    toast.success("The marathon hasn’t started yet. Get ready—it’s coming soon!")
  }

  if(loading) return <CardSkeleton/>
  return (

      <div className="flex flex-col md:w-10/12 lg:w-full mx-auto lg:flex-row">
        <figure>
          <img src={image} className="h-72 w-full lg:w-auto rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" alt="" />
        </figure>
        <div className=" flex-1 lg:w-full flex flex-col bg-cover bg-no-repeat bg-center lg:flex-row justify-between lg:h-72 bg-black/55 pl-4 py-6 lg:rounded-r-xl">
          <div className="w-full space-y-2">
            <h2 className="text-2xl  text-lime-400 font-bold">{title}</h2>
          <p className=" text-sm font-semibold">{description}</p>
          <p>
            <span className="font-bold ">Date : </span>
            <span className=" font-semibold">{marathonStartDate}</span>
          </p>
          <p>
            <span className="font-bold">Location : </span>
            <span className=" font-semibold">{location}</span>
          </p>
          <p>
            <span className="font-bold">Distance : </span>
            <span className=" font-semibold">{distance}</span>
          </p>
          <p>
            <span className="font-bold ">Registration : </span>
            <span className=" font-semibold">
              {startRegistrationDate} - {endRegistrationDate}
            </span>
          </p>
          </div>
           <div className="divider divider-horizontal before:bg-lime-400 after:bg-lime-400" ></div>
        <div className="pr-4 space-y-4 pb-4 lg:pb-0 ">
           <h2 className="text-xl text-lime-400">Ticket</h2>
           <p>The upcoming marathon is almost here! Registration opens on {startRegistrationDate} and closes on {endRegistrationDate}. Mark your calendar—the race kicks off on {marathonStartDate}. Don’t miss this epic chance to challenge yourself, meet fellow runners, and make unforgettable memories. Lace up and get ready to crush it!</p>
           <p ><span className="text-4xl">$30</span> <span>/price</span> </p>
           <button onClick={()=>{
            handleBtn()
           }} className="px-6 py-2 bg-black/45 shadow rounded cursor-pointer justify-end" >Deatils</button>
        </div>
        </div>
      </div>
  );
};

export default UpComingMarathonCard;
