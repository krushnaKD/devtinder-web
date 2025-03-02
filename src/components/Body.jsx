import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import { adduser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((store)=>store.user)

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(adduser(res.data));
    } catch (error) {
      if(error.status === 401){
        navigate("/login")
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
