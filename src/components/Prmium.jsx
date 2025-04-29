import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const Prmium = () => {


  const [isUserPremium, setisUserPremium] = useState(false);

  useEffect(()=>{
  verifyPremiumUser()
  },[])

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/premium/verify", {
        withCredentials: true,
      });

      if (res.data.isPremium) {
        setisUserPremium(true);
      }
    } catch (error) {
      console.log(error.massage);
    }
  };

  const buyMemberShip = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershiType: type,
      },
      {
        withCredentials: true,
      }
    );

    console.log(order);

    const { currency, amount, orderId, notes, keyId, emailId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "KD_01",
      description: "Connect to New People",
      order_id: orderId,

      prefill: {
        name: notes.firstName + "" + notes.lastName,
        email: emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return isUserPremium ? (
    "Your alerdy a premium User"
  ) : (
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
