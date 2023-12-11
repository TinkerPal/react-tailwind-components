import image from "./assets/image.jpg";
export default function EmailSubscribe() {
  return (
    <div className="flex justify-center items-center h-screen w-screen  bg-gray-200 ">
      {/* card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl ">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={image}
            alt=""
            className=" object-fill rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracting-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the diet&fitness
              newsletter
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
