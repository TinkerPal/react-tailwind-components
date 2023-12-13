import React, { useState } from "react";
import Logo from "./assets/Logo.svg";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-black font-semibold text-lg">
              {" "}
              <img src={Logo} alt="" className="w-32 " />
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:opacity-70">
              Content Management
            </a>
            <a href="#" className="text-black hover:opacity-70">
              Activities
            </a>
            <a href="#" className="text-black  hover:opacity-70">
              Settings
            </a>
            <a href="#" className="text-black  hover:opacity-70">
              Log Out
            </a>
          </div>
          <div className="md:hidden flex">
            <button
              onClick={toggleNavbar}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="#" className="block text-black py-2">
              Content Management
            </a>
            <a href="#" className="block ttext-black py-2">
              Activities
            </a>
            <a href="#" className="block text-black py-2">
              Settings
            </a>
            <a href="#" className="block text-black py-2">
              Log Out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
