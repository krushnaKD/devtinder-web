import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants";
import { addfeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const user = useSelector((store) => store.user);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      })
       console.log(res);
       
      dispatch(addfeed(res.data.users));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
   if(!feed) return;

   if(feed.length <= 0) return <h1 className="text-center font-semibold text-3xl my-10">There is No User🤨</h1>

  return (
    feed && (
      <div className="">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
