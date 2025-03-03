import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";

const EditProfile = ({ data }) => {
  const [firstName, setfirstName] = useState(data.firstName);
  const [lastName, setlastName] = useState(data.lastName);
  const [photoUrl, setphotoUrl] = useState(data.photoUrl);
  const [age, setage] = useState(data.age);
  const [gender, setgender] = useState(data.gender);
  const [about, setabout] = useState(data.about);
  const [error, seterror] = useState("");

  const dispatch = useDispatch();

  const edituser = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          about,
          photoUrl,
          gender,
        },
        { withCredentials: true }
      );
      dispatch(adduser(res?.data?.data))
      alert("profile Updated Succesflly")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center my-10 gap-2">
      <div className="flex items-center justify-center ">
        <div className=" flex flex-col gap-5 bg-gray-700 text-white p-10 rounded-md">
          <h2 className="text-center">Login</h2>
          <input
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            placeholder="enter emailid"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <input
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            value={lastName}
            type="text"
            placeholder="enter password"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <input
            onChange={(e) => {
              setphotoUrl(e.target.value);
            }}
            value={photoUrl}
            type="text"
            placeholder="PhotoUrl"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <input
            onChange={(e) => {
              setage(e.target.value);
            }}
            value={age}
            type="text"
            placeholder="Enter the Age"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <input
            onChange={(e) => {
              setgender(e.target.value);
            }}
            value={gender}
            type="text"
            placeholder="Enter the gender"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <input
            onChange={(e) => {
              setabout(e.target.value);
            }}
            value={about}
            type="text"
            placeholder="about"
            className="outline-none border-[1px] px-3 py-2 rounded-xl"
          />
          <button
            onClick={edituser}
            className="text-xl px-4 py-2 text-center bg-amber-600 rounded-2xl"
          >
            Save Changes
          </button>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, about, photoUrl, gender }} />
    </div>
  );
};

export default EditProfile;
