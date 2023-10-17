import React from "react";

const WithDraw = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl"> Amount to WithDraw: </h1>
        <h1 className="text-white text-2xl"> 0.00 K.D.</h1>
      </div>
      <div className="flex justify-center text-white">
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10">
          100 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10">
          150 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-red-600 rounded-full px-3 py-2 mr-10">
          200 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mr-10">
          Custom Amount
        </button>
      </div>
      <div className="flex justify-center">
        <button className=" text-white border border-white border-solid hover:bg-gray-700  hover:text-red-600 rounded-md px-3 py-2 w-[300px]">
          - WithDraw
        </button>
      </div>
      <div className="text-white flex flex-col justify-center">
        <h1 className="text-2xl">WithDraw Transactions</h1>
        <div className="flex justify-center">
          <table>
            <tr>
              <td>Date</td>
              <td>Status</td>
              <td>Amount</td>
              <td>Balance</td>
            </tr>
            <tr>
              <td>Oct 17, 2023</td>
              <td>Success</td>
              <td>50 K.D.</td>
              <td>50 K.D.</td>
            </tr>
            <tr>
              <td>Oct 4, 2023</td>
              <td>Success</td>
              <td>10 K.D.</td>
              <td>100 K.D.</td>
            </tr>
            <tr>
              <td>Oct 4, 2023</td>
              <td>Canceled</td>
              <td>10 K.D.</td>
              <td>110 K.D.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithDraw;
