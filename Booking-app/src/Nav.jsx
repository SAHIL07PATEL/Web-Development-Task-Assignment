/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import HotelCard from './HotelCard';

const Nav = () => {

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-[400px] bg-blue-900 p-2 text-white ">
        <div className="navbar w-[90%] mx-auto p-5  flex justify-between items-center">
          <h1 className=' font-bold md:text-2xl cursor-pointer '>Booking.com</h1>

          {/* Desktop Menu */}
          <div className="right-content hidden md:flex gap-8 justify-end w-full items-center">
            <button className="font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              INR
            </button>

            <div className="img flex items-center gap-2">
              <img
                src="https://t-cf.bstatic.com/design-assets/assets/v3.125.0/images-flags/In@3x.png"
                className="hover:bg-blue-600 transition duration-300 rounded-full cursor-pointer w-[30px] h-[30px]"
                alt="India Flag"
              />
              <svg
                className="cursor-pointer hover:bg-blue-600 transition duration-300 w-[30px] h-[30px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
                ></path>
              </svg>
            </div>

            <Link className="font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              List Your Property
            </Link>

            <div className="buttons flex gap-3">
              <Link className="bg-white hover:bg-slate-200 text-blue-500 px-3 py-2 rounded-md font-semibold lg:text-sm text-[10px]">
                Register
              </Link>
              <Link className="bg-white hover:bg-slate-200 text-blue-500 px-3 py-2 rounded-md font-semibold lg:text-sm text-[10px]">
                Sign-in
              </Link>
            </div>
          </div>




          {/* Hamburger Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </button>

          {/* Mobile Menu */}
          <div
            className={`${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              } absolute top-[70px] left-0 w-full bg-white text-black shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
          >
            <ul className="flex flex-col items-start p-5 space-y-4">
              <li>
                <button className="font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  INR
                </button>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.125.0/images-flags/In@3x.png"
                  className="hover:bg-blue-600 transition duration-300 rounded-full cursor-pointer w-[30px] h-[30px]"
                  alt="India Flag"
                />
                <svg
                  className="cursor-pointer hover:bg-blue-600 transition duration-300 w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
                  ></path>
                </svg>
              </li>
              <li>
                <Link className="font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link className="bg-blue-500 hover:bg-slate-200 text-white px-3 py-2 rounded-md font-semibold lg:text-sm text-[10px]">
                  Register
                </Link>
              </li>
              <li>
                <Link className="bg-blue-500 hover:bg-slate-200 text-white px-3 py-2 rounded-md font-semibold lg:text-sm text-[10px]">
                  Sign-in
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="btns w-[90%] mx-auto flex gap-3 min-w-[200px] overflow-x-scroll no-scrollbar sm:justify-start mt-8">
          <div className=''>
            <button className='py-2 px-4 rounded-3xl bg-blue-600 text-white transition duration-300'>
              <i className="ri-flight-takeoff-line mr-3"></i>Stays
            </button>
          </div>
          <div className='min-w-[120px] lg:min-w-0'>
            <button className='py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300'>
              <i className="ri-flight-takeoff-line mr-3"></i> Flights
            </button>
          </div>
          <div className='min-w-[180px] lg:min-w-0'>
            <button className='py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300'>
              <i className="ri-hotel-line mr-2"></i> Flights + Hotel
            </button>
          </div>
          <div className='min-w-[180px] lg:min-w-0'>
            <button className='py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300'>
              <i className="ri-car-line mr-2"></i>Car Rental
            </button>
          </div>
          <div>
            <button className='py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300'>
              <i className="ri-car-line mr-2"></i>Attraction
            </button>
          </div>
          <div className='min-w-[180px] lg:min-w-0'>
            <button className='py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300'>
              <i className="ri-car-line mr-2"></i>Airport Taxis
            </button>
          </div>
        </div>

        <div className="content w-[90%] mx-auto mt-[50px]">
          <h1 className='md:text-5xl font-bold'>Find your next stay</h1>
          <p className='md:text-2xl mt-2'>Search low prices on hotels, homes and much more...</p>
        </div>


      </div>



    </>
  )
}

export default Nav
