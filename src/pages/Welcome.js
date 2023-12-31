import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Welcome = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/homepage");
  }

  return (
    <div className="flex items-center justify-center flex-col  h-screen ">
      <div className="border border-solid border-gray-500 border-opacity-20 shadow-lg shadow-green-600  w-[50%] h-[60%] flex justify-center items-center flex-col">
        <div className="flex flex-col gap-6 h-[50%] w-[100%] justify-center items-center">
          <h1 className=" text-white text-5xl font-mono">Prosperity Bank</h1>
          <p className=" text-white text-l font-serif">
            Unlock Your Financial Potential - Banking Made Simple !
          </p>
        </div>

        <div className=" flex flex-col gap-5 h-[50%] w-[100%] justify-center items-center">
          <NavLink
            to="/login"
            className="border border-white border-solid text-white hover:bg-gray-700 rounded-md px-20 py-2 mr-10 "
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="border border-white border-solid text-white hover:bg-gray-700 rounded-md px-20 py-2 mr-10 "
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
