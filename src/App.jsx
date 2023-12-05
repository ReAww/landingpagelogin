import React from "react";
import { ElementComponent } from "./components/ElementComponent";
import { LoginboxComponent } from "./components/LoginboxComponent";

export default function App() {
  return (
    <div
      className="relative overflow-hidden z-[-9999]
    [background:linear-gradient(180deg,rgb(86.06,255,143.5)_50%,rgb(255,255,255)_50%)] 
    md:[background:linear-gradient(130deg,rgb(86.06,255,143.5)_50%,rgb(255,255,255)_50%)]
    w-[100vw] h-[100svh]"
    >
      <div className="absolute max-w-[100%] z-[-999]">
        <ElementComponent />
      </div>
      <div className="relative max-w-[80%] mx-auto bg-white rounded-md 
      shadow-md overflow-hidden sm:max-w-[50%]">
    <div className=" bg-white justify-center">
      Hellow
    </div>
        {/* <LoginboxComponent /> */}
      </div>
    </div>
  );
}
