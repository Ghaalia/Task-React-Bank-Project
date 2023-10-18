import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col  h-screen ">
      <div className="w-[90%] h-[100%] justify-center items-center">
        <div className="h-[50%] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 border border-solid h-[40%] w-[50%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md ">
            <h1 className="text-white text-2xl font-mono font-thin">
              Balance :
            </h1>
            <div className="flex justify-center">
              <h1 className="text-white text-2xl border border-solid  border-gray-500 border-opacity-20 rounded-full px-8 py-0 mr-2">
                0.00
              </h1>
              <h1 className="text-white text-l"> K.D.</h1>
            </div>
          </div>
        </div>

        {/*  buttons >>  Deposit , Withdraw, transaction , ... */}
        <div className=" relative flex flex-col justify-evenly items-center text-white h-[80%] w-[100%]">
          <div className="flex justify-evenly items-centerh-[80%]  h-[500px] w-[100%]">
            <div
              onClick={() => navigate("/deposit")}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center border border-solid h-[70%] w-[30%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md "
            >
              <svg
                className="h-[40%] w-[40%]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.25 6H9C7.11438 6 6.17157 6 5.58579 6.58579C5 7.17157 5 8.11438 5 10L5.00005 16.25H18.9999L19 10C19 8.11438 19 7.17157 18.4142 6.58579C17.8284 6 16.8856 6 15 6H12.75V10.9726L13.4306 10.1786C13.7001 9.86408 14.1736 9.82766 14.4881 10.0972C14.8026 10.3668 14.839 10.8403 14.5695 11.1548L12.5695 13.4881C12.427 13.6543 12.219 13.75 12 13.75C11.7811 13.75 11.5731 13.6543 11.4306 13.4881L9.43057 11.1548C9.161 10.8403 9.19743 10.3668 9.51192 10.0972C9.82641 9.82766 10.2999 9.86408 10.5695 10.1786L11.25 10.9726V6Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.0306 17.75H18.9694C18.9181 18.5406 18.781 19.0474 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5.21898 19.0474 5.08186 18.5406 5.0306 17.75Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.88889 3H18.1111C20.2589 3 22 4.79998 22 7.02036C22 8.30971 21.4129 9.45731 20.5 10.193L20.5 9.91053C20.5001 9.0449 20.5002 8.25122 20.4134 7.6056C20.3178 6.89464 20.0929 6.14319 19.4748 5.52514C18.8568 4.90709 18.1054 4.6822 17.3944 4.58661C16.7488 4.49981 15.9551 4.4999 15.0895 4.50001H8.91048C8.04485 4.4999 7.25118 4.49981 6.60556 4.58661C5.8946 4.6822 5.14315 4.90709 4.5251 5.52514C3.90706 6.14319 3.68216 6.89464 3.58657 7.6056C3.49977 8.25122 3.49987 9.04488 3.49997 9.91052L3.49998 10.193C2.58709 9.45727 2 8.30969 2 7.02036C2 4.79998 3.74112 3 5.88889 3Z"
                    fill="#1ba157"
                  ></path>
                </g>
              </svg>

              <NavLink
                to="/deposit"
                className=" border border-white border-solid hover:bg-green-600 rounded-md px-5 py-2"
              >
                + Deposit
              </NavLink>
            </div>

            <div
              onClick={() => navigate("/deposit")}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center border border-solid h-[70%] w-[30%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md "
            >
              <svg
                className="h-[40%] w-[40%]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.25 6H9C7.11438 6 6.17157 6 5.58579 6.58579C5 7.17157 5 8.11438 5 10L5.00005 16.25H18.9999L19 10C19 8.11438 19 7.17157 18.4142 6.58579C17.8284 6 16.8856 6 15 6H12.75V10.9726L13.4306 10.1786C13.7001 9.86408 14.1736 9.82766 14.4881 10.0972C14.8026 10.3668 14.839 10.8403 14.5695 11.1548L12.5695 13.4881C12.427 13.6543 12.219 13.75 12 13.75C11.7811 13.75 11.5731 13.6543 11.4306 13.4881L9.43057 11.1548C9.161 10.8403 9.19743 10.3668 9.51192 10.0972C9.82641 9.82766 10.2999 9.86408 10.5695 10.1786L11.25 10.9726V6Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.0306 17.75H18.9694C18.9181 18.5406 18.781 19.0474 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5.21898 19.0474 5.08186 18.5406 5.0306 17.75Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.88889 3H18.1111C20.2589 3 22 4.79998 22 7.02036C22 8.30971 21.4129 9.45731 20.5 10.193L20.5 9.91053C20.5001 9.0449 20.5002 8.25122 20.4134 7.6056C20.3178 6.89464 20.0929 6.14319 19.4748 5.52514C18.8568 4.90709 18.1054 4.6822 17.3944 4.58661C16.7488 4.49981 15.9551 4.4999 15.0895 4.50001H8.91048C8.04485 4.4999 7.25118 4.49981 6.60556 4.58661C5.8946 4.6822 5.14315 4.90709 4.5251 5.52514C3.90706 6.14319 3.68216 6.89464 3.58657 7.6056C3.49977 8.25122 3.49987 9.04488 3.49997 9.91052L3.49998 10.193C2.58709 9.45727 2 8.30969 2 7.02036C2 4.79998 3.74112 3 5.88889 3Z"
                    fill="#1ba157"
                  ></path>
                </g>
              </svg>

              <NavLink
                to="/deposit"
                className=" border border-white border-solid hover:bg-red-600 rounded-md px-5 py-2"
              >
                - WithDraw
              </NavLink>
            </div>
          </div>
          <div className="flex justify-evenly items-centerh-[80%]  h-[500px] w-[100%]">
            <div
              onClick={() => navigate("/transfer")}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center border border-solid h-[70%] w-[30%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md "
            >
              <svg
                className="h-[40%] w-[40%]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.25 6H9C7.11438 6 6.17157 6 5.58579 6.58579C5 7.17157 5 8.11438 5 10L5.00005 16.25H18.9999L19 10C19 8.11438 19 7.17157 18.4142 6.58579C17.8284 6 16.8856 6 15 6H12.75V10.9726L13.4306 10.1786C13.7001 9.86408 14.1736 9.82766 14.4881 10.0972C14.8026 10.3668 14.839 10.8403 14.5695 11.1548L12.5695 13.4881C12.427 13.6543 12.219 13.75 12 13.75C11.7811 13.75 11.5731 13.6543 11.4306 13.4881L9.43057 11.1548C9.161 10.8403 9.19743 10.3668 9.51192 10.0972C9.82641 9.82766 10.2999 9.86408 10.5695 10.1786L11.25 10.9726V6Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.0306 17.75H18.9694C18.9181 18.5406 18.781 19.0474 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5.21898 19.0474 5.08186 18.5406 5.0306 17.75Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.88889 3H18.1111C20.2589 3 22 4.79998 22 7.02036C22 8.30971 21.4129 9.45731 20.5 10.193L20.5 9.91053C20.5001 9.0449 20.5002 8.25122 20.4134 7.6056C20.3178 6.89464 20.0929 6.14319 19.4748 5.52514C18.8568 4.90709 18.1054 4.6822 17.3944 4.58661C16.7488 4.49981 15.9551 4.4999 15.0895 4.50001H8.91048C8.04485 4.4999 7.25118 4.49981 6.60556 4.58661C5.8946 4.6822 5.14315 4.90709 4.5251 5.52514C3.90706 6.14319 3.68216 6.89464 3.58657 7.6056C3.49977 8.25122 3.49987 9.04488 3.49997 9.91052L3.49998 10.193C2.58709 9.45727 2 8.30969 2 7.02036C2 4.79998 3.74112 3 5.88889 3Z"
                    fill="#1ba157"
                  ></path>
                </g>
              </svg>

              <NavLink
                to="/transfer"
                className=" border border-white border-solid hover:bg-gray-700 rounded-md px-5 py-2"
              >
                Transfer
              </NavLink>
            </div>

            <div
              onClick={() => navigate("/Transactions")}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center border border-solid h-[70%] w-[30%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md "
            >
              <svg
                className="h-[40%] w-[40%]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.25 6H9C7.11438 6 6.17157 6 5.58579 6.58579C5 7.17157 5 8.11438 5 10L5.00005 16.25H18.9999L19 10C19 8.11438 19 7.17157 18.4142 6.58579C17.8284 6 16.8856 6 15 6H12.75V10.9726L13.4306 10.1786C13.7001 9.86408 14.1736 9.82766 14.4881 10.0972C14.8026 10.3668 14.839 10.8403 14.5695 11.1548L12.5695 13.4881C12.427 13.6543 12.219 13.75 12 13.75C11.7811 13.75 11.5731 13.6543 11.4306 13.4881L9.43057 11.1548C9.161 10.8403 9.19743 10.3668 9.51192 10.0972C9.82641 9.82766 10.2999 9.86408 10.5695 10.1786L11.25 10.9726V6Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.0306 17.75H18.9694C18.9181 18.5406 18.781 19.0474 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5.21898 19.0474 5.08186 18.5406 5.0306 17.75Z"
                    fill="#1ba157"
                  ></path>{" "}
                  <path
                    d="M5.88889 3H18.1111C20.2589 3 22 4.79998 22 7.02036C22 8.30971 21.4129 9.45731 20.5 10.193L20.5 9.91053C20.5001 9.0449 20.5002 8.25122 20.4134 7.6056C20.3178 6.89464 20.0929 6.14319 19.4748 5.52514C18.8568 4.90709 18.1054 4.6822 17.3944 4.58661C16.7488 4.49981 15.9551 4.4999 15.0895 4.50001H8.91048C8.04485 4.4999 7.25118 4.49981 6.60556 4.58661C5.8946 4.6822 5.14315 4.90709 4.5251 5.52514C3.90706 6.14319 3.68216 6.89464 3.58657 7.6056C3.49977 8.25122 3.49987 9.04488 3.49997 9.91052L3.49998 10.193C2.58709 9.45727 2 8.30969 2 7.02036C2 4.79998 3.74112 3 5.88889 3Z"
                    fill="#1ba157"
                  ></path>
                </g>
              </svg>

              <NavLink
                to="/transactions"
                className=" border border-white border-solid hover:bg-gray-700 rounded-md px-5 py-2"
              >
                Transactions
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
