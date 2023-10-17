import React from "react";

const Welcome = () => {
  return (
    <div>
      <div>
        <h1> WELCOME </h1>
        <h4> to our BANK</h4>
      </div>

      <div className="flex flex-row">
        <button className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 ">
          Login
        </button>
        <button className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Welcome;
