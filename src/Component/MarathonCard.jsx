import React from "react";
import { Link } from "react-router";

const MarathonCard = ({ marathon }) => {
  const { image, marathon_title, startRegistion, endRegistion, location, _id } =
    marathon || {};

  return (
    <div className="max-w-xs md:max-w-sm  bg-[#000] rounded-md shadow-md    overflow-hidden ">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="marathon img"
          className="object-cover transform transition-transform  duration-300 hover:scale-110 object-center w-full rounded-t-md h-48 "
        />
      </div>
      <div className="h-72  shadow-lg overflow-hidden bg-[#403f3f]">
  <div className="flex flex-col text-white py-6 px-3 space-y-8 h-full">
    <div className="space-y-2 flex-grow">
      <h2 className="text-2xl font-bold">{marathon_title}</h2>
      <p>
        <span className="font-bold">Location : </span>
        <span className="font-semibold">{location}</span>
      </p>
      <p>
        <span className="font-bold">Registration : </span>
        <span className="font-semibold">
          {startRegistion} - {endRegistion}
        </span>
      </p>
    </div>
    <div>
      <Link to={`/deatils/${_id}`}>
        <button
          type="button"
          className="w-full p-3 font-semibold tracking-wide rounded text-[#B6F500]"
        >
          See Marathon Details
        </button>
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default MarathonCard;

// // {
//     "_id": "6870eb2d64a96f2c2b571236",
//     "marathon_title": "New York City Marathon",
//     "startRegistion": "2025-07-11",
//     "endRegistion": "2025-08-08",
//     "startMarathon": "2025-09-04",
//     "location": "New York, USA",
//     "distence": "20km",
//     "description": "Run through the heart of Paris past world-famous landmarks like the Eiffel Tower, Notre Dame, and the Champs-Élysées. The Paris Marathon is one of Europe’s most scenic and romantic races. Whether you're chasing a personal best or soaking up the sights, this event delivers beauty, culture, and adrenaline in equal measure.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfgqluTWlu3vS-VmadV_uHGTOOebRYT4VSg&s",
//     "marathonCreateor": "shazidulislam910@gmail.com",
//     "createdAt": "2025-07-11T10:45:00.870Z",
//     "totalRegistrationCount": 3
// }
