import { useState } from "react";
import { FiUser, FiEdit, FiSettings } from "react-icons/fi";
function App() {
  const [isOpen, setIsOpen] = useState(false);

   const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Adjust delay time as needed
  };
  return (
    <>
      <div className="w-full h-screen bg-black ">
        <div className="w-screen h-24 cursor-pointer bg-gray-900 flex items-center justify-between">
          <h1 className="text-2xl text-white px-2 mx-10">🧑‍💻 DevTinder</h1>
          <div className="relative inline-block">
            <img
              src="https://people.com/thmb/BrIPAgGFxFoqPjNsZAJV-pYxzf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(791x399:793x401)/elon-musk-interns-020325-c5d3c8c890cd472fb043c95552257117.jpg" 
              alt="Profile"
              className="w-18 h-18 mx-20 rounded-full cursor-pointer object-cover"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() =>  {
                setTimeout(()=>{
                  setIsOpen(false)
                },1000)
              }}
            />

            {isOpen && (
              <div
                className="absolute left-10 mt-2 w-40 bg-white border rounded-lg shadow-lg"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() =>  {
                  setTimeout(()=>{
                    setIsOpen(false)
                  },1000)
                }}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                    <FiUser /> Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                    <FiEdit /> Edit
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                    <FiSettings /> Settings
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
