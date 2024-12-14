import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full h-20 bg-zinc-900 backdrop-filter backdrop-blur-2xl p-4 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} className="h-14" alt="Logo" />
      </NavLink>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="focus:outline-none"
        >
          <CiMenuBurger className="text-white text-2xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:justify-center items-center absolute md:static top-20 left-0 w-full text-black md:text-white md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-6 md:px-0 transition-transform duration-300 ease-in-out`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 bg-white px-4 py-1 rounded-2xl' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 bg-white px-4 py-1 rounded-2xl' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/packages"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 bg-white px-4 py-1 rounded-2xl' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Packages
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 bg-white px-4 py-1 rounded-2xl' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Resources
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 bg-white px-4 py-1 rounded-2xl' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          FAQs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'text-blue-500 rounded-2xl bg-white py-1 px-4' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>

        <NavLink
          to="/register"
          className=" md:hidden text-white px-4 py-1 rounded-2xl bg-blue-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Book Now
        </NavLink>
        
        
      </div>

      {/* Call to Action Button */}
      <div className="hidden md:block">
      <NavLink
          to="/register"
          className=" text-white px-4 py-2 rounded-2xl bg-blue-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Book Now
        </NavLink>
      
      </div>
    </nav>
  );
};

export default Navbar;
