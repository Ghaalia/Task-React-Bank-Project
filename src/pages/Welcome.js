import React from "react";

const Welcome = () => {
  return (
    <div className="">
      <div className="flex justify-center align-middle flex-col">
        <div className=" text-white text-[150px]"> WELCOME </div>
        <div className=" text-white text-[30px] flex justify-end  mr-[50px]">
          {" "}
          TO OUR BANK{" "}
        </div>
      </div>

      <div className="flex flex-row justify-center align-bottom">
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
