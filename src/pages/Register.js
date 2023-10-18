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
    <div className="flex justify-center">
      <div className="  w-[500px] flex flex-col ">
        <h3 className="text-3xl text-white mb-3">Register</h3>
        <div className="flex flex-col justify-center">
          <div>
            <label className="block text-white text-sm font-small mb-3">
              Username: <input placeholder="" type="text"></input>
            </label>
          </div>

          <div>
            <label className="block text-white text-sm font-small mb-3">
              Password: <input placeholder="" type="password"></input>
            </label>
          </div>

          <div>
            <label className="block text-white text-sm font-small">
              Confirmation: <input placeholder="" type="password"></input>
            </label>
          </div>
          <div>
            <label className="block text-white text-sm font-small">
              Image: <input placeholder="" type="file"></input>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handelLogin}
            className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 mr-10 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
