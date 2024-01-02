// Navbar.js

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          <span className="text-white ml-2 text-lg font-semibold">
            Your App Name
          </span>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Login
          </a>
          <a href="#" className="text-white">
            Register
          </a>
          <a href="#" className="text-white">
            Events
          </a>
          <a href="#" className="text-white">
            Logout
          </a>
          <div className="ml-4">
            <img
              src="/path/to/user-avatar.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 absolute top-16 right-0 left-0 z-10">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            Login
          </a>
          <a href="#" className="block text-white py-2">
            Register
          </a>
          <a href="#" className="block text-white py-2">
            Events
          </a>
          <a href="#" className="block text-white py-2">
            Logout
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
