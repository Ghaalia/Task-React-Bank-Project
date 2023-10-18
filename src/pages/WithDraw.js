import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { putWithdraw } from "../api/profile";

const Deposit = () => {
  const [isInput, setIsInput] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const { mutate: withdraw_mutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => putWithdraw(withdrawAmount),
    onSuccess: () => {
      setWithdrawAmount(0);
      alert(`You have successfully withdraw ${withdrawAmount} K.D.`);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-10">
          <div className=" relative flex flex-col justify-center items-center h-[100%] w-[70%]">
            <div className="flex flex-col items-center justify-center gap-20 border border-solid h-[90%] w-[100%]  border-gray-500 border-opacity-20 shadow-lg shadow-green-600 rounded-md ">
              <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="text-white text-2xl font-mono font-thin">
                  Amount To Withdraw :
                </h1>
                <div className="flex justify-center gap-[10px]">
                  {isInput ? (
                    <input
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      type="number"
                      className="text-white text-sm border border-solid bg-gray-800  border-gray-500 border-opacity-20 rounded-full px-2 py-0 w-[100px]"
                      placeholder="Amount"
                    />
                  ) : (
                    <h1 className="text-white text-2xl border border-solid  border-gray-500 border-opacity-20 rounded-full px-8 py-0 mr-2">
                      {withdrawAmount}
                    </h1>
                  )}
                  <h1 className="text-white text-l"> K.D.</h1>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center text-white">
                  <button
                    onClick={() => {
                      setWithdrawAmount(100);
                      setIsInput(false);
                    }}
                    className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10"
                  >
                    100 K.D
                  </button>
                  <button
                    onClick={() => {
                      setWithdrawAmount(150);
                      setIsInput(false);
                    }}
                    className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10"
                  >
                    150 K.D
                  </button>
                  <button
                    onClick={() => {
                      setWithdrawAmount(200);
                      setIsInput(false);
                    }}
                    className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10"
                  >
                    200 K.D
                  </button>
                  <button
                    onClick={() => setIsInput(true)}
                    className="border border-white border-solid hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mr-10"
                  >
                    Custom Amount
                  </button>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={withdraw_mutate}
                    className=" text-white border border-white border-solid hover:bg-gray-700  hover:text-red-600 rounded-md px-3 py-2 w-[300px]"
                  >
                    - WithDraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col justify-start gap-3 w-[100%] h-[50%]">
          <h1 className="text-2xl ">Deposit Transactions</h1>

          <div className="flex justify-center">
            <table>
              <tr>
                <td>id</td>
                <td>Status</td>
                <td>Amount</td>
                <td>Balance</td>
              </tr>
              <tr>
                <td>asdfy89olkmnbvcxza34</td>
                <td>Success</td>
                <td>50 K.D.</td>
                <td>160 K.D.</td>
              </tr>
              <tr>
                <td>123edcvbhu7654wx9uy</td>
                <td>Success</td>
                <td>10 K.D.</td>
                <td>110 K.D.</td>
              </tr>
              <tr>
                <td>zx23cvbh098nbr67iokjhj</td>
                <td>Canceled</td>
                <td>10 K.D.</td>
                <td>110 K.D.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
