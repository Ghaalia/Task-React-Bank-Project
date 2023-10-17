import React from "react";

const NavBar = () => {
  return (
    <div className="bg-gray-800 h-20 shadow-2xl shadow-green-800 flex justify-between items-center mb-10">
      <h1 className=" text-white ml-10">Hello, UserName</h1>
      <button className="  text-white hover:bg-gray-700 hover:text-red-600 rounded-md px-3 py-2 mr-10">
        Logout
      </button>
    </div>
  );    
};

export default NavBar;
