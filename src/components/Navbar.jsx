import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full h-20  bg-zinc-900 backdrop-filter backdrop-blur-2xl p-4 flex justify-between items-center">
      {/* Logo */}
      <img src={logo} className="h-14"  alt="Logo" />

      {/* Hamburger Icon for mobile view */}
      <div className="md:hidden flex items-center">

        <button
        
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="text-black focus:outline-none"
        >
          <CiMenuBurger className='text-black bg-white' />
          
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:justify-center ml-32 md:items-center absolute md:static top-20 left-0 w-full text-black md:text-white md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-6 md:px-0`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/packages"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Packages
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
         Resources
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
         FAQs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
        
      </div>

      {/* Call Us Button (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:block">
        <NavLink
          to="/register"
          className="bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease-in-out  hover:bg-white hover:text-blue-500 "
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;