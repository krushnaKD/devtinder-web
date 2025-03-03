import axios from "axios";
import { useState } from "react";
import { FiUser, FiEdit, FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { removeUser } from "../utils/userSlice";
import { GiThreeFriends } from "react-icons/gi";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const logOutfunc = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser())
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-screen h-24 cursor-pointer bg-gray-900 flex items-center justify-between">
      <Link to="/" className="text-2xl text-white px-2 mx-10">
        🧑‍💻 DevTinder
      </Link>
      <div className="relative inline-block">
        <img
          src={
            user === null
              ? "https://people.com/thmb/BrIPAgGFxFoqPjNsZAJV-pYxzf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(791x399:793x401)/elon-musk-interns-020325-c5d3c8c890cd472fb043c95552257117.jpg"
              : user.photoUrl
          }
          alt="Profile"
          className="w-18 h-18 mx-20 rounded-full cursor-pointer object-cover"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 1000);
          }}
        />

        {isOpen && (
          <div
            className="absolute left-10 mt-2 w-40 bg-white border rounded-lg shadow-lg"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 1000);
            }}
          >
            <ul className="py-2">
              <Link
                to="/Connections"
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
              >
                <FiUser />  Connections
              </Link>
              <Link to="/profile"  
              className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <FiEdit /> Profile
              </Link>
              <Link
              to="/requests"
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
              >
              <GiThreeFriends />   Request
              </Link>
              <Link
                onClick={logOutfunc}
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
              >
                <FiSettings /> LogOut
              </Link>
           
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
