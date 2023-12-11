import image from "./assets/imagelogin.jpg";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import wallet from "./assets/wallet.png";
import { useState } from "react";

export default function LoginModalAudaxious() {
  const [isLogin, setIsLogin] = useState(true);

  function isLoginHandler() {
    setIsLogin((isLogin) => !isLogin);
  }
  return (
    <div className="flex items-center justify-center    bg-slate-100">
      {/* Card container */}

      <div className="relative flex flex-col m-6  space-y-10  md:flex-row md:space-y-0 md:my-0  ">
        {/* Left Side  */}
        <div className="p-6 md:p-12">
          {/* top  */}
          <h2 className="font-mono mb-5 text-4xl font-bold">
            {" "}
            {isLogin ? "Log In" : "Sign Up"}
          </h2>
          <p className="max-w-sm mb-8 -sans font-light text-gray-600">
            {isLogin
              ? " Log in and enjoy the most user-centered AI-powered content management platform"
              : "Welcome to AudaXious, the most user-centered AI-powered content management platform"}
          </p>
          <div
            onClick={isLoginHandler}
            className="font-thin mb-2 text-cyan-700 hover:bg-opacity-90 hover:cursor-pointer transition hover:-translate-y-0.5 duration-150"
          >
            {isLogin ? "Sign Up instead" : "Log In Instead "}
          </div>

          <div className="space-y-5">
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            />
            <input
              type="password"
              className="w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
            />
          </div>
          {/* Middle content  */}

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-thin text-cyan-700 hover:bg-opacity-90 hover:cursor-pointer transition hover:-translate-y-0.5 duration-150">
              {isLogin && "Forgot password"}
            </div>
            <button className="w-full md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md  px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          {/* Border  */}
          <div className="mt-8 border-b border-b-gray-300"></div>
          {/* Bottom content  */}
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            log in with
          </p>

          {/* Bottom Buttons Container  */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src={google} alt="" className="w-9" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src={wallet} alt="" className="w-9" />
              <span>Crypto Wallet</span>
            </button>
          </div>
        </div>
        {/* right side  */}
        {/* <img src={image} alt="" className="w-[330px] hidden md:block" /> */}
        <div className="w-[400px] hidden h-screen items-center justify-center p-6 md:py-12 md:pr-12 space-y-6 md:flex md:flex-col ">
          <div className=" font-mono text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r flex  flex-wrap from-[#0C74F1] to-[#28EDDB]">
            Providing web 3.0 benefits through social networks
          </div>
          <div className="flex flex-wrap items-center justify-center text-center">
            Using tech and AI to easily connect millions to web3 and share
            blockchain benefits with social network users
          </div>
        </div>
        {/* Close button  */}
        <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-gray-200  md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
