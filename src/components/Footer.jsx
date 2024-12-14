import { div } from "framer-motion/client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>

      <div className=" h-[400px] text-white md:h-72 bg-cover bg-start text-center md:bg-center bg-footerm md:bg-footer p-10 pt-20 ">

        <h1 className="text-6xl  font-bold tracking-tight ">Ready to Drive with Us?</h1>
        <p className="mt-2 mb-6">Join Karan Driving School today!</p>
        <NavLink className="bg-blue-500 px-4 py-2 text-xl rounded-3xl " to="/register" >
       Book Now

        </NavLink>

      </div>

    
    <footer className="bg-zinc-900 text-white mpt-20 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Links Section */}
          <div className="flex gap-6 flex-col justify-center items-center md:flex-row">
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
            <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
            <NavLink to="/packages" className="hover:text-blue-500">Packages</NavLink>
            
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 lg:mt-0 flex space-x-6">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaTwitter size={24} />
            </a> */}
            <a href="https://www.instagram.com/karandrivingschool/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-8 text-center lg:text-left">
          <p className="font-bold">Contact Us: <a className="text-blue-500" href="tel:+17788460018">
            
             +17788460018
            </a>
                
                </p>
             <p className="font-bold">

                Email:  
                
                <a className="text-blue-500 ml-2" href="mailto:karandrivingschoolltd@gmail.com">
                  
                 karandrivingschoolltd@gmail.com
                  </a>
             </p>
          
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
