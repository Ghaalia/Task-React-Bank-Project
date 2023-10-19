import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: register_mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigate("/homepage");
      setUser(true);
    },
  });

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
                name="username"
                onChange={handleChange}
                className="w-[250px] px-3 py-1 ml-1 text-gray-600 rounded-md "
                placeholder=""
                type="text"
              ></input>
            </div>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className="block text-white text-lg font-small items-start">
                Password:
              </label>
              <input
                name="password"
                onChange={handleChange}
                className="w-[250px] px-3 py-1 ml-2 text-gray-600 rounded-md"
                placeholder=""
                type="password"
              ></input>
            </div>

            <div className="flex justify-between align-middle  w-[60%]">
              <label className="block text-white text-lg font-small">
                Image:
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="image"
                className="w-[250px] text-white"
              ></input>
            </div>

            <div>
              {isPending ? (
                <button
                  disabled
                  className="border border-white border-solid text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 "
                >
                  Loading...
                </button>
              ) : (
                <button
                  onClick={register_mutate}
                  className="border border-white border-solid text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 "
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
