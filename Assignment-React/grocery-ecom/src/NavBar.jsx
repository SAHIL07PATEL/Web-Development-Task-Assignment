import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='w-full border-2 relative'>
        <i className="ri-menu-line absolute right-9 top-[35%] lg:hidden  text-xl"></i>

        {/*  Menu Items */}
        <div className="container mx-auto md:w-[80%] py-4 px-3 flex justify-start md:justify-around items-center ">
          <div className="logo text-3xl cursor-pointer font-bold text-yellow-600">LOGO</div>


          <div className="search-bar w-[40%]  border-2 lg:flex justify-between items-center hidden">



            <div className='w-full flex'>
              <div className="dropdown ml-1">
                <select name="" id="" className='focus:outline-none border-2 rounded-sm'>
                  <option value="AllCatagory">All Category</option>
                  <option value="catagory1">Category 1</option>
                  <option value="catagory2">Category 2</option>
                  <option value="catagory3">Category 3</option>
                  <option value="catagory4">Category 4</option>
                  <option value="catagory5">Category 5</option>
                </select>
              </div>
              <input type="text" className=' pl-2 focus:outline-none border-2 ml-2' placeholder='Search Item' />
            </div>


            <div className='border-l-2 h-full p-2 '>
              <i className="ri-search-line text-xl cursor-pointer"></i>
            </div>




          </div>

          <div className="dropdown ml-1 hidden">
            <select name="" id="" className='focus:outline-none border-2 rounded-sm'>
              <option value="Your Lopcation " hidden>Your Location</option>
              <option value="junagadh">Junagadh</option>
              <option value="ahemadabad">Ahemadabad</option>
              <option value="rajkot">Rajkot</option>
              <option value="surat">Surat</option>
              <option value="bhavnagar">Bhavnagar</option>
            </select>
          </div>

          <div className="btns hidden md:flex gap-5">
            <div className='cursor-pointer relative'>
              <i className="ri-recycle-line mr-1 text-xl"></i>
              Compare
              <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
            </div>
            <div className='cursor-pointer relative'>
              <i className="ri-heart-add-line mr-1 text-xl"></i>
              Wishlist
              <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
            </div>
            <div className='cursor-pointer relative'>
              <i className="ri-shopping-cart-line mr-1 text-xl"></i>
              Cart
              <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
            </div>
            <div className='cursor-pointer'>
              <i className="ri-account-circle-line mr-1 text-xl"></i>
              Account
            </div>
          </div>


        </div>

        {/* Mobile menu */}

        <div className="mobilemenu">
          <div>
            <div className="flex flex-col ">
              <div className='w-full flex'>
                <div className="dropdown ml-1">
                  <select name="" id="" className='focus:outline-none border-2 rounded-sm'>
                    <option value="AllCatagory">All Category</option>
                    <option value="catagory1">Category 1</option>
                    <option value="catagory2">Category 2</option>
                    <option value="catagory3">Category 3</option>
                    <option value="catagory4">Category 4</option>
                    <option value="catagory5">Category 5</option>
                  </select>
                </div>
              </div>
              <div>
                <input type="text" className=' pl-2 focus:outline-none border-2 ml-2' placeholder='Search Item' />

                <i className="ri-search-line text-xl cursor-pointer"></i>
              </div>
            </div>

            <div className="dropdown ml-1 hidden">
              <select name="" id="" className='focus:outline-none border-2 rounded-sm'>
                <option value="Your Lopcation " hidden>Your Location</option>
                <option value="junagadh">Junagadh</option>
                <option value="ahemadabad">Ahemadabad</option>
                <option value="rajkot">Rajkot</option>
                <option value="surat">Surat</option>
                <option value="bhavnagar">Bhavnagar</option>
              </select>
            </div>

            <div className="btns hidden md:flex gap-5">
              <div className='cursor-pointer relative'>
                <i className="ri-recycle-line mr-1 text-xl"></i>
                Compare
                <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
              </div>
              <div className='cursor-pointer relative'>
                <i className="ri-heart-add-line mr-1 text-xl"></i>
                Wishlist
                <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
              </div>
              <div className='cursor-pointer relative'>
                <i className="ri-shopping-cart-line mr-1 text-xl"></i>
                Cart
                <div className="bedge absolute top-0 left-3 rounded-full w-3 h-3 text-[8px] flex justify-center items-center bg-green-500 text-white">0</div>
              </div>
              <div className='cursor-pointer'>
                <i className="ri-account-circle-line mr-1 text-xl"></i>
                Account
              </div>
            </div>


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
