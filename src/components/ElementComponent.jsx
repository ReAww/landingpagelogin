import React from "react";

export const ElementComponent = () => {
  return (
    <div className="absolute flex w-[100vw] h-[100svh]">
      {/* SQUARE */}
      <div
        className="absolute w-[70px] h-[70px] 
        top-[-20px] left-5 rotate-[46.38deg] bg-[rgb(172,255,200)] bg-opacity-50"
      />
      <div
        className="absolute w-[55px] h-[55px] 
       left-[70px] top-[60px] rotate-[63.93deg] bg-[rgb(172,255,200)] bg-opacity-50"
      />
      <div
        className="absolute w-[40px] h-[40px] 
      top-[90px] left-[10px] rotate-[12deg] bg-[rgb(172,255,200)] bg-opacity-50"
      />

      {/* CIRCLE */}
      <div
        className="absolute w-[70px] h-[70px]
      top-[-2] right-[-10px] md:left-0 md:bottom-0
      bg-[rgb(172,255,200)] bg-opacity-50 rounded-full"
      />
      <div
        className="absolute w-[40px] h-[40px]
      top-[66px] right-[35px]  md:left-[40px] 
      md:top-[530px] md:w-[60px] md:h-[60px]
      bg-[rgb(172,255,200)] bg-opacity-50 rounded-full"
      />

      {/* Triangle */}
      <div
        className="absolute w-[60px] h-[50px] 
        md:top-0 md:right-[]
      [background:linear-gradient(45deg,rgb(172,255,200)_50%,transparent_50%)] 
      top-[190px] right-[20px] rotate-[55deg] opacity-50"
      />
      <div
        className="absolute w-[80px] h-[70px]
      [background:linear-gradient(45deg,rgb(172,255,200)_50%,transparent_50%)] 
      top-[250px] right-[-40px] rotate-[90deg] opacity-50"
      />
    </div>
  );
};
