import React from "react";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import discord from "./assets/discord.svg";
import instagram from "./assets/instagram.svg";

export default function ConnectSocials() {
  return (
    <div className="flex justify-center h-screen    bg-slate-100">
      {/* Card container */}

      <div className="relative flex flex-col m-6   md:flex-row md:space-y-0 md:my-0  ">
        {/* Left Side  */}
        <div className="px-6 py-2 md:p-12">
          {/* top  */}
          <h2 className="font-mono mb-5 text-4xl font-bold">Connect Socials</h2>
          <p className=" mb-8 -sans font-light text-gray-600 max-w-xl ">
            Connect your social mediaaccounts and unlock Audaxious content
            management and AI generator tools
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start  ">
            <button className="w-32 md:w-28 h-32 md:h-28 flex flex-col space-y-2 bg-cyan-100 border-2  border-cyan-700 rounded-2xl justify-center items-center text-center font-mono font-bold text-xl">
              <div>
                <img src={twitter} alt="" className="w-14  " />
              </div>
              <div> Twitter</div>
            </button>
            <div className="w-32 md:w-28 h-32 md:h-28  flex flex-col space-y-2 bg-cyan-100 border-2  border-cyan-700 rounded-2xl justify-center items-center text-center font-mono font-bold text-xl">
              <div>
                <img src={facebook} alt="" className="w-14  " />
              </div>
              <div> Facebook</div>
            </div>
            <div className="w-32 md:w-28 h-32 md:h-28  flex flex-col space-y-2 bg-cyan-100 border-2  border-cyan-700 rounded-2xl justify-center items-center text-center font-mono font-bold text-xl">
              <div>
                <img src={discord} alt="" className="w-14  " />
              </div>
              <div> Discord</div>
            </div>
            <div className="w-32 md:w-28 h-32 md:h-28  flex flex-col space-y-2 bg-cyan-100 border-2  border-cyan-700 rounded-2xl justify-center items-center text-center font-mono font-bold text-xl">
              <div>
                <img src={instagram} alt="" className="w-14  " />
              </div>
              <div> Instagram</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <button className="w-full md:w-48 flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md  px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Done</span>
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
        </div>
      </div>
    </div>
  );
}
