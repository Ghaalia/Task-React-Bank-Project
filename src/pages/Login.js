import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md flex justify-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login in to your account
          </h2>
        </div>

        <div className=" w-[500px] flex justify-center flex-col">
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
    </div>
  );
};

export default Login;
