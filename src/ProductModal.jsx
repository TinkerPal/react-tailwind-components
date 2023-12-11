import headphone from "./assets/headphone.png";
import weight from "./assets/weight.png";
import heart from "./assets/heart.png";
export default function ProductModal() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen  bg-slate-100">
      {/* card container */}

      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0">
        <div>
          <img
            src={headphone}
            alt=""
            className="mx-auto hover:scale-105 duration-200 w-60"
          />
        </div>
        {/* content */}
        <div className="flex flex-col space-y-6">
          {/* label and description container */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            {/* description */}
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/* price container */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd
              </p>
            </div>
            {/* Button Group  */}
            <div className="group">
              <button className="w-full transition-all duration-150 bg-blue-700 text-white rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700">
                <div className="px-8 py-4 bg-blue-500 rounded-lg">
                  Add to cart
                </div>
              </button>
            </div>
            {/* stock  */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            {/* bottom button container  */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-10">
                <img src={weight} alt="" className="w-8" />{" "}
                <span>Add to cart</span>
              </button>

              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-10">
                <img src={heart} alt="" className="w-8" />{" "}
                <span>Add to wish list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
