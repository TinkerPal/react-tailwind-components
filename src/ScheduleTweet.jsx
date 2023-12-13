import { useState } from "react";
import AIBlack from "./assets/AIBlack.svg";
import AIWhite from "./assets/AIWhite.svg";
import manualWhite from "./assets/manualWhite.svg";
import manualBlack from "./assets/manualBlack.svg";
import Banner from "./Banner";
import GeneratedTweet from "./GeneratedTweet";
import ManualTweet from "./ManualTweet";

export default function ScheduleTweet() {
  const [isManual, setIsManual] = useState(false);

  return (
    <div className="items-center  flex flex-col justify-start w-screen   bg-slate-100">
      {/* Inner container  */}
      <div className="max-w-4xl mx-12 space-y-4 mt-12">
        <Banner />

        <div className="pt-20 space-y-2 ">
          <div className="flex flex-row justify-between space-x-1 md:justify-normal">
            <button
              onClick={() => setIsManual(true)}
              className={`w-full md:w-auto flex justify-center items-center py-1 space-x-2 font-sans font-bold ${
                isManual ? "text-white" : "text-black"
              } rounded-md md:px-2 ${isManual && "bg-cyan-700"} ${
                !isManual && "border-2"
              } shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150`}
            >
              <img
                src={isManual ? manualWhite : manualBlack}
                alt=""
                className="w-7 "
              />
              <span>Manual Content</span>
            </button>
            <button
              onClick={() => setIsManual(false)}
              className={`w-full md:w-auto flex justify-center items-center py-1 space-x-2 font-sans font-bold ${
                isManual ? "text-white" : "text-black"
              } rounded-md md:px-2 ${isManual && "bg-cyan-700"} ${
                !isManual && "border-2"
              } shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150`}
            >
              <img src={isManual ? AIBlack : AIWhite} alt="" className="w-7 " />
              <span>AI Generated</span>
            </button>
          </div>
          {isManual ? <ManualTweet /> : <GeneratedTweet />}
        </div>
      </div>
    </div>
  );
}
