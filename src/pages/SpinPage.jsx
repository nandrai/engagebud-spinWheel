import React from "react";
import spinWheel from "../assets/spinwheel.png";
import pointer from "../assets/pointer.png";
import { useNavigate } from "react-router-dom";

function SpinPage() {
  const navigate = useNavigate();
  const spinHandler = () => {
    const randomDeg = Math.floor(Math.random() * 360);
    let prize = "";
    if (randomDeg >= 0 && randomDeg < 30) {
      prize = "30% sitewide off";
    } else if (randomDeg >= 30 && randomDeg < 90) {
      prize = "Buy 1 get 1 free";
    } else if (randomDeg >= 90 && randomDeg < 150) {
      prize = "free coffee mug on purchase worth 1000+";
    } else if (randomDeg >= 150 && randomDeg < 210) {
      prize = "Buy 2 Effervescent tablets & get 1 free";
    } else if (randomDeg >= 210 && randomDeg < 270) {
      prize = "Free 50g tea on purchase of Rs. 500";
    } else if (randomDeg >= 270 && randomDeg < 330) {
      prize = "HOT CHOCLATE FREE WITH TEA";
    } else if (randomDeg >= 330 && randomDeg < 360) {
      prize = "30% sitewide off";
    }
    const spinDeg = 3600 + randomDeg;
    const wheel = document.querySelector("#spinWheel");
    // wheel.style.transition = "all 5s ease-in-out";
    wheel.style.transform = `rotate(-${spinDeg}deg)`;
    setTimeout(() => {
      navigate("/prize", { state: { prize } });
    }, 7000);
    return "";
  };

  return (
    <div className="grid h-screen place-content-center">
      <div className="max-w-xl flex relative">
        <img
          id="spinWheel"
          src={spinWheel}
          alt=""
          className="w-full object-contain transition-all duration-[5s] transform]"
        />
        <div className="absolute w-full h-full flex justify-center items-center">
          <img src={pointer} alt="" className=" w-[40px]" />
        </div>
      </div>
      <button
        onClick={spinHandler}
        className="bg-green-800 p-3 px-14 rounded-full text-xl mt-5 max-w-xs font-bold text-white mx-auto"
      >
        Try your luck
      </button>
    </div>
  );
}

export default SpinPage;
