import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants";

const Prmium = () => {
  const buyMemberShip = async (type) => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        {
          membershiType:type,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error.massage);
    }
  };

  return (
    <div className="w-full h-screen   bg-gray-800 p-10 text-white flex justify-center  gap-5">
      <div className="w-[40%] h-[40%] bg-gray-900 rounded-md p-5 text-center    ">
        <h1 className="text-xl font-bold ">Silver Membership</h1>
        <ul className="mt-5 text-start">
          <li>- chat options available</li>
          <li className="">- 3 Months</li>
          <li>- Blue tick available ✔️ </li>
        </ul>
        <button
          onClick={() => buyMemberShip("Silver")}
          className="text-black font-semibold bg-gray-300 rounded-lg px-2 py-2 mt-5"
        >
          🩶 Buy Silver
        </button>
      </div>

      <div className="w-[40%] h-[40%] bg-gray-900 rounded-md text-center">
        <h1 className="text-xl font-bold ">Gold Membership</h1>
        <ul className="mt-5 text-start">
          <li>- chat options available</li>
          <li className="">- 6 Months</li>
          <li>- infinite Connections</li>
          <li>- Blue tick available ✔️ </li>
        </ul>
        <button
          onClick={() => buyMemberShip("Gold")}
          className="text-black font-semibold bg-gray-300 rounded-lg px-2 py-2 mt-5"
        >
          🪙 Buy Gold
        </button>
      </div>
    </div>
  );
};

export default Prmium;
