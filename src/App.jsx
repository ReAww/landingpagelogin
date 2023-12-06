import React from "react";
import { ElementComponent } from "./components/ElementComponent";
import { LoginboxComponent } from "./components/LoginboxComponent";

export default function App() {
  return (
    <div className="overflow-hidden">
    <div
      className="background relative overflow-hidden z-[-999999]
    [background:linear-gradient(180deg,rgb(86.06,255,143.5)_50%,rgb(255,255,255)_50%)] 
    md:[background:linear-gradient(130deg,rgb(86.06,255,143.5)_50%,rgb(255,255,255)_50%)]
    w-[100vw] h-[100svh]"
    />
      <div className="absolute top-0 w-[100vw] h-[100vh]">
        <ElementComponent />
      </div>
      <div className="absolute overflow-hidden top-0 z-1 w-[100vw] h-[100vh]">
        <LoginboxComponent />
      </div>
    </div>
  );
}
