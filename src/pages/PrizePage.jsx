import React from "react";
import bgWheel from "../assets/bgwheeel.png";
import { useLocation } from "react-router-dom";

function PrizePage() {
  const randomString = Math.random().toString(36).substring(2, 10);

  const copyHandler = async () => {
    await navigator.clipboard.writeText(randomString);
    alert("Copied to clipboard!");
  };
  const location = useLocation();
  const prize = location.state.prize;
  return (
    <div className="grid lg:grid-cols-2 h-screen justify-center md:ml-36 items-center max-w-6xl lg:mx-auto gap-20">
      <div className="w-full fixed -top-12 md:h-screen md:hidden">
        <img src={bgWheel} alt="" className="max-h-48 mx-auto md:my-auto" />
      </div>
      <div className="hidden md:grid lg:hidden fixed -left-1/3 h-screen items-center">
        <img src={bgWheel} alt="" className=" w-3/6" />
      </div>
      <img src={bgWheel} alt="" className="hidden lg:block w-4/5" />
      <div className="p-5 max-w-sm text-center">
        <p className="text-xl font-semibold">Congrats! You Won:</p>
        <h1 className="text-3xl font-bold">{prize}</h1>
        <div
          className="flex rounded-md overflow-hidden mt-4 w-fit mx-auto
        "
        >
          <span className="bg-gray-500 bg-opacity-50 p-2 px-4 text-3xl font-bold uppercase text-white">
            {randomString}
          </span>
          <button onClick={copyHandler} className="bg-green-700 px-4">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrizePage;
