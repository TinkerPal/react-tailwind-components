import React from "react";

export default function InfoForm() {
  return (
    <div className="flex items-center justify-center    bg-slate-100">
      {/* Card container */}

      <div className="relative flex flex-col m-6   md:flex-row md:space-y-0 md:my-0  ">
        {/* Left Side  */}
        <div className="px-6 py-2 md:p-12">
          {/* top  */}
          <h2 className="font-mono mb-5 text-4xl font-bold">
            General Information
          </h2>
          <p className="w-64 mb-8 -sans font-light text-gray-600 ">
            Please fill in this information so that we can better serve you
          </p>

          <div className="space-y-4 flex flex-col">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            />

            <div className="justify-start items-baseline  space-x-2 flex flex-row ">
              <input
                type="checkbox"
                className=" p-2 border  border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your email address"
              />
              <p className="flex flex-wrap  w-64">
                I own or represent a project or a business or a product
              </p>
            </div>
            <div className="justify-start items-baseline  space-x-2 flex flex-row ">
              <input
                type="checkbox"
                className=" p-2 border  border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your email address"
              />
              <p className="flex flex-wrap  w-64">I am an influencer</p>
            </div>
            <div className="justify-start items-baseline  space-x-2 flex flex-row ">
              <input
                type="checkbox"
                className=" p-2 border  border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your email address"
              />
              <p className="flex flex-wrap  w-64">
                I am exploring or lookng to improve my engagement
              </p>
            </div>
            <div className="justify-start items-baseline  space-x-2 flex flex-row ">
              <input
                type="checkbox"
                className=" p-2 border  border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your email address"
              />
              <p className="flex flex-wrap  w-64">
                I want to participate in engage-to-earn
              </p>
            </div>

            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Name of Company (If Applicable)"
            />

            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="How did you hear about AudaXious"
            />

            <textarea
              type="password"
              className="w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Brief description about your company or use-case"
            />
          </div>
          {/* Middle content  */}

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <button className="w-full flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md  px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Save</span>
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
        {/* right side  */}
        {/* <img src={image} alt="" className="w-[330px] hidden md:block" /> */}
        <div className="w-[380px]  items-center justify-center p-6 md:py-12 md:pr-12 space-y-1 md:flex md:flex-col ">
          <div className=" font-mono text-2xl text-start font-bold  flex  flex-wrap ">
            Privacy Policy
          </div>
          <div className="flex flex-wrap items-center  text-start">
            <p className="font-bold mb-4">Please read our privacy policy</p>
            <ul className="list-disc pl-4 space-y-2 ">
              {" "}
              {/* Use list-disc for disc bullet points */}
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Necessitatibus, placeat! Quo, velit ipsam repudiandae
                consequuntur odio explicabo maxime magni delectus?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Necessitatibus, placeat! Quo, velit ipsam repudiandae
                consequuntur odio explicabo maxime magni delectus?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Necessitatibus, placeat! Quo, velit ipsam repudiandae
                consequuntur odio explicabo maxime magni delectus?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
