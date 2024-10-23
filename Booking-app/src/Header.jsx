/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
  Button,
  TextField,
} from "@mui/material"; // Keep MUI's TextField and Button for convenience

import React, { useState, useRef } from "react";
import { Popper, ClickAwayListener } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main css file
import "react-date-range/dist/theme/default.css";
import { Link } from "react-router-dom";



const cardDetails = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "FabHotel Joaquim",
    location: "Baga Beach, Baga",
    dealLabel: "Limited-time Deal",
    roomType: "Deluxe Room",
    bedType: "1 double bed",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "No prepayment needed — pay at the property",
    originalPrice: "₹2,000",
    discountedPrice: "₹1,060",
    taxesAndCharges: "+ ₹161 taxes and charges",
    ratingValue: 4.0,
    ratingText: "Very good",
    reviews: "6 reviews",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "Hotel Sunshine",
    location: "Calangute, Goa",
    dealLabel: "Last Minute Deal",
    roomType: "Super Deluxe Room",
    bedType: "2 single beds",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "No prepayment needed",
    originalPrice: "₹3,500",
    discountedPrice: "₹2,500",
    taxesAndCharges: "+ ₹300 taxes and charges",
    ratingValue: 4.5,
    ratingText: "Excellent",
    reviews: "12 reviews",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    hotelName: "Ocean View Hotel",
    location: "Colva Beach, Goa",
    dealLabel: "Seasonal Discount",
    roomType: "Suite",
    bedType: "1 king bed",
    cancellationPolicy: "Non-refundable",
    paymentPolicy: "Full prepayment required",
    originalPrice: "₹6,000",
    discountedPrice: "₹4,500",
    taxesAndCharges: "+ ₹500 taxes and charges",
    ratingValue: 3.8,
    ratingText: "Good",
    reviews: "18 reviews",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    hotelName: "Palm Grove Resort",
    location: "Candolim Beach, Goa",
    dealLabel: "Exclusive Offer",
    roomType: "Deluxe Villa",
    bedType: "3 double beds",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "No prepayment needed",
    originalPrice: "₹12,000",
    discountedPrice: "₹9,000",
    taxesAndCharges: "+ ₹1,200 taxes and charges",
    ratingValue: 4.9,
    ratingText: "Exceptional",
    reviews: "25 reviews",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "Beachfront Hotel",
    location: "Miramar Beach, Goa",
    dealLabel: "Special Weekend Price",
    roomType: "Standard Room",
    bedType: "1 double bed",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "Pay at the property",
    originalPrice: "₹4,000",
    discountedPrice: "₹3,200",
    taxesAndCharges: "+ ₹350 taxes and charges",
    ratingValue: 4.3,
    ratingText: "Very good",
    reviews: "40 reviews",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "Mountain Retreat",
    location: "Mount Abu, Rajasthan",
    dealLabel: "Early Bird Offer",
    roomType: "Luxury Room",
    bedType: "1 queen bed",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "Full prepayment required",
    originalPrice: "₹7,000",
    discountedPrice: "₹5,000",
    taxesAndCharges: "+ ₹700 taxes and charges",
    ratingValue: 4.7,
    ratingText: "Outstanding",
    reviews: "15 reviews",
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1583522862616-c7c405b9e0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "City Lights Hotel",
    location: "Mumbai, Maharashtra",
    dealLabel: "Business Travel Deal",
    roomType: "Executive Suite",
    bedType: "1 king bed",
    cancellationPolicy: "Free cancellation",
    paymentPolicy: "Pay at the property",
    originalPrice: "₹9,500",
    discountedPrice: "₹8,000",
    taxesAndCharges: "+ ₹850 taxes and charges",
    ratingValue: 4.2,
    ratingText: "Very good",
    reviews: "32 reviews",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotelName: "Seaside Inn",
    location: "Varkala, Kerala",
    dealLabel: "Limited-time Offer",
    roomType: "Beachside Cottage",
    bedType: "1 double bed",
    cancellationPolicy: "Non-refundable",
    paymentPolicy: "Full prepayment required",
    originalPrice: "₹5,500",
    discountedPrice: "₹4,200",
    taxesAndCharges: "+ ₹450 taxes and charges",
    ratingValue: 4.6,
    ratingText: "Excellent",
    reviews: "21 reviews",
  },
];


const Header = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(cardDetails);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClickSearch = () => {
    const result = cardDetails.filter((card) =>
      card.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(result);
  };

  return (
    <>
      <div>
        <div className="bg-blue-900 p-6 pb-20 text-white">
          <div className="flex justify-between items-center mb-6">
            <h6 className="text-xl">Booking.com</h6>
            <div>
              <Button color="inherit">Register</Button>
              <Button color="inherit">Login</Button>
            </div>
          </div>

          <ul className="flex justify-start space-x-4">
            <li className="border rounded-md border-gray-700 px-4 py-2 cursor-pointer">Stays</li>
            <li className="border rounded-md border-gray-700 px-4 py-2 cursor-pointer">Flights</li>
            <li className="border rounded-md border-gray-700 px-4 py-2 cursor-pointer">Car rentals</li>
            <li className="border rounded-md border-gray-700 px-4 py-2 cursor-pointer">Attractions</li>
            <li className="border rounded-md border-gray-700 px-4 py-2 cursor-pointer">Airport taxis</li>
          </ul>


          <div className="text-center mt-12">
            <h4 className="text-2xl mb-2">Sign in, save money</h4>
            <p className="text-lg mb-6">Save 10% or more at participating properties. Just look for the blue Genius label.</p>
            <Button variant="contained" color="primary">
              Sign in or register
            </Button>
          </div>
        </div>

        <div className="bg-yellow-400 p-1 w-1/2 mx-auto relative top-[-40px] shadow-lg rounded-lg">
          <div className="bg-white p-4 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <TextField
                  label="Where are you going?"
                  variant="outlined"
                  fullWidth
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              <div>
                <TextField
                  label="Check-in date"
                  variant="outlined"
                  fullWidth
                  value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
                  onClick={handleClick}
                  ref={anchorRef}
                />
                <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
                  <ClickAwayListener onClickAway={handleClose}>
                    <div>
                      <DateRangePicker
                        onChange={(item) => setDateRange([item.selection])}
                        ranges={dateRange}
                        direction="horizontal"
                      />
                    </div>
                  </ClickAwayListener>
                </Popper>
              </div>

              <div className="w-full">
                <Button className="h-full" variant="contained" color="primary" fullWidth onClick={handleClickSearch}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((item) => (
              <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden m-4" key={item.id}>
                <Link to="/view">
                  <img
                    className="w-full h-full sm:w-64 object-cover"
                    src={item.imageUrl}
                    alt="Hotel Room"
                  />
                </Link>
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-lg">{item.hotelName}</h3>
                    <span className="cursor-pointer">❤️</span>
                  </div>
                  <p className="text-gray-600">
                    {item.location} &nbsp; • &nbsp;
                    <a href="/" className="text-blue-500">
                      Show on map
                    </a>
                  </p>
                  <span className="text-green-500 font-semibold">{item.dealLabel}</span>
                  <p>{item.roomType}</p>
                  <p className="text-gray-600">{item.bedType}</p>
                  <p className="text-gray-600">✔ {item.cancellationPolicy}</p>
                  <p className="text-gray-600">✔ {item.paymentPolicy}</p>
                </div>

                <div className="flex flex-col items-end p-4 justify-between w-full sm:w-48">
                  <div className="text-center sm:text-right">
                    <span className="text-yellow-500">{item.ratingValue}⭐</span>
                    <p>{item.ratingText}</p>
                    <p className="text-gray-500">{item.reviews}</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="line-through text-gray-400">{item.originalPrice}</p>
                    <p className="text-xl font-bold">{item.discountedPrice}</p>
                    <p className="text-gray-500">{item.taxesAndCharges}</p>
                    <Button variant="contained" color="primary" className="mt-2">
                      See availability
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
};




export default Header;





