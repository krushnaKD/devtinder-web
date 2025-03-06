import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removefromfedd } from "../utils/feedSlice";
const UserCard = ({ user }) => {
  const { _id, firstName, age, lastName, about, photoUrl, gender } = user;

  const dispatch = useDispatch();

  const fetchtheFeed = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removefromfedd(userId));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-72  rounded-2xl shadow-xl overflow-hidden">
        <img src={photoUrl} alt="photo" className="w-full h-3/4 object-cover" />
        <div className="p-4 ">
          <h2 className="text-xl font-bold ">
            {firstName}, {lastName}
          </h2>
          <h1 className="text-xl font-bold">{gender}</h1>

          <p className="text-xl font-bold text-start">{age}</p>
          <p className="text-lg font-medium text-start">{about}</p>
          <div className="flex justify-center gap-2 mt-5 text-white">
            <button
              onClick={() => fetchtheFeed("ignored", _id)}
              className="px-3 py-2 bg-blue-600 rounded-md"
            >
              ignore
            </button>
            <button
              onClick={() => fetchtheFeed("intrested", _id)}
              className="px-3 py-2 bg-pink-600 rounded-md"
            >
              Intrested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
