import AI from "./assets/AI.svg";
import manual from "./assets/manual.svg";
import Banner from "./Banner";
import ManualTweet from "./ManualTweet";

export default function ScheduleTweet() {
  return (
    <div className="items-center  flex flex-col justify-start w-screen   bg-slate-100">
      {/* Inner container  */}
      <div className="max-w-4xl mx-12 space-y-4 mt-12">
        <Banner />

        <div className="pt-20 space-y-2 ">
          <div className="flex flex-row justify-between space-x-1 md:justify-normal">
            <button className="w-full md:w-auto flex justify-center items-center py-1 space-x-2 font-sans font-bold text-white rounded-md md:px-2 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <img src={manual} alt="" className="w-7 " />
              <span>Manual Content</span>
            </button>
            <button className="w-full md:w-auto flex justify-center items-center py-1  space-x-2 font-sans font-bold text-black rounded-md md:px-2   shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border-2 transition hover:-translate-y-0.5 duration-150">
              <img src={AI} alt="" className="w-7 " />
              <span>AI Generated</span>
            </button>
          </div>
          <ManualTweet />
        </div>
      </div>
    </div>
  );
}
