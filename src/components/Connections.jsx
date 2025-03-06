import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { ShowConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const Connection = useSelector((store) => store.connection);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(ShowConnection(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!Connection) return;

  if (Connection.length === 0) return <div>No Connection</div>;

  return (
    <div className=" flex flex-col items-center my-10">
      <h2 className="text-2xl mb-5 font-semibold">Connection</h2>
      <div className=" flex gap-5 items-center justify-center w-full h-80">
        {Connection.map((con) => (
          <div className="w-48 h-72  bg-gray-800 text-white rounded-md overflow-hidden shadow-2xl">
            <img
              className="h-40 w-full object-cover "
              src={con.photoUrl}
              alt="photo"
            />
            <h1 className="mt-2 px-2">{con.firstName + " " + con.lastName}</h1>
            <h2 className="mt-1 px-2">{con.age}</h2>
            <p className="px-2 mt-2">{con.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
