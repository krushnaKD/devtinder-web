import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  const { firstName, age, lastName, about, photoUrl } = user;
  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-72 h-1/2  rounded-2xl shadow-xl overflow-hidden">
        <img src={photoUrl} alt="photo" className="w-full h-3/4 object-cover" />
        <div className="p-4 ">
          <h2 className="text-xl font-bold text-center">
            {firstName}, {age}
          </h2>
          <div className="flex justify-center gap-2 mt-5 text-white">
            <button className="px-3 py-2 bg-blue-600 rounded-md">ignore</button>
            <button className="px-3 py-2 bg-blue-600 rounded-md">
              Intrested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
