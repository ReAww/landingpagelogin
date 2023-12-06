import React from "react";

export const LoginboxComponent = () => {
  return (
    <div className="mx-10 md:mx-[150px] lg:mx-[250px] my-5 sm:my-36 lg:my-20 shadow-[0_1px_30px_rgba(0,0,0,0.6)] bg-white rounded-2xl flex flex-row">
      <div
        className=" rounded-xl lg:rounded-l-2xl lg:w-[50%] w-[100%] sm:h-[100px] h-[100%] pt-12
       p-4 md:p-9 text-center bg-white md:shadow-none"
      >
        <h1 className="font-bold text-neutral-700 text-5xl mb-12">Login</h1>
        <div className=" flex flex-col mb-9">
          <p className="text-left font-semibold mx-6 text-neutral-700">
            Email address
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="your@gmail.com"
            className="mx-5 focus:outline-none focus:border-4 border-2 border-green-400 rounded-[11px]
              shadow-md p-2"
          />
        </div>
        <div className=" flex flex-col mb-2 ">
          <p className="text-left font-semibold mx-6 text-neutral-700">
            Passwordd
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Insert 6 character or more"
            className="mx-5 focus:outline-none focus:border-4 border-2 border-green-400 rounded-[11px]
              shadow-md p-2"
          />
        </div>
        <div className="flex flex-row ml-5 mb-[50px]">
          <input
            type="checkbox"
            name=""
            id=""
            className="mx-2 outline-4 cursor-pointer accent-green-400"
          />
          <p className="text-[12px] cursor-default text-neutral-700 font-semibold">
            Remember Me for 30 days
          </p>
        </div>
        <button
          className="m-2 px-8 hover:bg-green-400 text-xl shadow-md
          text-neutral-700 font-bold py-2 border-b-4 border-2 active:bg-green-600
          border-green-400 lg:float-right hover:border-green-500 rounded-xl"
        >
          Login
        </button>
      </div>
      <div
        className="invisible lg:visible bg-[rgba(86,255,144)] rounded-r-2xl w-0 h-[500px]
      lg:w-[50%] lg:p-4 shadow-xl md:shadow-none "
      >
        <div
          className="h-[80%] w-[66%] bg-[rgb(255,255,255,90)] shadow-md 
        rounded-xl m-12"
        >
          <img src="gambar2.png" alt="" className="overflow-clip ml-10 pt-16" />
        </div>
      </div>
    </div>
  );
};
