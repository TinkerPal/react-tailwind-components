import image from "./assets/imagelogin.jpg";
import Banner from "./assets/Banner.svg";
import schedule from "./assets/Schedule.svg";
import wallet from "./assets/wallet.png";
import { useState } from "react";

export default function ScheduleTweet() {
  const [isLogin, setIsLogin] = useState(true);

  function isLoginHandler() {
    setIsLogin((isLogin) => !isLogin);
  }
  return (
    <div className="items-center  flex flex-col justify-start w-screen   bg-slate-100">
      {/* Inner container  */}
      <div className="max-w-4xl mx-12 space-y-4 mt-12">
        {/* Banner  */}
        <div className=" mt-4 p-2 rounded-xl   flex flex-col md:flex-row space-x-8 border-4  border-cyan-700   items-center justify-center">
          <img src={Banner} alt="" className="w-1/2 md:w-1/5 " />
          <div className="items-center justify-center">
            <div className=" font-mono  text-xl md:text-3xl text-center  font-bold  flex  flex-wrap ">
              Automatically Generate, Schedule, & Manage Contents with the power
              AI
            </div>
            <div className="text-black hidden md:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              voluptatem placeat illum quasi, eveniet non qui sapiente delectus
              ea alias eius amet assumenda, veniam soluta. Laboriosam labore
              suscipit
            </div>
          </div>
        </div>
        <div className="pt-20 space-y-2 ">
          <div className="flex flex-row space-x-4 ">
            <div className="font-bold text-white border-2 rounded-md px-3 border-cyan-700 bg-cyan-700 hover:bg-opacity-90 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5 duration-150">
              Manual Content
            </div>

            <div className="font-bold text-black border-2 rounded-md px-3 border-gray-300 hover:bg-opacity-90 shadow-sm hover:shadow-lg  transition hover:-translate-y-0.5 duration-150">
              AI Generated
            </div>
          </div>
          <div className="">
            <textarea
              name=""
              id=""
              className=" w-full h-[300px] md:h-[100px] resize-none rounded-lg p-1 placeholder:text-center placeholder:text-5xl mb-4  "
              placeholder="Enter your content here"
            />
          </div>
          <div className="pb-2 space-y-2 mb-10">
            <div className=" font-bold text-lg">Upload file</div>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>

          <div>
            <p className="font-bold text-lg my-4">Schedule post:</p>
            <div className="flex space-x-2">
              <div className="mb-8">
                <p className="font-bold ">Date</p>
                <input
                  type="date"
                  id="scheduleDate"
                  name="scheduleDate"
                  min={new Date().toISOString().split("T")[0]} // Sets today as the minimum date
                  max={
                    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  } // Sets 30 days from now as maximum date
                />
              </div>
              <div>
                <p>Time</p>
                <input type="time" id="scheduleTime" name="scheduleTime" />
              </div>
            </div>
          </div>

          <div className="pb-6 ">
            <button className="w-full md:w-auto flex justify-center items-center p-2 space-x-2 font-sans font-bold text-white rounded-md  px-6 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <img src={schedule} alt="" className="w-9 " />
              <span>Schedule</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
