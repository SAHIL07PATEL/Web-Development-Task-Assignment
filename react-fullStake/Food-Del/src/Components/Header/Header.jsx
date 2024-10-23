/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header bg-header-img bg-contain bg-no-repeat relative -z-10 md:z-10">
      <div className="header-content animate-[fadeIn_3s] absolute flex flex-col items-start max-w-full lg:max-w-[50%] bottom-[10%] left-[6vw] gap-[1.5vw] md:px-[4vw] lg:px-0">
        <h2 className="text-white text-[10px] md:text-[50px] lg:text-[60px] font-medium ">
          Order Your Favourite Food here
        </h2>
        <p className="font-semibold text-white text-[10px] md:text-base lg:text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          provident. Lorem, ipsum dolor. Lorem 
        </p>
        <button className="bg-white cursor-pointer text-gray-500 rounded-[55px] px-[20px] py-[8px] md:px-[30px] md:py-[10px] font-normal text-[8px] md:text-sm lg:text-base">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
