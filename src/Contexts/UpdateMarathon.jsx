import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAxiousSecure from "../Component/useAxiousSecure";
import { useParams } from "react-router";

const UpdateMarathon = () => {
  const { id } = useParams();
  const [singleData, aetSingleData] = useState({});
  const [startRegistionDate, setStartRegistionDate] = useState(new Date());
  const [endRegistionDate, setEndRegistionDate] = useState(new Date());
  const [startMarathonData, setStartMarathonData] = useState(new Date());

  const axiosInstance = useAxiousSecure();

  useEffect(() => {
    axiosInstance.get(`/board/mymarathon/${id}`).then((res) => {
      aetSingleData(res?.data);
    });
  }, [id, axiosInstance]);

  const {
    image,
    description,
    marathon_title,
    startRegistion,
    endRegistion,
    distence,
    location,
    _id,
    startMarathon,
  } = singleData || {};

  const handleUpdateMarathon = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateMarathonData = Object.fromEntries(formData.entries());

    //update the marathon
    axios
      .patch(
        `${import.meta.env.VITE_MARATHON_url}/myMarathonModal/${_id}`,
        updateMarathonData
      )
      .then((res) => {
        if (res?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Marathon UpdateSuccessfully successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="px-2 md:px-12 py-10 " >
      <form onSubmit={handleUpdateMarathon}>
        <h2 className="text-3xl text-center pt-10 font-bold ">
          Update Marathon
        </h2>
        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">Marathon Title</label>
          <input
            type="text"
            defaultValue={marathon_title}
            required
            name="marathon_title"
            className="px-6 py-3 bg-black/30 shadow shadow-lime-50 outline-none  rounded  w-full "
            placeholder="Enter a marathon title"
          />
        </fieldset>
        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">
            Start Registration Date{" "}
          </label>
          <DatePicker
            required
            defaultValue={startRegistion}
            selected={startRegistionDate}
            dateFormat="yyyy-MM-dd"
            name="startRegistion"
            className="px-6 py-3 bg-black/30 text-white shadow shadow-lime-50 outline-none  rounded  w-full"
            onChange={(date) => setStartRegistionDate(date)}
          />
        </fieldset>

        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">
            End Registration Date{" "}
          </label>
          <DatePicker
            required
            defaultValue={endRegistion}
            name="endRegistion"
            selected={endRegistionDate}
            dateFormat="yyyy-MM-dd"
            className="px-6 py-3 bg-black/30 shadow shadow-lime-50 outline-none  rounded  w-full"
            onChange={(date) => setEndRegistionDate(date)}
          />
        </fieldset>
        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">
            Start Marathon Date{" "}
          </label>
          <DatePicker
            required
            name="startMarathon"
            defaultValue={startMarathon}
            selected={startMarathonData}
            dateFormat="yyyy-MM-dd"
            className="px-6 py-3 bg-black/30 shadow shadow-lime-50 outline-none  rounded  w-full"
            onChange={(date) => setStartMarathonData(date)}
          />
        </fieldset>

        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">Location</label>
          <input
            type="text"
            required
            defaultValue={location}
            name="location"
            className="px-6 py-3 bg-black/30 shadow shadow-lime-50 outline-none  rounded  w-full "
            placeholder="Enter a marathon title"
          />
        </fieldset>

        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">Distence</label>
          <select
            required
            defaultValue={distence}
            name="distence"
            className="py-3 px-6  rounded  outline-none border-none  w-full  shadow shadow-lime-50"
          >
            <option className="bg-black/55 text-white" disabled={false}>select marathon distence</option>
            <option className="bg-black/55 text-white">5km</option>
            <option className="bg-black/55 text-white">10km</option>
            <option className="bg-black/55 text-white">15km</option>
            <option className="bg-black/55 text-white">20km</option>
            <option className="bg-black/55 text-white">30km</option>
            <option className="bg-black/55 text-white">35km</option>
            <option className="bg-black/55 text-white">40km</option>
            <option className="bg-black/55 text-white">50km</option>
            <option className="bg-black/55 text-white">60km</option>
          </select>
        </fieldset>
        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">Description</label>

          <textarea
            className=" outline-none rounded  shadow shadow-lime-50"
            rows="6"
            required
            name="description"
            defaultValue={description}
            id=""
          ></textarea>
        </fieldset>
        <fieldset className="fieldset  rounded-box   p-4">
          <label className="label font-medium text-xm ">Marathon Image</label>
          <input
            type="url"
            required
            name="image"
            defaultValue={image}
            className="px-6 py-3 bg-black/30 shadow shadow-lime-50 outline-none  rounded  w-full "
            placeholder="Enter a marathon title"
          />
        </fieldset>
        <fieldset className="fieldset  rounded-box   p-4">
          <button
            type="submit"
            className="w-full py-3 text-lg bg-black/10 shadow shadow-lime-100 rounded font-bold"
          >
            Update Marathon
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateMarathon;
