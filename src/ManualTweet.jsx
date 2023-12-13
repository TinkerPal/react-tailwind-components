import schedule from "./assets/Schedule.svg";
export default function ManualTweet() {
  return (
    <>
      <div className="pt-8">
        <textarea
          name=""
          id=""
          className=" w-full h-[220px] md:h-[100px] resize-none rounded-lg p-1 placeholder:text-center placeholder:text-2xl md:placeholder:text-5xl mb-4  "
          placeholder="Enter your content here"
        />
      </div>
      <div className="pb-2 space-y-2 mb-10">
        <div className=" font-bold text-lg">Upload file</div>
        <input type="file" id="image" name="image" accept="image/*" />
      </div>

      <div>
        <p className="font-bold text-lg my-4">Schedule post:</p>
        <div className="flex space-x-4">
          <div className="mb-8">
            <p className="font-bold ">Date</p>
            <input
              type="date"
              className="bg-white py-1 px-2 rounded-md"
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
            <p className="font-bold ">Time</p>
            <input
              type="time"
              className="bg-white py-1 px-2 rounded-md"
              id="scheduleTime"
              name="scheduleTime"
            />
          </div>
        </div>
      </div>

      <div className="pb-6 ">
        <button className="w-full md:w-auto flex justify-center items-center p-2 space-x-2 font-sans font-bold text-white rounded-md  px-6 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
          <img src={schedule} alt="" className="w-9 " />
          <span>Schedule</span>
        </button>
      </div>
    </>
  );
}
