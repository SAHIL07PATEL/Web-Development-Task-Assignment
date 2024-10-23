/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import HotelCard from './HotelCard';
import Nav from './Nav';

const Navbar = () => {
  const hotels = [
    {
      image: 'https://picsum.photos/id/1015/600/600', // Scenic landscape for Bangalore
      name: 'Hotel Grand Palace',
      location: 'Bangalore, India',
      rating: '9.0',
      reviews: 'Excellent · 25 reviews',
      dealType: 'Special Offer',
      originalPrice: '10,000',
      discountedPrice: '6,000',
      nights: '3',
    },
    {
      image: 'https://picsum.photos/id/1065/600/600', // Beach view for Goa
      name: 'Seaside Haven Resort',
      location: 'Goa, India',
      rating: '8.4',
      reviews: 'Very Good · 40 reviews',
      dealType: 'Limited-time Deal',
      originalPrice: '15,000',
      discountedPrice: '11,500',
      nights: '4',
    },
    {
      image: 'https://picsum.photos/id/1016/600/600', // Mountain view for Shimla
      name: 'Mountain View Hotel',
      location: 'Shimla, India',
      rating: '9.3',
      reviews: 'Outstanding · 80 reviews',
      dealType: 'Exclusive Deal',
      originalPrice: '22,000',
      discountedPrice: '19,000',
      nights: '3',
    },
    {
      image: 'https://picsum.photos/id/1040/600/600', // Seaside landscape for Kochi
      name: 'Beachside Paradise Resort',
      location: 'Kochi, India',
      rating: '8.7',
      reviews: 'Fantastic · 50 reviews',
      dealType: 'Flash Sale',
      originalPrice: '12,500',
      discountedPrice: '9,500',
      nights: '2',
    },
    {
      image: 'https://picsum.photos/id/1043/600/600', // Royal palace style for Jaipur
      name: 'Royal Heritage Hotel',
      location: 'Jaipur, India',
      rating: '8.9',
      reviews: 'Wonderful · 65 reviews',
      dealType: 'Weekend Deal',
      originalPrice: '14,000',
      discountedPrice: '10,800',
      nights: '2',
    },
    {
      image: 'https://picsum.photos/id/1042/600/600', // Lake view for Udaipur
      name: 'Lakeview Boutique Hotel',
      location: 'Udaipur, India',
      rating: '9.2',
      reviews: 'Superb · 92 reviews',
      dealType: 'Member-only Deal',
      originalPrice: '30,000',
      discountedPrice: '25,000',
      nights: '3',
    },
    {
      image: 'https://picsum.photos/id/1044/600/600', // Urban landscape for Chennai
      name: 'City Comfort Inn',
      location: 'Chennai, India',
      rating: '8.0',
      reviews: 'Very Good · 34 reviews',
      dealType: 'Last-minute Deal',
      originalPrice: '9,000',
      discountedPrice: '6,500',
      nights: '2',
    },
    {
      image: 'https://picsum.photos/id/1048/600/600', // Desert landscape for Jaisalmer
      name: 'Desert Mirage Resort',
      location: 'Jaisalmer, India',
      rating: '9.5',
      reviews: 'Exceptional · 110 reviews',
      dealType: 'Special Offer',
      originalPrice: '20,000',
      discountedPrice: '16,000',
      nights: '4',
    },
    {
      image: 'https://picsum.photos/id/1050/600/600', // Urban view for Mumbai
      name: 'Urban Stay Hotel',
      location: 'Mumbai, India',
      rating: '8.8',
      reviews: 'Great · 75 reviews',
      dealType: 'Exclusive Deal',
      originalPrice: '18,500',
      discountedPrice: '14,500',
      nights: '3',
    },
    {
      image: 'https://picsum.photos/id/1039/600/600', // Garden/Greenery for Pune
      name: 'The Garden Villa',
      location: 'Pune, India',
      rating: '8.6',
      reviews: 'Very Good · 45 reviews',
      dealType: 'Weekend Deal',
      originalPrice: '13,500',
      discountedPrice: '10,200',
      nights: '2',
    },
  ];
  

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState('')
  const [filterData, setFilterData] = useState(hotels)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleCardClick = () => {
    window.open('/cdetails')
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const result = hotels.filter((h) => {
      return h.name.toLowerCase().includes(inputSearch.toLowerCase()) || h.location.toLowerCase().includes(inputSearch.toLowerCase())
    })
    setFilterData(result)
  }

  return (
    <>

    <Nav/>

      <div className="banner flex  bg-yellow-500 w-[90%] max-w-5xl mx-auto relative top-[-40px] h-auto p-2 rounded-xl items-center justify-between z-[1]">


        <form action="" onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>
          <div className="col-span-3 md:col-span-1">
            <input
              type="text"
              className="w-full p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Where are you going?"
              value={inputSearch}
              onChange={(e) => { setInputSearch(e.target.value) }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <input
              type="text"
              className="w-full p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Check-in date"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <input
              type="text"
              className="w-full p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Check-out date"
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <button className="bg-blue-600 w-full p-4 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className=" grid grid-cols-4 justify-center mt-[90px] cursor-pointer" onClick={handleCardClick}>
        {filterData.length > 0 ? (
          filterData.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))
        ) : (
          <h1>No Data Found</h1>
        )
        }


      </div>



    </>
  )
}

export default Navbar
