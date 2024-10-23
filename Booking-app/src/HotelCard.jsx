/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const HotelCard = ({
  image,
  name,
  location,
  rating,
  reviews,
  dealType,
  originalPrice,
  discountedPrice,
  nights,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="flex items-center mt-2">
          <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
            {rating}
          </span>
          <span className="ml-2 text-gray-600 text-sm">{reviews}</span>
        </div>
        {dealType && (
          <span className="inline-block bg-green-200 text-green-800 px-2 py-1 text-xs rounded mt-2">
            {dealType}
          </span>
        )}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="line-through text-gray-500 text-sm">₹{originalPrice}</span>
            <span className="text-xl font-bold text-red-600 ml-2">₹{discountedPrice}</span>
          </div>
          <span className="text-sm text-gray-600">{nights} nights</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
