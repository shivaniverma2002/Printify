import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIiPxU8EzDgDb4DeNSMxatoSE5q_1vIZZXw&s"
              alt="Printify Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-green-500">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              About
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 border border-gray-300 px-4 py-2 rounded-md hover:border-green-500 transition duration-300"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4">
            <a href="#" className="text-gray-700 hover:text-green-500">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              About
            </a>
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-green-500 border border-gray-300 px-4 py-2 rounded-md hover:border-green-500 transition duration-300"
              >
                Sign in
              </a>
              <a
                href="#"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
