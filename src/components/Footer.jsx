import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white mpt-20 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Links Section */}
          <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-8">
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
            <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
            <NavLink to="/packages" className="hover:text-blue-500">Packages</NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 lg:mt-0 flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-8 text-center lg:text-left">
          <p>Contact Us: +1 234 567 890 | Email: info@example.com</p>
          <p className="mt-2">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
