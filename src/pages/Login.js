import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-[500px] flex flex-col ">
        <h3 className="text-3xl text-white mb-3">Login</h3>
        <div>
          <label className="block text-white text-sm font-small mb-3">
            Username:{"    "}
            <input placeholder="" type="text"></input>
          </label>
        </div>

        <div>
          <label className="block text-white text-sm font-small mb-3">
            Password: <input placeholder="" type="password"></input>
          </label>
        </div>

        <div className="flex justify-end">
          <button className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
