import React from "react";
import bgWheel from "../assets/bgwheeel.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function IndexPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <div className="grid lg:grid-cols-2 h-screen justify-center md:ml-36 items-center max-w-6xl lg:mx-auto gap-20">
      <div className="w-full fixed -top-12 md:h-screen md:hidden">
        <img src={bgWheel} alt="" className="max-h-48 mx-auto md:my-auto" />
      </div>
      <div className="hidden md:grid lg:hidden fixed -left-1/3 h-screen items-center">
        <img src={bgWheel} alt="" className=" w-3/6" />
      </div>
      <img src={bgWheel} alt="" className="hidden lg:block w-4/5" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/spin");
          // const response = axios.get(
          //   "https://jsonplaceholder.typicode.com/todos/1",
          //   {}
          // );
        }}
        className="flex flex-col max-w-sm gap-5 p-5"
      >
        <h1 className="text-2xl font-bold">
          This is how EngageBud looks like in action!
        </h1>
        <div className="flex bg-white items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            className="w-full appearance-none focus:outline-none pl-2"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex bg-white items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <input
            type="tel"
            className="w-full appearance-none focus:outline-none pl-2"
            placeholder="Phone number"
            required
          />
        </div>

        <label className="flex items-center gap-2 border border-black rounded-md px-4 py-2">
          <span className="bg-black px-1 rounded-sm">
            <input
              type="checkbox"
              className="opacity-0 checked:opacity-100 accent-black"
              required
            />
          </span>
          <p className="text-xs">
            I agree to receiving recurring automated messages at the number I
            have provided.
            <br /> Consent is not a condition to purchase.
          </p>
        </label>
        <button className="bg-green-800 p-2 rounded-full text-xl font-bold text-white">
          Try your luck
        </button>
        <div className="relative">
          <p className="text-xs text-gray-600 italic">
            *You can spin the wheel only once! *If you win, you can claim your
            coupon for 10 minutes only! <br />
            <span className="!text-sm font-bold absolute right-0 mt-2 flex gap-1 items-center">
              No, I don't feel lucky{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default IndexPage;
