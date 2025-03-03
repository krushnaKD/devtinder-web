import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest, showrequest } from "../utils/requestSlice";

const Requests = () => {
  const data = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/receive", {
        withCredentials: true,
      });
      dispatch(showrequest(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const addtheRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/receive/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!data) return;

  if (data.length === 0)
    return (
      <h1 className="text-center text-3xl font-semibold my-10 ">
        No Requests 😔
      </h1>
    );

  return (
    <div className=" flex flex-col items-center my-10">
      <h2 className="text-2xl mb-5 font-semibold">Connection</h2>
      <div className=" flex gap-5 items-center justify-center w-full h-80">
        {data.map((R) => (
          <div
            key={R._id}
            className="w-1/3 h-34 flex  bg-gray-800 text-white rounded-md overflow-hidden shadow-2xl"
          >
            <img
              className=" w-32 rounded-full mx-5 object-cover "
              src={R.fromuserID.photoUrl}
              alt="photo"
            />
            <h1 className="mt-2 px-2">
              {R.fromuserID.firstName + " " + R.fromuserID.lastName}
            </h1>
            <div className="w-22 mx-5 flex flex-col gap-5 mt-5 ">
              <button
                onClick={() => {
                  addtheRequest("rejected", R._id);
                }}
                className="px-3 py-2 bg-red-600 rounded-md"
              >
                Ignore
              </button>
              <button
                onClick={() => {
                  addtheRequest("accepted", R._id);
                }}
                className="px-3 py-2 bg-pink-600 rounded-md"
              >
                Intrested
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
