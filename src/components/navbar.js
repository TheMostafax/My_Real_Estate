import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

import '../index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const [isScrolled, setIsScrolled] = useState(false);


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-black ${isScrolled ? "bg-white" : "bg-transparent"}`} >
      <div className="text-4xl cursor-pointer inline-flex items-center text-amber-800">
        <Link to="home" smooth={true} duration={500}>
          My Real Estate
        </Link>
      </div>
      <div className="md:hidden" onClick={handleMenuClick}>
      {showMenu ? (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
            clipRule="evenodd"
            />
        </svg>
        ) : (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
        </svg>
        )}
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="feature" smooth={true} duration={500}>
            Our Features
          </Link>
        </li>
        <li>
          <Link to="sale" smooth={true} duration={500}>
            On Sale
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to="demo" smooth={true} duration={500}>
            Demo
          </Link>
        </li>
        <li>
          <Link to="client" smooth={true} duration={500}>
            Our Clients
          </Link>
        </li>
      
      </ul>
      <div className="hidden md:flex">
       
        <button className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 hover:text-white mx-2">
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </button>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10`}
      >
      
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          About Us
        </Link>
        <Link
          to="feature"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Features
        </Link>
        <Link
          to="sale"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           On Sale
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Services
        </Link>
        <Link
          to="demo"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Demo
        </Link>
        <Link
          to="client"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          Our Clients
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          Contact Us
        </Link>
      </div>
    
    </div>
  );
};

export default Navbar;