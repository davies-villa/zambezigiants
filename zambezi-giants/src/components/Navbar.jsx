import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [showSearch, setShowSearch] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`flex items-center justify-between px-5 md:px-10  rounded-sm py-3 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } transition-colors`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-auto h-20 md:h-20" />
      </div>

      {/* Search Icon (Small Screens) */}
      <button
        className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        onClick={() => setShowSearch(!showSearch)}
        aria-label="Toggle Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium justify-center flex-grow">
        <a href="#home" className="hover:text-customOrange relative group">
          Home
          <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-customOrange transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#destinations" className="hover:text-customOrange relative group">
          Destinations
          <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-customOrange transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#services" className="hover:text-customOrange relative group">
          Services
          <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-customOrange transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="hover:text-customOrange relative group">
          Contact
          <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-customOrange transition-all duration-500 group-hover:w-full"></span>
        </a>
      </div>

      


      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:block text-sm">Sign Up</button>
        <button className="text-white rounded-full px-6 py-4 bg-customOrange hover:bg-orange-500 text-sm">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
