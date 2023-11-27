import React from "react";

export default function App() {
  return (
    
    

    <div className="container px-6 max-w-md mx-auto sm:max-w-xl bg-white flex flex-row justify-center">
      <div className=" bg-white [background:linear-gradient(0deg,rgb(255,255,255)_50%,rgb(86.06,255,143.5)_50%)] w-[1920px] h-[1080px]">
        <img
          className="absolute px-6 max-w-md mx-auto sm:max-w-xl"
          alt="Gambar hiasan"
          src="gambar.svg"
        />
        <div className="absolute flex flex-row w-[1214px] h-[770px] top-[155px] 
        left-[362px] bg-white rounded-[38px] shadow-[0px_6px_4px_#00000040]">
          <div className="flex flex-col h-full rounded-l-[38px] w-[607px] ">
            <h1 className=" w-full h-[82px] mt-[50px] font-bold text-[#373737] text-6xl text-center ">
              Login
            </h1>

            <div>
              <h1 className="font-medium text-xl ml-[110px] text-[#373737] mt-[30px]">
                Email Addres
              </h1>
              <input
                type="text"
                placeholder="  your@gmail.com"
                className=" ml-[100px] border-[3px] border-[#00E917]
                shadow-xl h-[65px] w-[430px] rounded-[19px] focus:outline-none"
              />
            </div>

            <h1 className="font-medium text-[#373737] text-xl ml-[110px] mt-[30px]">
              Password
            </h1>
            <input
              type="text"
              placeholder="  Insert 6 character or more"
              className=" ml-[100px] border-[3px] border-[#00E917] 
                shadow-xl h-[65px] w-[430px] rounded-[19px] mb-[20px] focus:outline-none"
            />
            <div className="flex flex-row">
              <input
                type="checkbox"
                className="h-[25px] w-[25px] ml-[110px] mr-[10px]
              shadow-xl border-4 border-[#00E917] "
              />
              <h1 className="font-semibold text-[#373737] text-medium
              mb-[60px]">
                Remember Me For 30 Days
              </h1>
            </div>
            <div>
              <button onClick="/" className="
              border-4 border-[#00E917] duration-300
              shadow-xl
              rounded-[19px] w-[130px] h-[65px] 
              font-bold text-[27px] text-[#373737] 
              ml-[400px] hover:bg-[#00E917]
              hover:text-[#ffff] ">Login</button>
            </div>
          </div>
          <div className="flex flex-col bg-[#56FF90] h-full rounded-r-[38px] w-[607px] ">
            <div className="bg-slate-100 rounded-[38px] h-[584px] w-[396px]
            ml-[80px] mt-[100px]">
          <img src="gambar2.png" 
          alt=""
          className="mt-[100px] ml-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
