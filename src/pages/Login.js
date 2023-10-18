import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: login_muate, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      navigate("/homepage");
      setUser(true);
    },
  });

  return (
    <div className="flex justify-center h-screen ">
      <div className=" flex flex-col w-[100%] h-[100%] justify-center items-center gap-5">
        <div className="flex flex-col items-center justify-center gap-20 border border-solid h-[50%] w-[50%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md ">
          <div className="flex flex-col justify-center items-center gap-6">
            <h3 className="text-[50px] text-white font-bold">Login</h3>
            <div>
              <label className="block text-white text-lg font-small ">
                Username: {"  "}
                <input
                  name="username"
                  className="text-gray-600"
                  onChange={handleChange}
                  placeholder=""
                  type="text"
                ></input>
              </label>
            </div>

            <div className=" w-[500px] flex justify-center flex-col">
              <div>
                <label className="block text-white font-small text-lg">
                  Password:{"    "}
                  <input
                    name="password"
                    className="text-gray-600"
                    onChange={handleChange}
                    placeholder=""
                    type="password"
                  ></input>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={login_muate}
                  className=" border border-white text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 mt-3"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
