import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handelLogin = () => {
    setUser(true);
    navigate("/homepage");
  };
  return (
    <div className="flex justify-center h-screen">
      <div className="  w-[100%] h-[100%] flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-20 border border-solid h-[70%] w-[60%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md ">
          <div className="flex flex-col justify-center items-center gap-6 w-full">
            <h3 className="text-[40px] font-bold text-white">Register</h3>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className="block text-white text-lg font-small">
                Username:
              </label>
              <input
                className="w-[250px] px-3 py-1 ml-1"
                placeholder=""
                type="text"
              ></input>
            </div>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className="block text-white text-lg font-small items-start">
                Password:
              </label>
              <input
                className="w-[250px] px-3 py-1 ml-2"
                placeholder=""
                type="password"
              ></input>
            </div>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className=" flex aliblock text-white text-lg font-small">
                Confirmation:{" "}
              </label>
              <input
                className="w-[250px] px-3 py-1"
                placeholder=""
                type="password"
              ></input>
            </div>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className="block text-white text-lg font-small">
                Image:
              </label>
              <input placeholder="" type="file" className="w-[250px] "></input>
            </div>

            <div>
              <button
                onClick={handelLogin}
                className="border border-white border-solid text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
