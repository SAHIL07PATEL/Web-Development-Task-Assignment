/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='grid grid-cols-2 mx-auto w-[80%] pt-6'>
        <div className="logo">
          <img src="../public/images/logo.png" className='cursor-pointer' alt="" />
        </div>
        <div className="nav_items">
          <ul className='flex justify-between mt-[15px]'>
            <li><a href="" className='hover:text-blue-600 font-semibold'>HOME</a></li>
            <li><a href="" className='hover:text-blue-600 font-semibold'>ABOUT</a></li>
            <li><a href="" className='hover:text-blue-600 font-semibold'>Portfolio</a></li>
            <li className='flex flex-col justify-center items-start gap-4 '>
              <a href="" className='hover:text-blue-600 font-semibold'>Pages</a>

            </li>

            <li><a href="" className='hover:text-blue-600 font-semibold '>Blogs</a></li>
            <li><a href="" className='hover:text-blue-600 font-semibold'>Contact</a></li>
            <div className=' shadow-lg w-[100%] flex flex-col justify-center items-start'>
              <div className='hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white w-full cursor-pointer'>
                <button className=' px-4 py-2'>Element</button>
              </div>
              <div className='hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white w-full cursor-pointer'>
                <button className=' px-4 py-2'>Portfolio Details</button>
              </div>
            </div>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
