import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const Login = () => {

  const [emailID, setemailID] = useState("trump@gmail.com");
  const [password, setpassword] = useState("Trump@123");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async () =>{
   try {
     const res = await axios.post( BASE_URL+"/login",{
      emailID,
      password
     },{withCredentials:true})

     
     dispatch(adduser(res.data))

     navigate("/")

   } catch (error) {
     console.log(error);
     
   }
    
  }

  


  return (
    <div className="flex items-center justify-center my-10">
      <div className=" flex flex-col gap-2 bg-gray-700 text-white p-10 rounded-md">
        <h2 className="text-center">Login</h2>
        <input 
        onChange={(e)=>{
          setemailID(e.target.value)
        }} 
        value={emailID}
          type="text"
          placeholder="enter emailid"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        />
        <input
           onChange={(e)=>{
            setpassword(e.target.value)
          }} 
          value={password}
          type="text"
          placeholder="enter password"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        />
        <button 
         onClick={handlelogin}
        className="text-xl px-4 py-2 text-center bg-amber-600 rounded-2xl">
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Login;
