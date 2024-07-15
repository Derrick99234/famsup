
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Frame from "../../assets/images/Frame 01.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-green-600 p-2">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Frame} alt="Logo" className="h-10 ml-12 cursor-pointer" />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#home"
            className=" font-[700] text-myblack hover:text-blue-500"
          >
            BLOG
          </a>
          <a
            href="#about"
            className="text-myblack font-[700] hover:text-blue-500"
          >
            FAQS
          </a>
          <a
            href="#ourService"
            className="text-myblack font-[700] hover:text-blue-500"
          >
            API
          </a>
          <a
            href="/signin"
            className="text-myblack font-[700] hover:text-blue-500"
          >
            LOGIN
          </a>
          <a
            href="/signup"
            className="bg-blue-600 text-white font-[700] hover:bg-yellow-600 px-4 py-2 rounded-lg"
          >
            SIGN UP
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <a
              href="#home"
              className="block text-gray-700 font-[500] hover:text-blue-500"
            >
              BLOG
            </a>
            <a
              href="#about"
              className="block text-gray-700 font-[500] hover:text-blue-500"
            >
              FAQS
            </a>
            <a
              href="#ourService"
              className="block text-gray-700 font-[500] hover:text-blue-500"
            >
              API
            </a>
            <a
              href="#contact"
              className="block text-gray-700 font-[500] hover:text-blue-500"
            >
              LOGIN
            </a>
            <a
              href="#"
              className="block bg-blue-500 font-[500] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              SIGN UP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
