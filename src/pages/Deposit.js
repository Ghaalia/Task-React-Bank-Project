import React from "react";

const Deposit = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl"> Amount to deposit: </h1>
        <h1 className="text-white text-2xl"> 0.00 K.D.</h1>
      </div>
      <div className="flex justify-center text-white">
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-green-600 rounded-full px-3 py-2 mr-10">
          100 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-green-600 rounded-full px-3 py-2 mr-10">
          150 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-green-600 rounded-full px-3 py-2 mr-10">
          200 K.D
        </button>
        <button className="border border-white border-solid hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 mr-10">
          {" "}
          + Custom Amount{" "}
        </button>
      </div>
    </div>
  );
};

export default Deposit;
