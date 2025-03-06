import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const Login = () => {
  const [emailID, setemailID] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [isloginform, setisloginform] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailID,
          password,
        },
        { withCredentials: true }
      );

      dispatch(adduser(res.data));

      navigate("/");
    } catch (error) {
      setError(error.response.data || "something went Wrong")
      // console.log(error);
    }
  };

  const handleSignUp = async ()=> {
   try {
     const res = await axios.post(BASE_URL + "/signUp",{
      firstName,
      lastName,
      emailID,
      password
     },{withCredentials:true})
     dispatch(adduser(res.data.data))
     navigate("/profile")
   } catch (error) {
     console.log(error.message)
   }y
  }

  return (
    <div className="flex items-center justify-center my-10">
      <div className=" flex flex-col gap-2 bg-gray-700 text-white p-10 rounded-md">
        <h2 className="text-center">{isloginform? 'Login' : 'Sign Up'}</h2>
       {!isloginform && 
        <>
       FirstName: <input
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          placeholder="Enter firstName"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        />
       LastName: <input
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          value={lastName}
          type="text"
          placeholder="enter LastName"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        /> </>}
       EmailID: <input
          onChange={(e) => {
            setemailID(e.target.value);
          }}
          value={emailID}
          type="text"
          placeholder="enter emailid"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        />
        Password: <input
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
          type="text"
          placeholder="enter password"
          className="outline-none border-[1px] px-3 py-2 rounded-3xl"
        />
        <p className="text-red-500 text-xl">{error}</p>
        <button
          onClick={isloginform? handlelogin : handleSignUp}
          className="text-xl px-4 py-2 text-center bg-amber-600 rounded-2xl"
        >
          {isloginform ? 'LogIn' : 'Sign Up'}
        </button>
        <p
         onClick={()=>setisloginform(!isloginform)} 
         className="text-blue-300 mt-5 text-end cursor-pointer">{isloginform? "SignUp Form Here" : "Login Form is Here"}</p>
      </div>
    </div>
  );
};

export default Login;
