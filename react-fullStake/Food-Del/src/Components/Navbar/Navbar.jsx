/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div>
      <div className="container px-[20px] md:px-[50px] lg:px-[70px] mx-auto pt-[20px] md:pt-[30px] lg:pt-[40px] navbar flex justify-between items-center">
        <img className="cursor-pointer w-[120px] md:w-[140px] lg:w-[150px]" src={assets.logo} alt="logo" />

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="ri-menu-line text-2xl md:text-3xl"></i>
        </div>

        {/* Navbar Menu */}
        <ul
          className={`navbar-menu flex-col md:flex-row flex justify-center items-center gap-[20px] md:gap-[40px] absolute md:relative top-[80px] md:top-auto bg-white h-[100%] md:bg-transparent w-[100%] md:w-auto transition-all duration-500 ease-in-out ${
            isMenuOpen ? "top-[0px] z-10 left-0" : "top-[-100%]"
          } lg:left-0 text-lg md:text-base lg:text-xl`}
        >
          <li
            onClick={() => {
              setMenu("home");
              setIsMenuOpen(false);
            }}
            className={`cursor-pointer ${menu === 'home' ? 'active' : ''}`}
          >
            Home
          </li>
          <li
            onClick={() => {
              setMenu("menu");
              setIsMenuOpen(false);
            }}
            className={`cursor-pointer ${menu === 'menu' ? 'active' : ''}`}
          >
            Menu
          </li>
          <li
            onClick={() => {
              setMenu("mobile-app");
              setIsMenuOpen(false);
            }}
            className={`cursor-pointer ${menu === 'mobile-app' ? 'active' : ''}`}
          >
            Mobile App
          </li>
          <li
            onClick={() => {
              setMenu("contact");
              setIsMenuOpen(false);
            }}
            className={`cursor-pointer ${menu === 'contact' ? 'active' : ''}`}
          >
            Contact Us
          </li>

          {/* Navbar Right (Only visible in the mobile menu) */}
          <div className="navbar-right-mobile mt-[30px] flex  items-center gap-[20px] md:hidden">
            <img className="cursor-pointer w-[20px] md:w-[25px]" src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon relative">
              <img className="cursor-pointer w-[20px] md:w-[25px]" src={assets.basket_icon} alt="basket" />
              <div className="dot absolute top-[-5px] right-[-5px] w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-red-600 rounded-full"></div>
            </div>
            <button className="border-2 py-[5px] px-[15px] text-center rounded-[20px] text-xs md:text-sm">
              Sign in
            </button>
          </div>
        </ul>

        {/* Navbar Right (Visible only on desktop screens) */}
        <div className="navbar-right hidden md:flex gap-[10px] md:gap-[20px] lg:gap-[25px] items-center">
          <img className="cursor-pointer w-[20px] md:w-[25px]" src={assets.search_icon} alt="search" />
          <div className="navbar-search-icon relative">
            <img className="cursor-pointer w-[20px] md:w-[25px]" src={assets.basket_icon} alt="basket" />
            <div className="dot absolute top-[-5px] right-[-5px] w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-red-600 rounded-full"></div>
          </div>
          <button className="border-2 py-[5px] px-[15px] md:py-[8px] md:px-[25px] lg:py-[10px] lg:px-[30px] text-center rounded-[20px] text-xs md:text-sm lg:text-base">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
