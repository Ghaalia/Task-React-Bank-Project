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
      <div
        id="main_container"
        class="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter"
      >
        <h1 class="title text-6xl font-black text-teal-500">WELCOME</h1>
        <h2 class="cursive text-6xl font-thin text-fuchsia-600">to our bank</h2>
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
