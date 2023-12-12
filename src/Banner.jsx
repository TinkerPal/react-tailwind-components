import banner from "./assets/Banner.svg";

export default function Banner() {
  return (
    <div className=" mt-4 p-2 rounded-xl   flex flex-col md:flex-row space-x-8 border-2  border-cyan-700   items-center justify-center">
      <img src={banner} alt="" className="w-1/2 md:w-1/5 " />
      <div className="items-center justify-center">
        <div className=" font-mono  text-xl md:text-3xl text-center  font-bold  flex  flex-wrap ">
          AI-Powered Content Management System: Generate, Schedule, & Manage
          Content Programmatically
        </div>
        <div className="text-black hidden md:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
          voluptatem placeat illum quasi, eveniet non qui sapiente delectus ea
          alias eius amet assumenda, veniam soluta. Laboriosam labore suscipit
        </div>
      </div>
    </div>
  );
}
