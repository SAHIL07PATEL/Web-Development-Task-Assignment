/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
      <div className="explore-menu w-[80vw] container mx-auto p-8 ">
        <h1 className=" text-4xl font-bold mb-4">Explore Our Menu</h1>
        <p className="explore-menu-text text-lg mb-6 max-w-[60%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem
          laboriosam inventore, quidem a hic dicta eligendi cupiditate voluptas,
          blanditiis perferendis.
        </p>

        <div className="explore-menu-list flex gap-6 overflow-x-auto py-4">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="explore-menu-item p-4 min-w-[200px] min-h-[200px] flex flex-col justify-center items-center border-t"
              onClick={()=>setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full ${category===item.menu_name?"active":""}`}
              />
              <p className="text-gray-800  text-[max(1.4vw,16px)] mt-[10px] cursor-pointer ">{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr className="mx-[10px] h-[2px] border-none bg-slate-500" />
      </div>
    </>
  );
};

export default ExploreMenu;
